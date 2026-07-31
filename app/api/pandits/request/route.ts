import { NextResponse } from "next/server";
import { connectDB } from "@/lib/mongodb";
import Consultation from "@/models/Consultation";


export async function POST(req:Request){

try{

await connectDB();


const {panditId}=await req.json();


const requests = await Consultation.find({

panditId:panditId,

status:"requested"

});


return NextResponse.json({

success:true,

requests

});


}
catch(error:any){

return NextResponse.json({

success:false,

message:error.message

},
{
status:500
});

}

}