"use client";
import React from 'react';
import ContactForm from '../contactus/ContactForm';
import { FaMapMarkerAlt, FaEnvelope, FaClock, FaInstagram, FaLinkedinIn, FaTwitter } from 'react-icons/fa';

const contactItems = [
  {
    icon: <FaMapMarkerAlt />,
    title: "Global HQ",
    detail: "E-45 Industrial Area Phase-8",
    subDetail: "Mohali, Punjab",
    accent: "bg-[#FF1F8E]/10 text-[#FF1F8E]",
    border: "group-hover:border-[#FF1F8E]/30",
  },
  {
    icon: <FaEnvelope />,
    title: "Contact Us",
    detail: "info@webstepsolutions.com",
    subDetail: "+91 97818 90033",
    accent: "bg-[#FF8E5E]/10 text-[#FF8E5E]",
    border: "group-hover:border-[#FF8E5E]/30",
  },
  {
    icon: <FaClock />,
    title: "Working Hours",
    detail: "Mon – Sat: 9:00 AM – 6:00 PM",
    subDetail: "Sun: Closed",
    accent: "bg-[#D400CC]/10 text-[#D400CC]",
    border: "group-hover:border-[#D400CC]/30",
  },
];

const socials = [
  { icon: <FaLinkedinIn />, href: "#", label: "LinkedIn" },
  { icon: <FaInstagram />, href: "#", label: "Instagram" },
  { icon: <FaTwitter />, href: "#", label: "Twitter" },
];

const FormSection = () => {
  return (
    <section className="relative py-24 md:py-32 bg-white overflow-hidden font-sans">

      {/* Ambient blobs */}
      <div className="absolute top-0 right-0 w-[700px] h-[700px] bg-[#FF1F8E]/5 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-[#D400CC]/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="relative z-10 container mx-auto px-6 lg:px-12">

        {/* ── Header ── */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-3 mb-5">
            <span className="w-10 h-px bg-[#FF1F8E]" />
            <span className="text-[10px] font-extrabold tracking-[0.35em] text-[#FF1F8E] uppercase">
              Get In Touch
            </span>
            <span className="w-10 h-px bg-[#FF1F8E]" />
          </div>

          <h2 className="text-5xl md:text-6xl font-black text-slate-900 tracking-tight leading-[1.05] mb-6">
            Ready to Bring Your{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF1F8E] to-[#FF8E5E]">
              Ideas to Life?
            </span>
          </h2>

          <p className="text-slate-500 text-lg max-w-xl mx-auto font-medium leading-relaxed">
            Reach out to discuss your project, explore a partnership, or just say hello — we respond fast.
          </p>
        </div>

        {/* ── Main Card ── */}
        <div className="flex flex-col lg:flex-row rounded-[3rem] border border-slate-100 shadow-[0_40px_100px_-20px_rgba(0,0,0,0.07)] overflow-hidden bg-white">

          {/* ─── LEFT: Info panel ─── */}
          <div className="w-full lg:w-[42%] p-12 md:p-16 flex flex-col justify-between bg-white border-b lg:border-b-0 lg:border-r border-slate-100">

            <div>
              {/* Panel heading */}
              <p className="text-[10px] font-black uppercase tracking-[0.35em] text-slate-300 mb-10">
                Our Details
              </p>

              {/* Contact items */}
              <div className="space-y-8">
                {contactItems.map((item, i) => (
                  <div
                    key={i}
                    className={`group flex items-start gap-5 p-5 rounded-2xl border border-slate-100 ${item.border} bg-white hover:shadow-sm transition-all duration-300 cursor-default`}
                  >
                    {/* Icon */}
                    <div className={`w-11 h-11 shrink-0 rounded-xl flex items-center justify-center text-sm ${item.accent} group-hover:scale-110 transition-transform duration-300`}>
                      {item.icon}
                    </div>

                    {/* Text */}
                    <div>
                      <h4 className="font-black text-slate-800 text-base leading-none mb-1.5 tracking-tight">
                        {item.title}
                      </h4>
                      <p className="text-slate-600 text-sm font-medium leading-snug">{item.detail}</p>
                      <p className="text-slate-400 text-sm font-medium leading-snug">{item.subDetail}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Social links */}
            <div className="mt-12 pt-8 border-t border-slate-100">
              <p className="text-[9px] font-black uppercase tracking-[0.35em] text-slate-300 mb-5">
                Follow Us
              </p>
              <div className="flex gap-3">
                {socials.map((s, i) => (
                  <a
                    key={i}
                    href={s.href}
                    aria-label={s.label}
                    className="w-11 h-11 rounded-xl bg-white border border-slate-100 flex items-center justify-center text-slate-400 text-sm hover:bg-[#FF1F8E] hover:text-white hover:border-[#FF1F8E] hover:scale-110 transition-all duration-300 shadow-sm"
                  >
                    {s.icon}
                  </a>
                ))}
              </div>

              {/* Quick response badge */}
              <div className="mt-8 inline-flex items-center gap-2 px-4 py-2.5 bg-slate-50 border border-slate-100 rounded-xl">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                <span className="text-[10px] font-bold text-slate-500 uppercase tracking-[0.2em]">
                  We reply within 24 hours
                </span>
              </div>
            </div>
          </div>

          {/* ─── RIGHT: Form panel ─── */}
          <div className="w-full lg:w-[58%] p-12 md:p-16 bg-slate-50/40">

            {/* Form header */}
            <div className="mb-10">
              <div className="inline-flex items-center gap-2 bg-[#FF1F8E]/8 border border-[#FF1F8E]/15 rounded-full px-4 py-1.5 mb-5">
                <span className="w-1.5 h-1.5 rounded-full bg-[#FF1F8E]" />
                <span className="text-[10px] font-black text-[#FF1F8E] uppercase tracking-[0.25em]">
                  Free Consultation
                </span>
              </div>

              <h3 className="text-3xl font-black text-slate-900 tracking-tight mb-2">
                Start Your Project
              </h3>
              <p className="text-slate-500 text-base font-medium leading-relaxed">
                Fill in the details below and our specialists will get back to you shortly.
              </p>
            </div>

            {/* Form */}
            <ContactForm light={true} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default FormSection;