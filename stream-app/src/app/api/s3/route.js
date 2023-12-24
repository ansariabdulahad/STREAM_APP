import { NextResponse } from "next/server"
import { create, fetch } from "../../../../controller/s3.controller";

export const GET = async (request) => {
    const response = await fetch(request);
    return NextResponse.json({ response }, { status: response.status });
}

export const POST = async (request) => {
    const response = await create(request);
    return NextResponse.json({ response }, { status: response.status });
}