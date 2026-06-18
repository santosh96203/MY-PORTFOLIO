"use client";

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Terminal, Award, Cpu, BookOpen, GitBranch, Mail, Linkedin, Compass, FileCode } from 'lucide-react';

export default function NotebookPortfolio() {
  const [activeTab, setActiveTab] = useState('all');

  const sketchVariant = {
    hidden: { pathLength: 0, opacity: 0 },
    visible: { 
      pathLength: 1, 
      opacity: 1,
      transition: { duration: 1.2, ease: "easeInOut" }
    }
  };

  const cardHover = {
    hover: { 
      y: -5,
      rotate: 0.5,
      boxShadow: "5px 5px 0px rgba(15, 23, 42, 0.15)",
      transition: { duration: 0.2, ease: "easeOut" }
    }
  };

  const publications = [
    {
      id: "MS-338",
      title: "A Review on Monitoring Heart Rate and Cardiac Rhythm by Video Photoplethysmography on Mobile Devices",
      venue: "RAMSITA 2026 International Conference",
      status: "Vetted • Author Certificate of Recognition",
      desc: "Comprehensive review of remote photoplethysmography frameworks and mobile camera sensory accuracy."
    },
    {
      id: "MS-020912",
      title: "A Lightweight Signal Processing Pipeline for Robust rPPG Extraction Under Mobile Constraints",
      venue: "MECS Press - IJIGSP Journal",
      status: "Manuscript Submitted / Under Review",
      desc: "Mathematical optimization framework creating a high-integrity mathematical model for real-time extraction."
    }
  ];

  return (
    <div className="min-h-screen bg-[#FDFBF7] text-slate-900 font-sans relative overflow-x-hidden selection:bg-blue-200"
         style={{
           backgroundImage: 'radial-gradient(#CBD5E1 1px, transparent 1px), linear-gradient(#F1F5F9 1px, transparent 1px), linear-gradient(90deg, #F1F5F9 1px, transparent 1px)',
           backgroundSize: '20px 20px, 40px 40px, 40px 40px',
           backgroundPosition: '0 0, 0 0, 0 0'
         }}>
      
      {/* BACKGROUND DECORATIVE SKETCH LAYER */}
      <div className="absolute top-[20%] right-[-10%] opacity-10 pointer-events-none select-none hidden md:block">
        <svg width="600" height="300" viewBox="0 0 600 300" fill="none" stroke="#2563EB" strokeWidth="2" strokeDasharray="5 5">
          <motion.path 
            d="M0,150 Q75,50 150,150 T300,150 T450,150 T600,150" 
            animate={{ d: ["M0,150 Q75,50 150,150 T300,150 T450,150 T600,150", "M0,150 Q75,250 150,150 T300,150 T450,50 T600,150", "M0,150 Q75,50 150,150 T300,150 T450,150 T600,150"] }}
            transition={{ repeat: Infinity, duration: 8, ease: "easeInOut" }}
          />
        </svg>
      </div>

      {/* HEADER */}
      <header className="px-6 py-6 border-b-2 border-dashed border-slate-300 max-w-5xl mx-auto flex justify-between items-center">
        <div className="font-mono text-xs tracking-wider font-bold text-blue-600 flex items-center space-x-2">
          <Compass className="animate-spin-slow text-slate-700" size={16} />
          <span>RAO_LAB_NOTEBOOK // 2026</span>
        </div>
        <nav className="flex space-x-6 text-xs font-mono font-bold text-slate-500">
          <a href="#intro" className="hover:text-blue-600 transition-colors">01. Overview</a>
          <a href="#manuscripts" className="hover:text-blue-600 transition-colors">02. Manuscripts</a>
          <a href="#ecosystem" className="hover:text-blue-600 transition-colors">03. Core_Ecosystem</a>
        </nav>
      </header>

      <main className="max-w-5xl mx-auto px-6 py-16 space-y-28 relative z-10">
        
        {/* HERO SECTION */}
        <section id="intro" className="grid grid-cols-1 md:grid-cols-12 gap-12 items-center">
          <div className="md:col-span-7 space-y-6">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="font-mono text-xs font-bold text-blue-600 tracking-widest bg-blue-50 border border-blue-200 w-fit px-3 py-1 rounded"
            >
              COMP_ENG // DATA SYSTEMS ARCHITECT
            </motion.div>
            
            <h1 className="text-4xl md:text-6xl font-black text-slate-900 tracking-tight font-serif italic">
              Veeravalli Rao.
            </h1>
            
            <p className="text-md text-slate-600 leading-relaxed font-mono bg-amber-50/50 p-4 border-l-4 border-amber-400 rounded-r shadow-sm">
              // Engineering portfolio of continuous data processing frameworks, mobile operating environment optimizations, and robust technical QA structures.
            </p>

            <div className="flex flex-wrap gap-4 pt-2">
              <motion.a 
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                href="#manuscripts" 
                className="bg-blue-600 hover:bg-blue-700 text-white font-mono text-xs font-bold px-6 py-3.5 rounded shadow-[4px_4px_0px_#0f172a] border-2 border-slate-900 transition-all flex items-center space-x-2"
              >
                <span>Browse Research Lab</span>
              </motion.a>
              <a href="mailto:your-email@gmail.com" className="bg-white hover:bg-slate-50 text-slate-800 font-mono text-xs font-bold px-6 py-3.5 rounded border-2 border-slate-900 shadow-[4px_4px_0px_rgba(15,23,42,0.1)] transition-all flex items-center space-x-2">
                <span>Secure Contact Drop</span>
              </a>
            </div>
          </div>

          {/* CREATIVE SKETCH BOX */}
          <div className="md:col-span-5 relative">
            <div className="absolute inset-0 bg-blue-100 rounded-lg transform translate-x-2 translate-y-2 -rotate-1"></div>
            <div className="bg-white border-2 border-slate-900 p-6 rounded-lg relative space-y-4 shadow-sm">
              <div className="flex justify-between items-center border-b pb-2 border-slate-200">
                <span className="font-mono text-[10px] uppercase text-slate-400 font-bold tracking-wider">Blueprint Module</span>
                <FileCode size={14} className="text-blue-500" />
              </div>
              
              <div className="w-full h-32 bg-slate-50 rounded border border-slate-200 flex items-center justify-center relative overflow-hidden">
                <svg className="absolute inset-0 w-full h-full" xmlns="http://www.w3.org/2000/svg">
                  <motion.path 
                    d="M 20,20 L 80,110 M 80,110 L 250,20 M 20,110 L 250,110 M 140,20 L 140,110" 
                    fill="none" stroke="#2563EB" strokeWidth="1.5"
                    variants={sketchVariant} initial="hidden" animate="visible"
                  />
                  <motion.circle 
                    cx="80" cy="110" r="4" fill="#0F172A"
                    initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ delay: 1 }}
                  />
                  <motion.circle 
                    cx="140" cy="65" r="4" fill="#0F172A"
                    initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ delay: 1.2 }}
                  />
                </svg>
                <span className="font-mono text-[9px] text-slate-400 bg-white/80 border border-slate-100 px-2 py-0.5 rounded absolute bottom-2 right-2">rPPG Pipeline.dwg</span>
              </div>

              <div className="font-mono text-[11px] text-slate-500 space-y-1">
                <p className="font-bold text-slate-800">// Core Optimization Benchmarks:</p>
                <p>• Mathematical Extraction Isolation</p>
                <p>• Fast Fourier Transform (FFT) Pipelines</p>
                <p>• Mobile Hardware Acceleration</p>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 2: ACADEMIC MANUSCRIPTS */}
        <section id="manuscripts" className="space-y-8">
          <div className="border-l-4 border-blue-600 pl-4 space-y-1">
            <span className="font-mono text-xs font-bold text-blue-600 flex items-center space-x-1">
              <BookOpen size={14} />
              <span>SECTION_02 // RESEARCH ARTIFACTS</span>
            </span>
            <h2 className="text-2xl font-black text-slate-900 tracking-tight font-serif">Vetted Architectural Papers</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {publications.map((pub) => (
              <motion.div 
                key={pub.id}
                variants={cardHover}
                whileHover="hover"
                className="bg-white border-2 border-slate-900 p-6 rounded-lg shadow-[4px_4px_0px_rgba(15,23,42,0.1)] flex flex-col justify-between space-y-4 relative cursor-pointer"
              >
                <div className="space-y-3">
                  <div className="flex justify-between items-start">
                    <span className="font-mono text-[10px] bg-slate-900 text-white px-2 py-0.5 rounded font-bold">{pub.id}</span>
                    <span className="font-mono text-[11px] font-bold text-blue-600 uppercase tracking-wider">{pub.venue}</span>
                  </div>
                  <h3 className="text-base font-bold text-slate-900 font-serif leading-snug">{pub.title}</h3>
                  <p className="text-xs text-slate-600 font-sans leading-relaxed bg-slate-50 p-3 border border-dashed border-slate-200 rounded">{pub.desc}</p>
                </div>
                <div className="border-t pt-3 border-slate-100 flex items-center space-x-2 text-xs font-mono font-bold text-emerald-700">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
                  <span>{pub.status}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* SECTION 3: STACK */}
        <section id="ecosystem" className="space-y-8">
          <div className="border-l-4 border-blue-600 pl-4 space-y-1">
            <span className="font-mono text-xs font-bold text-blue-600 flex items-center space-x-1">
              <Cpu size={14} />
              <span>SECTION_03 // COMPUTATIONAL ECOSYSTEM</span>
            </span>
            <h2 className="text-2xl font-black text-slate-900 tracking-tight font-serif">Verified Environments & Tooling</h2>
          </div>

          <div className="bg-white border-2 border-slate-900 rounded-lg divide-y-2 divide-slate-900 overflow-hidden font-mono text-xs">
            <div className="grid grid-cols-1 md:grid-cols-3 divide-y-2 md:divide-y-0 md:divide-x-2 divide-slate-900">
              <div className="p-5 space-y-3">
                <h4 className="font-bold text-blue-600 flex items-center space-x-1">
                  <Terminal size={14} /> <span>[Languages]</span>
                </h4>
                <p className="text-slate-600 leading-loose">Python (Data Architecture) / Java (Core Engine) / SQL (Relational Repositories) / C++</p>
              </div>
              <div className="p-5 space-y-3">
                <h4 className="font-bold text-blue-600 flex items-center space-x-1">
                  <GitBranch size={14} /> <span>[Data Modeling]</span>
                </h4>
                <p className="text-slate-600 leading-loose">Signal Isolation / Wavelet Transforms / Scikit-Learn Ecosystem / Custom Relational DBMS Engineering</p>
              </div>
              <div className="p-5 space-y-3">
                <h4 className="font-bold text-blue-600 flex items-center space-x-1">
                  <Cpu size={14} /> <span>[Environments]</span>
                </h4>
                <p className="text-slate-600 leading-loose">Android SDK Optimization / Technical QA Frameworks / Automation Scripting Pipeline Integration</p>
              </div>
            </div>
          </div>
        </section>

        {/* FOOTER INTERACTIVE CARD */}
        <section className="bg-[#1E293B] text-slate-100 p-8 rounded-lg text-center space-y-6 max-w-2xl mx-auto shadow-xl relative overflow-hidden border-2 border-slate-900">
          <div className="absolute inset-0 opacity-5 pointer-events-none"
               style={{ backgroundImage: 'linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)', backgroundSize: '15px 15px' }}></div>
          
          <div className="relative z-10 space-y-4">
            <h3 className="text-xl font-bold font-serif tracking-tight text-white">Initialize Architectural Integration</h3>
            <p className="text-slate-400 font-mono text-xs max-w-sm mx-auto leading-relaxed">
              Open to collaborative development roles in core data engineering pipelines, mathematical modeling frameworks, and software automation testing.
            </p>
            <div className="flex justify-center space-x-4 font-mono text-xs pt-2">
              <a href="mailto:your-email@gmail.com" className="bg-blue-600 hover:bg-blue-500 border border-slate-900 text-white px-4 py-2.5 rounded font-bold shadow-[2px_2px_0px_#000] transition-all">
                // Send_Email
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="bg-slate-800 hover:bg-slate-700 border border-slate-900 text-slate-200 px-4 py-2.5 rounded font-bold shadow-[2px_2px_0px_#000] transition-all flex items-center space-x-1">
                <Linkedin size={12} /> <span>// Connect</span>
              </a>
            </div>
          </div>
        </section>

      </main>

      <footer className="text-center font-mono text-[9px] text-slate-400 py-12 border-t border-dashed border-slate-200 max-w-5xl mx-auto">
        [EOF] COMPILATION TERMINATED SUCCESSFULLY // DATA VERIFIED VIA PATH VERBATIM: "santosh-portfolio.7z"
      </footer>
    </div>
  );
}