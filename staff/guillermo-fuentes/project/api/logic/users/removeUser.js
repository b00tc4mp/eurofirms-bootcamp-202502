import { User, Provider } from "../../data/index.js";
import { SystemError, NotFoundError, validate } from "com";

export const removeUser = (adminId, userId) => {
  validate.adminId(adminId);
  validate.userId(userId);

  return Promise.all([
    User.findOne({ _id: adminId }),
    User.findOne({ _id: userId }),
    Provider.findOne({ user: userId }),
  ])
    .catch(() => {
      throw new SystemError("mongo error");
    })
    .then(([admin, user, provider]) => {
      if (!admin) throw NotFoundError("admin not found");

      if (!user) throw NotFoundError("user not found");

      if (provider) throw Error("This user is a provider, you can't delete it");

      if (admin.role === "administrator") {
        return User.deleteOne({ _id: userId }).catch(() => {
          throw new SystemError("mongo error");
        });
      } else {
        throw new Error("this user is not authorized for this operation");
      }
    });
};
