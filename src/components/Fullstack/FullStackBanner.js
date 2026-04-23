import React from 'react';
import mobileapp from "@/components/img/mobile_app_development2.png";
import Image from 'next/image';
import AnimatedSection from '../AnimatedSection';

const FullStackBanner = () => {
  return (
    <section className="py-16 md:py-24 bg-white relative z-10 px-6 overflow-hidden font-roboto">
      {/* Decorative background glows */}
      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-orange-50 rounded-full blur-[120px] -translate-y-1/2 -translate-x-1/4 pointer-events-none"></div>
      
      <div className="container mx-auto max-w-7xl relative z-10">
        <AnimatedSection delay={0.1} direction="up">
          <div className="flex flex-col lg:flex-row gap-16 items-center">
            
            {/* Left Content */}
            <div className="lg:w-3/5">
              <div className="mb-10 text-center lg:text-left">
                <span className="inline-block px-4 py-1.5 rounded-full bg-slate-50 border border-slate-100 text-pink-500 font-bold text-[10px] tracking-widest uppercase mb-6 shadow-sm">
                  End-to-End Excellence
                </span>
                <h1 className="text-4xl md:text-6xl font-black leading-tight text-slate-900 mb-8 tracking-tight uppercase">
                  Premium <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-orange-500">Full Stack</span> Development
                </h1>
                <p className="text-slate-500 text-lg md:text-xl leading-relaxed mb-10 max-w-2xl">
                  We help enterprises with full-stack mobile app development, web development, and custom software. Our developers have in-depth experience in both backend & frontend technologies.
                </p>
                <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
                    <button className="px-8 py-4 bg-gradient-to-r from-pink-600 to-orange-500 text-white rounded-2xl text-[11px] font-black uppercase tracking-[0.2em] shadow-lg shadow-pink-600/20 hover:shadow-pink-600/40 hover:-translate-y-1 transition-all duration-300">
                        Start Your Project
                    </button>
                    <button className="px-8 py-4 bg-white border border-slate-200 text-slate-900 rounded-2xl text-[11px] font-black uppercase tracking-[0.2em] shadow-sm hover:border-pink-500 transition-all duration-300">
                        Our Process
                    </button>
                </div>
              </div>
            </div>

            {/* Right Image */}
            <div className="lg:w-2/5 flex justify-center">
              <div className="relative group">
                <div className="absolute inset-0 bg-gradient-to-br from-pink-500/20 to-orange-500/20 rounded-[3rem] blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                <div className="relative p-8 bg-slate-50 rounded-[3rem] border border-slate-100 shadow-2xl transform group-hover:-translate-y-2 transition-all duration-500">
                  <Image src={mobileapp} alt="Full Stack Development" className="w-full h-auto max-w-[300px]" />
                </div>
              </div>
            </div>

          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default FullStackBanner;
