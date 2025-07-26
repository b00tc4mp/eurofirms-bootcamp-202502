import { Provider, User, Product } from "../../data/index.js";
import { SystemError, validate, NotFoundError } from "com";

export const removeProvider = (providerId, adminId) => {
  validate.providerId(providerId);
  validate.adminId(adminId);

  return Promise.all([Provider.findById(providerId), User.findById(adminId), Product.findOne({ provider: providerId })])
    .catch((error) => {
      throw new SystemError("mongo error");
    })
    .then(([provider, user, product]) => {
      if (!provider) throw new NotFoundError("Provider not found");
      if (!user) throw new NotFoundError("user not found");

      if (user.role !== "administrator") {
        throw new Error("you are not authorized to carry out this action");
      }
      if (product) throw Error("This  provider have products, you can't delete it");
      return Provider.deleteOne({ _id: providerId })
        .catch((error) => {
          throw new SystemError("mongo error");
        })
        .then(() => {});
    });
};
