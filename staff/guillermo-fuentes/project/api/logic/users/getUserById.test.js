import { connect, disconnect } from "../../data/index.js";
import { getUserById } from "./getUserById.js";
connect("mongodb://localhost:27017/proyectoFinal")
  .then(() => {
    try {
      return getUserById("685fed30931539e79c3f67a0", "685fed30931539e79c3f67a0")
        .then((userId) => console.log("user : ", userId))
        .catch((error) => console.error(error));
    } catch (error) {
      console.error(error);
    }
  })
  .catch((error) => console.error(error))
  .finally(() => disconnect());
