import express from "express";
import cors from "cors";

import { connect } from "./data/index.js";

import { usersRouter } from "./routes/userRoutes.js";
import { providerRouter } from "./routes/providerRoutes.js";
import { productRouter } from "./routes/productRoutes.js";
import { errorHandler } from "./middlewares/errorHandler.js";
import { orderRouter } from "./routes/orderRoutes.js";
const { MONGO_URL, PORT } = process.env;

connect(MONGO_URL)
  .then(() => {
    const server = express();

    server.use(cors());
    server.get("/hello", (request, response) => {
      response.send("hello");
    });

    server.use("/users", usersRouter);
    server.use("/providers", providerRouter);
    server.use("/products", productRouter);
    server.use("/orders", orderRouter);
    server.use(errorHandler);
    server.listen(PORT, () => console.debug("API listening"));
  })
  .catch((error) => console.error(error));
