"use client";

import { useEffect, useRef, useState } from "react";
import { useSearchParams, useRouter } from "next/navigation";

// आपका पूरा ChatPage code यहां रहेगा

export default function ChatClient(){

  const router = useRouter();

  const params = useSearchParams();

  const panditId = params.get("panditId");

  return (
    <div>
      Chat
    </div>
  );
}