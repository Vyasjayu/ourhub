import { NextResponse } from "next/server";

let otpStore: {
    [key: string]: string;
} = {};


export async function POST(req: Request) {

    try {

        const { mobile, otp } = await req.json();


        if(!mobile || !otp){

            return NextResponse.json({
                success:false,
                message:"Mobile and OTP required"
            });

        }


        const savedOtp = otpStore[mobile];


        if(savedOtp === otp){


            delete otpStore[mobile];


            return NextResponse.json({

                success:true,
                message:"OTP verified"

            });


        }


        return NextResponse.json({

            success:false,
            message:"Invalid OTP"

        });


    } catch(error){

        console.log(error);


        return NextResponse.json({

            success:false,
            message:"Verification failed"

        },{
            status:500
        });

    }
}