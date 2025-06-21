import { ValidationError } from './errors.js';

export const validate = {
  name(name) {
    if (typeof name !== 'string') throw new ValidationError('invalid name type');
    if (name.length < 1) throw new ValidationError('invalid name min length');
    if (name.length > 30) throw new ValidationError('invalid name max length');
  },

  email(email) {
    if (typeof email !== 'string') throw new ValidationError('invalid email type');
    if (email.length < 6) throw new ValidationError('invalid email min length');
    if (email.length > 30) throw new ValidationError('invalid email max length');
  },

  password(password) {
    if (typeof password !== 'string') throw new ValidationError('invalid password type');
    if (password.length < 8) throw new ValidationError('invalid password min length');
    if (password.length > 20) throw new ValidationError('invalid password max length');
  },
  direction(direction) {
    if (typeof direction !== 'string' || !direction.trim()) {
      throw new ValidationError('dirección inválida o vacía');
    }
  },
  role(role) {
    const roles = ['administrador', 'cliente', 'empleado'];
    if (typeof role !== 'string' || !roles.includes(role)) throw new ValidationError('rol invalido');
  },
  userId(userId) {
    if (typeof userId !== 'string') throw new ValidationError('invalid userId type');
    if (userId.length !== 24) throw new ValidationError('invalid userId length');
  },
  idProveedor(idProveedor) {
    if (typeof idProveedor !== 'string' || !idProveedor.trim()) {
      throw new ValidationError('ID del proveedor invalido o vacio');
    }
  },
  contact(contact) {
    if (typeof contact !== 'string' || !contact.trim()) {
      throw new ValidationError('contacto inválido o vacío');
    }
  },
  adminId(adminId) {
    if (typeof adminId !== 'string') throw new ValidationError('invalid adminId type');
    if (adminId.length !== 24) throw new ValidationError('invalid adminId length');
  },
};
