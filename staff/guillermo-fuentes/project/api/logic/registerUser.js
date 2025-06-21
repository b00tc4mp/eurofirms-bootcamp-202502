import { User } from '../data/index.js';
import bcrypt from 'bcryptjs';
import { DuplicityError, SystemError, ValidationError } from '../errors.js';

export const registerUser = (nombreCompleto, email, password, direccion, rol) => {
  // Validaciones de entrada
  if (typeof nombreCompleto !== 'string' || !nombreCompleto.trim()) {
    throw new ValidationError('nombre completo inválido o vacío');
  }
  if (typeof email !== 'string' || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    throw new ValidationError('formato de email inválido');
  }
  if (email.length < 6 || email.length > 30) {
    throw new ValidationError('la longitud del email debe estar entre 6 y 30 caracteres');
  }
  if (typeof password !== 'string' || password.length < 8) {
    throw new ValidationError('contraseña debe ser un string de al menos 8 caracteres');
  }
  if (typeof direccion !== 'string' || !direccion.trim()) {
    throw new ValidationError('dirección inválida o vacía');
  }
  const roles = ['administrador', 'cliente', 'empleado'];
  if (typeof rol !== 'string' || !roles.includes(rol)) throw new ValidationError('rol invalido');
  const saltRounds = 10;

  return bcrypt
    .hash(password, saltRounds)
    .catch((error) => {
      throw new SystemError(error.message || 'error en el registro');
    })
    .then((hashedPassword) => {
      return User.create({
        nombreCompleto,
        email,
        password: hashedPassword,
        direccion,
        rol,
      })
        .catch((error) => {
          if (error.code === 11000) {
            throw new DuplicityError('el usuario con este email ya existe');
          }
          throw new SystemError(error.message || 'error en el registro');
        })
        .then(() => {});
    });
};
