import { connect, disconnect } from "../../data/index.js";
import { removeProduct } from "./removeProduct.js";

connect("mongodb://localhost:27017/proyectoFinal")
  .then(() => {
    return removeProduct("6866ccaaf5287d2a66f7e89a", "6866bfec284ca9831fc9c39f");
  })
  .then(() => console.debug("Product removed"))
  .catch((error) => console.error(error))
  .finally(() => disconnect());
