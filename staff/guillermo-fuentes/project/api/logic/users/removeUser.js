import { User, Provider } from "../../data/index.js";

import { SystemError, NotFoundError, validate } from "com";
export const removeUser = (userId, adminId) => {
  validate.userId(userId);
  validate.adminId(adminId);
  return Promise.all([
    User.findOne({ _id: userId }),
    User.findOne({ _id: adminId }),
    Provider.findOne({ user: userId }),
  ]).then(([user, admin, provider]) => {
    if (!user) throw NotFoundError("user not found");
    if (!admin) throw NotFoundError("admin not found");
    if (provider) throw Error("This user is a provider, you can't delete it");
    if (admin.role === "administrator") {
      return User.deleteOne({ _id: userId }).catch(() => {
        throw new SystemError("Mongo error");
      });
    } else {
      throw new Error("This user is not authorized for this operation");
    }
  });
};
