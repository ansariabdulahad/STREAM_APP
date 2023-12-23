import '../module/db.module';
import { loginMiddleware } from "../middleware/login.middleware"
import loginSchema from '../schema/login.schema';

export const fetch = async (request) => {
    try {
        await loginMiddleware(request);
        return {
            data: {
                message: "Login Success"
            },
            status: 200
        }
    } catch (error) {
        return {
            data: {
                message: "Login Error !",
                error: error
            },
            status: 401
        }
    }
}

export const fetchById = async (request, params) => {
    return {
        data: {
            message: "FETCH BY ID Request",
            data: params
        },
        status: 200
    }
}

export const create = async (request) => {
    try {
        const data = await request.json();
        console.log(data);
        const userRes = await new loginSchema(data).save();
        return {
            data: {
                message: "Login Data Initialized",
                data: userRes
            },
            status: 200
        }
    } catch (error) {
        return {
            data: {
                message: "Failed to Initialize Login Data",
                error: error
            },
            status: 424
        }
    }
}

export const trash = async (request) => {
    return {
        data: {
            message: 'Login Delete Request',
        },
        status: 200
    }
}

export const trashById = async (request, params) => {
    return {
        data: {
            message: "DELETE BY ID REQUEST",
            data: params
        },
        status: 200
    }
}

export const update = async (request, params) => {
    const data = await request.json();

    return {
        data: {
            message: "Login data update request",
            data: data
        },
        status: 200
    }
}