import mongoose, { Schema } from "mongoose";

const PurchaseSchema = new Schema({
    email: {
        type: String,
        required: [true, 'Email is required !']
    },
    planId: {
        type: String,
        required: [true, 'PlanId is required !']
    },
    paymentId: {
        type: String,
        required: [true, 'PaymentId is required !']
    },
    orderId: {
        type: String,
        required: [true, 'OrderId is required !']
    },
    signature: {
        type: String,
        required: [true, 'Signature is required !']
    },
    createdAt: {
        type: Date,
        default: Date.now()
    }
});

mongoose.models = {};

export default mongoose.model('purchase', PurchaseSchema);