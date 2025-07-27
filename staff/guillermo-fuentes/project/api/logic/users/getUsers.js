import { User } from "../../data/index.js";
import { NotFoundError, SystemError, validate } from "com";

export const getUsers = (userId) => {
  validate.userId(userId);

  return User.findById(userId)
    .catch((error) => {
      throw new SystemError("mongo error");
    })
    .then((user) => {
      if (!user) throw new NotFoundError("user not found");
      return User.find()
        .lean()

        .catch((error) => {
          throw new SystemError("mongo error");
        })
        .then((users) => {
          users.forEach((user) => {
            user.id = user._id.toString();
            delete user._id;
            delete user.__v;
          });

          return users;
        });
    });
};
