import { connect, disconnect } from "../../data/index.js";
import { searchProviders } from "./searchProviders.js";

connect("mongodb://localhost:27017/proyectoFinal")
  .then(() => {
    try {
      return searchProviders("Arcadio SA")
        .then((user) => console.log("Provider found", user))
        .catch((error) => console.error(error));
    } catch (error) {
      console.error(error);
    }
  })
  .catch((error) => console.error(error))
  .finally(() => disconnect());
