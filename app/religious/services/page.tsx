"use client";

import Link from "next/link";
import {
  Sparkles,
  UserRound,
  Home,
  Flower2,
  Hand,
  ChevronRight
} from "lucide-react";



const services=[

{
title:"Pandit Booking",
desc:"Book experienced Pandits for Puja & Rituals",
icon:<Flower2 size={30}/>,
link:"/religious/pandit-booking",
},

{
title:"Jyotish Consultation",
desc:"Talk with verified Astrologers",
icon:<Sparkles size={30}/>,
link:"/religious/jyotish",
},


{
title:"Vastu Consultation",
desc:"Get Home & Office Vastu Solutions",
icon:<Home size={30}/>,
link:"/religious/vastu",
},


{
title:"Numerology",
desc:"Know your future with numbers",
icon:<Hand size={30}/>,
link:"/religious/numerology",
},


];




export default function ReligiousServices(){


return(


<main className="min-h-screen bg-[#071321] flex justify-center">


<div className="w-full max-w-[430px] text-white pb-20">





{/* Header */}

<div className="bg-gradient-to-b from-[#0d1b2a] to-[#071321] p-5 rounded-b-3xl">


<p className="text-[#D4AF37] text-sm">

🙏 Trusted Religious Services

</p>



<h1 className="text-3xl font-bold mt-2">

Choose Your

<span className="text-[#D4AF37]">
 Spiritual Service
</span>

</h1>



<p className="text-gray-400 mt-3">

Book verified Pandits, Jyotish and Vastu Experts in just a few clicks.

</p>


</div>







{/* Services */}


<div className="px-4 mt-6 space-y-4">



{
services.map((item,index)=>(


<Link

href={item.link}

key={index}

className="block bg-[#0d1b2a] border border-white/10 rounded-3xl p-5 active:scale-95 transition"


>


<div className="flex items-center gap-4">


<div className="w-16 h-16 rounded-2xl bg-[#D4AF37] text-[#071321] flex items-center justify-center">

{item.icon}

</div>




<div className="flex-1">


<h2 className="font-bold text-lg">

{item.title}

</h2>



<p className="text-gray-400 text-sm mt-1">

{item.desc}

</p>


</div>




<ChevronRight
className="text-[#D4AF37]"
/>



</div>


</Link>


))

}



</div>







{/* Bottom Banner */}


<div className="mx-4 mt-8 bg-[#D4AF37] rounded-3xl p-5 text-[#071321]">


<h2 className="font-bold text-xl">

✨ Need Spiritual Guidance?

</h2>


<p className="text-sm mt-2">

Connect with trusted experts and get personalized solutions.

</p>



<button className="mt-4 bg-[#071321] text-white px-5 py-2 rounded-xl font-semibold">

Start Consultation

</button>


</div>




</div>


</main>


)

}