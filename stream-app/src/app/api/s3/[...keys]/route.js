import { NextResponse } from "next/server"
import { fetchById, trash, update } from "../../../../../controller/s3.controller";

export const GET = async (request, { params }) => {
    const { data, status } = await fetchById(request, params);
    return NextResponse.json({ data }, { status });
}

export const DELETE = async (request, { params }) => {
    const response = await trash(request, params);
    return NextResponse.json({ response }, { status: response.status });
}

export const PUT = async (request, params) => {
    const response = await update(request, params);
    return NextResponse.json({ response }, { status: response.status });
}