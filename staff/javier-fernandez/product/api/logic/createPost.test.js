import { connect, disconnect } from "../data/index.js";
import { createPost } from "./createPost.js";

connect("mongodb://localhost:27017/test")
  .then(() => {
    try {
      return createPost(
        "6830ca59d0976cd40d6c4bd0",
        "https://media2.giphy.com/media/v1.Y2lkPTc5MGI3NjExZzBpeWpiZTlzaWhsZTk5cnRlNzQxbTUxNGpqajQ4NnF0b3prZnY2ciZlcD12MV9naWZzX3NlYXJjaCZjdD1n/KcRVkLMk67Nte/giphy.webp",
        "la tripulacion")
        .then(() => console.log("post created"))
        .catch((error) => console.error(error));
    } catch (error) {
      console.error(error);
    }
  })
  .catch((error) => console.error(error))
  .finally(() => disconnect());
