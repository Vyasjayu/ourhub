"use client";

import { useState } from "react";

import {
  ChevronDown,
  HelpCircle,
} from "lucide-react";


const faqs = [

  {
    id:1,
    question:"How can I book a Pooja service?",
    answer:
    "You can select your desired Pooja, choose online or offline mode, select date and time, fill booking details and confirm your booking."
  },


  {
    id:2,
    question:"Can I book a Pandit Ji for home Pooja?",
    answer:
    "Yes, OurHub provides verified Pandit Ji services for home Pooja in available cities."
  },


  {
    id:3,
    question:"Do you provide online Pooja services?",
    answer:
    "Yes, you can book online Pooja where Pandit Ji performs rituals through video call."
  },


  {
    id:4,
    question:"How do I consult an astrologer?",
    answer:
    "Choose Astrology Consultation, select your preferred astrologer and book a convenient time slot."
  },


  {
    id:5,
    question:"Which cities are covered for offline Pooja?",
    answer:
    "Offline Pooja availability depends on your location. We are expanding services across multiple cities."
  },


  {
    id:6,
    question:"Is online payment secure?",
    answer:
    "Yes, payments are processed through secure payment gateways for safe transactions."
  },


];



export default function FAQ(){


const [open,setOpen] = useState<number | null>(null);



return (

<section className="mt-6 px-3">


{/* Heading */}

<div className="mb-4">


<div className="flex items-center gap-2">


<div

className="
w-9
h-9
rounded-full
bg-yellow-400
flex
items-center
justify-center
"

>

<HelpCircle

size={18}

className="text-black"

/>

</div>



<h2

className="
text-lg
font-bold
text-white
"

>

Frequently Asked Questions

</h2>


</div>



<p

className="
mt-2
text-xs
text-gray-400
"

>

Find answers about our spiritual services

</p>


</div>





{/* FAQ List */}

<div

className="
space-y-3
"

>


{

faqs.map((faq)=>(


<div

key={faq.id}

className="
rounded-2xl
border
border-yellow-500/20
bg-white/5
backdrop-blur-xl
overflow-hidden
"

>


<button

onClick={()=>setOpen(
open === faq.id ? null : faq.id
)}

className="
w-full
flex
items-center
justify-between
p-4
text-left
"

>


<span

className="
text-sm
font-semibold
text-white
"

>

{faq.question}

</span>



<ChevronDown

size={18}

className={`
text-yellow-400
transition-transform
${
open === faq.id
? "rotate-180"
:""
}
`}

/>


</button>





<div

className={`
transition-all
duration-300
overflow-hidden
${
open === faq.id
?
"max-h-40 opacity-100"
:
"max-h-0 opacity-0"
}
`}

>


<p

className="
px-4
pb-4
text-xs
leading-relaxed
text-gray-300
"

>

{faq.answer}

</p>


</div>



</div>


))

}


</div>



</section>

);

}