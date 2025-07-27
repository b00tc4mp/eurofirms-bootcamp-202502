import { Router } from "express";
import { jsonBodyParser } from "../middlewares/jsonBodyParser.js";
import { logic } from "../logic/index.js";
import jwt from "jsonwebtoken";
const { JWT_SECRET } = process.env;

export const orderRouter = Router();

orderRouter.post("/", jsonBodyParser, (request, response, next) => {
  try {
    const { authorization } = request.headers;
    if (!authorization || !authorization.startsWith("Bearer ")) {
      const error = new Error("Invalid authorization header");
      error.status = 401;
      throw error;
    }
    const token = authorization.slice(7);
    const { sub: userId } = jwt.verify(token, JWT_SECRET);

    const { numberOrder, stateOrder, total, saleId, currency, pagoId, isCar, products } = request.body;

    logic
      .addOrder(userId, numberOrder, stateOrder, total, null, currency, null, false, products)
      .then(() => response.status(201).send())
      .catch((error) => next(error));
  } catch (error) {
    next(error);
  }
});
orderRouter.patch("/:orderId", jsonBodyParser, (request, response, next) => {
  try {
    const { authorization } = request.headers;
    if (!authorization || !authorization.startsWith("Bearer ")) {
      const error = new Error("Invalid authorization header");
      error.status = 401;
      throw error;
    }
    const token = authorization.slice(7);
    const { sub: userId } = jwt.verify(token, JWT_SECRET);

    const { newState } = request.body;
    const { orderId: orderId } = request.params;
    logic
      .updateOrder(userId, orderId, newState)
      .then(() => response.status(201).send())
      .catch((error) => next(error));
  } catch (error) {
    next(error);
  }
});
orderRouter.delete("/:orderId", (request, response, next) => {
  try {
    // Verificar autenticación
    const authorization = request.headers.authorization;
    if (!authorization || !authorization.startsWith("Bearer ")) {
      throw new ValidationError("Token de autenticación no proporcionado");
    }

    const token = authorization.slice(7);
    const { sub: userId } = jwt.verify(token, JWT_SECRET);

    const { orderId } = request.params;

    logic
      .deleteOrder(userId, orderId)
      .then(() => response.status(204).send())
      .catch((error) => next(error));
  } catch (error) {
    next(error);
  }
});
