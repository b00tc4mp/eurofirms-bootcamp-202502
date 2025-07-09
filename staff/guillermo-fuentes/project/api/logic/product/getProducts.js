import { Product, User } from "../../data/index.js";
import { validate, NotFoundError, SystemError } from "com";

export const getProducts = (userId) => {
  validate.userId(userId);
  return User.findById(userId)
    .catch((error) => {
      throw new SystemError("mongo error");
    })
    .then((user) => {
      if (!user) throw new NotFoundError("user not found");
      return Product.find({}, "-__v")
        .lean()
        .populate("provider", "name _id")
        .catch((error) => {
          throw new SystemError("Error in mongo");
        })
        .then((products) => {
          if (!products || products.length === 0) throw new NotFoundError("Products not found");

          products.forEach((product) => {
            product.id = product._id.toString();
            delete product._id;
            if (product.provider && product.provider._id) {
              product.provider.id = product.provider._id.toString();
              delete product.provider._id;
            }
          });
          return products;
        });
    });
};
