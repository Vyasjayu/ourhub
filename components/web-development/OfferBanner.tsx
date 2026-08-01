"use client";

import { ArrowRight } from "lucide-react";

export default function OfferBanner(){

return(

<section className="px-4 mt-8">

<div
className="
relative
overflow-hidden
rounded-3xl
bg-gradient-to-r
from-yellow-400
to-orange-500
p-6
"
>

<div
className="
absolute
-right-10
-top-10
h-40
w-40
rounded-full
bg-white/10
"
/>

<p
className="
text-black/70
font-semibold
"
>

LIMITED OFFER

</p>

<h2
className="
mt-2
text-3xl
font-bold
text-black
"
>

20% OFF

</h2>

<p
className="
mt-2
text-black/80
"
>

Get your dream website today.

</p>

<button
className="
mt-5
flex
items-center
gap-2
rounded-full
bg-black
px-5
py-3
font-semibold
text-white
"
>

Claim Offer

<ArrowRight size={18}/>

</button>

</div>

</section>

);
}