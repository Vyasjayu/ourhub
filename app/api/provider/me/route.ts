import { NextResponse } from "next/server";
import { connectDB } from "@/lib/mongodb";
import Provider from "@/models/Provider";

export async function GET(req: Request) {
    try {

        await connectDB();

        const { searchParams } = new URL(req.url);

        const mobile = searchParams.get("mobile");

        if (!mobile) {
            return NextResponse.json(
                {
                    success: false,
                    message: "Mobile number is required",
                },
                {
                    status: 400,
                }
            );
        }

        const provider = await Provider.findOne({
            mobile,
        }).lean();

        if (!provider) {
            return NextResponse.json(
                {
                    success: false,
                    message: "Provider not found",
                },
                {
                    status: 404,
                }
            );
        }

        return NextResponse.json({
            success: true,
            provider,
        });

    } catch (error) {

        console.log(error);

        return NextResponse.json(
            {
                success: false,
                message: "Server Error",
            },
            {
                status: 500,
            }
        );

    }
}