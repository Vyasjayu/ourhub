"use client";

import { features } from "@/data/webDevelopment";

export default function WhyChooseUs(){

return(

<section className="px-4 mt-10">

<h2 className="text-2xl font-bold text-white">

Why Choose OurHub?

</h2>

<p className="text-gray-400 mt-1">

We build modern premium digital experiences.

</p>

<div className="grid grid-cols-2 gap-4 mt-6">

{

features.map((item)=>(

<div

key={item.id}

className="rounded-3xl bg-[#111C30] border border-yellow-500/20 p-5"

>

<div className="text-4xl">

{item.icon}

</div>

<h3 className="mt-4 text-white font-semibold">

{item.title}

</h3>

<p className="mt-2 text-sm text-gray-400">

{item.description}

</p>

</div>

))

}

</div>

</section>

);

}