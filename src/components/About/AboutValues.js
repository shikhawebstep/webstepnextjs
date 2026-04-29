"use client";
import React from 'react';
import AnimatedSection from '../AnimatedSection';
import { FiCpu, FiUsers, FiAward, FiZap } from 'react-icons/fi';

const AboutValues = () => {
  const values = [
    {
      icon: <FiCpu className="text-2xl" />,
      title: "Technology First",
      desc: "We leverage the latest tech stacks to ensure performance and scalability."
    },
    {
      icon: <FiUsers className="text-2xl" />,
      title: "Client-Centric",
      desc: "Your goals are ours. We build partnerships, not just projects."
    },
    {
      icon: <FiAward className="text-2xl" />,
      title: "Quality Obsessed",
      desc: "From pixel-perfect UI to clean, maintainable code."
    },
    {
      icon: <FiZap className="text-2xl" />,
      title: "Agile Approach",
      desc: "Speed and flexibility are at the heart of our development process."
    }
  ];

  return (
    <section className="py-24 bg-slate-50 px-6 font-roboto">
      <div className="container mx-auto max-w-5xl">
        <AnimatedSection delay={0} direction="up" className="text-center mb-16">
          <span className="text-[10px] font-bold tracking-widest capitalize text-slate-500 mb-4 block">
            Our Foundation
          </span>
          <h2 className="text-4xl md:text-5xl font-black text-slate-900 capitalize tracking-tight">
            The <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-600 to-orange-500">Values</span> That Define Us
          </h2>
        </AnimatedSection>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {values.map((val, index) => (
            <AnimatedSection key={index} delay={0.1 * index} direction="up">
              <div className="p-8 bg-white rounded-2xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow h-full">
                <div className="w-12 h-12 rounded-xl bg-pink-50 flex items-center justify-center text-pink-600 mb-6">
                  {val.icon}
                </div>
                <h4 className="text-lg font-bold text-slate-900 mb-3">
                  {val.title}
                </h4>
                <p className="text-slate-500 text-sm leading-relaxed">
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
