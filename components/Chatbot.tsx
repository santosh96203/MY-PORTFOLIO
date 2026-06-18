"use client";

import { useState } from "react";
import ReactMarkdown from "react-markdown";
import Image from "next/image";

export default function Chatbot() {
  const [open, setOpen] = useState(false);
  const [message, setMessage] = useState("");
  const [reply, setReply] = useState("");
  const [loading, setLoading] = useState(false);

  const sendMessage = async () => {
    if (!message.trim()) return;

    try {
      setLoading(true);

      const res = await fetch("/api/chat", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          message,
        }),
      });

      const data = await res.json();

      setReply(data.response);
      setMessage("");
    } catch (error) {
      console.error(error);
      setReply("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      {/* Floating AI Avatar */}
      <button
        onClick={() => setOpen(!open)}
        className="fixed bottom-6 right-6 z-50 group"
      >
        <Image
          src="/images/ai-avatar.jpg"
          alt="Santosh AI"
          width={75}
          height={75}
          className="
            rounded-full
            border-2
            border-blue-500
            shadow-[0_0_30px_rgba(59,130,246,0.9)]
            transition-all
            duration-300
            group-hover:scale-110
          "
        />
      </button>

      {/* Chat Window */}
      {open && (
        <div
          className="
            fixed
            bottom-28
            right-6
            w-[420px]
            max-w-[90vw]
            rounded-3xl
            border
            border-blue-500/30
            bg-slate-900/80
            backdrop-blur-xl
            shadow-[0_0_40px_rgba(59,130,246,0.25)]
            p-5
            z-50
          "
        >
          {/* Header */}
          <div className="flex items-center gap-3 mb-4">
            <Image
              src="/images/ai-avatar.jpg"
              alt="AI"
              width={45}
              height={45}
              className="rounded-full"
            />

            <div>
              <h3 className="font-bold text-white">
                Santosh AI
              </h3>

              <p className="text-xs text-green-400">
                ● Online
              </p>
            </div>
          </div>

          {/* Input */}
          <div className="mb-4 text-sm text-gray-300">
            Ask Santosh AI about:

            <ul className="mt-2 space-y-1">
              <li>🎓 Education & CGPA</li>
              <li>💼 Projects</li>
              <li>🧠 Skills</li>
              <li>📄 Research Papers</li>
              <li>📜 Certifications</li>
            </ul>
          </div>

          <input
            type="text"
            placeholder="Ask me anything..."
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter" && message.trim()) {
                sendMessage();
              }
            }}
            className="w-full p-3 rounded-lg bg-white text-black border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />

          {/* Button */}
          <button
            onClick={sendMessage}
            disabled={loading}
            className="
              mt-3
              w-full
              bg-blue-600
              hover:bg-blue-700
              transition
              px-4
              py-3
              rounded-xl
              text-white
              font-semibold
            "
          >
            {loading ? "Thinking..." : "Send"}
          </button>

          {/* Response */}
          {(loading || reply) && (
            <div
              className="
                mt-4
                bg-slate-800/70
                border
                border-slate-700
                rounded-2xl
                p-4
                text-white
                max-h-96
                overflow-y-auto
              "
            >
              {loading ? (
                <div className="flex gap-2 text-blue-400">
                  <span className="animate-bounce">●</span>
                  <span
                    className="animate-bounce"
                    style={{ animationDelay: "0.2s" }}
                  >
                    ●
                  </span>
                  <span
                    className="animate-bounce"
                    style={{ animationDelay: "0.4s" }}
                  >
                    ●
                  </span>
                </div>
              ) : (
                <ReactMarkdown>
                  {reply}
                </ReactMarkdown>
              )}
            </div>
          )}
        </div>
      )}
    </>
  );
}