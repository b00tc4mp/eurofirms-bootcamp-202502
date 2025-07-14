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

  return Promise.all([User.findById(requesterId), Product.findById(targetId)])
    .catch((error) => {
      throw new SystemError("mongo error");
    })
    .then(([user, product]) => {
      if (!user) {
        throw new NotFoundError("user not found");
      }

      if (!product) {
        throw new NotFoundError("product not found");
      }

      if (user.role !== "administrator" && user.role !== "provider") {
        throw new AuthorizationError("user not authorized for this action");
      }

      product.name = name;
      product.description = description;
      product.price = price;
      product.stock = stock;
      product.image = image;
      product.provider = providerId;
      product.dateModification = Date.now();

      return product.save().catch(() => {
        throw new SystemError("mongo error");
      });
    });
};
