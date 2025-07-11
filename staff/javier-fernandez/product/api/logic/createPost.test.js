import { connect, disconnect } from "../data/index.js";
import { createPost } from "./createPost.js";

connect("mongodb://localhost:27017/test")
  .then(() => {
    try {
      return createPost(
        "683de4444dcabbf91de96b83",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTGW9bWkZygq8YgE3sD-Df74Ua0ciqLrGv_yg&s",
        "la tripulacion")
        .then(() => console.log('post created'))
        .catch((error) => console.error(error))
    } catch (error) {
      console.error(error)
    }
  })
  .catch((error) => console.error(error))
  .finally(() => disconnect())
