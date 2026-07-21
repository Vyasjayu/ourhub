"use client";

import Link from "next/link";
import {
 Calendar,
 Clock,
 Video,
 Phone
} from "lucide-react";


export default function VastuBooking(){

return(

<main className="min-h-screen bg-[#071321] flex justify-center">


<div className="w-full max-w-[430px] text-white bg-[#071321] p-5">


<h1 className="text-2xl font-bold">
Book Vastu Consultation
</h1>


<p className="text-gray-400 mt-2">
Select your consultation type
</p>



<div className="bg-[#0d1b2a] rounded-3xl p-5 mt-6 border border-white/10">


<h2 className="font-bold text-lg">
Consultation Type
</h2>



<div className="grid grid-cols-2 gap-3 mt-4">


<button
className="h-14 rounded-xl border border-[#D4AF37] text-[#D4AF37] flex justify-center items-center gap-2"
>

<Phone size={18}/>

Call

</button>



<button
className="h-14 rounded-xl bg-[#D4AF37] text-[#071321] flex justify-center items-center gap-2 font-bold"
>

<Video size={18}/>

Video

</button>



</div>



</div>





<div className="bg-[#0d1b2a] rounded-3xl p-5 mt-5">


<h2 className="font-bold">

Select Date & Time

</h2>



<div className="mt-4 space-y-3">


<div className="h-12 bg-[#071321] rounded-xl flex items-center px-4 gap-3">

<Calendar size={18}/>

Choose Date

</div>



<div className="h-12 bg-[#071321] rounded-xl flex items-center px-4 gap-3">

<Clock size={18}/>

Choose Time

</div>


</div>



</div>






<Link

href="/religious/vastu-success"

className="block mt-6 h-12 rounded-xl bg-[#D4AF37] text-[#071321] flex items-center justify-center font-bold"

>

Continue Payment

</Link>



</div>


</main>

)

}