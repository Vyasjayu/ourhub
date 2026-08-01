"use client";

import { technologies } from "@/data/webDevelopment";

export default function TechStack(){

return(

<section className="px-4 mt-10">

<h2 className="text-2xl font-bold text-white">

Technology Stack

</h2>

<p className="text-gray-400 mt-2">

Modern technologies we use.

</p>

<div className="grid grid-cols-3 gap-3 mt-6">

{

technologies.map((tech)=>(

<div

key={tech}

className="rounded-2xl border border-yellow-500/20 bg-[#111C30] py-4 text-center"

>

<p className="font-semibold text-yellow-400">

{tech}

</p>

</div>

))

}

</div>

</section>

);

}