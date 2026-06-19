"use client";
import { useState } from "react";
import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
} from "react-icons/fa";

export default function Projects() {
  const projects = [
    {
      title:
        "Real-Time Non-Contact Pulse Rate and SpO₂ Monitoring Using Mobile Cameras",
      description:
        "Developed an AI-powered healthcare monitoring system using Video Photoplethysmography (VPG) and Remote Photoplethysmography (rPPG) techniques for contactless heart-rate and oxygen saturation estimation through smartphone cameras.",
      tech: [
        "Python",
        "TensorFlow",
        "OpenCV",
        "FastAPI",
        "Healthcare AI",
      ],
      icon: "❤️",
      status: "M.Tech Major Project",
      github: "https://github.com/santosh96203/Real-Time-Non-Contact-Pulse-Rate-and-SpO2-Monitoring-Using-Mobile-Cameras",
      image: "/images/rppg-result.png",
    },

    {
  title:
    "Potential Application of Using Smartphone Sensor for Estimating Air Temperature",
  description:
    "Developed a mobile application to estimate ambient air temperature using smartphone battery sensor data and machine learning regression models for experimental validation and prediction.",
  tech: [
    "Python",
    "Scikit-learn",
    "Pandas",
    "Android Sensors",
    "Data Analytics",
  ],
  icon: "🌡️",
  status: "B.Tech Project", 
  github: "https://github.com/santosh96203/Potential-Application-of-Using-Smartphone-Sensor-for-Estimating-Air-Temperature",
},

    {
      title:
        "End-to-End AI Chatbot",
      description:
        "Built an intelligent AI chatbot using Generative AI, Natural Language Processing, and modern web technologies to provide contextual and interactive responses.",
      tech: [
        "Python",
        "NLP",
        "Gemini AI",
        "Next.js",
      ],
      icon: "🤖",
      status: "Yoshops Internship",
    },

    {
      title:
        "Face Mask Detection Using Deep Learning",
      description:
        "Developed a real-time computer vision system capable of detecting face masks using Convolutional Neural Networks (CNNs), TensorFlow, and OpenCV.",
      tech: [
        "Python",
        "TensorFlow",
        "OpenCV",
        "Deep Learning",
      ],
      icon: "😷",
      status: "Indian Servers Internship", 
      github: "https://github.com/santosh96203/Face-Mask-Detection-Using-CNN",
    },
  ];

  return (
    <section
      id="projects"
      className="max-w-7xl mx-auto px-8 py-24"
    >
      <div className="text-center mb-16">
        <p className="text-blue-400 mb-3 font-medium">
  FEATURED PROJECTS
</p>

<h2 className="text-5xl font-bold">
  AI & Software Projects
</h2>

        <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
  Research-driven projects spanning Artificial Intelligence,
  Healthcare Technology, Computer Vision,
  Mobile Sensing, and Intelligent Systems.
</p>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        {projects.map((project, index) => (
          <div
            key={index}
            className="
              bg-slate-900/60
              backdrop-blur-lg
              border
              border-slate-700
              rounded-3xl
              p-8
              hover:-translate-y-3
              hover:border-blue-500
              hover:shadow-[0_0_35px_rgba(59,130,246,0.25)]
              transition-all
              duration-300
            "
          >
            <div className="text-5xl mb-5">
  {project.icon}
</div>

<div
  className="
    inline-block
    px-3
    py-1
    mb-4
    rounded-full
    text-xs
    bg-cyan-500/10
    border
    border-cyan-500/30
    text-cyan-400
  "
>
  {project.status}
</div>

<h3 className="text-2xl font-bold mb-4">
  {project.title}
</h3>

            <p className="text-gray-400 mb-6">
              {project.description}
            </p>

            <div className="flex flex-wrap gap-2 mb-5">
  {project.tech.map((tech, i) => (
    <span
      key={i}
      className="
        bg-blue-500/10
        text-blue-400
        px-3
        py-1
        rounded-full
        text-sm
        border
        border-blue-500/20
      "
    >
      {tech}
    </span>
  ))}
</div>

{project.github && (
  <a
    href={project.github}
    target="_blank"
    rel="noopener noreferrer"
    className="
      inline-flex
      items-center
      gap-2
      px-4
      py-2
      mt-4
      rounded-xl
      border
      border-slate-600
      hover:border-cyan-400
      hover:text-cyan-400
      transition
    "
  >
    <FaGithub />
  </a>
)}
          </div>
        ))}
      </div>
    </section>
  );
}