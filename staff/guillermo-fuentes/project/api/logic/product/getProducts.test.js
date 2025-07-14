import { connect, disconnect } from "../../data/index.js";
import { getProducts } from "./getProducts.js";
connect("mongodb://localhost:27017/proyectoFinal")
  .then(() => {
    try {
      return getProducts("6866bfec284ca9831fc9c39f")
        .then((products) => console.debug("Products", products))
        .catch((error) => console.error(error));
    } catch (error) {
      console.error(error);
    }
  })
  .catch((error) => console.error(error))
  .finally(() => disconnect());
