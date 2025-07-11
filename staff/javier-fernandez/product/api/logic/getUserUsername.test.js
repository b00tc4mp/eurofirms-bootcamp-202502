import { connect, disconnect } from "../data/index.js";
import { getUserUsername } from "./getUserUsername.js";

connect("mongodb://localhost:27017/test")
  .then(() => {
    try {
      return getUserUsername("6830cf68d0976cd40d6c4bd8")
        .then((username) => console.log('user username', username))
        .catch((error) => console.error(error));
    } catch (error) {
      console.error(error);
    }
  })
  .catch((error) => console.error(error))
  .finally(() => disconnect());
