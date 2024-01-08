import mongoose, { Schema, model } from "mongoose";

const planSchema = new Schema({
    title: {
        type: String,
        required: [true, 'Title is required !']
    },
    desc: {
        type: String,
        required: [true, 'Description is required !']
    },
    emi: {
        type: String,
        required: [true, 'EMI is required !']
    },
    amount: {
        type: Number,
        required: [true, 'Amount is required !']
    },
    createdAt: {
        type: Date,
        default: Date.now()
    }
});

mongoose.models = {};

export default model('plan', planSchema);