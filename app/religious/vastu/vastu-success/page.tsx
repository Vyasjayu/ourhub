"use client";


import Link from "next/link";


export default function Success(){


return(

<main className="min-h-screen bg-[#071321] flex justify-center">


<div className="w-full max-w-[430px] text-white flex flex-col items-center justify-center p-5">


<div className="w-24 h-24 rounded-full bg-[#D4AF37] flex items-center justify-center text-5xl">

✓

</div>



<h1 className="text-3xl font-bold mt-6">

Booking Confirmed

</h1>



<p className="text-gray-400 text-center mt-3">

Your Vastu consultation has been booked successfully.

</p>




<Link

href="/religious/vastu"

className="mt-8 bg-[#D4AF37] text-[#071321] px-8 py-3 rounded-xl font-bold"

>

Back To Experts

</Link>



</div>


</main>

)


}