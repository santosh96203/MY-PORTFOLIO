"use client";

import Image from "next/image";
import { useTheme } from "next-themes";
import { Sun, Moon } from "lucide-react";
import { HiOutlineBars3 } from "react-icons/hi2";
import { useEffect, useState } from "react";

export default function Navbar() {
  const { theme, setTheme } = useTheme();

  const [mounted, setMounted] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <>
      {/* Navbar */}
      <nav
        className="
          fixed
          top-4
          left-1/2
          -translate-x-1/2
          z-50

          w-[95%]
          max-w-6xl

          px-6
          py-3

          rounded-full

          backdrop-blur-xl
          bg-white/70
          dark:bg-slate-900/70

          border
          border-blue-500/10

          shadow-[0_0_25px_rgba(59,130,246,0.15)]
        "
      >
        <div className="flex items-center justify-between">

  {/* Left */}
  <span
    className="
      font-bold
      text-lg
      text-slate-900
      dark:text-white
    "
  >
    Santhosh
  </span>

 {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">

            <a href="#about" className="hover:text-blue-400 transition">
              About
            </a>

            <a href="#research" className="hover:text-blue-400 transition">
              Research Focus
            </a>
            <a href="#skills" className="hover:text-blue-400 transition">
              Skills & Technologies
            </a>

            <a href="#experience" className="hover:text-blue-400 transition">
              Internships & Experience
            </a>

            <a href="#projects" className="hover:text-blue-400 transition">
              Projects
            </a>

            <a href="#publications" className="hover:text-blue-400 transition">
              Publications
            </a>

            <a href="#contact" className="hover:text-blue-400 transition">
              Contact
            </a>
  </div>

  {/* Mobile + Theme */}
  <div className="flex items-center gap-3">

    <button
      onClick={() => setMenuOpen((prev) => !prev)}
      className="
        md:hidden
        flex
        items-center
        gap-2
        px-3
        py-2
        rounded-full
        bg-slate-800/80
        border
        border-cyan-500/30
      "
    >
      <Image
        src="/images/avatar.jpg"
        alt="Menu"
        width={36}
        height={36}
        className="rounded-full"
      />
      <HiOutlineBars3 className="text-white text-xl" />
    </button>

    {mounted && (
      <button
        onClick={() =>
          setTheme(theme === "dark" ? "light" : "dark")
        }
        className="
          p-2
          rounded-full
          border
          border-blue-500/20
          hover:bg-blue-500/10
          transition
        "
      >
        {theme === "dark"
          ? <Sun size={18} />
          : <Moon size={18} />}
      </button>
    )}

  </div>

</div>
      </nav>

      {/* Mobile Dropdown */}
      {menuOpen && (
         <>
    <div
      className="fixed inset-0 z-40"
      onClick={() => setMenuOpen(false)}
    />
        <div
          className="
            fixed
            top-24
            left-4

            w-72

            rounded-3xl

            bg-slate-900/95
            backdrop-blur-xl

            border
            border-cyan-500/20

            shadow-[0_0_30px_rgba(6,182,212,.15)]

            p-5

            md:hidden

            z-50
          "
        >
          <div className="flex items-center gap-4 pb-4 border-b border-cyan-500/20">

            <Image
              src="/images/avatar.jpg"
              alt="AI Avatar"
              width={60}
              height={60}
              className="
rounded-full
border
border-cyan-400
shadow-[0_0_10px_#00e5ff]
"
            />

            <div>
              <h3 className="font-bold text-white">
                Veeravalli
              </h3>

              <p className="text-gray-400 text-sm">
                Shanmukha Santosh Rao
              </p>
            </div>

          </div>

          <div className="flex flex-col mt-4">

            <a href="#about" 
            onClick={() => setMenuOpen(false)}
            className="
  hover:text-cyan-400
  transition
  hover:drop-shadow-[0_0_10px_#00e5ff]
">
              About
            </a>
            <a href="#research" 
            onClick={() => setMenuOpen(false)}
            className="
  hover:text-cyan-400
  transition
  hover:drop-shadow-[0_0_10px_#00e5ff]">
    Research Focus
  </a>

            <a href="#skills" 
            onClick={() => setMenuOpen(false)}
            className="
  hover:text-cyan-400
  transition
  hover:drop-shadow-[0_0_10px_#00e5ff]
">
              Skills & Technology
            </a>
            <a href="#experience" 
            onClick={() => setMenuOpen(false)}
            className="
  hover:text-cyan-400
  transition
  hover:drop-shadow-[0_0_10px_#00e5ff]
">
  Internships & Experience
</a>

            <a href="#projects" 
            onClick={() => setMenuOpen(false)}
            className="
  hover:text-cyan-400
  transition
  hover:drop-shadow-[0_0_10px_#00e5ff]
">
              Projects
            </a>

            <a href="#publications" 
            onClick={() => setMenuOpen(false)}
            className="
  hover:text-cyan-400
  transition
  hover:drop-shadow-[0_0_10px_#00e5ff]
">
              Publications
            </a>

            <a href="#contact" 
            onClick={() => setMenuOpen(false)}
            className="
  hover:text-cyan-400
  transition
  hover:drop-shadow-[0_0_10px_#00e5ff]
">
              Contact
            </a>

          </div>
        </div>
      </>
      )}
    </>
  );
}