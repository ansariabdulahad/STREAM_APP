import { NextResponse } from "next/server";
import { create, fetch } from "../../../../controller/plan.controller"

export const GET = async (request) => {
    const response = await fetch(request);
    const { data, status } = response;
    return NextResponse.json({ data }, { status });
}

export const POST = async (request) => {
    const response = await create(request);
    const { data, status } = response;
    return NextResponse.json({ data }, { status });
}