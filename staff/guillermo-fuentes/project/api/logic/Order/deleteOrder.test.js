import { connect, disconnect } from "../../data/index.js";
import { deleteOrder } from "./deleteOrder.js";

connect("mongodb://localhost:27017/proyectoFinal")
  .then(() => {
    return deleteOrder("6873f0f152ec79b950c77cc9", "6885e3dd6458baaac7be2012")
      .then(() => console.debug("Order deleted"))
      .catch((error) => console.error(error));
  })
  .catch((error) => console.error(error))
  .finally(() => disconnect());
