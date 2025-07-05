import { User, Product } from "../../data/index.js";
import { AuthorizationError, validate, NotFoundError, SystemError } from "com";

export const updateProduct = (requesterId, targetId, name, description, price, stock, image, providerId) => {
  validate.adminId(requesterId);
  validate.userId(targetId);
  validate.name(name);
  validate.description(description);
  validate.price(price);
  validate.stock(stock);
  validate.image(image);
  validate.providerId(providerId);
  return Promise.all([
    User.findById(requesterId).catch((error) => {
      throw new SystemError(`Mongo error (User): ${error.message}`);
    }),
    Product.findById(targetId).catch((error) => {
      throw new SystemError(`Mongo error (Product): ${error.message}`);
    }),
  ]).then(([user, product]) => {
    if (!user) {
      throw new NotFoundError(`User with id ${requesterId} does not exist`);
    }
    if (!product) {
      throw new NotFoundError(`Product with id ${targetId} does not exist`);
    }
    if (user.role !== "administrator" && user.role !== "provider") {
      throw new AuthorizationError(`User not authorized for this action`);
    }
    product.name = name;
    product.description = description;
    product.price = price;
    product.stock = stock;
    product.image = image;
    product.provider = providerId;
    return product.save();
  });
};
