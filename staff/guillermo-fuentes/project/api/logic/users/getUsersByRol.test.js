import { connect, disconnect } from "../../data/index.js";
import { getUsersByRol } from "./getUsersByRol.js";

connect("mongodb://localhost:27017/proyectoFinal")
  .then(() => {
    try {
      return getUsersByRol("6857e3c3c94ecaebfb3d947a", "administrator")
        .then((users) => console.debug("Users by role, ", users))
        .catch((error) => console.error(error));
    } catch (error) {
      console.error(error);
    }
  })
  .catch((error) => console.error(error))
  .finally(() => disconnect());
