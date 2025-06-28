import { ValidationError } from "./errors.js";

const ROLES = ["administrator", "employee", "client"];

export const validate = {
  name(name) {
    if (typeof name !== "string") throw new ValidationError("invalid name type");
    if (name.length < 1) throw new ValidationError("invalid name min length");
    if (name.length > 30) throw new ValidationError("invalid name max length");
  },

  email(email) {
    if (typeof email !== "string") throw new ValidationError("invalid email type");
    if (email.length < 6) throw new ValidationError("invalid email min length");
    if (email.length > 30) throw new ValidationError("invalid email max length");
  },

  password(password) {
    if (typeof password !== "string") throw new ValidationError("invalid password type");
    if (password.length < 8) throw new ValidationError("invalid password min length");
    if (password.length > 20) throw new ValidationError("invalid password max length");
  },

  address(address) {
    if (typeof address !== "string") throw new ValidationError("invalid address");
    if (!address.trim()) throw new ValidationError("invalid address length");
  },

  role(role) {
    if (typeof role !== "string") throw new ValidationError("invalid role type");
    if (!ROLES.includes(role)) throw new ValidationError("invalid role value");
  },

  userId(userId) {
    if (typeof userId !== "string") throw new ValidationError("invalid userId type");
    if (userId.length !== 24) throw new ValidationError("invalid userId length");
  },

  providerId(providerId) {
    if (typeof providerId !== "string") throw new ValidationError("invalid providerId type");
    if (!providerId.trim()) throw new ValidationError("invalid providerId length");
  },

  contact(contact) {
    if (typeof contact !== "string") throw new ValidationError("invalid contact");
    if (!contact.trim()) throw new ValidationError("invalid contact length");
  },

  adminId(adminId) {
    if (typeof adminId !== "string") throw new ValidationError("invalid adminId type");
    if (adminId.length !== 24) throw new ValidationError("invalid adminId length");
  },

  providerId(providerId) {
    if (typeof providerId !== "string") throw new ValidationError("invalid providerId type");
    if (providerId.length !== 24) throw new ValidationError("invalid providerId length");
  },

  taxId(taxId) {
    if (typeof taxId !== "string") throw new ValidationError("invalid taxId type");
    if (!taxId.length) throw new ValidationError("invalid taxId length");
  },
};
