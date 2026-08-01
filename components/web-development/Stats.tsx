"use client";

export default function Stats(){

const stats=[

{
number:"250+",
label:"Projects"
},

{
number:"150+",
label:"Clients"
},

{
number:"99%",
label:"Success"
},

{
number:"24/7",
label:"Support"
}

];

return(

<section className="px-4 mt-10">

<div className="rounded-3xl bg-[#111C30] border border-yellow-500/20 p-6">

<div className="grid grid-cols-2 gap-6">

{

stats.map((item)=>(

<div key={item.label}>

<h2 className="text-3xl font-bold text-yellow-400">

{item.number}

</h2>

<p className="text-gray-300 mt-2">

{item.label}

</p>

</div>

))

}

</div>

</div>

</section>

);

}