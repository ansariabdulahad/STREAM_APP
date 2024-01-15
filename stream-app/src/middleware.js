import { jwtVerify } from "jose";
import { NextResponse } from "next/server"

const { ADMIN_SECRET } = process.env;

export const middleware = async (request) => {
    const response = NextResponse.next();
    const url = new URL(request.url);
    const token = url.searchParams.get('token');

    // HANDLING REGISTER PAGE ONLY
    // Check if the token matches the current token
    if (!token) return NextResponse.rewrite(new URL('/register', request.url));

    try {
        const secret = new TextEncoder().encode(ADMIN_SECRET);
        await jwtVerify(token, secret);

        // SET COOKIE
        response.cookies.set('admin', token, { httpOnly: true });

        return response;
    } catch (error) {
        // DELETE COOKIE
        response.cookies.delete('admin');
        return response;
    }
}

export const config = {
    matcher: [
        '/register',
        '/admin-panel/:path*'
    ]
}