import { User, Order } from "../../data/index.js";
import { validate, NotFoundError, SystemError, RoleError } from "com";

export const getAllOrder = (userId) => {
  validate.userId(userId);

  return User.findById(userId)
    .catch((error) => {
      throw new SystemError("Error en MongoDB");
    })
    .then((user) => {
      if (!user) throw new NotFoundError("Usuario no encontrado");
      if (user.role !== "administrator") throw new RoleError("Operation not permited");
      return Order.find({}, "-__v")
        .lean()

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
