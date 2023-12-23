export const loginMiddleware = async (request) => {
    return new Promise((resolve, reject) => {
        const { value } = request.cookies.get('token');

        if (value === "12345") {
            resolve("Token varified !");
        }
        else {
            reject("Invalid token !");
        }
    })
}