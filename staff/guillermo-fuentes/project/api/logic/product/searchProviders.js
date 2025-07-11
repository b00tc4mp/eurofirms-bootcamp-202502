import { Provider } from "../../data/index.js";
import { NotFoundError, SystemError, validate } from "com";

export const searchProviders = (query) => {
  validate.name(query);

  return Provider.find({ name: { $regex: query, $options: "i" } })
    .select("name _id")
    .lean()
    .catch((error) => {
      throw new SystemError("Mongo error: ", error.message);
    })
    .then((providers) => {
      return providers;
    });
};
