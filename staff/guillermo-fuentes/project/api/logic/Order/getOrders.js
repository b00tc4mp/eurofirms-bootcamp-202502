import { User, Order } from "../../data/index.js";
import { validate, NotFoundError, SystemError } from "com";

export const getOrders = (userId) => {
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
        .catch((error) => {
          throw new SystemError("Error en MongoDB");
        })
        .then((orders) => {
          return orders.map((order) => {
            // Crear un nuevo objeto para controlar el orden de los campos
            const transformedOrder = {
              orderId: order._id.toString(),
              numberOrder: order.numberOrder,
              dateOrder: order.dateOrder,
              stateOrder: order.stateOrder,
              total: order.total,
              saleId: order.saleId,
              currency: order.currency,
              pagoId: order.pagoId,
              isCar: order.isCar,
              user: order.user.toString(),
              products: (order.products || []).map((item) => {
                // Crear un nuevo objeto para el subdocumento products
                const transformedItem = {
                  product: item.product
                    ? {
                        productId: item.product._id.toString(),
                        name: item.product.name,
                        description: item.product.description,
                        price: item.product.price,
                        stock: item.product.stock,
                        quantity: item.quantity,
                        priceAtOrderTime: item.priceAtOrderTime,

                        provider: item.product.provider
                          ? {
                              name: item.product.provider.name,
                              providerId: item.product.provider._id.toString(),
                            }
                          : null,
                      }
                    : null,
                };
                return transformedItem;
              }),
            };
            return transformedOrder;
          });
        });
    });
};
