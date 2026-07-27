"use client";

import AstrologerCard from "@/components/astrology/AstrologerCard";
import Hero from "@/components/astrology/Hero";

import { astrologers } from "@/data/astrologers";


export default function JyotishPage() {


return (

<main
className="
min-h-screen
bg-[#020617]
flex
justify-center
"
>


{/* Mobile App Width */}

<div
className="
w-full
max-w-[430px]
min-h-screen
overflow-hidden
bg-[#050B14]
shadow-2xl
"
>


<Hero />



<section
className="
px-4
pb-28
"
>



<div
className="
mt-6
"
>


<h1
className="
text-2xl
font-black
text-white
"
>

Expert Jyotish
Consultation

</h1>



<p
className="
mt-2
text-sm
leading-6
text-gray-400
"
>

Talk to verified astrologers for
Kundli, Career, Marriage,
Love and Life guidance.

</p>


</div>







<div
className="
mt-6
space-y-5
"
>


{
astrologers.map((astrologer)=>(

<AstrologerCard

key={astrologer.id}

astrologer={astrologer}

/>

))
}



</div>





</section>


</div>


</main>

)

}