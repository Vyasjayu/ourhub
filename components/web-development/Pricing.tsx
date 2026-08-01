"use client";

const plans=[

{
name:"Starter",
price:"₹9,999",
features:[
"5 Pages",
"Responsive",
"SEO",
"1 Month Support"
]
},

{
name:"Professional",
price:"₹24,999",
features:[
"15 Pages",
"Admin Panel",
"SEO",
"6 Month Support"
]
},

{
name:"Enterprise",
price:"Custom",
features:[
"Unlimited",
"Dashboard",
"API",
"Priority Support"
]
}

];

export default function Pricing(){

return(

<section className="px-4 mt-10">

<h2 className="text-2xl font-bold text-white">

Pricing Plans

</h2>

<div className="space-y-5 mt-6">

{

plans.map((plan)=>(

<div

key={plan.name}

className="rounded-3xl border border-yellow-500/20 bg-[#111C30] p-6"

>

<h3 className="text-xl font-bold text-white">

{plan.name}

</h3>

<p className="text-3xl font-bold text-yellow-400 mt-3">

{plan.price}

</p>

<ul className="mt-5 space-y-2">

{

plan.features.map((item)=>(

<li
key={item}
className="text-gray-300"
>

✔ {item}

</li>

))

}

</ul>

<button

className="mt-6 w-full rounded-full bg-yellow-400 py-3 font-semibold text-black"

>

Choose Plan

</button>

</div>

))

}

</div>

</section>

);

}