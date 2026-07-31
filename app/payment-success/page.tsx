import { Suspense } from "react";
import PaymentSuccessClient from "./PaymentSuccessClient";
// import PaymentSuccessClient from "./PaymentSuccessClient";


export default function Page(){

  return (

    <Suspense
      fallback={
        <div className="min-h-screen bg-[#050B14] text-white flex items-center justify-center">
          Loading...
        </div>
      }
    >

      <PaymentSuccessClient />

    </Suspense>

  );

}