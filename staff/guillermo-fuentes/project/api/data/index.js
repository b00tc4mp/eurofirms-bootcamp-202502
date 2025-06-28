import mongoose from "mongoose";
import { User, Provider } from "./models.js";
const { connect, disconnect } = mongoose;

export { connect, disconnect, User, Provider };
