import { NextResponse } from "next/server";
import { connectDB } from "@/lib/mongodb";
import Pandit from "@/models/Pandit";


export async function POST(req: Request) {

  try {

    await connectDB();


    const body = await req.json();


    const pandit = await Pandit.create({

      name: body.name,

      phone: body.phone,

      email: body.email,

      image: body.image || "",

      experience: body.experience || 0,

      rating: body.rating || 5,

      charge: body.charge,

      available: true

    });



    return NextResponse.json({

      success: true,

      message: "Pandit Added Successfully",

      pandit

    });


  } catch(error:any) {


    return NextResponse.json({

      success:false,

      message:error.message

    },
    {
      status:500
    });


  }

}