"use client";

const reviews = [

{
name:"Rahul Sharma",
review:"Amazing website quality. Very professional team.",
rating:"★★★★★"
},

{
name:"Neha Patel",
review:"OurHub delivered before deadline.",
rating:"★★★★★"
},

{
name:"Vikas Singh",
review:"Best UI & UX experience.",
rating:"★★★★★"
}

];

export default function Testimonials(){

return(

<section className="px-4 mt-10">

<h2 className="text-2xl font-bold text-white">

Happy Clients

</h2>

<div className="space-y-4 mt-6">

{

reviews.map((item,index)=>(

<div

key={index}

className="rounded-3xl bg-[#111C30] border border-yellow-500/20 p-5"

>

<p className="text-yellow-400">

{item.rating}

</p>

<p className="text-gray-300 mt-3">

"{item.review}"

</p>

<h3 className="mt-4 text-white font-semibold">

{item.name}

</h3>

</div>

))

}

</div>

</section>

);

}