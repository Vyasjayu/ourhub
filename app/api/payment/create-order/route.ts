import Razorpay from "razorpay";
import { NextResponse } from "next/server";


const razorpay = new Razorpay({

  key_id: process.env.RAZORPAY_KEY_ID!,

  key_secret: process.env.RAZORPAY_KEY_SECRET!

});



export async function POST(req: Request) {

  try {


    const { amount } = await req.json();


    if(!amount){

      return NextResponse.json({

        success:false,

        message:"Amount required"

      },
      {
        status:400
      });

    }



    const order =
    await razorpay.orders.create({

      amount: Number(amount) * 100,

      currency:"INR",

      receipt:`order_${Date.now()}`

    });



    return NextResponse.json({

      success:true,

      order

    });



  } catch(error:any) {


    console.log("Razorpay Error:", error);


    return NextResponse.json({

      success:false,

      message:error.message || "Payment order failed"

    },
    {
      status:500
    });


  }

}