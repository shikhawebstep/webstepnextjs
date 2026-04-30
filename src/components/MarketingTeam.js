"use client";
import React, { useState } from 'react';
import Image from 'next/image';
import { FiInstagram, FiLinkedin, FiTwitter, FiArrowUpRight, FiUsers, FiAward, FiTarget } from 'react-icons/fi';
import riyaArchitect from '@/components/img/riya_architect.png';
import amanArchitect from '@/components/img/aman_architect.png';

const team = [
  {
    id: 1,
    name: "Riya Sharma",
    role: "Founder & Creative Director",
    image: riyaArchitect,
    bio: "A visionary polymath with over 12 years of experience engineering high-end digital ecosystems. Riya specializes in merging human-centric design with bulletproof backend scalability.",
    expertise: ["Brand Engineering", "Digital Ecosystems", "Strategic Innovation"],
    stats: [
      { label: "Successful Projects", value: "250+", icon: <FiTarget /> },
      { label: "Industry Awards", value: "15+", icon: <FiAward /> },
      { label: "Years Experience", value: "12Y", icon: <FiUsers /> },
    ],
  },
  {
    id: 2,
    name: "Aman Gupta",
    role: "Head of Engineering",
    image: amanArchitect,
    bio: "An elite software architect who thrives on complexity. Aman leads our technical division, ensuring every line of code is optimized for extreme performance and global scale.",
    expertise: ["System Architecture", "Cloud Infrastructure", "DevOps Mastery"],
    stats: [
      { label: "Systems Deployed", value: "80+", icon: <FiTarget /> },
      { label: "Code Coverage", value: "99%", icon: <FiAward /> },
      { label: "Uptime Delivery", value: "100%", icon: <FiUsers /> },
    ],
  },
];

const socials = [
  { icon: <FiLinkedin />, label: "LinkedIn", href: "#" },
  { icon: <FiInstagram />, label: "Instagram", href: "#" },
  { icon: <FiTwitter />, label: "Twitter", href: "#" },
];

const MarketingTeam = () => {
  const [activeMember, setActiveMember] = useState(0);
  const member = team[activeMember];

  return (
    <section className="relative py-24 md:py-32 bg-white overflow-hidden font-sans">

      {/* Ambient blobs */}
      <div className="absolute top-0 right-0 w-[700px] h-[700px] bg-[#FF1F8E]/5 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-[#D400CC]/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="relative z-10 container mx-auto px-6 lg:px-12">

        {/* ── Header ── */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-3 mb-5">
            <span className="w-10 h-px bg-slate-200" />
            <span className="text-[10px] font-black tracking-[0.4em] text-[#FF1F8E] uppercase">
              The Visionaries
            </span>
            <span className="w-10 h-px bg-slate-200" />
          </div>
          <h2 className="text-5xl md:text-6xl font-black text-slate-900 tracking-tight leading-[1.05]">
            Meet the <span className="text-[#FF1F8E]">Architects</span>
          </h2>
        </div>

        {/* ── Two-column layout ── */}
        <div className="flex flex-col lg:flex-row gap-14 lg:gap-20 items-start">

          {/* LEFT — Image */}
          <div className="w-full lg:w-1/2 relative group">
            <div className="relative rounded-[3rem] overflow-hidden shadow-[0_40px_80px_-20px_rgba(0,0,0,0.14)] bg-slate-900 aspect-[4/5]">
              <Image
                src={member.image}
                alt={member.name}
                className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 opacity-90 transition-all duration-[1200ms]"
              />

              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/20 to-transparent" />

              {/* Top-left icon circle */}
              <div className="absolute top-8 left-8 w-16 h-16 rounded-full border border-white/20 backdrop-blur-md flex items-center justify-center text-white">
                <FiArrowUpRight size={24} />
              </div>

              {/* Member name overlay */}
              <div className="absolute bottom-10 left-10 right-10 z-10">
                <p className="text-white/50 text-[9px] font-bold uppercase tracking-[0.35em] mb-2">
                  {member.role}
                </p>
                <h4 className="text-white text-2xl font-black tracking-tight leading-tight mb-4">
                  {member.name}
                </h4>
                <div className="flex flex-wrap gap-2">
                  {member.expertise.map((exp, i) => (
                    <span
                      key={i}
                      className="px-3 py-1.5 bg-white/10 backdrop-blur-md border border-white/15 rounded-full text-[9px] font-bold text-white uppercase tracking-widest"
                    >
                      {exp}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Floating social icons */}
            <div className="absolute -right-6 top-1/2 -translate-y-1/2 hidden xl:flex flex-col gap-3 z-20">
              {socials.map((s, i) => (
                <a
                  key={i}
                  href={s.href}
                  aria-label={s.label}
                  className="w-12 h-12 rounded-xl bg-white border border-slate-100 flex items-center justify-center text-slate-400 text-sm hover:bg-[#FF1F8E] hover:text-white hover:border-[#FF1F8E] hover:scale-110 transition-all duration-300 shadow-lg"
                >
                  {s.icon}
                </a>
              ))}
            </div>
          </div>

          {/* RIGHT — Details */}
          <div className="w-full lg:w-1/2 lg:pt-6">

            {/* Name + role */}
            <div className="mb-8">
              <h3 className="text-5xl md:text-6xl font-black text-slate-900 tracking-tight leading-none mb-4">
                {member.name}
              </h3>
              <p className="text-[#FF1F8E] font-black uppercase tracking-[0.35em] text-[11px] flex items-center gap-3">
                <span className="w-8 h-px bg-[#FF1F8E]" />
                {member.role}
              </p>
            </div>

            {/* Bio */}
            <p className="text-slate-500 text-lg leading-relaxed font-medium italic mb-10 border-l-2 border-[#FF1F8E]/30 pl-5">
              &quot;{member.bio}&quot;
            </p>

            {/* Stat cards */}
            <div className="grid grid-cols-3 gap-4 mb-12">
              {member.stats.map((s, i) => (
                <div
                  key={i}
                  className="group p-5 rounded-2xl bg-white border border-slate-100 hover:border-[#FF1F8E]/25 hover:shadow-[0_4px_20px_rgba(255,31,142,0.07)] transition-all duration-300 cursor-default"
                >
                  <div className="text-[#FF1F8E] mb-3 text-base">{s.icon}</div>
                  <p className="text-2xl font-black text-slate-900 mb-1 group-hover:text-[#FF1F8E] transition-colors duration-300">
                    {s.value}
                  </p>
                  <p className="text-[8px] font-bold uppercase tracking-widest text-slate-400 leading-snug">
                    {s.label}
                  </p>
                </div>
              ))}
            </div>

            {/* Member selector */}
            <div className="flex flex-col sm:flex-row gap-5 items-start sm:items-center pt-8 border-t border-slate-100">
              <span className="text-[9px] font-black uppercase tracking-[0.3em] text-slate-300 shrink-0">
                Our Team
              </span>

              <div className="flex gap-3 p-2 bg-slate-50 border border-slate-100 rounded-2xl">
                {team.map((m, idx) => (
                  <button
                    key={m.id}
                    onClick={() => setActiveMember(idx)}
                    title={m.name}
                    className={`relative w-12 h-12 rounded-xl overflow-hidden transition-all duration-300 ${activeMember === idx
                      ? 'ring-2 ring-[#FF1F8E] ring-offset-2 scale-110 shadow-lg grayscale-0 opacity-100'
                      : 'opacity-40 grayscale hover:opacity-80 hover:grayscale-0 hover:scale-105'
                      }`}
                  >
                    <Image src={m.image} alt={m.name} className="w-full h-full object-cover" />
                  </button>
                ))}
              </div>

              <div className="h-px flex-grow bg-slate-100 hidden sm:block" />

              <a
                href="#"
                className="inline-flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-slate-400 hover:text-[#FF1F8E] transition-colors duration-300 group"
              >
                Full Studio Team
                <FiArrowUpRight className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MarketingTeam;