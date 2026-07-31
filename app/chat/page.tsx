"use client";

import { useEffect, useRef, useState } from "react";
import { useSearchParams, useRouter } from "next/navigation";

import Image from "next/image";

import {
  ArrowLeft,
  Send,
  Phone,
  Video,
  MoreVertical,
  Clock
} from "lucide-react";

interface Message {

  id: number;

  sender: "user" | "pandit";

  text: string;

  time: string;

}

export default function ChatPage() {

  const router = useRouter();

  const params = useSearchParams();

  const panditId = params.get("panditId");

  const [pandit, setPandit] = useState<any>(null);

  const [loading, setLoading] = useState(true);

  const [message, setMessage] = useState("");

  const [seconds, setSeconds] = useState(60);

  const bottomRef = useRef<HTMLDivElement>(null);

  const [messages, setMessages] = useState<Message[]>([
    {
      id: 1,
      sender: "pandit",
      text:
        "🙏 Namaste. Welcome to OurHub Astrology. How may I help you today?",
      time: "Now",
    },
  ]);

  useEffect(() => {

    async function loadPandit() {

      try {

        const res = await fetch(
          `/api/pandits/${panditId}`
        );

        const data = await res.json();

        if (data.success) {

          setPandit(data.pandit);

        }

      } catch (err) {

        console.log(err);

      }

      setLoading(false);

    }

    if (panditId) {

      loadPandit();

    }

  }, [panditId]);

  useEffect(() => {

    const timer = setInterval(() => {

      setSeconds((prev) => {

        if (prev <= 1) {

          clearInterval(timer);

          alert("Consultation Ended");

          router.push("/religious/astrology");

          return 0;

        }

        return prev - 1;

      });

    }, 1000);

    return () => clearInterval(timer);

  }, []);

  useEffect(() => {

    bottomRef.current?.scrollIntoView({
      behavior: "smooth",
    });

  }, [messages]);

  const sendMessage = () => {

    if (!message.trim()) return;

    const userMsg: Message = {

      id: Date.now(),

      sender: "user",

      text: message,

      time: "Now",

    };

    setMessages((prev) => [...prev, userMsg]);

    setMessage("");

    setTimeout(() => {

      const reply: Message = {

        id: Date.now() + 1,

        sender: "pandit",

        text:
          "Thank you. Please tell me your Date of Birth, Time and Place of Birth.",

        time: "Now",

      };

      setMessages((prev) => [...prev, reply]);

    }, 1500);

  };

  const minutes = Math.floor(seconds / 60);

  const remainSeconds = seconds % 60;
    return (

    <div className="
h-[100dvh]
w-full
max-w-md
mx-auto
bg-[#020617]
flex
flex-col
overflow-hidden
">

      {/* Header */}

      <div
        className="
        sticky
        top-0
        z-20
        bg-[#08111D]
        border-b
        border-white/10
        px-4
        py-3
        flex
        items-center
        justify-between
        "
      >

        <div className="flex items-center gap-3">

          <button
            onClick={() => router.back()}
            className="
            h-10
            w-10
            rounded-full
            bg-white/10
            flex
            items-center
            justify-center
            "
          >

            <ArrowLeft size={20} className="text-white" />

          </button>

          {

            loading ?

              <div className="text-white">
                Loading...
              </div>

              :

              <>

                <Image
                  src={pandit?.image || "/astrologers/rahul.png"}
                  alt="Pandit"
                  width={46}
                  height={46}
                  className="rounded-full object-cover"
                />

                <div>

                  <h2 className="text-white font-bold">

                    {pandit?.name || "Pandit Ji"}

                  </h2>

                  <p className="text-green-400 text-xs">

                    ● Online

                  </p>

                </div>

              </>

          }

        </div>

        <div className="flex items-center gap-3">

          <Phone
            className="text-green-400"
            size={20}
          />

          <Video
            className="text-blue-400"
            size={20}
          />

          <MoreVertical
            className="text-white"
            size={20}
          />

        </div>

      </div>

      {/* Timer */}

      <div
        className="
        bg-yellow-400/10
        border-b
        border-yellow-400/20
        py-2
        flex
        items-center
        justify-center
        gap-2
        "
      >

        <Clock
          size={16}
          className="text-yellow-400"
        />

        <span className="text-yellow-400 font-bold">

          Consultation Time :

          {" "}

          {minutes}:

          {remainSeconds
            .toString()
            .padStart(2, "0")}

        </span>

      </div>

      {/* Messages */}

      <div
        className="
        flex-1
        overflow-y-auto
        px-4
        py-5
        space-y-4
        "
      >

        {

          messages.map((msg) => (

            <div
              key={msg.id}
              className={`flex ${
                msg.sender === "user"
                  ? "justify-end"
                  : "justify-start"
              }`}
            >

              <div
                className={`
                max-w-[80%]
                rounded-2xl
                px-4
                py-3

                ${
                  msg.sender === "user"

                    ?

                    "bg-yellow-400 text-black"

                    :

                    "bg-[#111C30] text-white"

                }
                `}
              >

                <p className="text-sm">

                  {msg.text}

                </p>

                <p
                  className="
                  mt-2
                  text-[10px]
                  opacity-70
                  "
                >

                  {msg.time}

                </p>

              </div>

            </div>

          ))

        }

        <div ref={bottomRef} />

      </div>
            {/* Message Input */}

      <div
        className="
        border-t
        border-white/10
        bg-[#08111D]
        p-4
        "
      >

        <div className="flex items-center gap-3">

          <input
            type="text"
            value={message}
            placeholder="Type your message..."
            onChange={(e) => setMessage(e.target.value)}
            onKeyDown={(e) => {

              if (e.key === "Enter") {

                sendMessage();

              }

            }}
            className="
            flex-1
            rounded-full
            bg-[#111C30]
            px-5
            py-3
            text-white
            outline-none
            border
            border-white/10
            "
          />

          <button
            onClick={sendMessage}
            className="
            h-12
            w-12
            rounded-full
            bg-yellow-400
            flex
            items-center
            justify-center
            transition
            hover:scale-105
            "
          >

            <Send
              size={20}
              className="text-black"
            />

          </button>

        </div>

      </div>

    </div>

  );

}