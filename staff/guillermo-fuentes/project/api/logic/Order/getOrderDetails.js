import { User, Order } from "../../data/index.js";
import { validate, NotFoundError, SystemError } from "com";

export const getOrderDetails = (userId, orderId) => {
  validate.userId(userId);

  return User.findById(userId)
    .catch(() => {
      throw new SystemError("Error en MongoDB");
    })
    .then((user) => {
      if (!user) throw new NotFoundError("Usuario no encontrado");

      return Order.findById(orderId)
        .catch(() => {
          throw new SystemError("mongo error");
        })
        .then((order) => {
          if (!order) throw new NotFoundError("order not found");

          return Order.findById(orderId)
            .lean()
            .populate({
              path: "products.product",
              select: "name description price stock provider _id",
              populate: {
                path: "provider",
                select: "name _id",
              },
            })
            .populate({
              path: "user",
              select: "fullName",
            })
            .catch(() => {
              throw new SystemError("Error en MongoDB");
            })
            .then((orderWithDetails) => {
              // Transforma la orden en la estructura que quieres devolver
              const transformedOrder = {
                orderId: orderWithDetails._id.toString(),
                numberOrder: orderWithDetails.numberOrder,
                dateOrder: orderWithDetails.dateOrder,
                stateOrder: orderWithDetails.stateOrder,
                total: orderWithDetails.total,
                saleId: orderWithDetails.saleId,
                currency: orderWithDetails.currency,
                pagoId: orderWithDetails.pagoId,
                isCar: orderWithDetails.isCar,
                user: orderWithDetails.user ? orderWithDetails.user.fullName : null,
                products: (orderWithDetails.products || []).map((item) => {
                  return {
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
                }),
              };

              return transformedOrder;
            });
        });
    });
};
