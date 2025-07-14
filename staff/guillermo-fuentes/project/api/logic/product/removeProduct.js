import { Product, User } from "../../data/index.js";
import { validate } from "com";

export const removeProduct = (userId, productId) => {
  validate.userId(userId);
  validate.productId(productId);

  return Promise.all([User.findById(userId), Product.findById(productId)])
    .catch((error) => {
      throw new SystemError("mongo error");
    })
    .then(([user, product]) => {
      if (!user) throw new NotFoundError("user not found");
      if (!product) throw new NotFoundError("product not found");

      if (user.role !== "administrator" && user.role !== "provider") {
        throw new Error("you are not authorized to carry out this action");
      }

      return Product.deleteOne({ _id: productId }).catch((error) => {
        throw new SystemError("mongo error");
      });
    });
};
