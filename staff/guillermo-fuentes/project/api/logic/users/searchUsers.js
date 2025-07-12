import { User } from "../../data/index.js";
import { NotFoundError, SystemError, validate } from "com";

export const searchUsers = (userId, query) => {
  validate.userId(userId);
  validate.query(query);
  return User.findById(userId)
    .catch((error) => {
      throw new SystemError("mongo error");
    })
    .then((user) => {
      if (!user) throw new NotFoundError("user not found");
      return User.find({ fullName: { $regex: query, $options: "i" } })
        .select("fullName _id")
        .lean()
        .catch((error) => {
          throw new SystemError("Mongo error: ", error.message);
        })
        .then((users) => {
          return users;
        });
    });
};
