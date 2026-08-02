import { NextResponse } from "next/server";

let otpStore: {
    [key: string]: string;
} = {};

export async function POST(req: Request) {

    try {

        const { mobile } = await req.json();

        if (!mobile) {
            return NextResponse.json({
                success: false,
                message: "Mobile number required"
            });
        }


        // Generate 6 digit OTP
        const otp = Math.floor(
            100000 + Math.random() * 900000
        ).toString();


        // Temporary store
        otpStore[mobile] = otp;


        console.log(
            `OTP for ${mobile}: ${otp}`
        );


        /*
          Yaha SMS API add hogi
          Example:
          MSG91 / Firebase / Twilio
        */


        return NextResponse.json({

            success: true,
            message: "OTP sent successfully"

        });


    } catch(error) {

        console.log(error);

        return NextResponse.json({

            success:false,
            message:"OTP sending failed"

        },{
            status:500
        });

    }
}