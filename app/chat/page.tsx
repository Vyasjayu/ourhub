import { Suspense } from "react";
import ChatClient from "./ChatClient";


export default function ChatPage(){

  return (

    <Suspense
      fallback={
        <div className="min-h-screen bg-[#020617] text-white flex items-center justify-center">
          Loading chat...
        </div>
      }
    >

      <ChatClient />

    </Suspense>

  );

}