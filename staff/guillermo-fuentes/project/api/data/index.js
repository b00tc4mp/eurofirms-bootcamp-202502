import mongoose from "mongoose";
import { User, Provider, Product, Order } from "./models.js";
const { connect, disconnect } = mongoose;

export { connect, disconnect, User, Provider, Product, Order };
