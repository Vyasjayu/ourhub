import { NextResponse } from "next/server";
import crypto from "crypto";

// import { connectDB } from "@/lib/mongodb";
import User from "@/models/User";
import { connectDB } from "@/lib/mongodb";


export async function POST(req: Request) {

  try {


    const body = await req.json();


    const {
      razorpay_order_id,
      razorpay_payment_id,
      razorpay_signature,
      amount,
      phone,
      name,
    } = body;



    // Required fields check

    if (
      !razorpay_order_id ||
      !razorpay_payment_id ||
      !razorpay_signature
    ) {

      return NextResponse.json(
        {
          success:false,
          message:"Payment details missing"
        },
        {
          status:400
        }
      );

    }



    // Signature Verify

    const signature = crypto
      .createHmac(
        "sha256",
        process.env.RAZORPAY_KEY_SECRET!
      )
      .update(
        razorpay_order_id +
        "|" +
        razorpay_payment_id
      )
      .digest("hex");



    if(signature !== razorpay_signature){

      return NextResponse.json(
        {
          success:false,
          message:"Invalid Razorpay signature"
        },
        {
          status:400
        }
      );

    }




    // Connect MongoDB

    await connectDB();



    const paymentAmount =
      Number(amount);



    if(!paymentAmount){

      return NextResponse.json(
        {
          success:false,
          message:"Invalid amount"
        },
        {
          status:400
        }
      );

    }



    // Find User

    let user = await User.findOne({
      phone
    });



    // New User

    if(!user){


      user = await User.create({

        name:
        name || "Customer",


        phone:
        phone || "unknown",


        walletBalance:
        paymentAmount,


        transactions:[

          {
            orderId:
            razorpay_order_id,


            paymentId:
            razorpay_payment_id,


            amount:
            paymentAmount,


            status:
            "success",

            createdAt:
            new Date()

          }

        ]

      });



    }

    else {



      // Safety for old users

      if(!user.transactions){

        user.transactions = [];

      }



      // Duplicate payment check

      const alreadyPaid =
      user.transactions.find(
        (txn:any)=>
        txn.paymentId === razorpay_payment_id
      );



      if(alreadyPaid){


        return NextResponse.json({

          success:true,

          message:
          "Payment already added",

          walletBalance:
          user.walletBalance

        });


      }



      // Update wallet


      user.walletBalance =
      (user.walletBalance || 0)
      + paymentAmount;



      user.transactions.push({

        orderId:
        razorpay_order_id,


        paymentId:
        razorpay_payment_id,


        amount:
        paymentAmount,


        status:
        "success",


        createdAt:
        new Date()

      });



      await user.save();


    }




    return NextResponse.json({

      success:true,

      message:
      "Payment verified successfully",


      walletBalance:
      user.walletBalance


    });



  }

  catch(error:any){


    console.log(
      "VERIFY PAYMENT ERROR:",
      error
    );


    return NextResponse.json(
      {

        success:false,

        message:
        error.message ||
        "Payment verification failed"

      },
      {
        status:500
      }
    );


  }

}