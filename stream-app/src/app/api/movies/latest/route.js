import { NextResponse } from "next/server"
import { secureAdminMiddleware } from "../../../../../middleware/secure-admin-api-middleware";
import { latestMovies } from "../../../../../controller/movies.controller";

export const GET = async (request) => {

    try {
        await secureAdminMiddleware(request);

        const response = await latestMovies(request);
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