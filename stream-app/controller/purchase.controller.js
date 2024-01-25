import moment from 'moment';
import '../module/db.module';
import purchaseSchema from '../schema/purchase.schema';

export const fetch = async (request) => {
    try {
        const items = await purchaseSchema.find();

        if (items.length > 0) {
            return {
                data: items,
                status: 200
            }
        }
        else {
            return {
                data: 'Data not found',
                status: 404
            }
        }
    } catch (error) {
        return {
            data: error,
            status: 424
        }
    }
}

export const create = async (request) => {
    try {
        const data = await request.json();
        const purchase = await new purchaseSchema(data).save();

        return {
            data: purchase,
            status: 200
        }
    } catch (error) {
        return {
            data: error,
            status: 424
        }
    }
}

export const checkPlanExpiry = async (request, params) => {
    const { email } = params;
    const plan = await purchaseSchema.findOne({ email });

    // CHECK PLAN IS AVAILABLE
    if (!plan) {
        return {
            data: {
                message: "Plan not found !"
            },
            status: 404
        }
    }

    // CHECK PLAN IS YEARLY
    if (plan.emi.toLocaleLowerCase() === 'yearly') {
        var expiry = moment(plan.createdAt).add(1, 'y');
        const today = moment();
        var diff = moment(expiry).diff(today, 'days');
    }

    // CHECK PLAN IS MONTHLY
    if (plan.emi.toLocaleLowerCase() === 'monthly') {
        var expiry = moment(plan.createdAt).add(1, 'M');
        const today = moment();
        var diff = moment(expiry).diff(today, 'days');
    }

    return {
        data: { plan, diff },
        status: 200
    }
}