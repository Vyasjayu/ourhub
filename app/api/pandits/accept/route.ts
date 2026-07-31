import {NextResponse}
from "next/server";

import {connectDB}
from "@/lib/mongodb";

import Consultation
from "@/models/Consultation";



export async function POST(
req:Request
){


try{


await connectDB();



const {
consultationId

}=await req.json();



const session =
await Consultation.findByIdAndUpdate(

consultationId,


{

status:"active",

startTime:new Date()

},


{
new:true
}

);



return NextResponse.json({

success:true,

session

});



}catch(error){


return NextResponse.json({

success:false

},
{
status:500
});


}

}