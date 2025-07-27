import { connect, disconnect } from "../../data/index.js";
import { getAllOrder } from "./getAllOrders.js";

connect("mongodb://localhost:27017/proyectoFinal")
  .then(() => {
    return getAllOrder("6873ef1f52ec79b950c77c9b")
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
