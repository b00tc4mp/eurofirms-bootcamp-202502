import { Router } from 'express';
import { jsonBodyParser } from '../middlewares/jsonBodyParser.js';
import { logic } from '../logic/index.js';
import jwt from 'jsonwebtoken';
const { JWT_SECRET } = process.env;

export const providerRouter = Router();
providerRouter.post('/', jsonBodyParser, (request, response, next) => {
  try {
    const authorization = request.headers.authorization;
    const token = authorization.slice(7);

    const { sub: userId } = jwt.verify(token, JWT_SECRET);

    const { name, contact, direction } = request.body;
    logic
      .addProvider(name, contact, direction, userId)
      .then(() => response.status(201).send())
      .catch((error) => next(error));
  } catch (error) {
    next(error);
  }
});
providerRouter.delete('/:providerId', (request, response, next) => {
  try {
    // Verificar autenticación
    const authorization = request.headers.authorization;
    if (!authorization || !authorization.startsWith('Bearer ')) {
      throw new ValidationError('Token de autenticación no proporcionado');
    }

    const token = authorization.slice(7);
    const { sub: adminId } = jwt.verify(token, JWT_SECRET);

    const { providerId } = request.params;

    logic
      .deleteProveedor(providerId, adminId)
      .then(() => response.status(204).send())
      .catch((error) => next(error));
  } catch (error) {
    next(error);
  }
});
providerRouter.put('/:proveedorId', jsonBodyParser, (request, response, next) => {
  try {
    const { authorization } = request.headers;

    if (!authorization || !authorization.startsWith('Bearer ')) {
      const error = new Error('Encabezado de autorización inválido');
      error.status = 401;
      throw error;
    }

    const token = authorization.slice(7);
    const { sub: idSolicitante } = jwt.verify(token, JWT_SECRET);

    const { proveedorId: idObjetivo } = request.params; // Fixed from userId to proveedorId
    const datosActualizados = request.body;

    logic
      .editarProveedor(idSolicitante, idObjetivo, datosActualizados)
      .then(() => response.status(200).json({ mensaje: 'Proveedor actualizado correctamente' }))
      .catch((error) => next(error));
  } catch (error) {
    next(error);
  }
});
