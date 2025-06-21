import { User } from '../data/index.js';
import bcrypt from 'bcryptjs';
import { DuplicityError, SystemError, validate, NotFoundError, ValidationError } from 'com';

/**Metodo que permite editar un usuario recibe varios parámetros
 * @param idSolicitante el ID del que quiere hacer el cambio (puede ser él mismo usuario o un administrador).
 * @param idObjetivo el id del usuario a editar
 * @param nombreCompleto el nombre completo a actualizar
 * @param direccion la dirección a actualizar
 * @param rol el rol a actualizar (solo para administradores)
 * @param email el correo electrónico a actualizar (solo para administradores)
 * @param password la contraseña a actualizar (solo para administradores)
 */
export const updateUser = (idSolicitante, idObjetivo, nombreCompleto, direccion, rol, email, password) => {
  // Validar IDs de entrada
  validate.adminId(idSolicitante);
  validate.userId(idObjetivo);

  return Promise.all([User.findById(idSolicitante), User.findById(idObjetivo)]).then(([solicitante, usuario]) => {
    // Si los usuarios no se encuentran, se muestran estos mensajes
    if (!usuario) throw new NotFoundError('Usuario no encontrado');
    if (!solicitante) throw new NotFoundError('Solicitante no encontrado');

    // Verificar si el solicitante es administrador o si está editando su propio perfil
    const esAdmin = solicitante.rol === 'administrador';
    const esElMismo = idSolicitante === idObjetivo;

    // Si no es administrador ni es el mismo usuario, se deniega la operación
    if (!esAdmin && !esElMismo) {
      throw new Error('No estás autorizado para realizar esta operación');
    }

    // Validar y actualizar nombreCompleto si se proporciona
    if (nombreCompleto !== undefined) {
      if (!esAdmin && !esElMismo) {
        throw new ValidationError('Campo no permitido: nombreCompleto');
      }
      validate.name(nombreCompleto); // Validar el formato del nombre
      usuario.nombreCompleto = nombreCompleto.trim();
    }

    // Validar y actualizar direccion si se proporciona
    if (direccion !== undefined) {
      if (!esAdmin && !esElMismo) {
        throw new ValidationError('Campo no permitido: direccion');
      }
      validate.direction(direccion); // Validar el formato de la dirección
      usuario.direccion = direccion.trim();
    }

    // Ejecutar validaciones y actualizaciones adicionales si el solicitante es administrador
    const actualizarAdmin = () => {
      // Si no es admin, la promesa se resuelve
      if (!esAdmin) return Promise.resolve();

      // Validar y actualizar el rol si se proporciona
      if (rol !== undefined) {
        if (!['administrador', 'empleado', 'cliente'].includes(rol)) {
          throw new ValidationError('Rol no válido');
        }
        validate.role(rol); // Validar el formato del rol
        usuario.rol = rol;
      }

      // Validar y actualizar el email si se proporciona
      if (email !== undefined) {
        validate.email(email); // Validar el formato del email
        return User.findOne({ email }).then((emailEnUso) => {
          if (emailEnUso && emailEnUso._id.toString() !== usuario._id.toString()) {
            throw new DuplicityError('El correo electrónico ya está en uso');
          }
          usuario.email = email;

          // Validar y actualizar la contraseña si se proporciona
          if (password !== undefined) {
            validate.password(password); // Validar el formato de la contraseña
            if (password.length < 6) {
              throw new ValidationError('La contraseña debe tener más de 6 caracteres');
            }
            return bcrypt
              .genSalt(10)
              .then((salt) => bcrypt.hash(password, salt))
              .then((hash) => {
                usuario.password = hash;
              });
          }
        });
      }

      // Si no hay email pero hay contraseña, validar y actualizar la contraseña
      if (password !== undefined) {
        validate.password(password); // Validar el formato de la contraseña
        if (password.length < 6) {
          throw new ValidationError('La contraseña debe tener más de 6 caracteres');
        }
        return bcrypt
          .genSalt(10)
          .then((salt) => bcrypt.hash(password, salt))
          .then((hash) => {
            usuario.password = hash;
          });
      }

      return Promise.resolve();
    };

    // Guardar el usuario actualizado en la base de datos
    return actualizarAdmin().then(() => usuario.save());
  });
};
