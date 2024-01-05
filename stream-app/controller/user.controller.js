import '../module/db.module';
import userSchema from '../schema/user.schema';

export const login = async (request) => {
    return {
        data: "fetch api",
        status: 200
    }
}

export const signup = async (request) => {
    try {
        const data = await request.json();
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