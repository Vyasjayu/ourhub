"use client";

import {useEffect,useState} from "react";


export default function PanditDashboard(){


const [requests,setRequests]=useState<any[]>([]);



useEffect(()=>{

loadRequests();

},[]);



async function loadRequests(){


const res =
await fetch(
"/api/pandit/requests",
{

method:"POST",

headers:{
"Content-Type":"application/json"
},

body:JSON.stringify({

panditId:"6a6b922182d22a9d780d6fb9"

})

}

);



const data =
await res.json();


setRequests(data.requests || []);

}



return (

<div className="p-10">

<h1 className="text-3xl font-bold">

Pandit Dashboard

</h1>


{
requests.map((item)=>(

<div
key={item._id}
className="mt-5 p-5 border rounded-xl"
>


<h2>
New Consultation Request
</h2>


<p>
Amount: ₹{item.amount}
</p>


<p>
Duration: {item.duration} min
</p>


<button className="bg-green-500 px-5 py-2 mt-3">

Accept

</button>


</div>

))
}


</div>

);

}