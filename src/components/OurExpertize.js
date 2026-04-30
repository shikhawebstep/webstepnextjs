"use client";
import React from 'react';
import { FaApple, FaAndroid } from 'react-icons/fa';
import { FiMonitor, FiShoppingCart, FiCpu, FiTrendingUp, FiPieChart, FiSettings, FiArrowRight } from 'react-icons/fi';

const OurExpertize = () => {
  const expertiseAreas = [
    {
      id: '01',
      icon: <FiMonitor />,
      title: 'Web App Development',
      desc: 'Building high-performance, scalable web ecosystems using cutting-edge stacks.',
      span: "lg:col-span-2"
    },
    {
      id: '02',
      icon: <FaApple />,
      title: 'iOS Solutions',
      desc: 'Native Apple experiences crafted for performance and elegance.',
      span: "lg:col-span-1"
    },
    {
      id: '03',
      icon: <FaAndroid />,
      title: 'Android Apps',
      desc: 'Dynamic Android development for a global mobile audience.',
      span: "lg:col-span-1"
    },
    {
      id: '04',
      icon: <FiShoppingCart />,
      title: 'E-Commerce',
      desc: 'High-conversion retail platforms engineered for seamless growth.',
      span: "lg:col-span-1"
    },
    {
      id: '05',
      icon: <FiCpu />,
      title: 'Tech Consultancy',
      desc: 'Strategic technology roadmaps to future-proof your digital presence.',
      span: "lg:col-span-2"
    },
    {
      id: '06',
      icon: <FiTrendingUp />,
      title: 'Digital Marketing',
      desc: 'Data-driven growth strategies that dominate the search landscape.',
      span: "lg:col-span-1"
    },
  ];

  return (
    <section className="py-20 md:py-24 bg-white relative z-10 px-6 font-roboto overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none opacity-[0.03]"
        style={{ backgroundImage: 'radial-gradient(#FF1F8E 0.5px, transparent 0.5px)', backgroundSize: '30px 30px' }} />
      <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-[#FF1F8E]/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="container mx-auto relative z-10">
        <div className="flex flex-col items-center text-center mb-20">
          <div className="max-w-3xl">
            <div className="flex items-center justify-center gap-4 mb-6">
              <div className="w-10 h-[2px] bg-[#FF1F8E]"></div>
              <span className="text-[11px] font-bold tracking-[0.3em] text-[#FF1F8E] uppercase">Engineering Mastery</span>
              <div className="w-10 h-[2px] bg-[#FF1F8E]"></div>
            </div>

            <h2 className="md:text-6xl text-5xl font-black text-slate-900 leading-[1.1] tracking-tighter mb-8">
              Powering Your
              <span className="text-[#FF1F8E]"> Digital Success</span>
            </h2>

            <div>
              <p className="text-lg text-slate-400 max-w-xl mx-auto leading-relaxed font-medium">
                We leverage elite technical stacks to build products that redefine market standards.
              </p>
            </div>
          </div>
        </div>

        <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-6">
          {expertiseAreas.map((area, idx) => (
            <div
              key={idx}
              className="relative bg-white border border-[#FF1F8E]/20 p-10 rounded-[3rem] shadow-xl overflow-hidden group hover:-translate-y-2 hover:shadow-2xl transition-all duration-500"
            >
              {/* Background Glow - Now visible by default, intensifies on hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#FF1F8E]/8 via-transparent to-transparent opacity-100 group-hover:from-[#FF1F8E]/15 transition-all duration-700" />

              {/* Number Badge - Now colored by default */}
              <span className="absolute top-8 right-10 text-6xl font-black text-[#FF1F8E]/10 select-none group-hover:text-[#FF1F8E]/20 transition-colors duration-700">
                {area.id}
              </span>

              <div className="relative z-10">
                {/* Icon Container - Now styled with pink background by default, scales on hover */}
                <div className="w-16 h-16 rounded-2xl bg-[#FF1F8E] border border-[#FF1F8E] flex items-center justify-center mb-10 text-white text-2xl shadow-lg scale-110 group-hover:scale-125 group-hover:rotate-6 transition-all duration-700">
                  {area.icon}
                </div>

                {/* Title - Now colored by default */}
                <h3 className="font-black text-2xl text-[#FF1F8E] mb-4 leading-tight transition-colors">
                  {area.title}
                </h3>

                {/* Description - Slightly darker for readability since it was hover state */}
                <p className="text-slate-600 text-sm leading-relaxed mb-10 font-medium transition-colors group-hover:text-slate-900">
                  {area.desc}
                </p>

                {/* Button - Now colored by default */}
                <button className="inline-flex items-center gap-3 text-[10px] font-black tracking-[0.2em] uppercase text-[#FF1F8E] transition-all duration-300">
                  Read More <FiArrowRight className="translate-x-2 group-hover:translate-x-4 transition-transform" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurExpertize;
