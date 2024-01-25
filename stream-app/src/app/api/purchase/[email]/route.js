import { NextResponse } from "next/server";
import { checkPlanExpiry } from "../../../../../controller/purchase.controller"

export const GET = async (request, { params }) => {
    const response = await checkPlanExpiry(request, params);
    const { data, status } = response;
    return NextResponse.json({ data }, { status });
}