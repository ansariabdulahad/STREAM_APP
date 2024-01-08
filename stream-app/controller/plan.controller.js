import '../module/db.module';
import planSchema from '../schema/plan.schema';

export const fetch = async (request) => {
    try {
        const plan = await planSchema.find();

        if (plan.length > 0) {
            return {
                data: plan,
                status: 200
            }
        }
        else {
            return {
                data: {
                    message: "NO DATA FOUND"
                },
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
        const plan = await new planSchema(data).save();

        return {
            data: plan,
            status: 200
        }
    } catch (error) {
        return {
            data: error,
            status: 424
        }
    }
}

export const fetchById = async (request, params) => {
    try {
        const { id } = params;
        const plan = await planSchema.findById(id);

        if (plan) {
            return {
                data: plan,
                status: 200
            }
        }
        else {
            return {
                data: {
                    message: 'NO DATA FOUND'
                },
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

export const trash = async (request, params) => {
    try {
        const { id } = params;
        const deleteRes = await planSchema.findByIdAndDelete(id);

        return {
            data: deleteRes,
            status: 200
        }
    } catch (error) {
        return {
            data: error,
            status: 424
        }
    }
}

export const update = async (request, params) => {
    try {
        const { id } = params;
        const data = await request.json();
        const updateRes = await planSchema.findByIdAndUpdate(id, data, { new: true });

        return {
            data: updateRes,
            status: 200
        }
    } catch (error) {
        return {
            data: error,
            status: 424
        }
    }
}