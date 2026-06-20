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
import Navbar from "@/components/Navbar";
import Experience from "@/components/Experience";
import { useState } from "react";
import SplashScreen from "@/components/SplashScreen";
import FadeIn from "@/components/FadeIn";
import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
} from "react-icons/fa";
import WelcomeMessage from "@/components/WelcomeMessage";



export default function Home() {
  const [loading, setLoading] =
  useState(true);

const [showWelcome, setShowWelcome] =
  useState(false);

if (loading) {
  return (
    <SplashScreen
      onFinish={() => {
        setLoading(false);
        setShowWelcome(true);
      }}
    />
  );
}

if (showWelcome) {
  return (
    <WelcomeMessage
      onFinish={() =>
        setShowWelcome(false)
      }
    />
  );
}

  return (
  <div className="fade-home">
    <Navbar />

    <main className="min-h-screen pt-28 text-slate-900 dark:text-white">
      {/* Background Glow */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-10 left-10 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"></div>

        <div className="absolute bottom-20 right-20 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl"></div>
      </div>

      {/* Hero Section */}
      <motion.section
  initial={{ opacity: 0 }}
  animate={{ opacity: 1 }}
  transition={{ duration: 1 }}
  className="max-w-7xl mx-auto px-8 py-24 flex flex-col lg:flex-row items-center gap-16"
>

        {/* Left Side */}
        <div className="flex-1">

          <div className="
  inline-block
  px-4
  py-2
  mb-6
  rounded-full
  border
  border-blue-500/30
  bg-blue-500/10
  text-blue-600
  dark:text-blue-400
">
            AI Engineer | ML Researcher | Computer Vision Researcher| Full Stack Developer 
          </div>

          <p className="text-red-600 dark:text-green-400 mb-3">
            Hello, I'm
          </p>

          <h1
  className="
    text-5xl
    lg:text-7xl
    font-extrabold
    leading-[0.95]
    tracking-tight
    text-slate-900
    dark:text-white
    drop-shadow-[0_0_25px_rgba(0,229,255,.15)]
  "
>
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
              "Computer Vision Engineering",
              2000,
            ]}
            wrapper="span"
            speed={50}
            repeat={Infinity}
            className="text-2xl text-blue-500 dark:text-blue-400 mt-6 block"
          />
          <div className="flex gap-8 mt-8 mb-6">

  <div>
    <h3 className="text-3xl font-bold text-cyan-400">
      4
    </h3>
    <p className="text-sm text-slate-500">
      Projects
    </p>
  </div>

  <div>
    <h3 className="text-3xl font-bold text-cyan-400">
      1
    </h3>
    <p className="text-sm text-slate-500">
      Publications
    </p>
  </div>

  <div>
    <h3 className="text-3xl font-bold text-cyan-400">
      3
    </h3>
    <p className="text-sm text-slate-500">
      Internships
    </p>
  </div>

  <div>
    <h3 className="text-3xl font-bold text-cyan-400">
      7.41
    </h3>
    <p className="text-sm text-slate-500">
      CGPA
    </p>
  </div>

</div>
          <p className="mt-6 text-lg text-slate-700 dark:text-gray-300 max-w-xl">
            M.Tech Computer Engineering student specializing in Artificial Intelligence,
Machine Learning, Computer Vision, Healthcare AI, and Full Stack Development.
Published researcher with experience in mobile sensing, healthcare monitoring,
and intelligent software systems.
</p>
          <div className="flex flex-wrap gap-4 mt-8">

            <a
              href="#projects"
              className="bg-blue-500 hover:bg-blue-600 px-6 py-3 rounded-xl font-semibold transition"
            >
              View Projects
            </a>

            <a
              href="#contact"
              className="bg-blue-500 hover:bg-blue-600 px-6 py-3 rounded-xl font-semibold transition"
            >
              Contact Me
            </a>

            <a
              href="/Resume%20of%20Santhosh.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-blue-500 hover:bg-blue-600 hover:scale-105 transition px-6 py-3 rounded-xl font-semibold"
            >
              Resume
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

          </div>

        </div>

        {/* Right Side */}
<div className="flex-1 flex justify-center">
  <div className="relative hero-float">

    {/* AI & Machine Learning */}
    <Image
      src="/icons/ai-icon.png"
      alt="AI & Machine Learning"
      width={65}
      height={65}
      className="absolute -top-10 -left-10 float"
    />

    {/* Computer Vision */}
    <Image
      src="/icons/computer.png"
      alt="Computer Vision"
      width={65}
      height={65}
      className="absolute top-20 -left-12 float delay-200"
    />

    {/* Neural Network */}
    <Image
      src="/icons/deep.png"
      alt="Neural Network"
      width={65}
      height={65}
      className="absolute bottom-20 -left-12 float delay-500"
    />

    {/* Mobile Development */}
    <Image
      src="/icons/develop.png"
      alt="Mobile Development"
      width={65}
      height={65}
      className="absolute top-20 -right-12 float delay-700"
    />

    {/* Healthcare AI */}
    <Image
      src="/icons/health-icon.png"
      alt="Healthcare AI"
      width={65}
      height={65}
      className="absolute bottom-20 -right-12 float delay-1000"
    />
    <Image
  src="/icons/reseach.png"
  alt="Research & Publications"
  width={65}
  height={65}
  className="absolute -bottom-12 left-1/2 -translate-x-1/2 float delay-1200"
/>
    {/* Profile Image */}
    <Image
      src="/images/profile1.jpg"
      alt="Santhosh"
      width={450}
      height={550}
      className="
        rounded-3xl
        border
        border-cyan-400/30
        shadow-[0_0_40px_rgba(34,211,238,0.35)]
      "
    />

    {/* Badge */}
    <div
      className="
        absolute
        -bottom-5
        left-1/2
        -translate-x-1/2
        bg-blue-500
        px-5
        py-2
        rounded-xl
        font-semibold
      "
    >
      AI & ML Engineer
    </div>

  </div>
</div>

      </motion.section>

           <FadeIn>
  <Stats />
</FadeIn>

<FadeIn>
  <About />
</FadeIn>

<FadeIn>
  <Research />
</FadeIn>

<FadeIn>
  <Skills />
</FadeIn>

<FadeIn>
  <Experience />
</FadeIn>

<FadeIn>
  <Projects />
</FadeIn>

<FadeIn>
  <Publications />
</FadeIn>

<FadeIn>
  <Contact />
</FadeIn>
      <Chatbot />
      <Footer />

    </main>
  </div>
);
}