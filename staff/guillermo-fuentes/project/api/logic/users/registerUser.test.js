import { connect, disconnect } from "../../data/index.js";
import { registerUser } from "./registerUser.js";
connect("mongodb://localhost:27017/proyectoFinal")
  .then(() => {
    try {
      return registerUser("Administrador", "admin@admin.com", "12345678", "Calle Ejemplo 3", "administrator")
        .then(() => console.debug("user registered"))
        .catch((error) => console.error(error));
    } catch (error) {
      console.error(error);
    }
  })
  .catch((error) => console.error(error))
  .finally(() => disconnect());
