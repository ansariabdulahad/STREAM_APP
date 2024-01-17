import { jwtVerify } from "jose";
import { NextResponse } from "next/server"

const { ADMIN_SECRET } = process.env;

export const middleware = async (request) => {
    const response = NextResponse.next();

    // SECURING ADMIN PANEL
    const pathname = request.nextUrl.pathname;
    if (pathname.startsWith('/admin-panel')) {
        let cookie = request.cookies.get('authToken');

        if (!cookie) {
            return NextResponse.redirect(new URL('/', request.url));
        }
        try {
            const secret = new TextEncoder().encode(ADMIN_SECRET);
            const tokenData = await jwtVerify(cookie.value, secret);

            if (tokenData.payload.role === 'ADMIN') {
                return NextResponse.rewrite(new URL(pathname, request.url));
            }
            else {
                return NextResponse.redirect(new URL('/', request.url));
            }
        } catch (error) {
            return NextResponse.redirect(new URL('/', request.url));
        }
    }

    // HANDLING REGISTER PAGE ONLY
    const url = new URL(request.url);
    const token = url.searchParams.get('token');

    // Check if the token matches the current token
    if (!token) {
        // DELETE COOKIE
        response.cookies.delete('admin');
        return response;
    }

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