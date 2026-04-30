"use client";
import React from 'react';
import { FiCode, FiLayers, FiMail } from 'react-icons/fi';
import { FaArrowRight } from 'react-icons/fa';

const Services = () => {
  const servicesData = [
    {
      id: 1,
      title: 'PSD to HTML',
      subTitle: 'Premium Conversion',
      description: 'We deliver high-performance, SEO-friendly HTML markups from your layered PSD files with pixel-perfect precision.',
      buttonText: 'Order Now',
      icon: <FiCode />,
      color: 'from-[#FF1F8E] to-[#FF0055]'
    },
    {
      id: 2,
      title: 'Sketch to HTML',
      subTitle: 'Modern Workflow',
      description: 'W3C validated and fast-loading HTML markups meticulously crafted from your Sketch application designs.',
      buttonText: 'Order Now',
      icon: <FiLayers />,
      color: 'from-[#FF0055] to-[#D400CC]'
    },
    {
      id: 3,
      title: 'Email Templates',
      subTitle: 'Responsive Campaigns',
      description: 'Responsive email template conversions ensuring great readability and cross-client compatibility.',
      buttonText: 'Order Now',
      icon: <FiMail />,
      color: 'from-[#D400CC] to-[#8E2DE2]'
    }
  ];

  return (
    <section className="py-20 md:py-24 relative z-10 px-6 font-roboto bg-white overflow-hidden">
      {/* Background Ambience */}
      <div className="absolute top-0 left-1/4 w-[800px] h-[800px] bg-[#FF1F8E]/5 rounded-full blur-[150px] pointer-events-none" />

      <div className="container mx-auto px-6  relative z-10">
        {/* Header Section */}
        <div className="flex flex-col items-center text-center mb-20">
          <div className="">
            <div className="flex items-center justify-center gap-4 mb-6">
              <div className="w-10 h-[2px] bg-[#FF1F8E]"></div>
              <span className="text-[11px] font-bold tracking-[0.3em] text-[#FF1F8E] uppercase">Core Capabilities</span>
              <div className="w-10 h-[2px] bg-[#FF1F8E]"></div>
            </div>

            <h2 className="text-4xl md:text-5xl lg:text-7xl font-black text-slate-900 leading-[1.1] mb-10 tracking-tighter">
              Smart <span className="text-[#FF1F8E]"> Services</span> <br />
              Digital Growth
            </h2>

            <p className="text-slate-500 text-lg md:text-xl max-w-2xl mx-auto font-medium leading-relaxed">
              A high-performance workflow engineered to transform ambitious concepts into global digital leaders.
            </p>
          </div>
        </div>

        <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-8">
          {servicesData.map((service, idx) => (
            <div
              key={service.id}
              className="group bg-white border border-slate-100 p-10 rounded-[2.5rem] hover:border-[#FF1F8E]/20 transition-all duration-500 shadow-sm hover:shadow-xl flex flex-col h-full"
            >
              <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${service.color} flex items-center justify-center text-white text-xl mb-8 shadow-lg group-hover:scale-110 transition-transform`}>
                {service.icon}
              </div>

              <div className="mb-4">
                <span className="text-[10px] font-black text-[#FF1F8E] uppercase tracking-[0.2em] mb-2 block opacity-80">
                  {service.subTitle}
                </span>
                <h3 className="text-2xl font-black text-slate-900 group-hover:text-[#FF1F8E] transition-colors leading-tight">
                  {service.title}
                </h3>
              </div>

              <p className="text-slate-500 text-sm leading-relaxed mb-8 flex-grow font-medium">
                {service.description}
              </p>

              <button className="flex items-center gap-3 text-[10px] font-black uppercase tracking-widest text-[#FF1F8E] hover:gap-5 transition-all mt-auto">
                {service.buttonText} <FaArrowRight />
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
