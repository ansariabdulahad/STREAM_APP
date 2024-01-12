import { NextResponse } from "next/server";
import { createOrder, fetchAllOrder } from "../../../../../controller/razorpay.controller"

export const GET = async (request) => {
    const response = await fetchAllOrder(request);
    const { data, status } = response;
    return NextResponse.json({ data }, { status });
}

export const POST = async (request) => {
    const response = await createOrder(request);
    const { data, status } = response;
    return NextResponse.json({ data }, { status });
}