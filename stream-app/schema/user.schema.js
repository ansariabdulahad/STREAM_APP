import mongoose, { Schema, model } from "mongoose";
import bcrypt, { hash } from 'bcrypt';
import { encrypt } from "../module/bcrypt.module";

const userSchema = new Schema({
    name: {
        type: String,
        required: [true, "Name is required !"]
    },
    email: {
        type: String,
        required: [true, 'Email is required !']
    },
    password: {
        type: String,
        required: [true, 'Password is required']
    },
    role: {
        type: String,
        required: [true, 'role is required']
    },
    image: String,
    createdAt: {
        type: Date,
        default: Date.now()
    }
});

// MONGOOSE MIDDLEWARE

userSchema.pre('save', async function (next) {
    const isUser = await mongoose.model('user').findOne({ email: this.email });
    if (isUser) return next(new Error('User Already exists !'));
    next();
})

userSchema.pre('save', async function (next) {
    this.password = await encrypt(this.password); // bcrypt.hash(this.password.toString(), 12);
    next();
})

// TO STOP ERROR
mongoose.models = {};

export default model('user', userSchema);