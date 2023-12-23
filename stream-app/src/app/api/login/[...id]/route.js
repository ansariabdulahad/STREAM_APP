import { NextResponse } from "next/server"
import { fetchById, trashById, update } from "../../../../../controller/login.controller";

export const GET = async (request, { params }) => {
    const response = await fetchById(request, params);
    return NextResponse.json({ response }, { status: response.status });
}

export const DELETE = async (request, { params }) => {
    const response = await trashById(request, params);
    return NextResponse.json({ response }, { status: response.status });
}

export const PUT = async (request, params) => {
    const response = await update(request, params);
    return NextResponse.json({ response }, { status: response.status });
}