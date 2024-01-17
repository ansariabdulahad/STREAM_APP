import { jwtVerify } from "jose";

export const secureAdminMiddleware = async (request) => {
    const url = new URL(request.url);
    return new Promise(async (resolve, reject) => {
        const cookie = request.cookies.get('authToken');

        if (!cookie) return reject(false);

        try {
            const secret = new TextEncoder().encode(process.env.ADMIN_SECRET);
            const tokenData = await jwtVerify(cookie.value, secret);

            if (tokenData.payload.role === 'ADMIN') {

                if (url.origin === process.env.NEXT_PUBLIC_ENDPOINT) {
                    return resolve(true);
                }
                else {
                    return reject(false);
                }
            }
            else {
                return reject(false);
            }
        } catch (error) {
            return reject(false);
        }
    })
}