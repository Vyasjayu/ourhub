"use client";

export const dynamic = "force-dynamic";
import { useEffect } from "react";
import { Suspense } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import {
  Wallet,
  CheckCircle,
  ShieldCheck,
  ArrowLeft,
  Clock,
  IndianRupee,
} from "lucide-react";


 function PaymentContent() {


const router = useRouter();

const searchParams = useSearchParams();


const amount = searchParams.get("amount") || "0";

const minutes = searchParams.get("minutes") || "0";

useEffect(() => {
  const script = document.createElement("script");
  script.src = "https://checkout.razorpay.com/v1/checkout.js";
  script.async = true;
  document.body.appendChild(script);

  return () => {
    document.body.removeChild(script);
  };
}, []);

const handlePayment = async()=>{


try{


const res = await fetch(
"/api/payment/create-order",
{
method:"POST",
headers:{
"Content-Type":"application/json"
},
body:JSON.stringify({

amount:Number(amount)

})
}
);



const data = await res.json();



console.log("ORDER RESPONSE",data);



if(!data.success){

alert(
"Unable to create payment order"
);

return;

}




const options = {


key:
process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID,


amount:
data.order.amount,


currency:
"INR",


name:
"OurHub",


description:
"Wallet Recharge",


order_id:
data.order.id,



handler:
async function(response:any){



console.log(
"RAZORPAY SUCCESS",
response
);



const verifyResponse =
await fetch(

"/api/payment/verify",

{

method:"POST",

headers:{

"Content-Type":"application/json"

},

body:JSON.stringify({

razorpay_payment_id:
response.razorpay_payment_id,


razorpay_order_id:
response.razorpay_order_id,


razorpay_signature:
response.razorpay_signature,


amount:
Number(amount),



// temporary user data

phone:
"8878632431",


name:
"Jayant"


})

}

);



const result =
await verifyResponse.json();



console.log(
"VERIFY RESULT",
result
);



if(result.success){


router.push(
`/payment-success?balance=${result.walletBalance}`
);


}
else{


alert(
"Payment verification failed"
);


}


},




prefill:{


name:
"Jayant",


contact:
"8878632431"


},



theme:{


color:
"#FACC15"


}



};




if(!(window as any).Razorpay){

alert(
"Payment gateway loading..."
);

return;

}



const razorpay =
new (window as any).Razorpay(options);



razorpay.open();



}
catch(error){


console.log(
"PAYMENT ERROR",
error
);


alert(
"Unable to create payment order"
);


}



};




return (

<div
className="
min-h-screen
bg-[#020617]
flex
justify-center
"
>


{/* MOBILE CONTAINER */}

<div
className="
w-full
max-w-[430px]
min-h-screen
relative
bg-[#020617]
pb-28
"
>



{/* HEADER */}

<div
className="
sticky
top-0
z-20
flex
items-center
gap-3
px-4
py-4
bg-[#020617]
border-b
border-white/10
"
>


<button

onClick={()=>router.back()}

className="
rounded-full
bg-white/10
p-2
"

>

<ArrowLeft
size={20}
/>

</button>



<div>

<h1
className="
text-lg
font-bold
text-white
"
>
Complete Payment
</h1>


<p
className="
text-xs
text-gray-400
"
>
Secure Wallet Recharge
</p>


</div>


</div>







<div
className="
px-4
pt-5
space-y-5
"
>




{/* Amount */}


<div
className="
rounded-3xl
border
border-yellow-500/30
bg-gradient-to-br
from-yellow-500/20
to-[#111C30]
p-5
"
>


<div
className="
flex
items-center
gap-4
"
>


<div
className="
rounded-2xl
bg-yellow-400/20
p-3
"
>

<Wallet
className="text-yellow-400"
size={28}
/>

</div>



<div>

<p className="
text-sm
text-gray-400
">

Recharge Amount

</p>


<h2
className="
text-4xl
font-black
text-yellow-400
"
>
₹{amount}
</h2>


</div>


</div>


</div>







{/* Summary */}


<div
className="
rounded-3xl
bg-[#111C30]
border
border-white/10
p-5
"
>


<h2
className="
text-white
font-bold
mb-5
"
>
Consultation Details
</h2>




<div className="
space-y-4
"
>


<div
className="
flex
justify-between
"
>


<div className="
flex
gap-2
text-gray-400
"
>

<Clock size={18}/>

Duration

</div>


<span className="font-bold text-white">

{minutes} Minutes

</span>


</div>





<div
className="
flex
justify-between
"
>


<div className="
flex
gap-2
text-gray-400
"
>

<IndianRupee size={18}/>

Rate

</div>


<span className="font-bold text-white">

₹25/min

</span>


</div>




<div
className="
border-t
border-white/10
pt-4
flex
justify-between
"
>


<span className="font-bold text-white">

Total

</span>


<span
className="
font-black
text-xl
text-yellow-400
"
>

₹{amount}

</span>


</div>



</div>


</div>







{/* Benefits */}


<div
className="
rounded-3xl
bg-[#111C30]
border
border-white/10
p-5
"
>


<h2
className="
font-bold
mb-4
"
>
Benefits
</h2>


<div className="
space-y-4
"
>


<p className="
flex
gap-3
items-center
text-gray-300
text-sm
">

<CheckCircle
className="text-green-400"
/>

Wallet Balance Added

</p>



<p className="
flex
gap-3
items-center
text-gray-300
text-sm
">

<CheckCircle
className="text-green-400"
/>

Chat, Voice & Video

</p>



<p className="
flex
gap-3
items-center
text-gray-300
text-sm
">

<ShieldCheck
className="text-yellow-400"
/>

Secure Payment

</p>


</div>


</div>




</div>







{/* PAY BUTTON */}

<div
className="
fixed
bottom-0
left-0
right-0
flex
justify-center
z-30
"
>


<div
className="
w-full
max-w-[430px]
bg-[#020617]
border-t
border-white/10
p-4
"
>


<button

onClick={handlePayment}

className="
w-full
rounded-2xl
bg-yellow-400
py-4
text-lg
font-black
text-black
active:scale-95
transition
"
>

Pay ₹{amount}

</button>


</div>


</div>




</div>


</div>

);

}
export default function PaymentPage() {
  return (
    <Suspense
      fallback={
        <div className="min-h-screen flex items-center justify-center bg-[#020617] text-white">
          Loading Payment...
        </div>
      }
    >
      <PaymentContent />
    </Suspense>
  );
}