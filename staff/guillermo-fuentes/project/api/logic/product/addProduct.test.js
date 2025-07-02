import { connect, disconnect } from "../../data/index.js";
import { addProduct } from "./addProduct.js";

connect("mongodb://localhost:27017/proyectoFinal")
  .then(() => {
    try {
      return addProduct(
        "685fce028408af96e6035432",
        "Primer producto",
        "descripcion primer producto",
        10,
        5,
        "https://imgs.search.brave.com/xb1EUl5noihJUGJzpCStWsZ9bs86gf9FXJuRuXLi7po/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWFn/ZXMuZnJlZWltYWdl/cy5jb20vaW1hZ2Vz/L2xhcmdlLXByZXZp/ZXdzL2JhMy9zbWFy/dHBob25lLW9uLW1h/cmJsZS0wNDEwLTU3/MDk2MTEuanBnP2Zt/dA",
        "6864226628bf997541d430b2"
      )
        .then(() => console.log("Product registered"))
        .catch((error) => console.error(error));
    } catch (error) {
      console.error(error);
    }
  })
  .catch((error) => console.error(error))
  .finally(() => disconnect());
