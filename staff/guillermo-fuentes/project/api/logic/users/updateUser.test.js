import { connect, disconnect } from "../../data/index.js";
import { updateUser } from "./updateUser.js";

connect("mongodb://localhost:27017/proyectoFinal")
  .then(() => {
    try {
      return updateUser(
        "685fcec635efb5a4d4b7acbc",
        "685fce9335efb5a4d4b7acb9",
        "Usuario actualizado",
        "direccion actualizada",
        "administrator",
        "usuario@actualizado.com",
        "12345678"
      )
        .then(() => console.log("user updated"))
        .catch((error) => console.error(error));
    } catch (error) {
      console.error(error);
    }
  })
  .catch((error) => console.error(error))
  .finally(() => disconnect());
