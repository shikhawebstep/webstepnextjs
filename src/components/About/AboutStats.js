"use client";
import React from 'react';
import AnimatedSection from '../AnimatedSection';

const AboutStats = () => {
  const stats = [
    { num: "500+", label: "Projects Completed" },
    { num: "98%", label: "Client Retention" },
    { num: "50+", label: "Expert Engineers" },
    { num: "10+", label: "Years Experience" }
  ];

  return (
    <section className="py-24 bg-slate-900 relative z-10 px-6 overflow-hidden">
      {/* Background orbs */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-pink-500/10 rounded-full blur-[120px] translate-x-1/4 -translate-y-1/2"></div>
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-orange-500/10 rounded-full blur-[100px] -translate-x-1/4 translate-y-1/2"></div>

      <div className="container mx-auto max-w-7xl relative z-10">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          {stats.map((stat, index) => (
            <AnimatedSection key={index} delay={0.1 * index} direction="up" className="text-center">
              <span className="block text-5xl md:text-7xl font-black tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-orange-400 to-amber-500 mb-4 font-roboto">
                {stat.num}
              </span>
              <span className="font-mono text-[10px] tracking-[0.3em] uppercase text-slate-400 font-bold block">
                {stat.label}
              </span>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutStats;
