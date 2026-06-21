"use client";

import { useEffect, useState } from "react";

export default function WelcomeMessage({
  onFinish,
}: {
  onFinish: () => void;
}) {
  const [greeting, setGreeting] =
    useState("");

  const [glowColor, setGlowColor] =
    useState("#ffffff");

  useEffect(() => {
    const hour = new Date().getHours();

    if (hour >= 5 && hour < 12) {
      setGreeting("Good Morning ☀️");
      setGlowColor("#FFD54F");
    } else if (hour >= 12 && hour < 17) {
      setGreeting("Good Afternoon 🌤️");
      setGlowColor("#FFB300");
    } else if (hour >= 17 && hour < 21) {
      setGreeting("Good Evening 🌇");
      setGlowColor("#FF7043");
    } else {
      setGreeting("Good Night 🌙");
      setGlowColor("#C4D7FF");
    }
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => {
      onFinish();
    }, 4500);

    return () => clearTimeout(timer);
  }, [onFinish]);

  const textColor = glowColor;

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
      animate-welcomeFade
      "
    >
      <div
        className="
        text-center
        px-10
        py-10
        rounded-3xl
        bg-white/80
        dark:bg-slate-900/80
        backdrop-blur-md
        border
        border-cyan-500/20
        shadow-[0_0_40px_rgba(34,211,238,0.15)]
        "
      >
        <h2
          className="
          text-3xl
          md:text-4xl
          font-semibold
          mb-3
          "
          style={{
            color: textColor,
            textShadow: `
              0 0 10px ${glowColor},
              0 0 20px ${glowColor},
              0 0 40px ${glowColor}
            `,
          }}
        >
          {greeting}
        </h2>

        <h1
          className="
          text-5xl
          md:text-6xl
          font-extrabold
          text-slate-900
          dark:text-white
          mb-4
          "
        >
          Welcome to VSSR
        </h1>

        <p
          className="
          text-lg
          text-slate-700
          dark:text-slate-300
          tracking-wide
          "
        >
          Explore. Learn. Connect.
        </p>
      </div>
    </div>
  );
}