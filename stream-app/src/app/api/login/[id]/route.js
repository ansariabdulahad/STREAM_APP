import { NextResponse } from "next/server"
import { fetchById, trashById } from "../../../../../controller/login.controller";

export const GET = async (request, { params }) => {
    const { id } = params;
    const { message, status } = await fetchById(request, id);
    return NextResponse.json({ message }, { status });
}

export const DELETE = async (request, { params }) => {
    const { id } = params;
    const { message, status } = await trashById(request, id);
    return NextResponse.json({ message }, { status });
}