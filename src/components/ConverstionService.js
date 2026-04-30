"use client";
import React from 'react';
import { FiCode, FiLayers, FiMail, FiArrowRight, FiCheckCircle } from 'react-icons/fi';

const ConverstionService = () => {
  const services = [
    {
      id: 1,
      title: "PSD to HTML",
      description: "Pixel-perfect, W3C validated HTML conversion from your layered PSD designs with semantic structure.",
      icon: <FiCode />,
      color: "from-[#FF1F8E] to-[#FF0055]",
      features: ["Responsive Design", "SEO Optimized", "Fast Loading"]
    },
    {
      id: 2,
      title: "Sketch to HTML",
      description: "Clean, well-commented code that brings your Sketch prototypes to life with precision and speed.",
      icon: <FiLayers />,
      color: "from-[#FF0055] to-[#D400CC]",
      features: ["Cross-browser", "Modern CSS", "Interactive UI"]
    },
    {
      id: 3,
      title: "Email Templates",
      description: "High-conversion email templates that render flawlessly across all major email clients and devices.",
      icon: <FiMail />,
      color: "from-[#D400CC] to-[#8E2DE2]",
      features: ["Mobile-First", "Dark Mode Support", "Clean Code"]
    }
  ];

  return (
    <section className="py-20 md:py-24 bg-white relative overflow-hidden font-roboto">
      {/* Background Ambience */}
      <div className="absolute top-1/4 left-0 w-[800px] h-[800px] bg-[#FF1F8E]/5 rounded-full blur-[150px] pointer-events-none" />

      <div className="container mx-auto px-6  relative z-10">
        {/* Header Block */}
        <div className="flex flex-col items-center text-center mb-20">
          <div className="max-w-3xl">
            <div className="flex items-center justify-center gap-4 mb-6">
              <div className="w-10 h-[2px] bg-[#FF1F8E]"></div>
              <span className="text-[11px] font-bold tracking-[0.3em] text-[#FF1F8E] uppercase">Conversion Experts</span>
              <div className="w-10 h-[2px] bg-[#FF1F8E]"></div>
            </div>

            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-slate-900 leading-none tracking-tighter mb-8">
              Premium <span className="text-[#FF1F8E]">Markup Services</span>
            </h2>

            <div>
              <p className="text-lg text-slate-500 max-w-xl mx-auto leading-relaxed font-medium">
                We transform your designs into high-performance, pixel-perfect code that scales.
              </p>
            </div>
          </div>
        </div>

        {/* Services Grid */}
        <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-8">
          {services.map((service) => (
            <div
              key={service.id}
              className="group bg-white border border-slate-100 p-10 rounded-[2.5rem] hover:border-[#FF1F8E]/20 transition-all duration-500 shadow-sm hover:shadow-xl"
            >
              <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${service.color} flex items-center justify-center text-white text-xl mb-8 shadow-lg group-hover:scale-110 transition-transform`}>
                {service.icon}
              </div>

              <h3 className="text-2xl font-black text-slate-900 mb-6 group-hover:text-[#FF1F8E] transition-colors">{service.title}</h3>

              <p className="text-slate-500 mb-8 leading-relaxed font-medium text-sm">
                {service.description}
              </p>

              <div className="space-y-3 mb-10">
                {service.features.map((feature, i) => (
                  <div key={i} className="flex items-center gap-3 text-slate-400 group-hover:text-slate-600 transition-colors">
                    <FiCheckCircle className="text-[#FF1F8E]" />
                    <span className="text-[11px] font-bold uppercase tracking-widest">{feature}</span>
                  </div>
                ))}
              </div>

              <button className="flex items-center gap-3 text-[10px] font-black uppercase tracking-widest text-[#FF1F8E] hover:gap-5 transition-all">
                Learn More <FiArrowRight />
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ConverstionService;
