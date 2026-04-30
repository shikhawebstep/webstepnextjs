"use client";
import React from 'react';
import Image from 'next/image';
import dev from "@/components/img/development-company.png";
import { FaStar } from 'react-icons/fa';
import { FiTarget, FiUsers, FiCode, FiShield } from 'react-icons/fi';

const stats = [
    { num: '500+', label: 'Global Launches', icon: <FiTarget /> },
    { num: '100%', label: 'Retention Rate', icon: <FiUsers /> },
    { num: '20+', label: 'Tech Stack Experts', icon: <FiCode /> },
    { num: '24/7', label: 'Priority Support', icon: <FiShield /> },
];

const reviews = [
    { name: 'Sarah K.', role: 'CTO, FinTech Startup', text: 'Delivered beyond expectations. Truly an engineering partner.' },
    { name: 'James M.', role: 'Founder, SaaS Co.', text: 'Bulletproof code and exceptional communication throughout.' },
];

const Experience = () => {
    return (
        <section className="relative py-24 bg-white overflow-hidden font-sans">

            {/* Decorative blobs */}
            <div className="absolute -top-32 -right-32 w-[600px] h-[600px] bg-[#FF1F8E]/6 rounded-full blur-[120px] pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-[#FF1F8E]/4 rounded-full blur-[100px] pointer-events-none" />

            <div className="relative z-10 container mx-auto px-6 lg:px-12">

                {/* ── Section Header ── */}
                <div className="text-center mb-20">
                    <div className="inline-flex items-center gap-3 mb-5">
                        <span className="w-8 h-px bg-[#FF1F8E]" />
                        <span className="text-[10px] font-extrabold tracking-[0.35em] text-[#FF1F8E] uppercase">
                            Google Verified
                        </span>
                        <span className="w-8 h-px bg-[#FF1F8E]" />
                    </div>

                    <h2 className="text-5xl md:text-6xl font-black tracking-tight text-slate-900 leading-[1.05] mb-6">
                        A 5-Star{' '}
                        <span className="relative inline-block">
                            <span className="text-[#FF1F8E]">Rated Brand</span>
                            <span className="absolute -bottom-1 left-0 w-full h-[3px] bg-[#FF1F8E]/20 rounded-full" />
                        </span>
                    </h2>

                    <p className="text-slate-500 text-lg max-w-xl mx-auto leading-relaxed font-medium">
                        We don&apos;t just build software — we engineer growth, as a committed extension of your team.
                    </p>
                </div>

                {/* ── Two-column layout ── */}
                <div className="grid lg:grid-cols-2 gap-16 items-center">

                    {/* LEFT — Image card */}
                    <div className="relative group">
                        {/* Subtle glow behind card */}
                        <div className="absolute inset-[-10%] bg-[#FF1F8E]/8 rounded-[4rem] blur-[80px] pointer-events-none transition-opacity duration-700 group-hover:opacity-100 opacity-60" />

                        <div className="relative z-10 bg-white border border-slate-100 rounded-[2.5rem] p-10 shadow-[0_8px_60px_rgba(0,0,0,0.06)] group-hover:shadow-[0_12px_80px_rgba(255,31,142,0.1)] transition-shadow duration-700">

                            <Image
                                src={dev}
                                alt="Enterprise Development"
                                className="w-full h-auto rounded-2xl mb-8 group-hover:scale-[1.02] transition-transform duration-700"
                            />

                            {/* Stars + badge row */}
                            <div className="flex items-center justify-between">
                                <div className="flex gap-1.5">
                                    {[1, 2, 3, 4, 5].map((s) => (
                                        <FaStar key={s} className="text-[#FF1F8E] w-5 h-5" />
                                    ))}
                                </div>
                                <span className="text-[10px] font-bold tracking-[0.25em] text-slate-400 uppercase">
                                    Verified Reviews
                                </span>
                            </div>

                            {/* Mini review quotes */}
                            <div className="mt-6 space-y-4">
                                {reviews.map((r, i) => (
                                    <div key={i} className="flex gap-3 p-4 bg-slate-50 rounded-2xl border border-slate-100">
                                        <div className="w-8 h-8 shrink-0 rounded-full bg-[#FF1F8E]/10 flex items-center justify-center text-[#FF1F8E] text-xs font-black">
                                            {r.name[0]}
                                        </div>
                                        <div>
                                            <p className="text-[11px] text-slate-500 leading-snug mb-1">{r.text}</p>
                                            <p className="text-[10px] font-bold text-slate-400 tracking-wide">{r.name} · {r.role}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>


                    </div>

                    {/* RIGHT — Stats + CTA */}
                    <div>
                        {/* Eyebrow */}
                        <p className="text-[11px] font-bold tracking-[0.3em] text-slate-400 uppercase mb-3">
                            Why Teams Choose Us
                        </p>
                        <h3 className="text-4xl font-black text-slate-900 tracking-tight leading-tight mb-10">
                            Numbers that speak
                            <span className="text-[#FF1F8E]"> for themselves</span>
                        </h3>

                        {/* Stat cards */}
                        <div className="grid grid-cols-2 gap-4 mb-10">
                            {stats.map((item, idx) => (
                                <div
                                    key={idx}
                                    className="group relative overflow-hidden p-6 bg-white border border-slate-100 rounded-[2rem] shadow-sm hover:border-[#FF1F8E]/30 hover:shadow-[0_4px_30px_rgba(255,31,142,0.08)] transition-all duration-400 cursor-default"
                                >
                                    {/* Hover accent line */}
                                    <span className="absolute bottom-0 left-0 w-full h-0.5 bg-[#FF1F8E]/0 group-hover:bg-[#FF1F8E]/30 transition-colors duration-300 rounded-b-[2rem]" />

                                    <div className="text-3xl text-[#FF1F8E] mb-3 group-hover:scale-110 transition-transform duration-300">
                                        {item.icon}
                                    </div>
                                    <span className="block text-4xl font-black text-slate-900 tracking-tight group-hover:text-[#FF1F8E] transition-colors duration-300 mb-1">
                                        {item.num}
                                    </span>
                                    <span className="block text-[9px] font-bold text-slate-400 uppercase tracking-[0.2em]">
                                        {item.label}
                                    </span>
                                </div>
                            ))}
                        </div>

                        {/* Divider with text */}
                        <div className="flex items-center gap-4 mb-8">
                            <span className="flex-1 h-px bg-slate-100" />
                            <span className="text-[10px] font-bold tracking-widest text-slate-300 uppercase">Trusted worldwide</span>
                            <span className="flex-1 h-px bg-slate-100" />
                        </div>

                        {/* CTA buttons */}
                        <div className="flex flex-wrap gap-3">
                            <button className="px-10 py-4 bg-slate-900 hover:bg-[#FF1F8E] text-white text-[11px] font-black tracking-[0.3em] uppercase rounded-xl transition-all duration-300 shadow-lg hover:shadow-[#FF1F8E]/20">
                                Read Our Reviews
                            </button>
                            <button className="px-8 py-4 border border-slate-200 hover:border-[#FF1F8E]/40 text-slate-700 hover:text-[#FF1F8E] text-[11px] font-black tracking-[0.3em] uppercase rounded-xl transition-all duration-300">
                                View Case Studies →
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Experience;