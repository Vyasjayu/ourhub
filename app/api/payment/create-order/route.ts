import { NextResponse } from "next/server";
import Razorpay from "razorpay";


export async function POST(req:Request){

  try {


    const razorpay = new Razorpay({

      key_id:
        process.env.RAZORPAY_KEY_ID!,

      key_secret:
        process.env.RAZORPAY_KEY_SECRET!

    });



    const body = await req.json();


    const options = {

      amount: body.amount * 100,

      currency:"INR",

      receipt:
        "receipt_" + Date.now()

    };


    const order =
      await razorpay.orders.create(options);



    return NextResponse.json({

      success:true,

      order

    });



  }
  catch(error:any){


    console.log(error);


    return NextResponse.json({

      success:false,

      message:error.message

    },
    {
      status:500
    });


  }

}