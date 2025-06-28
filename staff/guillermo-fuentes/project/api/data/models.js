import mongoose from "mongoose";

const { Schema, model } = mongoose;
const { Types } = Schema;
const { ObjectId } = Types;

const user = new Schema({
  fullName: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  registerDate: {
    type: Date,
    required: true,
    default: Date.now,
  },
  address: {
    type: String,
    required: true,
  },
  role: {
    type: String,
    enum: ["administrator", "employee", "client"],
    required: true,
    default: "client",
  },
});
//TODO taxId agregar a provider
const provider = new Schema({
  taxId: {
    type: String,
    required: true,
    unique: true,
  },
  name: {
    type: String,
    required: true,
  },
  contact: {
    type: String,
    required: true,
  },
  address: {
    type: String,
    required: true,
  },
  user: {
    type: ObjectId,
    ref: "User",
    required: true,
  },
});
const User = model("User", user);
const Provider = model("Provider", provider);

export { User, Provider };
