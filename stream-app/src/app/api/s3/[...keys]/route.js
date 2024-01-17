import { NextResponse } from "next/server"
import { fetchById, trash, update } from "../../../../../controller/s3.controller";
import { secureAdminMiddleware } from "../../../../../middleware/secure-admin-api-middleware";

export const GET = async (request, { params }) => {
    const { data, status } = await fetchById(request, params);
    return NextResponse.json({ data }, { status });
}

export const DELETE = async (request, { params }) => {
    try {
        await secureAdminMiddleware(request);

        const response = await trash(request, params);
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

export const PUT = async (request, params) => {
    try {
        await secureAdminMiddleware(request);

        const response = await update(request, params);
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