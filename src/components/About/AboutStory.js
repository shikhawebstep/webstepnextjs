"use client";
import React from 'react';
import AnimatedSection from '../AnimatedSection';
import { FaHistory, FaBullseye, FaLightbulb, FaAward, FaUsers, FaGlobe } from 'react-icons/fa';

const AboutStory = () => {
  return (
    <section className="py-16 md:py-24 bg-slate-50 relative z-10 px-6 font-roboto overflow-hidden">
      
      {/* Background Decorative Elements */}
      <div className="absolute top-1/4 right-0 w-[400px] h-[400px] bg-pink-100/30 rounded-full blur-[100px] pointer-events-none translate-x-1/2"></div>
      
      <div className="container mx-auto max-w-7xl relative z-10">
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-24 items-center">
          
          {/* Left Content: Narrative */}
          <div className="w-full lg:w-1/2 order-2 lg:order-1">
            <AnimatedSection delay={0.1} direction="left">
              <div className="mb-12 text-center lg:text-left">
                <span className="font-mono text-[10px] tracking-[0.3em] uppercase text-pink-500 font-bold mb-6 block">
                  Beyond The Code
                </span>
                <h2 className="text-4xl md:text-6xl font-black text-slate-900 mb-8 leading-tight tracking-tight uppercase">
                  A Legacy of <br />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-600 via-orange-500 to-amber-500">Pure Innovation</span>
                </h2>
                <p className="text-slate-500 text-lg md:text-xl leading-relaxed mb-12">
                  Founded with a vision to bridge the gap between technical complexity and human intuition, Webstep Solutions has spent the last two decades transforming ambitious ideas into digital reality. 
                </p>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                  {[
                    { icon: <FaHistory />, title: "Our Heritage", text: "Founded in 2005, evolved into a global digital powerhouse." },
                    { icon: <FaBullseye />, title: "Our Mission", text: "To empower brands with future-proof digital architectures." },
                    { icon: <FaLightbulb />, title: "Our Vision", text: "Defining the standard for high-end web experiences." },
                    { icon: <FaAward />, title: "Quality First", text: "Zero compromise on performance and user experience." }
                  ].map((item, index) => (
                    <div key={index} className="flex flex-col items-center lg:items-start group">
                      <div className="w-14 h-14 rounded-2xl bg-white border border-slate-100 flex items-center justify-center flex-shrink-0 shadow-lg group-hover:shadow-pink-500/20 group-hover:bg-pink-600 group-hover:text-white transition-all duration-500 mb-4 text-pink-600">
                        {item.icon}
                      </div>
                      <h6 className="font-black text-slate-900 text-sm uppercase tracking-wider mb-2">{item.title}</h6>
                      <p className="text-slate-500 text-sm leading-relaxed">{item.text}</p>
                    </div>
                  ))}
                </div>
              </div>
            </AnimatedSection>
          </div>

          {/* Right Visual: Creative Composition */}
          <div className="w-full lg:w-1/2 order-1 lg:order-2">
            <AnimatedSection delay={0.2} direction="right">
              <div className="relative p-4">
                {/* Background Card */}
                <div className="absolute top-10 -right-10 w-full h-full bg-gradient-to-br from-pink-500/5 to-orange-500/5 rounded-[4rem] -rotate-3 border border-slate-100"></div>
                
                {/* Main Visual Frame */}
                <div className="relative bg-white p-6 rounded-[4rem] shadow-2xl border border-slate-100 z-10 overflow-hidden group">
                  <div className="aspect-[4/5] bg-slate-900 rounded-[3.5rem] overflow-hidden relative">
                    {/* Abstract Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-br from-pink-600/30 to-orange-500/20 mix-blend-overlay"></div>
                    
                    {/* Content Placeholder with typography */}
                    <div className="absolute inset-0 flex flex-col items-center justify-center p-12 text-center">
                        <span className="text-white/10 font-black text-9xl absolute transform -rotate-90 pointer-events-none uppercase">Step</span>
                        <div className="relative z-20">
                            <h3 className="text-white text-3xl font-black uppercase tracking-tighter mb-4 leading-none">Global <br /> Standards</h3>
                            <p className="text-white/60 text-xs uppercase tracking-[0.3em]">Excellence is standard</p>
                        </div>
                    </div>

                    {/* Stats Overlays */}
                    <div className="absolute top-10 left-10 p-6 bg-white/10 backdrop-blur-md border border-white/20 rounded-3xl text-white transform -rotate-6">
                        <FaUsers className="mb-2 text-pink-400" />
                        <span className="block font-black text-2xl">500+</span>
                        <span className="text-[8px] uppercase tracking-widest text-white/70">Happy Clients</span>
                    </div>

                    <div className="absolute bottom-10 right-10 p-6 bg-white/10 backdrop-blur-md border border-white/20 rounded-3xl text-white transform rotate-6">
                        <FaGlobe className="mb-2 text-orange-400" />
                        <span className="block font-black text-2xl">30+</span>
                        <span className="text-[8px] uppercase tracking-widest text-white/70">Countries</span>
                    </div>
                  </div>
                </div>

                {/* Floating Decoration */}
                <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-slate-900 rounded-[2.5rem] flex items-center justify-center text-white shadow-2xl z-20 transform -rotate-12 group-hover:rotate-0 transition-transform duration-700">
                    <span className="font-black text-4xl">W</span>
                </div>
              </div>
            </AnimatedSection>
          </div>

        </div>
      </div>
    </section>
  );
};

export default AboutStory;
