"use client";

import { useEffect, useState } from "react";
import { useSearchParams, useRouter } from "next/navigation";


export default function PaymentSuccessClient() {

  const router = useRouter();

  const searchParams = useSearchParams();


  const [loading, setLoading] = useState(true);

  const [message, setMessage] = useState(
    "Payment Successful"
  );


  useEffect(() => {

    async function createConsultation() {

      try {


        const paymentId =
          searchParams.get("paymentId");


        const panditId =
          searchParams.get("panditId");


        const amount =
          Number(searchParams.get("amount") || 0);


        const duration =
          Number(searchParams.get("duration") || 0);



        const userId =
          localStorage.getItem("userId");



        if (
          !paymentId ||
          !panditId ||
          !userId
        ) {

          setMessage(
            "Payment details missing"
          );

          setLoading(false);

          return;

        }



        const res = await fetch(
          "/api/consultation/create",
          {
            method:"POST",

            headers:{
              "Content-Type":"application/json"
            },

            body:JSON.stringify({

              userId,

              panditId,

              amount,

              duration,

              paymentId

            })

          }
        );



        const data = await res.json();



        if(data.success){


          setMessage(
            "Consultation Started"
          );



          setTimeout(()=>{


            router.push(
              `/chat?panditId=${panditId}`
            );


          },1000);



        }
        else{


          setMessage(
            data.message ||
            "Consultation failed"
          );


        }



      }
      catch(error){

        console.log(error);

        setMessage(
          "Something went wrong"
        );

      }


      finally{

        setLoading(false);

      }

    }



    createConsultation();


  },[]);



  return (

    <div
      className="
      min-h-screen
      bg-[#050B14]
      flex
      items-center
      justify-center
      "
    >

      <div
        className="
        bg-[#111C30]
        rounded-2xl
        p-8
        text-center
        mx-4
        "
      >

        <div
          className="
          text-5xl
          mb-4
          "
        >
          ✅
        </div>


        <h1
          className="
          text-white
          text-xl
          font-bold
          "
        >
          {message}
        </h1>


        {
          loading &&
          <p
            className="
            text-gray-400
            mt-3
            "
          >
            Creating consultation...
          </p>
        }


      </div>


    </div>

  );

}