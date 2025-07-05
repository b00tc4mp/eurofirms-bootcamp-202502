import { Provider } from "../../data/index.js";
import { NotFoundError, SystemError, validate } from "com";
//TODO  BUSCAR SOLO USUARIOS QUE TENGA EL ROL ADMINISTRADOR
export const searchProviders = (query) => {
  validate.name(query);
  return Provider.find({ name: { $regex: query, $options: "i" } })
    .select("name _id")
    .lean()
    .catch((error) => {
      throw new SystemError("Mongo error: ", error.message);
    })
    .then((providers) => {
      if (!providers || providers.length === 0) {
        throw new NotFoundError("No providers found");
      }
      return providers;
    });
};
