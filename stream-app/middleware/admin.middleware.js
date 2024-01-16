import { jwtVerify } from "jose";

const { ADMIN_SECRET } = process.env;

export const adminMiddleware = (request) => {
    return new Promise(async (resolve, reject) => {
        const token = request.cookies.get('admin');

        if (!token) {
            return reject(false);
        }

        try {
            const secret = new TextEncoder().encode(ADMIN_SECRET);
            await jwtVerify(token.value, secret);

            return resolve(true);
        } catch (error) {
            return reject(false);
        }
    })
}