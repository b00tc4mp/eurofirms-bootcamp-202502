import { connect, disconnect } from "../../data/index.js";
import { getUsers } from "./getUsers.js";
connect("mongodb://localhost:27017/proyectoFinal")
  .then(() => {
    try {
      return getUsers("6857e3c3c94ecaebfb3d947a")
        .then((users) => console.log("Users", users))
        .catch((error) => console.error(error));
    } catch (error) {
      console.error(error);
    }
  })
  .catch((error) => console.error(error))
  .finally(() => disconnect());
