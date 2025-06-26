import { User } from '../data/index.js';
import bcrypt from 'bcryptjs';
import { DuplicityError, SystemError, validate, NotFoundError, ValidationError } from 'com';

/**Metodo que permite editar un user recibe varios parámetros
 * @param requesterId el ID del que quiere hacer el cambio (puede ser él mismo user o un administrador).
 * @param targetId el id del user a editar
 * @param fullName el nombre completo a actualizar
 * @param direction la dirección a actualizar
 * @param rol el rol a actualizar (solo para administradores)
 * @param email el correo electrónico a actualizar (solo para administradores)
 * @param password la contraseña a actualizar (solo para administradores)
 */
export const updateUser = (requesterId, targetId, fullName, direction, rol, email, password) => {
  // Validar IDs de entrada
  validate.adminId(requesterId);
  validate.userId(targetId);
  validate.name(fullName);
  validate.direction(direction);
  validate.role(rol);
  validate.email(email);
  validate.password(password);
  return Promise.all([User.findById(requesterId), User.findById(targetId)]).then(([requester, user]) => {
    // Si los users no se encuentran, se muestran estos mensajes
    if (!user) throw new NotFoundError('user not found');
    if (!requester) throw new NotFoundError('requester not found');

    // Verificar si el requester es administrador o si está editando su propio perfil
    const isAdmin = requester.role === 'administrator';
    const isSameUser = requesterId === targetId;

    // Si no es administrador ni es el mismo user, se deniega la operación
    if (!isAdmin && !isSameUser) {
      throw new Error('You are not authorized to perform this operation');
    }

    // Validar y actualizar fullName si se proporciona
    if (fullName !== undefined) {
      if (!isAdmin && !isSameUser) {
        throw new ValidationError('Field not allowed fullName');
      }
      validate.name(fullName); // Validar el formato del nombre
      user.fullName = fullName.trim();
    }

    // Validar y actualizar direction si se proporciona
    if (direction !== undefined) {
      if (!isAdmin && !isSameUser) {
        throw new ValidationError('Field not allowed direction');
      }
      validate.direction(direction); // Validar el formato de la dirección
      user.direction = direction.trim();
    }

    // Ejecutar validaciones y actualizaciones adicionales si el requester es administrador
    const actualizarAdmin = () => {
      // Si no es admin, la promesa se resuelve
      if (!isAdmin) return Promise.resolve();

      // Validar y actualizar el rol si se proporciona
      if (rol !== undefined) {
        if (!['administrator', 'employee', 'client'].includes(rol)) {
          throw new ValidationError('Invalid role');
        }
        validate.role(rol); // Validar el formato del rol
        user.role = rol;
      }

      // Validar y actualizar el email si se proporciona
      if (email !== undefined) {
        validate.email(email); // Validar el formato del email
        return User.findOne({ email }).then((emailEnUso) => {
          if (emailEnUso && emailEnUso._id.toString() !== user._id.toString()) {
            throw new DuplicityError('Email is already in use');
          }
          user.email = email;

          // Validar y actualizar la contraseña si se proporciona
          if (password !== undefined) {
            validate.password(password); // Validar el formato de la contraseña
            if (password.length < 6) {
              throw new ValidationError('Password must be at least 6 characters');
            }
            return bcrypt
              .genSalt(10)
              .then((salt) => bcrypt.hash(password, salt))
              .then((hash) => {
                user.password = hash;
              });
          }
        });
      }

      // Si no hay email pero hay contraseña, validar y actualizar la contraseña
      if (password !== undefined) {
        validate.password(password); // Validar el formato de la contraseña
        if (password.length < 6) {
          throw new ValidationError('Password must be at least 6 characters');
        }
        return bcrypt
          .genSalt(10)
          .then((salt) => bcrypt.hash(password, salt))
          .then((hash) => {
            user.password = hash;
          });
      }

      return Promise.resolve();
    };

    // Guardar el user actualizado en la base de datos
    return actualizarAdmin().then(() => user.save());
  });
};
