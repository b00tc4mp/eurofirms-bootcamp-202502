import { User } from "../../data/index.js";
import { NotFoundError, SystemError, validate } from "com";

export const getUserById = (userId, targetUserId) => {
  validate.userId(userId);
  validate.userId(targetUserId);

  return User.findById(userId)
    .catch((error) => {
      throw new SystemError("mongo error");
    })
    .then((user) => {
      if (!user) throw new NotFoundError("user not found");
      return User.findById(targetUserId)
        .lean()
        .catch((error) => {
          throw new SystemError("mongo error");
        })
        .then((user) => {
          user.id = user._id.toString();
          delete user._id;
          delete user.__v;
          return user;
        });
    });
};
