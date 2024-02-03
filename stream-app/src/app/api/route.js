import { NextResponse } from "next/server"
// import jwt from 'jsonwebtoken';

export const GET = async (request) => {

    // const token = await jwt.sign(
    //     {
    //         data: {
    //             name: 'JUST FOR CODE',
    //             role: 'ADMIN'
    //         }
    //     },
    //     process.env.ADMIN_SECRET,
    //     {
    //         expiresIn: 600
    //     }
    // );

    return NextResponse.json({
        token: token
    }, { status: 200 });
}