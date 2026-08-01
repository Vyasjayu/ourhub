import { NextResponse } from "next/server";
import { connectDB } from "@/lib/mongodb";
import Contact from "@/models/Contact";
// import Contact from "@/models/Contact";

export async function POST(req: Request) {
  try {
    await connectDB();

    const body = await req.json();

    const { name, phone, email, message } = body;

    if (!name || !phone || !message) {
      return NextResponse.json(
        {
          success: false,
          message: "Please fill all required fields.",
        },
        {
          status: 400,
        }
      );
    }

    const contact = await Contact.create({
      name,
      phone,
      email,
      message,
    });

    return NextResponse.json({
      success: true,
      contact,
    });
  } catch (error) {
    console.log(error);

    return NextResponse.json(
      {
        success: false,
        message: "Something went wrong",
      },
      {
        status: 500,
      }
    );
  }
}