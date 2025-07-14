import { connect, disconnect } from "../../data/index.js";
import { removeUser } from "./removeUser.js";

connect("mongodb://localhost:27017/proyectoFinal")
  .then(() => {
    try {
      return removeUser("685fed30931539e79c3f67a0", "685fce028408af96e6035432")
        .then(() => console.debug("user deleted"))
        .catch((error) => console.error(error));
    } catch (error) {
      console.error(error);
    }
  })
  .catch((error) => console.error(error))
  .finally(() => disconnect());
