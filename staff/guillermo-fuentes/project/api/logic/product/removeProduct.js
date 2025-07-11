import { Product, User } from "../../data/index.js";
import { validate } from "com";

export const removeProduct = (productId, userId) => {
  validate.productId(productId);
  validate.userId(userId);

  return Promise.all([Product.findById(productId), User.findById(userId)])
    .then(([product, user]) => {
      if (!product) throw new NotFoundError("Product not found");
      if (!user) throw new NotFoundError("user not found");
      if (user.role !== "administrator" && user.role !== "provider") {
        throw new Error("you are not authorized to carry out this action");
      }
      return Product.deleteOne({ _id: productId });
    })
    .catch((error) => {
      throw new SystemError("mongo error");
    });
};
