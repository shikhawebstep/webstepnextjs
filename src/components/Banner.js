"use client"
import React from 'react';
import { motion } from 'framer-motion';

const Banner = () => {
  const marqueeItems = [
    'Enterprise Software', 'Full Stack Development', 'UI/UX Excellence',
    'Mobile Innovations', 'Cloud Solutions', 'Digital Transformation',
  ];
  const doubled = [...marqueeItems, ...marqueeItems];

  return (
    <section className="relative w-full min-h-screen flex flex-col overflow-hidden bg-white text-slate-900 font-roboto">

      {/* Advanced Ambient Background */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-[-10%] right-[-5%] w-[60%] h-[60%] rounded-full bg-gradient-to-br from-pink-500/10 to-orange-500/10 blur-[120px] animate-pulse" />
        <div className="absolute bottom-[-10%] left-[-5%] w-[50%] h-[50%] rounded-full bg-gradient-to-tr from-blue-500/10 to-pink-500/10 blur-[120px] [animation-delay:2s] animate-pulse" />

        {/* Animated Gradient Lines */}
        <div className="absolute inset-0 opacity-[0.05]" style={{ backgroundImage: 'radial-gradient(#000 0.5px, transparent 0.5px)', backgroundSize: '32px 32px' }}></div>
      </div>

      {/* Top Marquee */}
      <div className="relative z-10 w-full overflow-hidden border-b border-slate-100 bg-white/50 backdrop-blur-sm py-3">
        <motion.div
          className="flex w-max"
          animate={{ x: ['0%', '-50%'] }}
          transition={{ duration: 30, ease: 'linear', repeat: Infinity }}
        >
          {doubled.map((item, i) => (
            <span
              key={i}
              className="font-mono text-[9px] tracking-[0.3em] capitalize text-slate-400 px-12 whitespace-nowrap flex items-center gap-3"
            >
              {item}
              <div className="w-1 h-1 rounded-full bg-pink-500" />
            </span>
          ))}
        </motion.div>
      </div>

      {/* Main Content Area */}
      <div className="relative z-10 flex-1 flex flex-col items-center justify-center text-center px-6 md:px-12 py-20 max-w-7xl mx-auto">

        {/* Floating Accent */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="mb-10 inline-flex items-center gap-3 px-6 py-2 rounded-full bg-slate-900 text-white shadow-2xl shadow-slate-900/20"
        >
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-pink-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-pink-500"></span>
          </span>
          <span className="text-[9px] font-black capitalize tracking-[0.4em]">Defining The Next Standard</span>
        </motion.div>

        {/* Headline with Nunito */}
        <div className="relative mb-10">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="font-heading text-6xl md:text-8xl lg:text-9xl font-black text-slate-900 leading-[0.9] tracking-tighter capitalize"
          >
            Crafting <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-600 via-orange-500 to-amber-500">
              Digital Legacy
            </span>
          </motion.h1>

          {/* Decorative background text */}
          <span className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[15vw] font-black text-slate-50 opacity-[0.02] pointer-events-none select-none capitalize -z-10 tracking-tighter">
            Innovation
          </span>
        </div>

        {/* Sub-headline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="text-lg md:text-xl text-slate-500 max-w-2xl mx-auto leading-relaxed mb-12 font-light"
        >
          A high-performance technology partner for industry leaders. We build scalable software architectures that redefine user experience.
        </motion.p>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
          className="flex flex-col sm:flex-row gap-6 items-center"
        >
          <button className="group relative px-12 py-5 bg-slate-900 text-white rounded-2xl text-[11px] font-black capitalize tracking-[0.3em] overflow-hidden shadow-2xl shadow-slate-900/20 hover:-translate-y-1 transition-all duration-500">
            <span className="relative z-10">Start Your Project</span>
            <div className="absolute inset-0 bg-gradient-to-r from-pink-600 to-orange-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
          </button>

          <button className="px-12 py-5 bg-white border border-slate-200 text-slate-900 rounded-2xl text-[11px] font-black capitalize tracking-[0.3em] hover:border-pink-500 hover:text-pink-600 transition-all duration-300">
            View Case Studies
          </button>
        </motion.div>
      </div>

      {/* Stats Board */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className="relative z-10 w-full max-w-7xl mx-auto px-6 mb-12"
      >
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 p-4 bg-white/40 backdrop-blur-3xl rounded-[3rem] border border-white/50 shadow-2xl">
          {[
            { num: '500+', label: 'Digital Products' },
            { num: '99%', label: 'Client Success' },
            { num: '20+', label: 'Years Experience' },
            { num: '150+', label: 'Team Experts' },
          ].map((stat, i) => (
            <div
              key={i}
              className="py-10 text-center relative group"
            >
              <span className="block font-heading text-4xl md:text-5xl font-black text-slate-900 mb-2 group-hover:scale-110 transition-transform duration-500">
                {stat.num}
              </span>
              <span className="block font-mono text-[8px] tracking-[0.3em] capitalize text-slate-400">
                {stat.label}
              </span>
              {i < 3 && <div className="absolute right-0 top-1/2 -translate-y-1/2 h-12 w-px bg-slate-100 hidden md:block" />}
            </div>
          ))}
        </div>
      </motion.div>

    </section>
  );
};

export default Banner;
