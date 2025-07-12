import { connect, disconnect } from "../../data/index.js";
import { searchUsers } from "./searchUsers.js";

connect("mongodb://localhost:27017/proyectoFinal")
  .then(() => {
    try {
      return searchUsers("Javier Perez")
        .then((user) => console.debug("user found", user))
        .catch((error) => console.error(error));
    } catch (error) {
      console.error(error);
    }
  })
  .catch((error) => console.error(error))
  .finally(() => disconnect());
