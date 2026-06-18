"use client";
import Image from "next/image";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Publications from "@/components/Publications";
import Contact from "@/components/Contact";
import Chatbot from "@/components/Chatbot";
import Footer from "@/components/Footer";
import Stats from "@/components/Stats";
import Research from "@/components/Research";
import { TypeAnimation } from "react-type-animation";


import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
} from "react-icons/fa";

export default function Home() {
  return (
    <main className="min-h-screen text-white">

      {/* Background Glow */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-10 left-10 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"></div>

        <div className="absolute bottom-20 right-20 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl"></div>
      </div>

      {/* Navbar */}
      <nav className="sticky top-0 z-50 backdrop-blur-md bg-slate-900/50 border-b border-slate-800">
        <div className="max-w-7xl mx-auto flex justify-between items-center px-8 py-6">

          <h1 className="text-2xl font-bold">
            Santhosh
          </h1>

          <div className="flex gap-8 text-gray-300">
            <a href="#about" className="hover:text-blue-400 transition">
              About
            </a>

            <a href="#skills" className="hover:text-blue-400 transition">
              Skills
            </a>

            <a href="#projects" className="hover:text-blue-400 transition">
              Projects
            </a>

            <a href="#contact" className="hover:text-blue-400 transition">
              Contact
            </a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-8 py-24 flex flex-col lg:flex-row items-center gap-16">

        {/* Left Side */}
        <div className="flex-1">

          <div className="inline-block px-4 py-2 mb-6 rounded-full border border-blue-500/30 bg-blue-500/10 text-blue-400">
            AI Engineer |
            ML Researcher |
            Full Stack Developer |
            Computer Vision Enthusiast
          </div>

          <p className="text-blue-400 mb-3">
            Hello, I'm
          </p>

          <h1 className="text-6xl lg:text-8xl font-extrabold leading-tight">
            VEERAVALLI
            <br />
            SHANMUKHA
            <br />
            SANTHOSH RAO
          </h1>

          <TypeAnimation
            sequence={[
              "AI Engineer",
              2000,
              "ML Researcher",
              2000,
              "Full Stack Developer",
              2000,
              "Computer Vision Enthusiast",
              2000,
            ]}
            wrapper="span"
            speed={50}
            repeat={Infinity}
            className="text-2xl text-blue-400 mt-6 block"
          />

          <p className="mt-6 text-lg text-gray-300 max-w-xl">
            Passionate about Machine Learning, Deep Learning,
            Artificial Intelligence, Computer Vision,
            Full Stack Development, Data Structures &
            Algorithms, and Database Systems.
          </p>

          <div className="flex gap-4 mt-8">

            <a
              href="#projects"
              className="bg-blue-500 hover:bg-blue-600 px-6 py-3 rounded-xl font-semibold transition"
            >
              View Projects
            </a>

            <a
              href="#contact"
              className="border border-gray-600 px-6 py-3 rounded-xl hover:border-blue-500 transition"
            >
              Contact Me
            </a>

          </div>

          {/* Social Links */}
          <div className="flex gap-6 mt-8 items-center">

            <a
              href="https://github.com/santosh96203"
              target="_blank"
              rel="noopener noreferrer"
              className="text-3xl hover:text-blue-500 transition"
            >
              <FaGithub />
            </a>

            <a
              href="https://www.linkedin.com/in/veeravalli-shanmukha-santhosh-rao-a2b054208/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-3xl hover:text-blue-500 transition"
            >
              <FaLinkedin />
            </a>

            <a
              href="mailto:vssrsantosh@gmail.com"
              className="text-3xl hover:text-blue-500 transition"
            >
              <FaEnvelope />
            </a>

            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-blue-500 hover:bg-blue-600 hover:scale-105 transition px-6 py-3 rounded-xl font-semibold"
            >
              ⬇ Download Resume
            </a>

          </div>
        </div>

        {/* Right Side */}
        <div className="flex-1 flex justify-center">

          <div className="relative">

            {/* Floating Icons */}

            <Image
              src="/icons/ai.png"
              alt="AI"
              width={70}
              height={70}
              className="absolute -top-10 -left-10 float"
            />

            <Image
              src="/icons/code.png"
              alt="Code"
              width={70}
              height={70}
              className="absolute top-20 -left-12 float delay-200"
            />

            <Image
              src="/icons/data.png"
              alt="Data"
              width={70}
              height={70}
              className="absolute bottom-20 -left-12 float delay-500"
            />

            <Image
              src="/icons/mobile.png"
              alt="Mobile"
              width={70}
              height={70}
              className="absolute top-20 -right-12 float delay-700"
            />

            <Image
              src="/icons/health.png"
              alt="Healthcare"
              width={70}
              height={70}
              className="absolute bottom-20 -right-12 float delay-1000"
            />

            {/* Glow */}
            <div className="absolute inset-0 bg-blue-500/20 blur-3xl rounded-full"></div>

            {/* Profile */}
            <Image
              src="/images/profile1.jpg"
              alt="Santosh"
              width={450}
              height={550}
              className="rounded-3xl avatar"
            />

            {/* Badge */}
            <div className="absolute -bottom-5 left-1/2 -translate-x-1/2 bg-blue-500 px-5 py-2 rounded-xl font-semibold">
              AI & ML Engineer
            </div>

          </div>
        </div>

      </section>
      <Stats />
      <About />
      <Research />
      <Skills />
      <Projects />
      <Publications />
      <Contact />
      <Chatbot />
      <Footer />

    </main>
  );
}