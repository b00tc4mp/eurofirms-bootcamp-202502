import { Order, User } from "../../data/index.js";
import { NotFoundError, SystemError, validate } from "com";

export const deleteOrder = (userId, orderId) => {
  validate.userId(userId);
  validate.orderId(orderId);
  return User.findById(userId)
    .catch(() => {
      throw new SystemError("mongo error");
    })
    .then((user) => {
      if (!user) throw new NotFoundError("user not found");
      return Order.findByIdAndDelete(orderId)
        .catch(() => {
          throw new SystemError("mongo error");
        })
        .then((order) => {
          if (!order) throw new NotFoundError("order not found");
        });
    });
};
