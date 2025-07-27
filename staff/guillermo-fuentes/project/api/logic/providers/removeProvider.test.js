import { connect, disconnect } from "../../data/index.js";
import { removeProvider } from "./removeProvider.js";
connect("mongodb://localhost:27017/proyectoFinal")
  .then(() => {
    try {
      return removeProvider("685d90c4d10aa015f4d202a9", "685d7e3cf3767021029121e0")
        .then(() => console.debug("provider removed"))
        .catch((error) => console.error(error));
    } catch (error) {
      console.error(error);
    }
  })
  .catch((error) => console.error(error))
  .finally(() => disconnect());
