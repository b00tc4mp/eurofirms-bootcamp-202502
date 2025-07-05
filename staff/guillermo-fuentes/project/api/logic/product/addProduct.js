import { Product, Provider, User } from "../../data/index.js";
import { validate, SystemError, NotFoundError, RoleError } from "com";

export const addProduct = (providerId, name, description, price, stock, image, provider) => {
  validate.providerId(providerId);
  validate.name(name);
  validate.description(description);
  validate.price(price);
  validate.stock(stock);
  validate.image(image);
  validate.providerId(provider);

  return Promise.all([
    User.findById(providerId).catch((error) => {
      throw new SystemError(`Mongo error (User): ${error.message}`);
    }),
    Provider.findById(provider).catch((error) => {
      throw new SystemError(`Mongo error (Provider): ${error.message}`);
    }),
  ]).then(([employee, provider]) => {
    if (!employee) throw new NotFoundError("employee not found");
    if (employee.role !== "provider" && employee.role !== "administrator") {
      throw new RoleError("User is not authorized to create products");
    }
    if (!provider) throw new NotFoundError("Provider not found");

    return Product.create({ name, description, price, stock, image, provider }).catch((error) => {
      throw new SystemError(`Mongo error (Product): ${error.message}`);
    });
  });
};
