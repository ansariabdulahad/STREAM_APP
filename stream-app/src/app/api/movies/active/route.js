import { NextResponse } from "next/server"
import { activeMovies } from "../../../../../controller/movies.controller";
import { secureAdminMiddleware } from "../../../../../middleware/secure-admin-api-middleware";

export const GET = async (request) => {

    try {
        await secureAdminMiddleware(request);

        const response = await activeMovies(request);
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