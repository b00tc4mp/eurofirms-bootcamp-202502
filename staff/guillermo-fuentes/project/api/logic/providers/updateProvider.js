import { User, Provider } from "../../data/index.js";
import { DuplicityError, NotFoundError, SystemError, validate, ValidationError } from "com";
//cambiar targetid a providerid
export const updateProvider = (requesterId, targetId, name, contact, address, providerId) => {
  validate.adminId(requesterId);
  validate.userId(targetId);
  validate.name(name);
  validate.address(address);
  validate.providerId(providerId);

  return Promise.all([User.findById(requesterId), Provider.findById(targetId)]).then(([requester, provider]) => {
    if (!requester) throw new NotFoundError("user not found");
    if (!provider) throw new NotFoundError("provider not found");

    const isAdmin = requester.role === "administrator";
    const isSameUser = requesterId === targetId;

    if (!isAdmin && !isSameUser) {
      throw new Error("You are not authorized to perform this operation");
    }

    // Solo se actualizan los campos si vienen definidos
    if (name !== undefined) {
      if (!isAdmin && !isSameUser) throw new ValidationError("Field not allowed: name");
      provider.name = name.trim();
    }

    if (contact !== undefined) {
      if (!isAdmin && !isSameUser) throw new ValidationError("Field not allowed: contact");
      provider.contact = contact.trim();
    }

    if (address !== undefined) {
      if (!isAdmin && !isSameUser) throw new ValidationError("Field not allowed: address");
      provider.address = address.trim();
    }

    if (providerId !== undefined) {
      if (!isAdmin && !isSameUser) throw new ValidationError("Field not allowed: user");
      provider.user = providerId; // Es una referencia ObjectId
    }

    return provider.save(); // 💾 Guardar los cambios
  });
};
