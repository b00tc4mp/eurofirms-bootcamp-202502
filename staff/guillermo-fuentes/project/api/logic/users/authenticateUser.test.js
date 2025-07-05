import { connect, disconnect } from "../../data/index.js";
import { authenticateUser } from "./authenticateUser.js";
connect("mongodb://localhost:27017/proyectoFinal")
  .then(() => {
    try {
      return authenticateUser("prueba@curl.com", "12345678")
        .then((userId) => console.log("user authenticated: ", userId))
        .catch((error) => console.error(error));
    } catch (error) {
      console.error(error);
    }
  })
  .catch((error) => console.error(error))
  .finally(() => disconnect());
