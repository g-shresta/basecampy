import mongoose, { Model } from "mongoose";
import { Schema } from "mongoose";

const schema = new Schema()

const model = mongoose.Model("User", schema)

export default model;