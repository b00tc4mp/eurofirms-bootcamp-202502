import { User, Order } from "../../data/index.js";
import { validate, NotFoundError, SystemError } from "com";

export const getOrderByUser = (userId) => {
  validate.userId(userId);

  return User.findById(userId)
    .catch((error) => {
      throw new SystemError("Error en MongoDB");
    })
    .then((user) => {
      if (!user) throw new NotFoundError("Usuario no encontrado");

      return Order.find({ user: userId }, "-__v")
        .lean()
        .populate({
          path: "products.product",
          select: "name description price stock   provider _id",
          populate: {
            path: "provider",
            select: "name _id",
          },
        })
        .populate({
          path: "user",
          select: "fullName",
        })
        .catch((error) => {
          throw new SystemError("Error en MongoDB");
        })
        .then((orders) => {
          return orders.map((order) => {
            const transformedOrder = {
              orderId: order._id.toString(),
              numberOrder: order.numberOrder,
              dateOrder: order.dateOrder,
              stateOrder: order.stateOrder,
              isCar: order.isCar,
              user: order.user ? order.user.fullName : null,
            };
            return transformedOrder;
          });
        });
    });
};
