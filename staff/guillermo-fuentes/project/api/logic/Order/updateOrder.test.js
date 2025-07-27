import { connect, disconnect } from "../../data/index.js";
import { updateOrder } from "./updateOrder.js";

connect("mongodb://localhost:27017/proyectoFinal")
  .then(() => {
    return updateOrder("6873f0f152ec79b950c77cc9", "6884fb0e76854a7063b3f33c", "Order completed")
      .then(() => console.debug("Order updated"))
      .catch((error) => console.error(error));
  })
  .catch((error) => console.error(error))
  .finally(() => disconnect());
