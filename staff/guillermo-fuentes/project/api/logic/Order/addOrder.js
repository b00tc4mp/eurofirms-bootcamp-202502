import { Order, Product, User } from "../../data/index.js";
import { validate, SystemError, NotFoundError } from "com";

export const addOrder = (userId, numberOrder, stateOrder, total, saleId, currency, pagoId, isCar, products) => {
  validate.userId(userId);
  validate.numberOrder(numberOrder);
  validate.stateOrder(stateOrder);
  validate.total(total);
  saleId = null;
  validate.currency(currency);
  pagoId = null;
  isCar = false;
  if (!Array.isArray(products) || products.length === 0) {
    throw new Error("products must be a non-empty array");
  }
  return User.findById(userId)
    .catch(() => {
      throw new SystemError("mongo error");
    })
    .then((user) => {
      if (!user) throw new NotFoundError("user not found");
      return Promise.all(
        products.map((item) => {
          validate.productId(item.product);
          validate.quantity(item.quantity);
          return Product.findById(item.product)
            .catch(() => {
              throw new SystemError("mongo error");
            })
            .then((product) => {
              if (!product) throw new NotFoundError("product not found");
              return {
                product: product._id,
                quantity: item.quantity,
                priceAtOrderTime: product.price,
              };
            });
        })
      ).then((validatedProducts) => {
        return Order.create({
          numberOrder,
          dateOrder: new Date(),
          stateOrder,
          total,
          saleId: saleId || null,
          currency: currency || null,
          pagoId: pagoId || null,
          isCar: isCar || false,
          user: user._id,
          products: validatedProducts,
        }).catch(() => {
          throw new SystemError("mongo error");
        });
      });
    });
};
