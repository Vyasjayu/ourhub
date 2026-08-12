"use client";

import {
  useEffect,
  useRef,
  useState,
} from "react";

import {
  useSearchParams,
  useRouter,
} from "next/navigation";

import {
  ArrowLeft,
  Send,
  MoreVertical,
  Phone,
  Video,
  Clock,
  CheckCheck,
  Loader2,
  User,
  Wifi,
  WifiOff,
} from "lucide-react";

interface ChatMessage {
  id: string;
  text: string;
  sender: "user" | "pandit";
  senderId: string;
  time: string;
}

interface Consultation {
  _id: string;

  userId: string;

  panditId: string;

  panditName?: string | null;

  panditPhone?: string | null;

  amount: number;

  duration: number;

  paymentId: string;

  status:
    | "requested"
    | "accepted"
    | "active"
    | "rejected"
    | "completed"
    | "cancelled";

  startTime?: string | null;

  endTime?: string | null;

  createdAt?: string;

  updatedAt?: string;
}

export default function ProviderChatPage() {
  const router = useRouter();

  const searchParams =
    useSearchParams();

  // =====================================================
  // URL PARAMS
  // =====================================================

  const consultationId =
    searchParams.get(
      "consultationId"
    );

  const panditId =
    searchParams.get(
      "panditId"
    );

  // =====================================================
  // STATE
  // =====================================================

  const [loading, setLoading] =
    useState(true);

  const [error, setError] =
    useState("");

  const [consultation, setConsultation] =
    useState<Consultation | null>(
      null
    );

  const [status, setStatus] =
    useState<string>("loading");

  const [messages, setMessages] =
    useState<ChatMessage[]>([]);

  const [message, setMessage] =
    useState("");

  const [sending, setSending] =
    useState(false);

  const [secondsLeft, setSecondsLeft] =
    useState(0);

  const [loadingMessages, setLoadingMessages] =
    useState(false);

  const messagesEndRef =
    useRef<HTMLDivElement | null>(
      null
    );

  // =====================================================
  // VALIDATE URL
  // =====================================================

  useEffect(() => {
    if (
      !consultationId ||
      !panditId
    ) {
      setError(
        "Consultation ID or Pandit ID is missing."
      );

      setStatus("invalid");

      setLoading(false);
    }
  }, [
    consultationId,
    panditId,
  ]);

  // =====================================================
  // LOAD CONSULTATION
  // =====================================================

  useEffect(() => {
    if (
      !consultationId ||
      !panditId
    ) {
      return;
    }

    const currentConsultationId =
      consultationId;

    const currentPanditId =
      panditId;

    let cancelled = false;

    async function loadConsultation() {
      try {
        const res =
          await fetch(
            `/api/consultation/status?consultationId=${encodeURIComponent(
              currentConsultationId
            )}&panditId=${encodeURIComponent(
              currentPanditId
            )}`,
            {
              method: "GET",
              credentials: "include",
              cache: "no-store",
            }
          );

        const data =
          await res.json();

        console.log(
          "PANDIT CONSULTATION STATUS:",
          data
        );

        if (cancelled) {
          return;
        }

        if (
          !res.ok ||
          !data.success
        ) {
          setError(
            data.message ||
              "Consultation not found."
          );

          setStatus(
            "not_found"
          );

          setLoading(false);

          return;
        }

        const consultationData =
          data.consultation;

        if (
          !consultationData
        ) {
          setError(
            "Consultation details not found."
          );

          setStatus(
            "not_found"
          );

          setLoading(false);

          return;
        }

        setConsultation(
          consultationData
        );

        setStatus(
          consultationData.status
        );

        // =================================================
        // TIMER
        // =================================================

        if (
          consultationData.startTime &&
          (
            consultationData.status ===
              "active" ||
            consultationData.status ===
              "accepted"
          )
        ) {
          const start =
            new Date(
              consultationData.startTime
            ).getTime();

          const durationMs =
            Number(
              consultationData.duration
            ) *
            60 *
            1000;

          const end =
            start + durationMs;

          const remaining =
            Math.max(
              0,
              Math.floor(
                (end -
                  Date.now()) /
                  1000
              )
            );

          setSecondsLeft(
            remaining
          );
        }

        setLoading(false);
      } catch (err) {
        console.error(
          "Pandit consultation status error:",
          err
        );

        if (!cancelled) {
          setError(
            "Unable to load consultation."
          );

          setStatus("error");

          setLoading(false);
        }
      }
    }

    loadConsultation();

    const interval =
      setInterval(
        loadConsultation,
        5000
      );

    return () => {
      cancelled = true;

      clearInterval(
        interval
      );
    };
  }, [
    consultationId,
    panditId,
  ]);

  // =====================================================
  // LOAD CHAT MESSAGES
  // =====================================================

  useEffect(() => {
    if (!consultationId) {
      return;
    }

    const currentConsultationId =
      consultationId;

    let cancelled = false;

    async function loadMessages() {
      try {
        setLoadingMessages(
          true
        );

        const res =
          await fetch(
            `/api/chat/messages?consultationId=${encodeURIComponent(
              currentConsultationId
            )}`,
            {
              method: "GET",
              credentials: "include",
              cache: "no-store",
            }
          );

        const data =
          await res.json();

        console.log(
          "PANDIT CHAT MESSAGES:",
          data
        );

        if (cancelled) {
          return;
        }

        if (
          res.ok &&
          data.success &&
          Array.isArray(
            data.messages
          )
        ) {
          setMessages(
            data.messages
          );
        }
      } catch (err) {
        console.error(
          "Load messages error:",
          err
        );
      } finally {
        if (!cancelled) {
          setLoadingMessages(
            false
          );
        }
      }
    }

    loadMessages();

    const interval =
      setInterval(
        loadMessages,
        2000
      );

    return () => {
      cancelled = true;

      clearInterval(
        interval
      );
    };
  }, [
    consultationId,
  ]);

  // =====================================================
  // TIMER
  // =====================================================

  useEffect(() => {
    if (
      status !== "active" &&
      status !== "accepted"
    ) {
      return;
    }

    if (secondsLeft <= 0) {
      return;
    }

    const timer =
      setInterval(() => {
        setSecondsLeft(
          (previous) =>
            Math.max(
              0,
              previous - 1
            )
        );
      }, 1000);

    return () => {
      clearInterval(
        timer
      );
    };
  }, [
    status,
    secondsLeft,
  ]);

  // =====================================================
  // AUTO SCROLL
  // =====================================================

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView(
      {
        behavior: "smooth",
      }
    );
  }, [
    messages,
  ]);

  // =====================================================
  // FORMAT TIME
  // =====================================================

  function formatTime(
    totalSeconds: number
  ) {
    const minutes =
      Math.floor(
        totalSeconds / 60
      );

    const seconds =
      totalSeconds % 60;

    return `${String(
      minutes
    ).padStart(
      2,
      "0"
    )}:${String(
      seconds
    ).padStart(
      2,
      "0"
    )}`;
  }

  // =====================================================
  // SEND MESSAGE
  // =====================================================

  async function handleSendMessage() {
    const text =
      message.trim();

    if (!text) {
      return;
    }

    if (!consultationId) {
      setError(
        "Consultation ID is missing."
      );

      return;
    }

    if (!panditId) {
      setError(
        "Pandit ID is missing."
      );

      return;
    }

    if (
      status !== "active" &&
      status !== "accepted"
    ) {
      setError(
        "Consultation is not active."
      );

      return;
    }

    if (sending) {
      return;
    }

    setSending(true);

    setError("");

    try {
      console.log(
        "📤 Sending Pandit Message:",
        {
          consultationId,
          senderId: panditId,
          senderType: "pandit",
          text,
        }
      );

      const res =
        await fetch(
          "/api/chat/messages",
          {
            method: "POST",

            headers: {
              "Content-Type":
                "application/json",
            },

            credentials:
              "include",

            body: JSON.stringify({
              consultationId:
                consultationId,

              senderId:
                panditId,

              senderType:
                "pandit",

              text,
            }),
          }
        );

      const data =
        await res.json();

      console.log(
        "📥 SEND PANDIT MESSAGE RESPONSE:",
        data
      );

      if (
        !res.ok ||
        !data.success
      ) {
        throw new Error(
          data.message ||
            "Unable to send message."
        );
      }

      if (
        data.message
      ) {
        setMessages(
          (previous) => {
            const exists =
              previous.some(
                (item) =>
                  item.id ===
                  data.message.id
              );

            if (exists) {
              return previous;
            }

            return [
              ...previous,
              data.message,
            ];
          }
        );
      }

      setMessage("");
    } catch (err: any) {
      console.error(
        "❌ Send Pandit message error:",
        err
      );

      setError(
        err?.message ||
          "Unable to send message."
      );
    } finally {
      setSending(false);
    }
  }

  // =====================================================
  // ENTER
  // =====================================================

  function handleKeyDown(
    e: React.KeyboardEvent<HTMLInputElement>
  ) {
    if (
      e.key === "Enter" &&
      !e.shiftKey
    ) {
      e.preventDefault();

      handleSendMessage();
    }
  }

  // =====================================================
  // BACK
  // =====================================================

  function handleBack() {
    router.push(
      "/provider/dashboard"
    );
  }

  // =====================================================
  // LOADING
  // =====================================================

  if (loading) {
    return (
      <main className="min-h-screen bg-[#050B14] text-white flex items-center justify-center">
        <div className="text-center px-6">
          <Loader2
            size={42}
            className="mx-auto animate-spin text-yellow-400"
          />

          <h2 className="mt-5 text-lg font-semibold">
            Opening consultation...
          </h2>

          <p className="mt-2 text-sm text-gray-400">
            Please wait while we connect you.
          </p>
        </div>
      </main>
    );
  }

  // =====================================================
  // ERROR
  // =====================================================

  if (
    status === "invalid" ||
    status === "error" ||
    status === "not_found"
  ) {
    return (
      <main className="min-h-screen bg-[#050B14] text-white flex items-center justify-center px-5">
        <div className="w-full max-w-md rounded-3xl bg-[#111C30] p-7 text-center">
          <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-red-500/10 text-3xl">
            ⚠️
          </div>

          <h1 className="mt-5 text-xl font-bold">
            Consultation Not Found
          </h1>

          <p className="mt-3 text-sm text-gray-400">
            {error ||
              "We could not find this consultation."}
          </p>

          <button
            onClick={() =>
              router.push(
                "/provider/dashboard"
              )
            }
            className="mt-6 w-full rounded-2xl bg-yellow-400 py-4 font-bold text-black"
          >
            Back to Dashboard
          </button>
        </div>
      </main>
    );
  }

  // =====================================================
  // MAIN DATA
  // =====================================================

  const isActive =
    status === "active" ||
    status === "accepted";

  // =====================================================
  // MAIN UI
  // =====================================================

  return (
    <main className="min-h-screen bg-[#050B14] text-white">
      <div className="mx-auto flex min-h-screen w-full max-w-md flex-col bg-[#081321]">

        {/* HEADER */}

        <header className="sticky top-0 z-30 border-b border-white/10 bg-[#0D1B2D]/95 px-4 py-3 backdrop-blur">
          <div className="flex items-center gap-3">

            <button
              onClick={handleBack}
              className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-white/10"
            >
              <ArrowLeft
                size={21}
              />
            </button>

            <div className="relative">
              <div className="flex h-11 w-11 items-center justify-center rounded-full bg-gradient-to-br from-yellow-400 to-orange-500 text-black">
                <User
                  size={23}
                />
              </div>

              {isActive && (
                <span className="absolute bottom-0 right-0 h-3 w-3 rounded-full border-2 border-[#0D1B2D] bg-green-500" />
              )}
            </div>

            <div className="min-w-0 flex-1">
              <h1 className="truncate font-bold">
                Customer
              </h1>

              <div className="flex items-center gap-1 text-xs">
                {isActive ? (
                  <>
                    <span className="h-1.5 w-1.5 rounded-full bg-green-400" />

                    <span className="text-green-400">
                      Online
                    </span>
                  </>
                ) : (
                  <span className="text-gray-400">
                    Waiting...
                  </span>
                )}
              </div>
            </div>

            <button
              disabled={!isActive}
              className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 disabled:opacity-30"
            >
              <Phone
                size={18}
              />
            </button>

            <button
              disabled={!isActive}
              className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 disabled:opacity-30"
            >
              <Video
                size={18}
              />
            </button>

            <button className="flex h-10 w-8 items-center justify-center text-gray-400">
              <MoreVertical
                size={20}
              />
            </button>
          </div>
        </header>

        {/* STATUS */}

        <div className="px-4 pt-4">

          {status ===
            "requested" && (
            <div className="rounded-2xl border border-yellow-400/20 bg-yellow-400/10 p-4">
              <div className="flex items-center gap-3">
                <Clock
                  size={22}
                  className="text-yellow-400"
                />

                <div>
                  <p className="font-semibold text-yellow-300">
                    Waiting for connection
                  </p>

                  <p className="mt-1 text-xs text-gray-400">
                    Consultation is waiting.
                  </p>
                </div>
              </div>
            </div>
          )}

          {isActive && (
            <div className="rounded-2xl border border-green-400/20 bg-green-400/10 p-4">
              <div className="flex items-center justify-between">

                <div className="flex items-center gap-3">
                  <Wifi
                    size={21}
                    className="text-green-400"
                  />

                  <div>
                    <p className="font-semibold text-green-300">
                      Consultation Active
                    </p>

                    <p className="text-xs text-gray-400">
                      You are connected with the customer
                    </p>
                  </div>
                </div>

                <div className="rounded-xl bg-green-400/20 px-3 py-2 text-center">
                  <p className="text-xs text-green-300">
                    Time Left
                  </p>

                  <p className="font-bold text-green-400">
                    {formatTime(
                      secondsLeft
                    )}
                  </p>
                </div>
              </div>
            </div>
          )}

          {status ===
            "completed" && (
            <div className="rounded-2xl border border-blue-400/20 bg-blue-400/10 p-4">
              <div className="flex items-center gap-3">
                <CheckCheck
                  size={22}
                  className="text-blue-400"
                />

                <div>
                  <p className="font-semibold text-blue-300">
                    Consultation Completed
                  </p>

                  <p className="text-xs text-gray-400">
                    This consultation has ended.
                  </p>
                </div>
              </div>
            </div>
          )}

          {status ===
            "cancelled" && (
            <div className="rounded-2xl border border-red-400/20 bg-red-400/10 p-4">
              <div className="flex items-center gap-3">
                <WifiOff
                  size={22}
                  className="text-red-400"
                />

                <div>
                  <p className="font-semibold text-red-300">
                    Consultation Cancelled
                  </p>

                  <p className="text-xs text-gray-400">
                    This consultation is no longer active.
                  </p>
                </div>
              </div>
            </div>
          )}

        </div>

        {/* ERROR */}

        {error && (
          <div className="px-4 pt-3">
            <div className="rounded-xl border border-red-400/20 bg-red-400/10 px-4 py-3 text-sm text-red-300">
              {error}
            </div>
          </div>
        )}

        {/* CHAT */}

        <section className="flex-1 overflow-y-auto px-4 py-5">

          <div className="mb-5 text-center">
            <span className="rounded-full bg-white/5 px-4 py-2 text-xs text-gray-400">
              Today
            </span>
          </div>

          <div className="mb-6 text-center">

            <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-yellow-400/10 text-yellow-400">
              <User
                size={27}
              />
            </div>

            <h2 className="mt-3 font-semibold">
              Customer
            </h2>

            <p className="mt-1 text-xs text-gray-500">
              Consultation customer
            </p>
          </div>

          {messages.length ===
            0 && (
            <div className="mb-5 flex justify-center">
              <div className="max-w-[85%] rounded-2xl bg-white/5 px-4 py-3 text-center text-xs leading-5 text-gray-400">
                🙏 Welcome to OurHub consultation.
                <br />
                Customer ke messages yahan automatically appear honge.
              </div>
            </div>
          )}

          {loadingMessages &&
            messages.length ===
              0 && (
              <div className="mb-4 flex justify-center">
                <div className="flex items-center gap-2 text-xs text-gray-500">
                  <Loader2
                    size={14}
                    className="animate-spin"
                  />

                  Loading messages...
                </div>
              </div>
            )}

          {messages.map(
            (item) => (
              <div
                key={item.id}
                className={`mb-3 flex ${
                  item.sender ===
                  "pandit"
                    ? "justify-end"
                    : "justify-start"
                }`}
              >
                <div
                  className={`max-w-[80%] rounded-2xl px-4 py-3 ${
                    item.sender ===
                    "pandit"
                      ? "rounded-br-md bg-yellow-400 text-black"
                      : "rounded-bl-md bg-[#17263A] text-white"
                  }`}
                >
                  <p className="break-words text-sm leading-5">
                    {item.text}
                  </p>

                  <div
                    className={`mt-1 flex items-center justify-end gap-1 text-[10px] ${
                      item.sender ===
                      "pandit"
                        ? "text-black/60"
                        : "text-gray-500"
                    }`}
                  >
                    <span>
                      {item.time}
                    </span>

                    {item.sender ===
                      "pandit" && (
                      <CheckCheck
                        size={13}
                      />
                    )}
                  </div>
                </div>
              </div>
            )
          )}

          <div
            ref={
              messagesEndRef
            }
          />
        </section>

        {/* INPUT */}

        <div className="sticky bottom-0 border-t border-white/10 bg-[#0D1B2D] p-3">

          {isActive ? (
            <div className="flex items-end gap-2">

              <input
                type="text"
                value={message}
                onChange={(e) =>
                  setMessage(
                    e.target.value
                  )
                }
                onKeyDown={
                  handleKeyDown
                }
                placeholder="Reply to customer..."
                disabled={sending}
                className="min-w-0 flex-1 rounded-2xl border border-white/10 bg-[#17263A] px-4 py-3 text-sm text-white outline-none placeholder:text-gray-500 focus:border-yellow-400"
              />

              <button
                onClick={
                  handleSendMessage
                }
                disabled={
                  !message.trim() ||
                  sending
                }
                className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-yellow-400 text-black transition disabled:cursor-not-allowed disabled:opacity-40"
              >
                {sending ? (
                  <Loader2
                    size={20}
                    className="animate-spin"
                  />
                ) : (
                  <Send
                    size={19}
                  />
                )}
              </button>
            </div>
          ) : (
            <div className="rounded-2xl bg-white/5 px-4 py-3 text-center text-sm text-gray-500">
              Waiting for consultation to become active...
            </div>
          )}
        </div>

        {/* INFO */}

        {consultation && (
          <div className="border-t border-white/5 bg-[#081321] px-4 py-2">
            <div className="flex items-center justify-between text-[10px] text-gray-600">

              <span>
                Consultation ID:{" "}
                {consultation._id.slice(
                  -8
                )}
              </span>

              <span>
                ₹
                {
                  consultation.amount
                }
              </span>

            </div>
          </div>
        )}

      </div>
    </main>
  );
}