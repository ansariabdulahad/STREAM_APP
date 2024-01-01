import { NextResponse } from "next/server";
import { cancle, fetchById } from "../../../../../controller/media-convert.controller";

export const GET = async (request, { params }) => {
    const response = await fetchById(request, params);
    const { data, status } = response;
    return NextResponse.json({ data }, { status });
}

export const DELETE = async (request, { params }) => {
    const response = await cancle(request, params);
    const { data, status } = response;
    return NextResponse.json({ data }, { status });
}