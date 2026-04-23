"use client";
import React from 'react'
import { motion, AnimatePresence } from 'framer-motion';
import { FiCheckCircle, FiPhone, FiMail } from 'react-icons/fi';
import Image from 'next/image';

const Design = () => {
    const designItems = ["Logo Design", "Brand Identity", "UI/UX Design", "Graphic Design"];
    const devItems = ["Social Media", "Print Design", "Packaging", "Illustration"];

    return (
        <section className="py-16 md:py-24 bg-white relative z-10 px-6 font-roboto">
            {/* Background Decorative Elements */}
            <div className="absolute inset-0 z-0 pointer-events-none">
                <div className="absolute top-[-10%] right-[-5%] w-[400px] h-[400px] rounded-full bg-pink-50/50 blur-[120px]" />
                <div className="absolute bottom-[-10%] left-[-5%] w-[400px] h-[400px] rounded-full bg-orange-50/50 blur-[120px]" />
            </div>

            <div className="container mx-auto relative z-10">
                <div className="flex flex-col md:flex-row items-center gap-16">

                    {/* Left Decorative Side */}
                    <div className="w-full md:w-1/2 relative hidden md:flex justify-center items-center">
                        <div className="relative w-80 h-80 lg:w-96 lg:h-96 flex items-center justify-center">

                            {/* Sparkles */}
                            {[
                                { top: "10%", left: "20%", delay: "0s" },
                                { top: "70%", left: "80%", delay: "1.2s" },
                                { top: "30%", left: "85%", delay: "2.4s" },
                                { top: "80%", left: "15%", delay: "0.8s" },
                            ].map((s, i) => (
                                <div key={i} className="absolute w-1 h-1 rounded-full bg-slate-300 animate-ping opacity-0"
                                    style={{ top: s.top, left: s.left, animationDelay: s.delay, animationDuration: "4s" }} />
                            ))}

                            {/* Ambient Glows */}
                            <div className="absolute top-0 right-0 w-56 h-56 bg-pink-500/10 rounded-full blur-[80px] animate-pulse" />
                            <div className="absolute bottom-0 left-0 w-56 h-56 bg-orange-500/10 rounded-full blur-[80px] animate-pulse" style={{ animationDelay: "1s" }} />

                            {/* Orbit Ring 1 */}
                            <div className="absolute w-80 h-80 rounded-full border border-dashed border-slate-200 animate-spin" style={{ animationDuration: "18s" }}>
                                <div className="absolute -top-1.5 left-1/2 -translate-x-1/2 w-3 h-3 rounded-full bg-gradient-to-br from-pink-500 to-orange-500 shadow-[0_0_12px_rgba(236,72,153,0.3)]" />
                            </div>

                            {/* Orbit Ring 2 */}
                            <div className="absolute w-64 h-64 rounded-full border border-dashed border-pink-500/5" style={{ animation: "spin 12s linear infinite reverse" }}>
                                <div className="absolute -bottom-1.5 left-1/2 -translate-x-1/2 w-3 h-3 rounded-full bg-gradient-to-br from-orange-500 to-pink-500 shadow-[0_0_12px_rgba(249,115,22,0.3)]" />
                            </div>

                            {/* Floating Cards */}
                            {[
                                { label: "UI / UX Design", cls: "top-4 -left-8", color: "#ec4899", anim: "float1", shadow: "rgba(236,72,153,0.2)" },
                                { label: "Mobile Apps", cls: "bottom-10 -left-10", color: "#a855f7", anim: "float2", shadow: "rgba(168,85,247,0.2)" },
                                { label: "Web Dev", cls: "top-8 -right-6", color: "#f97316", anim: "float3", shadow: "rgba(249,115,22,0.2)" },
                                { label: "DevOps", cls: "bottom-6 -right-4", color: "#22d3ee", anim: "float4", shadow: "rgba(34,211,238,0.2)" },
                            ].map((c, i) => (
                                <div key={i} className={`absolute ${c.cls} flex items-center gap-2 bg-white border border-slate-100 rounded-2xl px-4 py-3 text-slate-700 text-[11px] font-bold tracking-wider whitespace-nowrap shadow-xl hover:scale-105 hover:border-pink-500/20 transition-transform duration-300 z-20`}
                                    style={{ animation: `${c.anim} ${3.8 + i * 0.4}s ease-in-out infinite` }}>
                                    <div className="w-2 h-2 rounded-full flex-shrink-0" style={{ background: c.color, boxShadow: `0 0 8px ${c.shadow}` }} />
                                    {c.label}
                                </div>
                            ))}

                            {/* Center Glass Card */}
                            <div className="relative w-48 h-48 bg-white rounded-[2.5rem] border border-slate-100 shadow-2xl flex flex-col items-center justify-center gap-3 group hover:border-pink-500/30 transition-all duration-500 cursor-default z-10">

                                {/* Dot grid */}
                                <div className="absolute inset-0 rounded-[2.5rem] overflow-hidden pointer-events-none opacity-5"
                                    style={{ backgroundImage: "radial-gradient(circle, rgba(0,0,0,0.1) 1px, transparent 1px)", backgroundSize: "22px 22px" }} />

                                {/* Gradient overlay */}
                                <div className="absolute inset-0 bg-gradient-to-br from-pink-500/5 to-orange-500/5 rounded-[2.5rem] pointer-events-none" />

                                {/* Pencil Icon */}
                                <div className="relative w-14 h-14 flex items-center justify-center">
                                    <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-pink-500/5 to-orange-500/5 border border-pink-500/10" />
                                    <svg className="relative z-10" width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="url(#g1)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                                        style={{ animation: "wiggle 3s ease-in-out infinite" }}>
                                        <defs>
                                            <linearGradient id="g1" x1="0" y1="0" x2="1" y2="1">
                                                <stop offset="0%" stopColor="#ec4899" /><stop offset="100%" stopColor="#f97316" />
                                            </linearGradient>
                                        </defs>
                                        <path d="M12 20h9" /><path d="M16.5 3.5a2.121 2.121 0 013 3L7 19l-4 1 1-4L16.5 3.5z" />
                                    </svg>
                                </div>

                                {/* Label */}
                                <span className="font-roboto font-black text-xl tracking-widest text-transparent bg-clip-text bg-gradient-to-br from-pink-500 to-orange-500"
                                    style={{ animation: "labelPulse 3s ease-in-out infinite" }}>
                                    DESIGN
                                </span>

                                {/* Color Swatches */}
                                <div className="flex gap-1.5 mt-1">
                                    {["#ec4899", "#f97316", "#a855f7", "#22d3ee", "#eab308"].map((c, i) => (
                                        <div key={i} className="w-4 h-4 rounded-full border border-slate-100 hover:scale-125 transition-transform duration-200 cursor-pointer" style={{ background: c }} />
                                    ))}
                                </div>
                            </div>

                        </div>

                        {/* Keyframes */}
                        <style>{`
              @keyframes float1 { 0%,100%{transform:translateY(0)} 50%{transform:translateY(-10px)} }
              @keyframes float2 { 0%,100%{transform:translateY(0)} 50%{transform:translateY(8px)} }
              @keyframes float3 { 0%,100%{transform:translateY(-5px)} 50%{transform:translateY(6px)} }
              @keyframes float4 { 0%,100%{transform:translateY(4px)} 50%{transform:translateY(-8px)} }
              @keyframes wiggle  { 0%,100%{transform:rotate(-6deg)} 50%{transform:rotate(6deg)} }
              @keyframes labelPulse { 0%,100%{opacity:1} 50%{opacity:0.75} }
            `}</style>
                    </div>

                    {/* Right Content */}
                    <div className="w-full md:w-1/2 space-y-8 relative z-10">
                        <div>
                            <span className="inline-block px-4 py-1.5 rounded-full bg-slate-50 border border-slate-100 text-pink-500 font-bold text-[10px] tracking-widest uppercase mb-6 shadow-sm">Creative Solutions</span>
                            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-slate-900 leading-tight tracking-tight">
                                GRAPHIC DESIGNS
                            </h1>
                            <p className="text-slate-600 text-lg mt-6 leading-relaxed max-w-lg">
                                We craft beautiful, engaging, and highly functional designs that elevate your brand and provide seamless user experiences across all devices.
                            </p>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-6">
                            <ul className="space-y-5">
                                {designItems.map((item, idx) => (
                                    <li key={idx} className="flex items-center gap-4 text-slate-700 font-medium group">
                                        <div className="bg-slate-50 p-2 rounded-full border border-slate-100 group-hover:border-pink-500/50 group-hover:bg-pink-50 transition-all duration-300">
                                            <FiCheckCircle className="text-pink-500 text-lg flex-shrink-0" />
                                        </div>
                                        <span className="group-hover:text-pink-600 transition-colors">{item}</span>
                                    </li>
                                ))}
                            </ul>
                            <ul className="space-y-5">
                                {devItems.map((item, idx) => (
                                    <li key={idx} className="flex items-center gap-4 text-slate-700 font-medium group">
                                        <div className="bg-slate-50 p-2 rounded-full border border-slate-100 group-hover:border-orange-500/50 group-hover:bg-orange-50 transition-all duration-300">
                                            <FiCheckCircle className="text-orange-500 text-lg flex-shrink-0" />
                                        </div>
                                        <span className="group-hover:text-orange-600 transition-colors">{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Contact Box */}
                        <div className="mt-12 bg-white border border-slate-100 text-slate-900 rounded-3xl p-8 shadow-2xl w-full sm:w-auto inline-block hover:border-pink-500/10 transition-colors duration-300 relative overflow-hidden">
                            <div className="absolute inset-0 bg-gradient-to-r from-pink-500/5 to-orange-500/5 pointer-events-none"></div>
                            <div className="flex flex-col sm:flex-row items-center gap-8 text-sm font-bold tracking-wide relative z-10">
                                <a href="https://webstepsolutions.com/" className="flex items-center gap-3 hover:text-pink-600 transition-colors group">
                                    <span className="bg-slate-50 border border-slate-100 p-2.5 rounded-xl group-hover:scale-110 transition-transform"><FiCheckCircle className="text-pink-500" /></span>
                                    webstepsolutions.com
                                </a>
                                <a href="mailto:info@webstepsolutions.com" className="flex items-center gap-3 hover:text-orange-600 transition-colors group">
                                    <span className="bg-slate-50 border border-slate-100 p-2.5 rounded-xl group-hover:scale-110 transition-transform"><FiMail className="text-orange-500" /></span>
                                    info@webstepsolutions.com
                                </a>
                                <span className="flex items-center gap-3 group cursor-default text-slate-700">
                                    <span className="bg-slate-50 border border-slate-100 p-2.5 rounded-xl group-hover:scale-110 transition-transform"><FiPhone className="text-pink-500" /></span>
                                    +91 97818-90033
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Design
