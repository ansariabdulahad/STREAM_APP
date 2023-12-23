import mongoose, { Schema } from "mongoose";

const loginSchema = new Schema({
    name: String,
    password: String
});

export default mongoose.model('user', loginSchema);