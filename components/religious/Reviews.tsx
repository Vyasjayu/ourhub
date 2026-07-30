"use client";

import Image from "next/image";
import Link from "next/link";

import {
  Star,
  Quote,
} from "lucide-react";



const reviews = [

  {
    id:1,
    name:"Rahul Sharma",
    image:"/images/users/user1.png",
    service:"Satyanarayan Pooja",
    rating:5,
    review:
    "OurHub se ghar par pooja booking ka experience bahut accha raha. Pandit ji bahut knowledgeable the.",
  },


  {
    id:2,
    name:"Priya Verma",
    image:"/images/users/user2.png",
    service:"Kundli Consultation",
    rating:5,
    review:
    "Astrologer ne meri kundli ka detailed analysis diya. Service fast aur trusted thi.",
  },


  {
    id:3,
    name:"Amit Patel",
    image:"/images/users/user3.png",
    service:"Vastu Consultation",
    rating:4,
    review:
    "Vastu guidance se ghar me positive changes feel hue. Highly recommended.",
  },


  {
    id:4,
    name:"Neha Singh",
    image:"/images/users/user4.png",
    service:"Ganesh Pooja",
    rating:5,
    review:
    "Online booking process bahut simple tha aur pooja ka arrangement perfect tha.",
  },


];



export default function Reviews(){


return (

<section className="mt-6 px-3">


{/* Heading */}

<div className="flex justify-between items-center mb-4">


<div>

<h2

className="
text-lg
font-bold
text-white
"

>
Devotee Reviews
</h2>


<p

className="
text-xs
text-gray-400
"

>
Trusted by thousands of devotees
</p>


</div>



<Link

href="/reviews"

className="
text-xs
text-yellow-400
font-medium
"

>

View All

</Link>


</div>





{/* Review Cards */}

<div

className="
flex
gap-4
overflow-x-auto
pb-2
scrollbar-hide
"

>


{
reviews.map((item)=>(


<div

key={item.id}

className="
min-w-[280px]
rounded-3xl
border
border-yellow-500/20
bg-white/5
backdrop-blur-xl
p-4
"

>


{/* Top */}

<div

className="
flex
items-center
justify-between
"

>


<div

className="
flex
items-center
gap-3
"

>

<div

className="
relative
w-12
h-12
rounded-full
overflow-hidden
border
border-yellow-400/30
"

>

<Image

src={item.image}

alt={item.name}

fill

className="
object-cover
"

/>


</div>




<div>


<h3

className="
text-sm
font-semibold
text-white
"

>

{item.name}

</h3>


<p

className="
text-[11px]
text-yellow-400
"

>

{item.service}

</p>


</div>


</div>





<Quote

size={28}

className="
text-yellow-400/50
"

/>


</div>





{/* Stars */}

<div

className="
flex
gap-1
mt-4
"

>

{

Array.from({length:item.rating}).map((_,index)=>(


<Star

key={index}

size={14}

fill="currentColor"

className="
text-yellow-400
"

/>


))

}


</div>





{/* Review */}

<p

className="
mt-3
text-xs
text-gray-300
leading-relaxed
"

>

"{item.review}"

</p>



</div>


))

}


</div>



</section>

);

}