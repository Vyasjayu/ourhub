import { NextResponse } from "next/server";
import { connectDB } from "@/lib/mongodb";
import Provider from "@/models/Provider";

export async function POST(req: Request) {
  try {
    await connectDB();

    const body = await req.json();

    // File objects remove
    const {
      profilePhoto,
      aadhaar,
      pan,
      ...rest
    } = body;

    // Find existing provider
    const existingProvider = await Provider.findOne({
      mobile: body.mobile,
    });

    if (!existingProvider) {
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

    // Never overwrite category with empty string
    if (!rest.category) {
      rest.category = existingProvider.category;
    }

    // Never overwrite username with empty string
    if (!rest.username) {
      rest.username = existingProvider.username;
    }

    // Never overwrite password
    delete rest.password;

    const provider = await Provider.findOneAndUpdate(
      {
        mobile: body.mobile,
      },
      {
        $set: {
          ...rest,
          updatedAt: new Date(),
        },
      },
      {
        returnDocument: "after",
        runValidators: true,
      }
    );

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