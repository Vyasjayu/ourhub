"use client";

import Image from "next/image";
import Link from "next/link";

import {
  Star,
  Video,
  Phone,
  MessageCircle
} from "lucide-react";


export default function AstrologerCard({
  astrologer
}:any){


return (

<div
className="
rounded-3xl
border
border-yellow-500/20
bg-[#101C30]
p-4
shadow-xl
"
>


<div className="flex gap-4">


{/* Image */}

<div className="relative">


<Image
src={astrologer.image}
alt={astrologer.name}
width={80}
height={80}
className="
h-20
w-20
rounded-full
border-4
border-yellow-400
object-cover
"
/>


{astrologer.online && (

<span
className="
absolute
bottom-1
right-1
h-5
w-5
rounded-full
bg-green-500
ring-4
ring-[#101C30]
"
/>

)}


</div>



<div className="flex-1">


<h2 className="
text-lg
font-bold
text-white
">

{astrologer.name}

</h2>


<p className="
text-sm
text-gray-400
mt-1
">

Vedic Astrologer

</p>



<div className="
mt-2
flex
items-center
gap-2
">


<div className="
flex
items-center
rounded-full
bg-yellow-500/20
px-3
py-1
">


<Star
size={14}
fill="#FFD54F"
className="text-yellow-400"
/>


<span className="
ml-1
text-sm
text-white
">

{astrologer.rating}

</span>


</div>



<span className="
text-sm
text-gray-400
">

{astrologer.experience}+ Years

</span>


</div>


</div>


</div>





{/* Services */}

<div className="
mt-4
flex
gap-3
text-gray-300
">


<div className="
flex
items-center
gap-1
text-xs
">

<MessageCircle size={14}/>
Chat

</div>


<div className="
flex
items-center
gap-1
text-xs
">

<Phone size={14}/>
Call

</div>



<div className="
flex
items-center
gap-1
text-xs
">

<Video size={14}/>
Video

</div>


</div>





{/* Button */}

<Link

href={`/religious/astrology/${astrologer.slug}`}

className="
mt-4
block
rounded-xl
bg-gradient-to-r
from-yellow-500
to-yellow-300
py-3
text-center
font-bold
text-black
"

>

View Profile

</Link>



</div>

)

}