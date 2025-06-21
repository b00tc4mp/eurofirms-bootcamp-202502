import { User } from '../data/index.js';
import bcrypt from 'bcryptjs';
import { DuplicityError, NotFoundError, SystemError, ValidationError } from '../errors.js';
/**Metodo que permite editar un usuario recibe 3 parametros
 * @param idSolicitante el ID del que quiere hacer el cambio (puede ser él mismo usuario o un administrador).
 * @param idObjetivo el id del usuario a editar
 * @param datosActualizados un objeto con los campos a actualizar */
export const editarUsuario = (idSolicitante, idObjetivo, datosActualizados) => {
  // Se obtienen simultáneamente el solicitante y el usuario objetivo desde la base de datos

  return Promise.all([User.findById(idSolicitante), User.findById(idObjetivo)]).then(([solicitante, usuario]) => {
    //Si los usuarios no se encuentran se muestra estos mensajes
    if (!usuario) throw new NotFoundError('Usuario no encontrado');
    if (!solicitante) throw new NotFoundError('Solicitante no encontrado');
    // Se verifica si el solicitante es administrador o si está editando su propio perfil
    const esAdmin = solicitante.rol === 'administrador';
    const esElMismo = idSolicitante === idObjetivo;
    // Si no es administrador ni es el mismo usuario, se deniega la operación
    if (!esAdmin && !esElMismo) {
      throw new Error('No estas autorizado para realizar esta operacion');
    }
    // Se definen los campos que pueden ser modificados por administradores y por usuarios comunes

    const camposPermitidos = esAdmin
      ? ['nombreCompleto', 'direccion', 'rol', 'email', 'password']
      : ['nombreCompleto', 'direccion'];
    // Se valida que solo se estén intentando modificar campos permitidos según el rol del solicitante
    for (const campo of Object.keys(datosActualizados)) {
      if (!camposPermitidos.includes(campo)) {
        throw new ValidationError(`Campo no permitido: ${campo}`);
      }
    }
    // Si se incluye el campo correspondiente en datosActualizados, se actualiza en el usuario
    if ('nombreCompleto' in datosActualizados) {
      usuario.nombreCompleto = datosActualizados.nombreCompleto.trim();
    }
    if ('direccion' in datosActualizados) {
      usuario.direccion = datosActualizados.direccion.trim();
    }
    // Ejecuta validaciones y actualizaciones adicionales si el solicitante es administrador
    const actulizarAdmin = () => {
      //Si no es admin la promesa se resuelve
      if (!esAdmin) return Promise.resolve();
      // Se acumulan tareas asíncronas necesarias para validar y actualizar campos sensibles
      const tareas = [];
      //Se valida si el rol especificado es valido
      if ('rol' in datosActualizados) {
        const rolesValidos = ['administrador', 'empleado', 'cliente'];
        if (!rolesValidos.includes(datosActualizados.rol)) {
          return Promise.reject(new ValidationError('Rol no valido'));
        }
        usuario.rol = datosActualizados.rol;
      }
      if ('email' in datosActualizados) {
        tareas.push(
          User.findOne({ email: datosActualizados.email }).then((emailEnUso) => {
            if (emailEnUso && emailEnUso._id.toString() !== usuario._id.toString()) {
              throw new DuplicityError('El correo electronico ya esta en uso');
            }
            usuario.email = datosActualizados.email;
          })
        );
      }
      // Se valida la longitud mínima de la nueva contraseña antes de cifrarla y actualizarla
      if ('password' in datosActualizados) {
        if (datosActualizados.password.length < 6) {
          return Promise.reject(new ValidationError('La contraseña debe tener mas de 6 caracteres'));
        }
        tareas.push(
          bcrypt
            .genSalt(10)
            .then((salt) => bcrypt.hash(datosActualizados.password, salt))
            .then((hash) => {
              usuario.password = hash;
            })
        );
      }
      return Promise.all(tareas);
    };
    // Si todas las validaciones y tareas se completan correctamente, se guarda el usuario actualizado en la base de datos
    return actulizarAdmin().then(() => usuario.save());
  });
};
