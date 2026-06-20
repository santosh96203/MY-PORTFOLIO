"use client";

import { useState, useEffect, useRef } from "react";
import ReactMarkdown from "react-markdown";
import Image from "next/image";

export default function Chatbot() {
 const [open, setOpen] = useState(false);

useEffect(() => {
  const saved =
    localStorage.getItem("vssr-open");

  if (saved) {
    setOpen(saved === "true");
  }
}, []);
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState<
  { role: "user" | "assistant"; text: string }[]
>([]);
  const [loading, setLoading] = useState(false);
  const chatContainerRef =
  useRef<HTMLDivElement>(null);

const messagesEndRef =
  useRef<HTMLDivElement>(null);

const inputRef =
  useRef<HTMLInputElement>(null);
  const [showWelcome, setShowWelcome] =
  useState(true);
  useEffect(() => {
  const savedMessages =
    localStorage.getItem("vssr-chat-history");

  if (savedMessages) {
    setMessages(JSON.parse(savedMessages));
  }
}, []);


  const sendMessage = async () => {
  if (!message.trim() || loading) return;
  setShowWelcome(false);

  const userMessage = message;

  setMessages((prev) => [
    ...prev,
    {
      role: "user",
      text: userMessage,
    },
  ]);

  setMessage("");

  try {
    setLoading(true);

    const res = await fetch("/api/chat", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        message: userMessage,
         history: [
  ...messages,
  {
    role: "user",
    text: userMessage,
  },
],
      }),
    });

    const data = await res.json();

setLoading(false);

await typeAssistantMessage(
  data.response
);

inputRef.current?.focus();
  } catch {
  setLoading(false);

  setMessages((prev) => [
    ...prev,
    {
      role: "assistant",
      text: "Something went wrong.",
    },
  ]);

  inputRef.current?.focus();
}
};
useEffect(() => {
  const container = chatContainerRef.current;

  if (!container) return;

  const timeout = setTimeout(() => {
    container.scrollTo({
      top: container.scrollHeight,
      behavior: "smooth",
    });
  }, 350);
  
  return () => clearTimeout(timeout);
}, [messages]);

useEffect(() => {
  localStorage.setItem(
    "vssr-chat-history",
    JSON.stringify(messages)
  );
}, [messages]);
useEffect(() => {
  localStorage.setItem(
    "vssr-open",
    String(open)
  );
}, [open]);
useEffect(() => {
  if (messages.length === 0) {
    const hour = new Date().getHours();

    let greeting = "Hello 👋";

    if (hour < 12)
      greeting = "Good Morning ☀️";
    else if (hour < 18)
      greeting = "Good Afternoon 🌤️";
    else
      greeting = "Good Evening 🌙";

    setMessages([
      {
        role: "assistant",
        text: `${greeting}

I'm VSSR — Santhosh's AI Portfolio Assistant.

I can help you explore:

🚀 Projects
💼 Experience
🧠 Skills
📄 Publications
🏆 Certifications

What would you like to know?`,
      },
    ]);
  }
}, []);

const sendQuickMessage = async (
  quickMessage: string
) => {
  if (loading) return;
   setShowWelcome(false);
  try {
    setMessages((prev) => [
      ...prev,
      {
        role: "user",
        text: quickMessage,
      },
    ]);

    setLoading(true);

    const res = await fetch("/api/chat", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        message: quickMessage,
        history: [
  ...messages,
  {
    role: "user",
    text: quickMessage,
  },
],
      }),
    });

    const data = await res.json();

setLoading(false);

await typeAssistantMessage(
  data.response
);

inputRef.current?.focus();
  } catch {
  setLoading(false);

  setMessages((prev) => [
    ...prev,
    {
      role: "assistant",
      text: "Something went wrong.",
    },
  ]);

  inputRef.current?.focus();
}
};

const typeAssistantMessage = async (
  fullText: string
) => {
  let currentText = "";

  setMessages((prev) => [
    ...prev,
    {
      role: "assistant",
      text: "",
    },
  ]);

  for (let i = 0; i < fullText.length; i += 2) {
    currentText = fullText.slice(0, i + 2);

    await new Promise((resolve) =>
      setTimeout(resolve, 20)
    );

    setMessages((prev) => {
  const updated = [...prev];

  updated[updated.length - 1] = {
    role: "assistant",
    text: currentText,
  };

  return updated;
});

messagesEndRef.current?.scrollIntoView({
  behavior: "smooth",
});
  }
};

  return (
    <>
      {/* Floating AI Avatar */}
      <button
  onClick={() => setOpen(!open)}
  className="
  fixed
  bottom-6
  right-6
  z-50
  group
  w-[85px]
  h-[85px]
"
>
  <div className="jarvis-container relative">

    <div className="ring ring1"></div>

    <div className="ring ring2"></div>

    <div className="ring ring3"></div>

    <div className="radar"></div>

    <div className="orbit-dot"></div>

    <Image
      src="/images/Person.png"
      alt="VSSR AI"
      fill
      className="
        rounded-full
        object-cover
        z-10
      "
    />

  </div>
</button>

      {/* Chat Window */}
      {open && (
        <div
          className="
            fixed
            bottom-28
            right-6
            w-[380px]
            sm:w-[400px]
            h-[650px]
            flex
            flex-col
            max-w-[90vw]
            rounded-3xl
            border
            border-blue-500/30
            bg-slate-900/80
            backdrop-blur-xl
            shadow-[0_0_50px_#00e5ff,0_0_35px_rgba(0,229,255,.2)]
            p-5
            z-50
          "
        >
          {/* Header */}
<div className="flex items-center gap-3 mb-4">

  <Image
    src="/images/Person.png"
    alt="VSSR AI"
    width={50}
    height={50}
    className="
      rounded-full
      border
      border-cyan-400
    "
  />

  <div>
    <h3 className="font-bold text-white text-lg">
  VSSR
</h3>

<p className="text-slate-400 text-xs">
  AI Portfolio Assistant
</p>

<div className="flex items-center gap-1">
  <span className="w-2 h-2 rounded-full bg-green-400"></span>
  <span className="text-xs text-green-400">
    Online
  </span>
</div>
  </div>

 <button
    disabled={loading}
    onClick={() => {
  setMessages([]);
  setShowWelcome(true);

  localStorage.removeItem(
    "vssr-chat-history"
  );
}}
    className="
      ml-auto
      text-xs
      text-red-400
      hover:text-red-300
      transition
      disabled:opacity-50
      disabled:cursor-not-allowed
    "
  >
    Clear Chat
  </button>

</div>



          {/* Input */}
          {showWelcome && (
  <div className="mb-6">

  <h2 className="text-3xl font-bold text-white mb-3">
  {new Date().getHours() < 12
    ? "Good Morning ☀️"
    : new Date().getHours() < 18
    ? "Good Afternoon 🌤️"
    : "Good Evening 🌙"}
</h2>

  <p className="text-slate-300 leading-7 mb-5">
    I'm VSSR — Santhosh's personal portfolio assistant.
    I can help you explore projects, research,
    internships, education, skills and resume.
  </p>

 <div className="grid grid-cols-2 gap-3">

    <button
      onClick={() =>
  sendQuickMessage(
    "Tell me about your projects"
  )
}
      className="
      w-full
      text-left
      p-3
      rounded-xl
      border
      border-slate-700
      hover:border-cyan-400
      transition
      "
    >
      🚀 Tell me about your projects
    </button>
    <button
  onClick={() =>
    sendQuickMessage(
      "What skills does Santhosh have?"
    )
  }
  className="
  w-full
  text-left
  p-3
  rounded-xl
  border
  border-slate-700
  hover:border-cyan-400
  transition
  "
>
  🧠 Technical Skills
</button>

<button
      onClick={() =>
  sendQuickMessage(
    "Internship experience"
  )
}
      className="
      w-full
      text-left
      p-3
      rounded-xl
      border
      border-slate-700
      hover:border-cyan-400
      transition
      "
    >
      💼 Internship Experience
    </button>

    <button
      onClick={() =>
  sendQuickMessage(
    "Show your publication"
  )
}
      className="
      w-full
      text-left
      p-3
      rounded-xl
      border
      border-slate-700
      hover:border-cyan-400
      transition
      "
    >
      📄 Show your publication
    </button>
    <button
  onClick={() =>
    sendQuickMessage(
      "Show certifications"
    )
  }
  className="
  w-full
  text-left
  p-3
  rounded-xl
  border
  border-slate-700
  hover:border-cyan-400
  transition
  "
>
  🏆 Certifications
</button>
    

    <button
      onClick={() =>
  window.open(
      "/Resume%20of%20Santhosh.pdf",
      "_blank"
    )
}
      className="
      w-full
      text-left
      p-3
      rounded-xl
      border
      border-slate-700
      hover:border-cyan-400
      transition
      "
    >
      📄 Download Resume
    </button>

  </div>

</div>
          )}
          

          {/* Chat Messages */}
<div
  ref={chatContainerRef}
  className="
  flex-1
  overflow-y-auto
  space-y-4
  mt-4
  mb-4
  pr-2
"
>

  {messages.map((msg, index) => (
    <div
      key={index}
      className={
        msg.role === "user"
          ? `
          ml-auto
          max-w-[80%]
          bg-blue-600
          text-white
          px-4
          py-3
          rounded-2xl
          `
          : `
          mr-auto
          max-w-[85%]
          bg-slate-800
          text-white
          px-4
          py-3
          rounded-2xl
          `
      }
    >
      {msg.role === "assistant" ? (
        <ReactMarkdown>
          {msg.text}
        </ReactMarkdown>
      ) : (
        msg.text
      )}
    </div>
  ))}

  {loading && (
    <div
      className="
      bg-slate-800
      rounded-2xl
      px-4
      py-3
      inline-flex
      items-center
      gap-2
      "
    >
      <span className="thinking-dot"></span>
      <span className="thinking-dot"></span>
      <span className="thinking-dot"></span>
      <span className="thinking-dot"></span>
    </div>
  )}
  <div ref={messagesEndRef} />

</div>
<input
            ref={inputRef}
            type="text"
            placeholder="Ask me anything..."
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            onKeyDown={(e) => {
              if (
  e.key === "Enter" &&
  message.trim() &&
  !loading
) {
  sendMessage();
}
            }}
            className="w-full p-3 rounded-lg bg-white text-black border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />

          {/* Button */}
          <button
            onClick={sendMessage}
            disabled={loading || !message.trim()}
              className="
mt-3
w-full
bg-blue-600
hover:bg-blue-700
disabled:opacity-50
disabled:cursor-not-allowed
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
        </div>
      )}
    </>
  );
}