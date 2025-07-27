import { ValidationError } from "./errors.js";

const ROLES = ["administrator", "employee", "client", "provider"];

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

  taxId(taxId) {
    if (typeof taxId !== "string") throw new ValidationError("invalid taxId type");
    if (!taxId.length) throw new ValidationError("invalid taxId length");
  },

  description(description) {
    if (typeof description !== "string") throw new ValidationError("invalid description type");
    if (description.length < 5) throw new ValidationError("invalid description min length");
  },

  price(price) {
    if (typeof price !== "number") throw new ValidationError("Invalid price type");
    if (price < 0) throw new ValidationError("Invalid price value");
  },

  stock(stock) {
    if (typeof stock !== "number") throw new ValidationError("Invalid stock type");
    if (stock < 0) throw new ValidationError("Invalid stock value");
  },

  image(image) {
    if (typeof image !== "string") throw new ValidationError("Invalid image type");
    if (!image.startsWith("http")) throw new ValidationError("Invalid image url");
    if (!image.trim()) throw new ValidationError("Invalid image length");
  },

  employeeId(employeeId) {
    if (typeof employeeId !== "string") throw new ValidationError("invalid employeeId type");
    if (employeeId.length !== 24) throw new ValidationError("invalid employeeId length");
  },

  productId(productId) {
    if (typeof productId !== "string") throw new ValidationError("invalid productId type");
    if (productId.length !== 24) throw new ValidationError("invalid productId length");
  },

  query(query) {
    if (typeof query !== "string") throw new ValidationError("invalid query type");
  },
  numberOrder(numberOrder) {
    if (typeof numberOrder !== "string") throw new ValidationError("invalid numberOrder type");
  },
  stateOrder(stateOrder) {
    if (typeof stateOrder !== "string") throw new ValidationError("invalid stateOrder type");
  },
  total(total) {
    if (typeof total !== "number") throw new ValidationError("invalid total type");
  },
  saleId(saleId) {
    if (typeof saleId !== "string") throw new ValidationError("invalid saleId type");
  },
  currency(currency) {
    if (typeof currency !== "string") throw new ValidationError("invalid currency type");
  },
  pagoId(pagoId) {
    if (typeof pagoId !== "string") throw new ValidationError("invalid pagoId type");
  },
  product(product) {
    if (typeof product !== "string") throw new ValidationError("invalid product type");
  },
  quantity(quantity) {
    if (typeof quantity !== "number") throw new ValidationError("invalid quantity type");
  },
  priceAtOrderTime(priceAtOrderTime) {
    if (typeof priceAtOrderTime !== "number") throw new ValidationError("invalid priceAtOrderTime type");
  },
  productId(productId) {
    if (typeof productId !== "string") throw new ValidationError("invalid productId type");
    if (productId.length !== 24) throw new ValidationError("invalid productId length");
  },
  orderId(orderId) {
    if (typeof orderId !== "string") throw new ValidationError("invalid orderId type");
    if (!orderId.trim()) throw new ValidationError("invalid orderId length");
  },
};
