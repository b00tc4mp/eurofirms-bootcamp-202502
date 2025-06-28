import { Router } from "express";
import { jsonBodyParser } from "../middlewares/jsonBodyParser.js";
import { logic } from "../logic/index.js";
import jwt from "jsonwebtoken";
const { JWT_SECRET } = process.env;

export const usersRouter = Router();

usersRouter.post("/", jsonBodyParser, (request, response, next) => {
  try {
    const { fullName, email, password, address, role } = request.body;
    logic
      .registerUser(fullName, email, password, address, role)
      .then(() => response.status(201).send())
      .catch((error) => next(error));
  } catch (error) {
    next(error);
  }
});
usersRouter.post("/auth", jsonBodyParser, (request, response, next) => {
  try {
    const { email, password } = request.body;

    logic
      .authenticateUser(email, password)
      .then(({ id, role }) => {
        const token = jwt.sign({ sub: id, role }, JWT_SECRET);
        response.status(200).json({ token });
      })
      .catch((error) => next(error));
  } catch (error) {
    next(error);
  }
});

usersRouter.delete("/:userId", (request, response, next) => {
  try {
    const { authorization } = request.headers;
    if (!authorization || !authorization.startsWith("Bearer ")) {
      const error = new Error("Invalid authorization header");
      error.status = 401;
      throw error;
    }
    const token = authorization.slice(7);
    const { sub: adminId } = jwt.verify(token, JWT_SECRET);
    const { userId } = request.params;
    logic
      .removeUser(userId, adminId)
      .then(() => response.status(204).send())
      .catch((error) => next(error));
  } catch (error) {
    next(error);
  }
});
usersRouter.get("/", (request, response, next) => {
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
      .getUsers(userId)
      .then((user) => response.status(200).json(user))
      .catch((error) => next(error));
  } catch (error) {
    next(error);
  }
});

usersRouter.get("/:rol", (request, response, next) => {
  try {
    const { authorization } = request.headers;
    const { rol } = request.params; // Obtener el rol desde los query parameters

    // Validar que se proporcionó el rol
    if (!rol) {
      const error = new Error("The role parameter is required");
      error.status = 400; // Bad Request
      throw error;
    }

    // Validar el encabezado de autorización
    if (!authorization || !authorization.startsWith("Bearer ")) {
      const error = new Error("Invalid authorization header");
      error.status = 401; // Unauthorized
      throw error;
    }

    // Verificar el token JWT
    const token = authorization.slice(7);
    const { sub: userId } = jwt.verify(token, process.env.JWT_SECRET);

    // Llamar a getUsersByRol con el rol proporcionado
    logic
      .getUsersByRol(userId, rol)
      .then((users) => response.status(200).json(users))
      .catch((error) => next(error));
  } catch (error) {
    next(error);
  }
});

usersRouter.put("/:userId", jsonBodyParser, (request, response, next) => {
  try {
    const { authorization } = request.headers;

    if (!authorization || !authorization.startsWith("Bearer ")) {
      const error = new Error("Invalid authorization header");
      error.status = 401;
      throw error;
    }

    const token = request.headers.authorization.slice(7);
    const { sub: requesterUserId } = jwt.verify(token, JWT_SECRET);

    const { userId: targetUserId } = request.params;
    const { fullName, address, role, email, password } = request.body;

    logic
      .updateUser(requesterUserId, targetUserId, fullName, address, role, email, password)
      .then(() => response.status(200).json({ message: "User updated successfully" }))
      .catch((error) => next(error));
  } catch (error) {
    next(error);
  }
});
usersRouter.get("/search/:query", (req, res, next) => {
  const { query } = req.params;

  logic
    .searchUsers(query)
    .then((users) => {
      res.status(200).json(users);
    })
    .catch((error) => {
      next(error);
    });
});

export default usersRouter;
