"use client";
import React from 'react';
import AnimatedSection from '../AnimatedSection';
import { FaHistory, FaBullseye, FaLightbulb, FaAward } from 'react-icons/fa';

const AboutStory = () => {
  const storyPoints = [
    { icon: <FaHistory />, title: "Our Heritage", text: "Founded in 2005, evolved into a global digital powerhouse." },
    { icon: <FaBullseye />, title: "Our Mission", text: "To empower brands with future-proof digital architectures." },
    { icon: <FaLightbulb />, title: "Our Vision", text: "Defining the standard for high-end web experiences." },
    { icon: <FaAward />, title: "Quality First", text: "Zero compromise on performance and user experience." }
  ];

  return (
    <section className="py-24 bg-white px-6 font-roboto">
      <div className="container mx-auto max-w-5xl">
        <div className="flex flex-col md:flex-row gap-16 items-start">

          <div className="md:w-1/2">
            <AnimatedSection delay={0.1} direction="up">
              <span className="text-[10px] font-bold tracking-widest capitalize text-pink-600 mb-4 block">
                Beyond The Code
              </span>
              <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-6 leading-tight capitalize">
                A Legacy of <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-600 to-orange-500">Pure Innovation</span>
              </h2>
              <p className="text-slate-500 text-lg leading-relaxed">
                Founded with a vision to bridge the gap between technical complexity and human intuition, Webstep Solutions has spent the last two decades transforming ambitious ideas into digital reality.
              </p>
            </AnimatedSection>
          </div>

          <div className="md:w-1/2">
            <AnimatedSection delay={0.2} direction="up">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                {storyPoints.map((item, index) => (
                  <div key={index} className="flex flex-col">
                    <div className="w-12 h-12 rounded-xl bg-slate-50 border border-slate-100 flex items-center justify-center text-pink-600 mb-4">
                      {item.icon}
                    </div>
                    <h6 className="font-bold text-slate-900 text-sm capitalize tracking-wider mb-2">{item.title}</h6>
                    <p className="text-slate-500 text-sm leading-relaxed">{item.text}</p>
                  </div>
                ))}
              </div>
            </AnimatedSection>
          </div>

        </div>
      </div>
    </section>
  );
};

export default AboutStory;
