import { Order, User } from "../../data/index.js";
import { validate, SystemError, NotFoundError } from "com";

export const updateOrder = (userId, orderId, newState) => {
  validate.orderId(orderId);
  validate.stateOrder(newState);
  validate.userId(userId);
  return User.findById(userId)
    .catch(() => {
      throw new SystemError("mongo error");
    })
    .then((user) => {
      if (!user) throw new NotFoundError("user not found");
      return Order.findById(orderId)
        .catch(() => {
          throw new SystemError("mongo error");
        })
        .then((order) => {
          if (!order) throw new NotFoundError("order not found");

          order.stateOrder = newState;
          order.dateOrder = new Date();

          return order.save().catch(() => {
            throw new SystemError("mongo error on save");
          });
        });
    });
};
