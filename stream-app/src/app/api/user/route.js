import { NextResponse } from "next/server";
import { login, signup } from "../../../../controller/user.controller"

export const GET = async (request) => {
    const response = await login(request);
    const { data, status } = response;
    return NextResponse.json({ data }, { status });
}

export const POST = async (request) => {
    const response = await signup(request);
    const { data, status } = response;
    return NextResponse.json({ data }, { status });
}