"use client";
import React from 'react';
import { FaLock, FaPaperPlane, FaHeadset } from 'react-icons/fa';

const ExpertsForm = () => {
  return (
    <div className="bg-white p-10 md:p-14 rounded-[3.5rem] shadow-[0_30px_100px_rgba(0,0,0,0.08)] border border-slate-100 relative overflow-hidden group">
      {/* Decorative inner glow */}
      <div className="absolute inset-0 bg-gradient-to-br from-pink-500/[0.03] to-rose-500/[0.03] z-0 pointer-events-none group-hover:opacity-100 opacity-50 transition-all duration-700"></div>

      <div className="relative z-10">
        <div className="mb-10 text-center">
          <div className="w-14 h-14 rounded-2xl bg-pink-50 flex items-center justify-center text-pink-500 shadow-sm border border-pink-100/50 mx-auto mb-6 group-hover:scale-110 transition-transform duration-500">
            <FaHeadset size={22} />
          </div>
          <h5 className="text-3xl md:text-4xl font-black text-slate-900 mb-4 tracking-tighter leading-tight">
            Consult Our <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-600 to-rose-500">Experts</span>
          </h5>
          <p className="text-slate-500 text-base font-medium max-w-xs mx-auto">
            Strategic technology advisory for your next digital breakthrough.
          </p>
        </div>

        <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
          <div className="relative">
            <input
              type="text"
              id="fname"
              name="fname"
              placeholder="Full Name"
              className="w-full bg-slate-50 border border-slate-100 rounded-2xl py-5 px-8 text-slate-900 placeholder:text-slate-400 focus:outline-none focus:border-pink-500/50 focus:bg-white transition-all duration-500 shadow-inner"
            />
          </div>
          <div className="relative">
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Business Email"
              className="w-full bg-slate-50 border border-slate-100 rounded-2xl py-5 px-8 text-slate-900 placeholder:text-slate-400 focus:outline-none focus:border-pink-500/50 focus:bg-white transition-all duration-500 shadow-inner"
            />
          </div>
          <div className="relative">
            <input
              type="tel"
              id="phone"
              name="phone"
              placeholder="Direct Line"
              className="w-full bg-slate-50 border border-slate-100 rounded-2xl py-5 px-8 text-slate-900 placeholder:text-slate-400 focus:outline-none focus:border-pink-500/50 focus:bg-white transition-all duration-500 shadow-inner"
            />
          </div>
          <div className="relative">
            <textarea
              name="Describe"
              id="requirement"
              placeholder="Tell us about your project goals"
              className="w-full bg-slate-50 border border-slate-100 rounded-[2rem] py-5 px-8 text-slate-900 placeholder:text-slate-400 focus:outline-none focus:border-pink-500/50 focus:bg-white transition-all duration-500 min-h-[160px] resize-none shadow-inner"
            ></textarea>
          </div>

          <div className="pt-4">
            <button className="group relative flex items-center justify-center gap-4 w-full px-10 py-5 bg-slate-900 text-white rounded-2xl font-black tracking-[0.25em] uppercase overflow-hidden shadow-2xl hover:bg-pink-600 transition-all duration-500 hover:-translate-y-1">
              <span className="relative z-10 text-[10px]">Initiate Discussion</span>
              <FaPaperPlane className="relative z-10 text-sm group-hover:translate-x-2 group-hover:-translate-y-1 transition-transform duration-500" />
              <div className="absolute inset-0 bg-gradient-to-r from-pink-600 to-rose-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </button>

            <div className="flex items-center justify-center gap-2.5 mt-8 text-slate-300">
              <FaLock className="text-xs" />
              <span className="text-[9px] font-black uppercase tracking-[0.3em]">End-to-End Encryption</span>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ExpertsForm;
