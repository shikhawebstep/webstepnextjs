"use client";
import React from 'react';
import { motion } from 'framer-motion';
import AnimatedSection from '../AnimatedSection';
import { FaCode, FaPaintBrush, FaRocket, FaUserShield } from 'react-icons/fa';

const AboutHero = () => {
  return (
    <section className="relative w-full min-h-screen lg:min-h-[90vh] flex items-center justify-center overflow-hidden bg-white px-6 font-roboto py-16">
      
      {/* Complex Mesh Background */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] right-[-5%] w-[60%] h-[60%] rounded-full bg-gradient-to-br from-pink-50/50 to-orange-50/30 blur-[120px] animate-pulse" />
        <div className="absolute bottom-[-10%] left-[-5%] w-[50%] h-[50%] rounded-full bg-gradient-to-tr from-blue-50/40 to-pink-50/20 blur-[120px] [animation-delay:2s] animate-pulse" />
        <div className="absolute top-[20%] left-[10%] w-px h-[60%] bg-gradient-to-b from-transparent via-pink-200/50 to-transparent" />
        <div className="absolute top-[10%] right-[20%] w-px h-[80%] bg-gradient-to-b from-transparent via-orange-200/50 to-transparent" />
      </div>

      <div className="container mx-auto max-w-7xl relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
          
          {/* Left Content */}
          <div className="lg:w-3/5 text-center lg:text-left">
            <AnimatedSection delay={0.1} direction="up">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-pink-50 border border-pink-100/50 text-pink-600 mb-8 shadow-sm">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-pink-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-pink-500"></span>
                </span>
                <span className="text-[10px] font-black uppercase tracking-[0.2em]">Our Story & Vision</span>
              </div>
              
              <h1 className="text-5xl md:text-7xl lg:text-8xl font-black text-slate-900 leading-[1] mb-10 tracking-tight uppercase">
                Pioneering <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-600 via-orange-500 to-amber-500">Software Excellence</span>
              </h1>
              
              <p className="text-lg md:text-xl text-slate-500 leading-relaxed max-w-2xl mx-auto lg:mx-0 mb-12">
                We architect robust digital ecosystems. A fusion of technical mastery and strategic design, crafted to empower your business with future-proof software solutions.
              </p>

              <div className="flex flex-wrap gap-6 justify-center lg:justify-start">
                <button className="px-10 py-5 bg-slate-900 text-white rounded-2xl text-[11px] font-black uppercase tracking-[0.3em] shadow-2xl hover:bg-pink-600 transition-all duration-500 group overflow-hidden relative">
                  <span className="relative z-10">Our Philosophy</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-pink-600 to-orange-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                </button>
                <button className="px-10 py-5 bg-white border border-slate-200 text-slate-900 rounded-2xl text-[11px] font-black uppercase tracking-[0.3em] hover:border-pink-500 transition-all duration-300">
                  Join The Journey
                </button>
              </div>
            </AnimatedSection>
          </div>

          {/* Right Visual Element (Abstract Glassmorphism) */}
          <div className="lg:w-2/5 w-full relative">
            <AnimatedSection delay={0.3} direction="right">
              <div className="relative aspect-square max-w-[500px] mx-auto">
                {/* Floating Glass Cards */}
                <motion.div 
                  animate={{ y: [0, -20, 0] }}
                  transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute top-0 right-0 w-3/4 aspect-square bg-white/40 backdrop-blur-3xl rounded-[3rem] border border-white/50 shadow-2xl z-20 flex items-center justify-center p-12 overflow-hidden"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-pink-500/10 to-transparent" />
                  <FaRocket className="text-slate-900/10 absolute -bottom-10 -right-10 text-[200px] rotate-[-15deg]" />
                  <div className="relative text-center">
                    <span className="block text-6xl md:text-7xl font-black text-slate-900 mb-2 tracking-tighter">20+</span>
                    <span className="text-[10px] font-black uppercase tracking-[0.4em] text-slate-500">Years of Innovation</span>
                  </div>
                </motion.div>

                <motion.div 
                  animate={{ y: [0, 20, 0] }}
                  transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                  className="absolute bottom-10 left-0 w-1/2 aspect-square bg-slate-900 rounded-[2.5rem] shadow-2xl z-30 p-8 flex flex-col justify-between"
                >
                  <div className="w-12 h-12 rounded-xl bg-pink-500 flex items-center justify-center text-white shadow-lg shadow-pink-500/30">
                    <FaCode size={20} />
                  </div>
                  <div>
                    <span className="block text-2xl font-black text-white leading-tight uppercase tracking-tight">Pixel <br /> Perfect</span>
                    <div className="w-8 h-1 bg-pink-500 mt-4 rounded-full" />
                  </div>
                </motion.div>

                {/* Decorative Elements */}
                <div className="absolute -top-10 -left-10 w-40 h-40 bg-orange-100 rounded-full blur-[60px] opacity-60" />
                <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-pink-100 rounded-full blur-[50px] opacity-60" />
                
                {/* Orbital Rings */}
                <div className="absolute inset-0 border-[1px] border-slate-100 rounded-full scale-110 animate-[spin_20s_linear_infinite]" />
                <div className="absolute inset-0 border-[1px] border-slate-100 rounded-full scale-125 animate-[spin_30s_linear_infinite_reverse]" />
              </div>
            </AnimatedSection>
          </div>

        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 hidden md:block">
        <motion.div 
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-px h-20 bg-gradient-to-b from-slate-200 via-slate-400 to-transparent"
        />
      </div>
    </section>
  );
};

export default AboutHero;
