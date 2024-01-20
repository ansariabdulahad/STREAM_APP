import { NextResponse } from "next/server";
import { fetchById, makeMovieActive, trash, update } from "../../../../../controller/movies.controller"
import { secureAdminMiddleware } from "../../../../../middleware/secure-admin-api-middleware";

export const GET = async (request, { params }) => {
    try {
        await secureAdminMiddleware(request);

        const response = await fetchById(request, params);
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

export const DELETE = async (request, { params }) => {
    try {
        await secureAdminMiddleware(request);

        const response = await trash(request, params);
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

export const PUT = async (request, { params }) => {
    try {
        await secureAdminMiddleware(request);

        const response = await update(request, params);
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

export const PATCH = async (request, { params }) => {
    try {

        await secureAdminMiddleware(request);

        const response = await makeMovieActive(request, params);
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
        )
    }
}