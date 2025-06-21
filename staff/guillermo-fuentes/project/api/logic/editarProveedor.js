import { User, Proveedor } from '../data/index.js';
import { DuplicityError, NotFoundError, SystemError, ValidationError } from 'com';

export const editarProveedor = (idSolicitante, idObjetivo, datosActualizados) => {
  return Promise.all([User.findById(idSolicitante), Proveedor.findById(idObjetivo)]).then(
    ([solicitante, proveedor]) => {
      if (!solicitante) throw new NotFoundError('Solicitante no encontrado');
      if (!proveedor) throw new NotFoundError('proveedor no encontrado');
      const esAdmin = solicitante.rol === 'administrador';

      if (!esAdmin) {
        throw new Error('No estás autorizado para realizar esta acción');
      }
      const camposPermitidos = ['nombre', 'contacto', 'direccion', 'usuario']; // Updated to 'usuario'
      for (const campo of Object.keys(datosActualizados)) {
        if (!camposPermitidos.includes(campo)) {
          throw new ValidationError(`Campo no permitido: ${campo}`);
        }
      }
      const tareas = [];
      if ('nombre' in datosActualizados) {
        const nombre = datosActualizados.nombre.trim();
        if (!nombre) throw new ValidationError('Nombre inválido o vacío');
        tareas.push(
          Proveedor.findOne({ nombre }).then((nombreEnUso) => {
            if (nombreEnUso && nombreEnUso._id.toString() !== proveedor._id.toString()) {
              throw new DuplicityError('El nombre del proveedor ya está en uso');
            }
            proveedor.nombre = nombre;
          })
        );
      }
      if ('contacto' in datosActualizados) {
        const contacto = datosActualizados.contacto.trim();
        if (!contacto) throw new ValidationError('Contacto inválido o vacío');
        proveedor.contacto = contacto;
      }
      if ('direccion' in datosActualizados) {
        const direccion = datosActualizados.direccion.trim();
        if (!direccion) throw new ValidationError('Dirección inválida o vacía');
        proveedor.direccion = direccion;
      }
      if ('usuario' in datosActualizados) {
        // Updated to 'usuario'
        const usuarioId = datosActualizados.usuario; // Updated to 'usuario'
        if (!usuarioId || typeof usuarioId !== 'string') {
          throw new ValidationError('Id de usuario inválido');
        }
        tareas.push(
          User.findById(usuarioId).then((usuario) => {
            if (!usuario) throw new NotFoundError('Usuario no encontrado');
            proveedor.usuario = usuario._id; // Updated to 'usuario'
          })
        );
      }
      return Promise.all(tareas)
        .catch((error) => {
          throw new SystemError('Mongo error: ' + error.message);
        })
        .then(() => proveedor.save())
        .then(() => proveedor);
    }
  );
};
