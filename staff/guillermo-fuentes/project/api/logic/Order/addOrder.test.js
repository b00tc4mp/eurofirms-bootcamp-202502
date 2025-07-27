import { connect, disconnect } from "../../data/index.js";
import { addOrder } from "./addOrder.js";

connect("mongodb://localhost:27017/proyectoFinal")
  .then(() => {
    return addOrder(
      "6873f0f152ec79b950c77cc9", // userId (cualquier usuario)
      "ORD-",
      "In progress",
      10.0,
      null, // saleId (aún no se usa)
      "EUR", // currency
      null, // pagoId (aún no se usa)
      false, // isCar (por ahora sin carrito)
      [
        {
          product: "68755a8237606761ef88b37a", // ID del producto
          quantity: 2,
          priceAtOrderTime: 5.0,
        },
      ]
    )
      .then(() => console.debug("Order registered"))
      .catch((error) => console.error(error));
  })
  .catch((error) => console.error(error))
  .finally(() => disconnect());
