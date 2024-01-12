import { nanoid } from "nanoid";
import Razorpay from "razorpay"

const { NEXT_PUBLIC_RAZOR_KEY_ID, NEXT_PUBLIC_RAZOR_KEY_SECRET } = process.env;

const razor = new Razorpay({
    key_id: NEXT_PUBLIC_RAZOR_KEY_ID,
    key_secret: NEXT_PUBLIC_RAZOR_KEY_SECRET
});

export const fetchAllOrder = async (request) => {
    const orders = await razor.orders.all();
    return {
        data: orders,
        status: 200
    }
}

export const createOrder = async (request) => {
    try {
        const { amount } = await request.json();
        const id = nanoid(5); // creates 5 digit code
        const order = await razor.orders.create({
            amount: (amount * 100),
            currency: 'INR',
            receipt: id
        });
        return {
            data: order,
            status: 200
        }
    } catch (error) {
        return {
            data: error,
            status: 424
        }
    }
}