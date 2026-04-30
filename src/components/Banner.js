"use client";
import React from 'react';
import { Code, Terminal, Cpu, Cloud, Smartphone, Layers, Rocket, Shield, Zap } from 'lucide-react';

const Banner = () => {
  const tickerItems = [
    'Enterprise Software', 'Full Stack Development', 'UI/UX Excellence',
    'Mobile Innovations', 'Cloud Solutions', 'Digital Transformation',
  ];
  const doubled = [...tickerItems, ...tickerItems];

  const stats = [
    { num: '500', suffix: '+', label: 'Digital Products' },
    { num: '99', suffix: '%', label: 'Success Rate' },
    { num: '20', suffix: '+', label: 'Years Experience' },
    { num: '150', suffix: '+', label: 'Team Experts' },
  ];

  const floatingIcons = [
    { Icon: Code, top: '15%', left: '8%', color: '#FF1F8E', size: 32 },
    { Icon: Terminal, top: '45%', left: '12%', color: '#D400CC', size: 24 },
    { Icon: Cpu, top: '70%', left: '10%', color: '#FF1F8E', size: 28 },
    { Icon: Zap, top: '25%', left: '20%', color: '#D400CC', size: 20 },
    
    { Icon: Cloud, top: '20%', right: '10%', color: '#D400CC', size: 36 },
    { Icon: Smartphone, top: '50%', right: '14%', color: '#FF1F8E', size: 30 },
    { Icon: Layers, top: '75%', right: '12%', color: '#D400CC', size: 34 },
    { Icon: Rocket, top: '35%', right: '22%', color: '#FF1F8E', size: 22 },
  ];

  return (
    <section className="relative min-h-[85vh] flex flex-col justify-center overflow-hidden font-roboto pt-24 pb-20 bg-white">

      {/* ── Background Effects ── */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-[-10%] left-[-5%] w-[800px] h-[800px] bg-[#FF1F8E]/5 rounded-full blur-[150px]" />
        <div className="absolute bottom-[-10%] right-[-5%] w-[800px] h-[800px] bg-[#D400CC]/5 rounded-full blur-[150px]" />

        {/* Subtle Grid Accent */}
        <div className="absolute inset-0 opacity-[0.03]"
          style={{ backgroundImage: 'linear-gradient(#000000 1px, transparent 1px), linear-gradient(90deg, #000000 1px, transparent 1px)', backgroundSize: '60px 60px' }} />

        {/* Floating Icons */}
        <div className="hidden lg:block">
          {floatingIcons.map((item, idx) => (
            <div
              key={idx}
              className="absolute opacity-[0.15]"
              style={{
                top: item.top,
                left: item.left,
                right: item.right,
              }}
            >
              <item.Icon size={item.size} color={item.color} strokeWidth={1.5} />
            </div>
          ))}
        </div>
      </div>

      <div className="container mx-auto px-6 py-20 relative z-10 flex flex-col items-center text-center">

        {/* Badge */}
        <div className="inline-flex items-center gap-3 px-5 py-2.5 rounded-xl bg-slate-50 border border-slate-100 text-[#FF1F8E] font-bold text-[10px] tracking-[0.3em] uppercase mb-10 shadow-sm">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#FF1F8E] opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-[#FF1F8E]"></span>
          </span>
          Engineering the future
        </div>

        {/* Headline */}
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-black text-slate-900 tracking-tight leading-[1.1] mb-8">
          Crafting <br />
          <span className="text-[#FF1F8E]">Digital Legacy</span>
        </h1>

        {/* Subheadline */}
        <p className="text-slate-500 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed mb-12 font-medium"
        >
          A high-performance technology partner for industry leaders. We build scalable software architectures that redefine user experience and drive growth.
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row items-center gap-5 mb-16"
        >
          <button className="group relative px-10 py-5 bg-gradient-to-r from-[#FF1F8E] to-[#FF0055] text-white rounded-2xl font-bold text-[11px] tracking-[0.2em] uppercase overflow-hidden shadow-[0_15px_35px_rgba(255,31,142,0.3)] hover:shadow-[0_20px_40px_rgba(255,31,142,0.4)] hover:-translate-y-1 transition-all duration-300">
            <span className="relative z-10">Start Your Project</span>
          </button>

          <button className="px-10 py-5 rounded-2xl bg-white border border-slate-200 text-slate-900 font-bold text-[11px] tracking-[0.2em] uppercase hover:bg-slate-50 transition-all duration-300 hover:-translate-y-1">
            View Case Studies
          </button>
        </div>

        {/* Stats Row */}
        <div className="w-full max-w-5xl grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((s, i) => (
            <div
              key={i}
              className="group bg-slate-50/50 border border-slate-100 rounded-3xl p-8 hover:border-[#FF1F8E]/20 transition-all duration-500 shadow-sm"
            >
              <span className="text-4xl md:text-5xl font-black text-slate-900 mb-2 block">
                {s.num}<span className="text-[#FF1F8E]">{s.suffix}</span>
              </span>
              <span className="text-[9px] font-bold tracking-[0.2em] uppercase text-slate-400">
                {s.label}
              </span>
            </div>
          ))}
        </div>

      </div>

      {/* Ticker Banner */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden bg-slate-50/50 border-t border-slate-100 py-5 z-20">
        <div className="flex w-max animate-ticker">
          {doubled.map((item, i) => (
            <span
              key={i}
              className="text-[10px] font-bold tracking-[0.3em] uppercase text-slate-300 whitespace-nowrap px-10 flex items-center gap-8"
            >
              {item}
              <div className="w-1.5 h-1.5 rounded-full bg-[#FF1F8E]/20" />
            </span>
          ))}
        </div>
      </div>

      <style>{`
        @keyframes ticker {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-ticker { animation: ticker 40s linear infinite; }
      `}</style>

    </section>
  );
};

export default Banner;