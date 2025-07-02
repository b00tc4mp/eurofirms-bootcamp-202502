import { connect, disconnect } from "../../data/index.js";
import { removeUser } from "./removeUser.js";

connect("mongodb://localhost:27017/proyectoFinal")
  .then(() => {
    try {
      return removeUser("685d6d796e1726d109be4dc7", "6857e3c3c94ecaebfb3d947a")
        .then(() => console.log("user deleted"))
        .catch((error) => console.error(error));
    } catch (error) {
      console.error(error);
    }
  })
  .catch((error) => console.error(error))
  .finally(() => disconnect());
