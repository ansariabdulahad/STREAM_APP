import { adminMiddleware } from '../middleware/admin.middleware';
import { decrypt, encrypt } from '../module/bcrypt.module';
import '../module/db.module';
import userSchema from '../schema/user.schema';

export const login = async (request) => {
    const { searchParams } = new URL(request.url);

    let query = {};

    for (const [key, value] of searchParams) {
        query[key] = value;
    }

    // FIND AND MATCH EMAIL
    const userData = await userSchema.findOne({ email: query.email });

    if (userData) {

        // MATCH PASSWORD

        const loginData = userData.toObject();
        delete loginData.password;
        const login = await decrypt(query.password, userData.password);

        if (login) {
            return {
                data: {
                    user: loginData
                },
                status: 200
            }
        }
        else {
            return {
                data: "LOGIN FAILED !",
                status: 401
            }
        }
    }
    else {
        return {
            data: "LOGIN FAILED !",
            status: 401
        }
    }
}

export const signup = async (request) => {
    try {
        const data = await request.json();
        try {
            await adminMiddleware(request);
            data['role'] = 'ADMIN';
        } catch (error) {
            data['role'] = 'USER';
        }
        const newUser = await new userSchema(data).save();
        const newData = newUser.toObject();
        delete newData.password;
        return {
            data: newData,
            status: 200
        }

    } catch (error) {
        return {
            data: error,
            status: 424
        }
    }
}