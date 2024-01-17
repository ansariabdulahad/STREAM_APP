import { NextResponse } from "next/server";
import { create, fetch } from "../../../../controller/plan.controller"
import { secureAdminMiddleware } from "../../../../middleware/secure-admin-api-middleware";

export const GET = async (request) => {
    const response = await fetch(request);
    const { data, status } = response;
    return NextResponse.json({ data }, { status });
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