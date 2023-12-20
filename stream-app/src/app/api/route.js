import { NextResponse } from "next/server"

export const GET = (request) => {
    return NextResponse.json({
        message: "GET request"
    }, { status: 200 });
}

export const POST = (request) => {
    return NextResponse.json({
        message: 'POST request'
    }, { status: 200 });
}

export const PUT = (request) => {
    return NextResponse.json({
        message: 'PUT request'
    }, { status: 200 });
}

export const DELETE = (request) => {
    return NextResponse.json({
        message: 'DELETE request'
    }, { status: 200 });
}