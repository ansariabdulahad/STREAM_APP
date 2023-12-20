import { NextResponse } from "next/server"
import { create, fetch, trash, update } from "../../../../controller/login.controller";

export const GET = async (request) => {
    const response = await fetch(request);
    const { message, status } = response;

    return NextResponse.json({ message }, { status });
}

export const POST = async (request) => {
    const response = await create(request);
    const { data, status } = response;

    return NextResponse.json({ data }, { status });
}

export const DELETE = async (request) => {
    const response = await trash(request);
    const { message, status } = response;

    return NextResponse.json({ message }, { status });
}

export const PUT = async (request) => {
    const response = await update(request);
    const { message, data, status } = response;

    return NextResponse.json({ message, data }, { status });
}