import { jwtVerify } from "jose";
import { NextResponse } from "next/server"

const { ADMIN_SECRET } = process.env;

export const middleware = async (request) => {
    const url = new URL(request.url);
    const token = url.searchParams.get('token');

    // HANDLING REGISTER PAGE ONLY
    // Check if the token matches the current token
    if (!token) return NextResponse.rewrite(new URL('/register', request.url));

    try {
        const secret = new TextEncoder().encode(ADMIN_SECRET);
        console.log("SECRET :: ", secret);
        const data = await jwtVerify(token, secret);
        console.log(data);
    } catch (error) {
        console.log(error);
        return NextResponse.rewrite(new URL('/', request.url));
    }
}

export const config = {
    matcher: [
        '/register',
        '/admin-panel/:path*'
    ]
}