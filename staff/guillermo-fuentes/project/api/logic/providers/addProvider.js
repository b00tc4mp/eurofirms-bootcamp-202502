import { Provider, User } from "../../data/index.js";
import { DuplicityError, NotFoundError, SystemError, validate, PermissionError, RoleError } from "com";
//Poner adminId primero
export const addProvider = (adminId, taxId, name, contact, address, userId) => {
  validate.adminId(adminId);
  validate.taxId(taxId);
  validate.name(name);
  validate.contact(contact);
  validate.address(address);
  validate.userId(userId);

  // Verificar que el usuario autenticado es administrador
  return User.findById(adminId)
    .catch((error) => {
      throw new SystemError(`Mongo error: ${error.message}`);
    })
    .then((admin) => {
      if (!admin) throw new NotFoundError("Admin not found");
      if (admin.role !== "administrator") {
        throw new RoleError("User is not admin");
      }
      return User.findById(userId)
        .lean()
        .catch((error) => {
          throw new SystemError(`Mongo error: ${error.message}`);
        })
        .then((user) => {
          if (!user) {
            throw new NotFoundError("User not found");
          }

          // Verificar que el usuario encontrado no sea el administrador
          if (user._id.toString() === adminId) {
            throw new PermissionError("Admin cannot be assigned as provider");
          }

          // Crear el proveedor
          return Provider.create({
            taxId,
            name,
            contact,
            address,
            user: user._id,
          })
            .catch((error) => {
              if (error.code === 11000) {
                throw new DuplicityError("Provider with this taxId already exists");
              }
              throw new SystemError(`Mongo error: ${error.message}`);
            })
            .then((provider) => provider);
        });
    });
};
