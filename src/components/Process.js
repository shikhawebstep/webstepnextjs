"use client";
import React, { useRef } from 'react';
import Image from 'next/image';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import {
  FaSearch,
  FaPenNib,
  FaCode,
  FaRocket,
  FaCog
} from 'react-icons/fa';
import processimg from "@/components/img/img1.png";

const Process = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const scaleY = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  const developmentProcess = [
    {
      id: '01',
      title: 'Discovery',
      description: 'Understanding the underlying concept and target audience to lay a solid foundation.',
      icon: <FaSearch className="w-6 h-6" />,
      color: "from-pink-500 to-rose-500"
    },
    {
      id: '02',
      title: 'Design',
      description: 'Creating intuitive wireframes and refining them on the basis of your valuable feedback.',
      icon: <FaPenNib className="w-6 h-6" />,
      color: "from-rose-500 to-orange-500"
    },
    {
      id: '03',
      title: 'Build',
      description: 'Developing robust, scalable functionality using state-of-the-art modern technologies.',
      icon: <FaCode className="w-6 h-6" />,
      color: "from-orange-500 to-amber-500"
    },
    {
      id: '04',
      title: 'Launch',
      description: 'Thoroughly testing the product to ensure a flawless end-user experience before launch.',
      icon: <FaRocket className="w-6 h-6" />,
      color: "from-amber-500 to-yellow-500"
    },
    {
      id: '05',
      title: 'Maintain',
      description: 'Adding new functionalities and providing ongoing support for continuous success.',
      icon: <FaCog className="w-6 h-6" />,
      color: "from-yellow-500 to-emerald-500"
    },
  ];

  return (
    <section ref={containerRef} className="py-24  bg-slate-50 text-slate-900 relative overflow-hidden font-roboto">
      {/* Decorative Background Elements */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-[-10%] left-[-5%] w-[400px] h-[400px] rounded-full bg-pink-100/50 blur-[120px] animate-pulse" />
        <div className="absolute bottom-[10%] right-[-5%] w-[350px] h-[350px] rounded-full bg-orange-50/50 blur-[100px] animate-pulse [animation-delay:2s]" />

        {/* Grid texture */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              'linear-gradient(rgba(0,0,0,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(0,0,0,0.1) 1px, transparent 1px)',
            backgroundSize: '48px 48px',
          }}
        />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center mb-24">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-block px-4 py-1.5 mb-6 text-[10px] font-bold tracking-[0.2em] text-pink-500 capitalize bg-white border border-slate-100 rounded-full shadow-sm"
          >
            Our Methodology
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-5xl md:text-7xl font-black text-slate-900 tracking-tight"
          >
            Workflow <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-orange-500">Excellence</span>
          </motion.h2>
        </div>

        <div className="flex flex-col lg:flex-row gap-20 items-start">
          {/* Timeline side */}
          <div className="w-full lg:w-3/5 relative">
            {/* Main Vertical Track */}
            <div className="absolute left-[40px] top-6 bottom-6 w-[2px] bg-slate-200 hidden md:block"></div>

            {/* Animated Progress Line */}
            <motion.div
              style={{ scaleY, originY: 0 }}
              className="absolute left-[40px] top-6 bottom-6 w-[2px] bg-gradient-to-b from-pink-500 via-orange-500 to-amber-500 hidden md:block z-10"
            />

            <div className="space-y-12">
              {developmentProcess.map((step, index) => (
                <motion.div
                  key={step.id}
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="relative flex flex-col md:flex-row gap-8 md:gap-12 items-start group"
                >
                  {/* Icon Container */}
                  <div className="flex-shrink-0 z-20 relative">
                    <motion.div
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      className={`w-20 h-20 rounded-2xl bg-white border border-slate-100 shadow-xl flex items-center justify-center relative overflow-hidden group-hover:border-pink-500/50 transition-all duration-500`}
                    >
                      <div className={`absolute inset-0 bg-gradient-to-br ${step.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}></div>
                      <span className="text-2xl font-black text-slate-100 absolute -bottom-2 -right-1 leading-none select-none group-hover:text-pink-500/10 transition-colors">
                        {step.id}
                      </span>
                      <div className="text-pink-500 group-hover:text-pink-600 group-hover:scale-110 transition-all duration-500 relative z-10">
                        {step.icon}
                      </div>
                    </motion.div>
                  </div>

                  {/* Content Card */}
                  <motion.div
                    whileHover={{ y: -5 }}
                    className="flex-1 bg-white p-8 md:p-10 rounded-[2rem] border border-slate-100 shadow-xl hover:shadow-2xl hover:border-pink-500/10 transition-all duration-500 relative overflow-hidden group/card"
                  >
                    <div className={`absolute top-0 left-0 w-1 h-full bg-gradient-to-b ${step.color} opacity-0 group-hover/card:opacity-100 transition-opacity duration-500`}></div>
                    <h3 className="text-2xl font-bold text-slate-900 mb-4 flex items-center gap-3">
                      {step.title}
                      <span className="h-px flex-1 bg-slate-100 group-hover/card:bg-pink-500/20 transition-colors duration-500"></span>
                    </h3>
                    <p className="text-slate-600 leading-relaxed text-lg group-hover:text-slate-800 transition-colors">
                      {step.description}
                    </p>
                  </motion.div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Sticky Image Side */}
          <div className="w-full lg:w-2/5 lg:sticky lg:top-32">
            <motion.div
              initial={{ opacity: 0, scale: 0.92 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative group"
            >
              {/* === LAYER 1: Deep ambient glow === */}
              <div className="absolute -inset-8 bg-gradient-to-br from-pink-500/10 via-transparent to-orange-500/10 blur-[80px] rounded-full opacity-60 group-hover:opacity-100 transition-opacity duration-1000" />

              {/* === LAYER 2: Rotating border ring === */}
              <div className="absolute -inset-3 rounded-[3rem] border border-dashed border-pink-500/10 animate-spin" style={{ animationDuration: "20s" }} />
              <div className="absolute -inset-6 rounded-[3.5rem] border border-dashed border-orange-500/10 animate-spin" style={{ animationDuration: "30s", animationDirection: "reverse" }} />

              {/* === LAYER 3: Main image frame === */}
              <div className="relative z-10 rounded-[2.5rem] overflow-hidden border border-slate-200 shadow-2xl group-hover:border-pink-500/20 transition-colors duration-700">
                <Image
                  src={processimg}
                  alt="Process Illustration"
                  className="w-full h-auto block transform group-hover:scale-[1.04] transition-transform duration-[800ms] ease-out"
                  priority
                />
              </div>

              {/* === LAYER 5: Floating stat cards === */}

              {/* Success Rate badge — bottom left */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -bottom-6 -left-6 bg-white p-5 rounded-2xl shadow-2xl border border-slate-100 z-30 hover:border-pink-500/40 transition-colors group/badge"
              >
                <div className="flex items-center gap-4">
                  <div className="w-11 h-11 rounded-full bg-gradient-to-br from-pink-500/10 to-rose-500/5 flex items-center justify-center text-pink-500 border border-pink-500/10 group-hover/badge:border-pink-500/30 transition-colors">
                    <FaRocket className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-[9px] text-slate-400 capitalize tracking-[0.2em] font-bold">Success Rate</p>
                    <p className="text-xl font-black text-slate-900">99.9%</p>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Process;




