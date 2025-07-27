import { connect, disconnect } from "../../data/index.js";
import { getOrderByUser } from "./getOrdersByUser.js";

connect("mongodb://localhost:27017/proyectoFinal")
  .then(() => {
    return getOrderByUser("6873f0f152ec79b950c77cc9")
      .then((orders) => {
        console.debug("Orders", JSON.stringify(orders, null, 2)); // Pretty-print JSON
      })
      .catch((error) => {
        console.error("Error retrieving orders:", error.message);
      });
  })
  .catch((error) => {
    console.error("Database connection error:", error.message);
  })
  .finally(() => {
    disconnect();
  });
