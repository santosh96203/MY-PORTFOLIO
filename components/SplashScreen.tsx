"use client";

import { useEffect, useState } from "react";

const steps = [
  "Connecting Neural Core...",
  "Loading Research Database...",
  "Loading Project Repository...",
  "Activating AI Assistant...",
  "Rendering Portfolio Interface...",
];

export default function SplashScreen({
  onFinish,
}: {
  onFinish: () => void;
}) {
  const [progress, setProgress] = useState(0);
  const [currentStep, setCurrentStep] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prev) => {
        const next = prev + 1;

        if (next === 20) setCurrentStep(1);
        if (next === 40) setCurrentStep(2);
        if (next === 60) setCurrentStep(3);
        if (next === 80) setCurrentStep(4);

        if (next >= 100) {
          clearInterval(timer);

          setTimeout(() => {
            onFinish();
          }, 1000);

          return 100;
        }

        return next;
      });
    }, 40);

    return () => clearInterval(timer);
  }, [onFinish]);

  return (
    <div
      className="
      fixed
      inset-0
      z-[9999]
      bg-[#020617]
      flex
      flex-col
      items-center
      justify-center
      px-6
      absolute inset-0 splash-grid
      "
    >
      {/* AI Core */}
   <div className="jarvis-loader mb-10">
  <img
    src="/images/ai-avatar.jpg"
    alt="VSSR AI"
    className="loader-avatar"
  />
</div>

      {/* Logo */}
      <h1
        className="
        text-6xl
        md:text-8xl
        font-black
        tracking-[0.3em]
        text-white drop-shadow-[0_0_30px_#00e5ff]
      "
      >
        VSSR
      </h1>

      <p
        className="
        mt-4
        text-cyan-400
        text-xs
        tracking-[0.4em]
        uppercase
      "
      >
        SYSTEM INITIALIZATION
      </p>

      {/* Loading Steps */}
      <div
        className="
        mt-10
        w-full
        max-w-lg
        font-mono
        text-sm
      "
      >
        {steps.map((step, index) => (
          <div
            key={index}
            className={`mb-2 ${
              index <= currentStep
                ? "text-cyan-300"
                : "text-slate-600"
            }`}
          >
            {index < currentStep
              ? `✓ ${step}`
              : index === currentStep
              ? `> ${step}`
              : step}
          </div>
        ))}
      </div>

      {/* Progress Bar */}
      <div
        className="
        mt-8
        w-[340px]
        h-3
        bg-slate-800
        rounded-full
        overflow-hidden
        border
        border-cyan-500/20
      "
      >
        <div
          className="
          h-full
          bg-cyan-400
          transition-all
          duration-200
          shadow-[0_0_20px_#00e5ff]
          "
          style={{
            width: `${progress}%`,
          }}
        />
      </div>

      <p
        className="
        mt-4
        text-cyan-300
        font-mono
      "
      >
        {progress}%
      </p>

      {progress === 100 && (
  <div className="mt-6 text-center animate-pulse">
    <p className="text-cyan-300 font-bold">
      SYSTEM READY
    </p>

    <p className="text-white text-sm mt-2">
      AI PORTFOLIO ONLINE
    </p>
  </div>
)}
    </div>
  );
}