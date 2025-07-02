import { User } from "../../data/index.js";

import { SystemError, validate } from "com";
export const removeUser = (userId, adminId) => {
  validate.userId(userId);
  validate.adminId(adminId);
  return Promise.all([User.findOne({ _id: userId }), User.findOne({ _id: adminId })]).then(([user, admin]) => {
    if (!user) throw NotFoundError("user not found");
    if (!admin) throw NotFoundError("admin not found");
    if (admin.role === "administrator") {
      return User.deleteOne({ _id: userId }).catch(() => {
        throw new SystemError("Mongo error");
      });
    } else {
      throw new Error("This user is not authorized for this operation");
    }
  });
};
