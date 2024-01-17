import { NextResponse } from "next/server"
import { create, fetch } from "../../../../controller/movies.controller";
import { secureAdminMiddleware } from "../../../../middleware/secure-admin-api-middleware";

export const GET = async (request) => {

    try {
        await secureAdminMiddleware(request);

        const response = await fetch(request);
        const { data, status } = response;
        return NextResponse.json({ data }, { status });

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

export const POST = async (request) => {
    try {
        await secureAdminMiddleware(request);

        const response = await create(request);
        const { data, status } = response;
        return NextResponse.json({ data }, { status });

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