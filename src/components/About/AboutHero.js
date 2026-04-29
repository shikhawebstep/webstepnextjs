"use client";
import React from 'react';
import AnimatedSection from '../AnimatedSection';
import { FaArrowRight } from 'react-icons/fa';

const AboutHero = () => {
  return (
    <section className="relative w-full py-20  overflow-hidden bg-slate-50 font-roboto">
      {/* Subtle Background Pattern */}
      <div className="absolute inset-0 z-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: 'radial-gradient(#000 1px, transparent 1px)', backgroundSize: '32px 32px' }}></div>
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-gradient-to-br from-pink-500/10 to-orange-500/10 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/3"></div>
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-gradient-to-tr from-pink-500/5 to-transparent rounded-full blur-[80px] translate-y-1/2 -translate-x-1/3"></div>

      <div className="container mx-auto max-w-5xl relative z-10 px-6">
        <AnimatedSection delay={0.1} direction="up">
          <div className="text-center flex flex-col items-center">

            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-slate-200 shadow-sm mb-8">
              <span className="w-2 h-2 rounded-full bg-pink-500 animate-pulse"></span>
              <span className="text-[11px] font-bold capitalize tracking-widest text-slate-600">Our Story & Vision</span>
            </div>

            <h1 className="text-5xl md:text-7xl font-black text-slate-900 leading-[1.1] mb-8 tracking-tight capitalize">
              Pioneering <br className="hidden md:block" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-600 to-orange-500">Software Excellence</span>
            </h1>

            <p className="text-lg md:text-xl text-slate-500 leading-relaxed max-w-3xl mx-auto mb-12">
              We architect robust digital ecosystems. A fusion of technical mastery and strategic design, crafted to empower your business with future-proof solutions.
            </p>

            <div className="flex flex-col sm:flex-row items-center gap-4 justify-center w-full sm:w-auto">
              <button className="w-full sm:w-auto px-8 py-4 bg-slate-900 text-white rounded-xl text-sm font-bold capitalize tracking-wider hover:bg-slate-800 transition-colors shadow-xl flex items-center justify-center gap-3">
                Our Philosophy <FaArrowRight />
              </button>
              <button className="w-full sm:w-auto px-8 py-4 bg-white border border-slate-200 text-slate-900 rounded-xl text-sm font-bold capitalize tracking-wider hover:border-pink-500 hover:text-pink-600 transition-colors shadow-sm">
                Join The Journey
              </button>
            </div>

          </div>
        </AnimatedSection>

        {/* Simple Stats/Trust Strip */}
        <AnimatedSection delay={0.3} direction="up">
          <div className="mt-20 pt-10 border-t border-slate-200 grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <h3 className="text-4xl font-black text-slate-900 mb-1">10+</h3>
              <p className="text-[10px] font-bold text-slate-500 capitalize tracking-widest">Years Exp.</p>
            </div>
            <div className="text-center">
              <h3 className="text-4xl font-black text-slate-900 mb-1">500+</h3>
              <p className="text-[10px] font-bold text-slate-500 capitalize tracking-widest">Projects</p>
            </div>
            <div className="text-center">
              <h3 className="text-4xl font-black text-slate-900 mb-1">50+</h3>
              <p className="text-[10px] font-bold text-slate-500 capitalize tracking-widest">Experts</p>
            </div>
            <div className="text-center">
              <h3 className="text-4xl font-black text-slate-900 mb-1">99%</h3>
              <p className="text-[10px] font-bold text-slate-500 capitalize tracking-widest">Client Retention</p>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default AboutHero;
