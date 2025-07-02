import { User } from "../../data/index.js";
import { NotFoundError, SystemError, validate } from "com";
//TODO  BUSCAR SOLO USUARIOS QUE TENGA EL ROL ADMINISTRADOR
export const searchUsers = (query) => {
  validate.name(query);
  return User.find({ fullName: { $regex: query, $options: "i" } })
    .select("fullName _id")
    .lean()
    .catch((error) => {
      throw new SystemError("Mongo error: ", error.message);
    })
    .then((users) => {
      if (!users || users.length === 0) {
        throw new NotFoundError("No users found");
      }
      return users;
    });
};
