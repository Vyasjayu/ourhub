import { notFound } from "next/navigation";

// import { webProjects } from "@/data/webProjects";

import Image from "next/image";
import { webProjects } from "@/data/webPortfolio";

export default async function ProjectPage({

  params,

}:{

  params:Promise<{

    slug:string

  }>

}){

const {slug}=await params;

const project=webProjects.find(

item=>item.slug===slug

);

if(!project){

return notFound();

}

return(

<main className="min-h-screen bg-[#050B14] flex justify-center">

<div className="w-full max-w-[430px]">

<Image

src={project.image}

alt={project.title}

width={430}

height={250}

className="w-full h-64 object-cover"

/>

<div className="p-5">

<div className="inline-flex rounded-full bg-yellow-400 text-black px-4 py-1 text-sm font-bold">

{project.category}

</div>

<h1 className="text-3xl text-white font-bold mt-4">

{project.title}

</h1>

<p className="text-yellow-400 text-2xl font-bold mt-3">

{project.price}

</p>

<p className="text-gray-400 mt-5 leading-7">

{project.description}

</p>

</div>

</div>

</main>

);

}