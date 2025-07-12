import { Router } from "express";
import { jsonBodyParser } from "../middlewares/jsonBodyParser.js";
import { logic } from "../logic/index.js";
import jwt from "jsonwebtoken";
const { JWT_SECRET } = process.env;

export const productRouter = Router();

productRouter.post("/", jsonBodyParser, (request, response, next) => {
  try {
    const { authorization } = request.headers;
    if (!authorization || !authorization.startsWith("Bearer ")) {
      const error = new Error("Invalid authorization header");
      error.status = 401;
      throw error;
    }
    const token = authorization.slice(7);
    const { sub: providerId } = jwt.verify(token, JWT_SECRET);

    const { name, description, price, stock, image, provider } = request.body;

    logic
      .addProduct(providerId, name, description, price, stock, image, provider)
      .then(() => response.status(201).send())
      .catch((error) => next(error));
  } catch (error) {
    next(error);
  }
});
productRouter.put("/:productId", jsonBodyParser, (request, response, next) => {
  try {
    const { authorization } = request.headers;

    if (!authorization || !authorization.startsWith("Bearer ")) {
      const error = new Error("Encabezado de autorización inválido");
      error.status = 401;
      throw error;
    }

    const token = authorization.slice(7);
    const { sub: requesterId } = jwt.verify(token, JWT_SECRET);

    const { productId: targetId } = request.params;
    const { name, description, price, stock, image, providerId } = request.body;

    logic
      .updateProduct(requesterId, targetId, name, description, price, stock, image, providerId)
      .then(() => response.status(200).json({ mensaje: "Product updated succesfully" }))
      .catch((error) => next(error));
  } catch (error) {
    next(error);
  }
});
productRouter.delete("/:productId", (request, response, next) => {
  try {
    // Verificar autenticación
    const authorization = request.headers.authorization;
    if (!authorization || !authorization.startsWith("Bearer ")) {
      throw new ValidationError("Token de autenticación no proporcionado");
    }

    const token = authorization.slice(7);
    const { sub: userId } = jwt.verify(token, JWT_SECRET);

    const { productId } = request.params;

    logic
      .removeProduct(userId, productId)
      .then(() => response.status(204).send())
      .catch((error) => next(error));
  } catch (error) {
    next(error);
  }
});
productRouter.get("/search/:query", (req, res, next) => {
  const authorization = req.headers.authorization;
  if (!authorization || !authorization.startsWith("Bearer ")) {
    throw new ValidationError("Token de autenticación no proporcionado");
  }

  const token = authorization.slice(7);
  const { query } = req.params;
  const { sub: userId } = jwt.verify(token, JWT_SECRET);
  logic
    .searchProviders(userId, query)
    .then((products) => {
      res.status(200).json(products);
    })
    .catch((error) => {
      next(error);
    });
});
productRouter.get("/", (request, response, next) => {
  try {
    const { authorization } = request.headers;
    if (!authorization || !authorization.startsWith("Bearer ")) {
      const error = new Error("Invalid authorization header");
      error.status = 401; // Unauthorized
      throw error;
    }

    const token = authorization.slice(7);
    const { sub: userId } = jwt.verify(token, process.env.JWT_SECRET);

    logic
      .getProducts(userId)
      .then((user) => response.status(200).json(user))
      .catch((error) => next(error));
  } catch (error) {
    next(error);
  }
});
