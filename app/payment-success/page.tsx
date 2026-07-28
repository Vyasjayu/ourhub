"use client";

import { CheckCircle, Wallet, ArrowRight } from "lucide-react";
import { useRouter } from "next/navigation";


export default function PaymentSuccessPage(){

const router = useRouter();


return (

<div className="
min-h-screen
bg-[#020617]
flex
justify-center
items-center
px-4
">


<div className="
w-full
max-w-md
rounded-3xl
bg-[#111C30]
border
border-yellow-500/20
p-8
text-center
">


<div className="
flex
justify-center
">

<CheckCircle
size={80}
className="text-green-400"
/>

</div>


<h1 className="
mt-5
text-3xl
font-black
text-white
">

Payment Successful 🎉

</h1>



<p className="
mt-3
text-gray-400
">

Your wallet recharge has been completed successfully.

</p>



<div className="
mt-6
rounded-2xl
bg-yellow-500/10
p-4
flex
items-center
justify-center
gap-3
">

<Wallet
className="text-yellow-400"
/>

<span className="text-yellow-400 font-bold">

₹1 Added to Wallet

</span>


</div>




<button

onClick={()=>router.push("/religious/astrology")}

className="
mt-8
w-full
rounded-2xl
bg-yellow-400
py-4
font-black
text-black
flex
justify-center
items-center
gap-2
"

>

Start Consultation

<ArrowRight size={20}/>

</button>



</div>


</div>

);


}
