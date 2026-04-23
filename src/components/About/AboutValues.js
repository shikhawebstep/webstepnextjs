"use client";
import React from 'react';
import AnimatedSection from '../AnimatedSection';
import { FiCpu, FiUsers, FiAward, FiZap } from 'react-icons/fi';

const AboutValues = () => {
  const values = [
    {
      icon: <FiCpu className="text-3xl" />,
      title: "Technology First",
      desc: "We leverage the latest tech stacks to ensure performance and scalability.",
      gradient: "from-pink-500 to-rose-500"
    },
    {
      icon: <FiUsers className="text-3xl" />,
      title: "Client-Centric",
      desc: "Your goals are ours. We build partnerships, not just projects.",
      gradient: "from-purple-500 to-indigo-500"
    },
    {
      icon: <FiAward className="text-3xl" />,
      title: "Quality Obsessed",
      desc: "From pixel-perfect UI to clean, maintainable code.",
      gradient: "from-orange-400 to-red-500"
    },
    {
      icon: <FiZap className="text-3xl" />,
      title: "Agile Approach",
      desc: "Speed and flexibility are at the heart of our development process.",
      gradient: "from-amber-400 to-orange-600"
    }
  ];

  return (
    <section className="py-16 md:py-24 bg-white relative z-10 px-6 font-roboto overflow-hidden">
      <div className="container mx-auto max-w-7xl relative z-10">
        <AnimatedSection delay={0} direction="up" className="text-center mb-20">
          <span className="font-mono text-[10px] tracking-[0.25em] uppercase text-slate-400 font-bold mb-4 block">
            Our Foundation
          </span>
          <h2 className="text-4xl md:text-5xl font-black text-slate-900 uppercase tracking-tight">
            The <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-orange-500">Values</span> That Define Us
          </h2>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((val, index) => (
            <AnimatedSection key={index} delay={0.1 * index} direction="up">
              <div className="group p-10 bg-white rounded-[2.5rem] border border-slate-100 shadow-xl hover:shadow-2xl hover:border-pink-500/20 transition-all duration-500 h-full relative overflow-hidden">
                <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl ${val.gradient} opacity-0 group-hover:opacity-5 blur-[40px] transition-opacity duration-500`}></div>
                
                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${val.gradient} flex items-center justify-center text-white mb-8 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                  {val.icon}
                </div>
                
                <h4 className="text-2xl font-bold text-slate-900 mb-4 tracking-wide group-hover:text-pink-600 transition-colors">
                  {val.title}
                </h4>
                <p className="text-slate-500 leading-relaxed">
                  {val.desc}
                </p>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutValues;
