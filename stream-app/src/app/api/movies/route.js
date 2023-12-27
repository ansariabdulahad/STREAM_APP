import { NextResponse } from "next/server"
import { create } from "../../../../controller/movies.controller";

export const POST = async (request) => {
    const response = await create(request);
    const { data, status } = response;
    return NextResponse.json({ data }, { status });
}