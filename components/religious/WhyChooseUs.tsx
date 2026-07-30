"use client";

import {
  BadgeCheck,
  ShieldCheck,
  CalendarCheck,
  Headphones,
} from "lucide-react";


const features = [

  {
    id:1,
    title:"Verified Pandits",
    description:
    "Experienced and trusted Pandit Ji for authentic rituals.",
    icon:BadgeCheck,
  },


  {
    id:2,
    title:"Secure Payment",
    description:
    "Safe and secure payment experience with trusted gateways.",
    icon:ShieldCheck,
  },


  {
    id:3,
    title:"Easy Booking",
    description:
    "Book Pooja, Astrology and spiritual services in few clicks.",
    icon:CalendarCheck,
  },


  {
    id:4,
    title:"24/7 Support",
    description:
    "Our support team is always ready to help you.",
    icon:Headphones,
  },

];



export default function WhyChooseUs(){

return (

<section className="mt-6 px-3">


{/* Heading */}

<div className="mb-4">


<h2

className="
text-lg
font-bold
text-white
"

>

Why Choose OurHub?

</h2>


<p

className="
text-xs
text-gray-400
mt-1
"

>

Trusted platform for your spiritual needs

</p>


</div>





{/* Cards */}

<div

className="
grid
grid-cols-2
gap-3
"

>


{

features.map((item)=>(


<div

key={item.id}

className="
rounded-3xl
border
border-yellow-500/20
bg-white/5
backdrop-blur-xl
p-4
hover:border-yellow-400/50
transition
"

>


{/* Icon */}

<div

className="
w-11
h-11
rounded-full
bg-gradient-to-br
from-yellow-400
to-orange-500
flex
items-center
justify-center
shadow-lg
shadow-yellow-500/20
"

>

<item.icon

size={22}

className="
text-black
"

/>


</div>





{/* Text */}

<h3

className="
mt-3
text-sm
font-bold
text-white
"

>

{item.title}

</h3>




<p

className="
mt-2
text-[11px]
leading-relaxed
text-gray-400
"

>

{item.description}

</p>



</div>


))


}


</div>



</section>

);

}