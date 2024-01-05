import mongoose, { Schema, model } from "mongoose";
import bcrypt, { hash } from 'bcrypt';

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
    image: String,
    createdAt: {
        type: Date,
        default: Date.now()
    }
});

// MONGOOSE MIDDLEWARE
userSchema.pre('save', async function (next) {
    this.password = await bcrypt.hash(this.password, 12);
    next();
})

// TO STOP ERROR
mongoose.models = {};

export default model('user', userSchema);