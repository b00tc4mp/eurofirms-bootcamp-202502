import { connect, disconnect } from "../../data/index.js";
import { updateProduct } from "./updateProduct.js";

connect("mongodb://localhost:27017/proyectoFinal")
  .then(() => {
    try {
      debugger;
      return updateProduct(
        "6866bfec284ca9831fc9c39f",
        "6866ccaaf5287d2a66f7e89a",
        "Producto actualizado",
        "descripcion primer producto a",
        15,
        55,
        "https://imgs.search.brave.com/xb1EUl5noihJUGJzpCStWsZ9bs86gf9FXJuRuXLi7po/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWFn/ZXMuZnJlZWltYWdl/cy5jb20vaW1hZ2Vz/L2xhcmdlLXByZXZp/ZXdzL2JhMy9zbWFy/dHBob25lLW9uLW1h/cmJsZS0wNDEwLTU3/MDk2MTEuanBnP2Zt/dA",

        "685fed30931539e79c3f67a0"
      )
        .then(() => console.log("Product updated"))
        .catch((error) => console.error(error));
    } catch (error) {
      console.error(error);
    }
  })
  .catch((error) => console.error(error))
  .finally(() => disconnect());
