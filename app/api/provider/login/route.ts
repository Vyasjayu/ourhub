import { NextResponse } from "next/server";
import bcrypt from "bcryptjs";

import { connectDB } from "@/lib/mongodb";
import Provider from "@/models/Provider";

export async function POST(req: Request) {
    try {

        await connectDB();

        const { loginId, password } = await req.json();

        if (!loginId || !password) {
            return NextResponse.json(
                {
                    success: false,
                    message: "Login ID and Password are required.",
                },
                {
                    status: 400,
                }
            );
        }

        // Username OR Mobile
        const provider = await Provider.findOne({
            $or: [
                {
                    username: loginId.toLowerCase(),
                },
                {
                    mobile: loginId,
                },
            ],
        });

        if (!provider) {
            return NextResponse.json(
                {
                    success: false,
                    message: "Provider not found.",
                },
                {
                    status: 404,
                }
            );
        }

        const isPasswordValid = await bcrypt.compare(
            password,
            provider.password
        );

        if (!isPasswordValid) {
            return NextResponse.json(
                {
                    success: false,
                    message: "Invalid password.",
                },
                {
                    status: 401,
                }
            );
        }

        return NextResponse.json({
            success: true,
            message: "Login successful.",
            provider: {
                id: provider._id,
                fullName: provider.fullName,
                username: provider.username,
                mobile: provider.mobile,
                category: provider.category,
            },
        });

    } catch (error) {

        console.error(error);

        return NextResponse.json(
            {
                success: false,
                message: "Internal Server Error",
            },
            {
                status: 500,
            }
        );
    }
}