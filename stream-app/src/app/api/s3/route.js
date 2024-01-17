import { NextResponse } from "next/server"
import { create, fetch } from "../../../../controller/s3.controller";
import { secureAdminMiddleware } from "../../../../middleware/secure-admin-api-middleware";

export const GET = async (request) => {
    const response = await fetch(request);
    return NextResponse.json({ response }, { status: response.status });
}

export const POST = async (request) => {
    try {
        await secureAdminMiddleware(request);

        const response = await create(request);
        return NextResponse.json({ response }, { status: response.status });
    } catch (error) {

        return NextResponse.json(
            {
                data: {
                    message: "Invalid User"
                }
            },
            {
                status: 401
            }
        );
    }
}