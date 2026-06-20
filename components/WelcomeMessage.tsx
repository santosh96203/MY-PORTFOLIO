"use client";

import { useEffect, useState } from "react";

export default function WelcomeMessage({
  onFinish,
}: {
  onFinish: () => void;
}) {
  const [greeting, setGreeting] =
    useState("");

  const [message, setMessage] =
    useState("");

  const [glowColor, setGlowColor] =
    useState("#ffffff");

  useEffect(() => {
    const hour = new Date().getHours();

    const commonMessage =
      "Welcome. Explore research, engineering projects, publications, and technical expertise.";

    if (hour >= 5 && hour < 12) {
      setGreeting("Good Morning ☀️");
      setGlowColor("#FFD54F");
    } else if (
      hour >= 12 &&
      hour < 18
    ) {
      setGreeting(
        "Good Afternoon 🌤️"
      );
      setGlowColor("#FFB300");
    } else {
      setGreeting("Good Evening 🌙");
      setGlowColor("#93C5FD");
    }

    setMessage(commonMessage);
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => {
      onFinish();
    }, 4000);

    return () => clearTimeout(timer);
  }, [onFinish]);

  return (
    <div
      className="
      fixed
      inset-0
      z-[9999]
      flex
      items-center
      justify-center
      bg-white
      dark:bg-slate-950
      animate-fadeIn
      "
    >
      <div
        className="
        text-center
        px-8
        py-8
        rounded-3xl
        bg-white/70
        dark:bg-slate-900/70
        backdrop-blur-md
        border
        border-white/10
        shadow-[0_0_40px_rgba(255,255,255,0.08)]
        "
      >
        <h1
          className="
          text-4xl
          md:text-5xl
          lg:text-6xl
          font-bold
          mb-4
          "
          style={{
            color: glowColor,
            textShadow: `
              0 0 10px ${glowColor},
              0 0 20px ${glowColor},
              0 0 40px ${glowColor}
            `,
          }}
        >
          {greeting}
        </h1>

        <p
          className="
          text-base
          md:text-lg
          text-slate-800
          dark:text-slate-200
          tracking-wide
          font-medium
          "
        >
          {message}
        </p>
      </div>
    </div>
  );
}