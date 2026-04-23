"use client";
import React from 'react';
import { FaLock, FaPaperPlane, FaHeadset } from 'react-icons/fa';

const ExpertsForm = () => {
  return (
    <div className="bg-white p-8 md:p-12 rounded-[2.5rem] shadow-2xl border border-slate-100 relative overflow-hidden group">
      <div className="absolute inset-0 bg-gradient-to-br from-pink-500/5 to-orange-500/5 z-0 pointer-events-none transition-opacity group-hover:opacity-100 opacity-50"></div>

      <div className="relative z-10">
        <div className="mb-8">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 rounded-xl bg-pink-50 flex items-center justify-center text-pink-500 shadow-sm">
              <FaHeadset size={18} />
            </div>
            <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Get In Touch</span>
          </div>
          <h5 className="text-3xl font-black text-slate-900 mb-3 uppercase tracking-tight">
            Talk to Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-orange-500">Experts</span>
          </h5>
          <p className="text-slate-500 text-sm leading-relaxed">
            Get the Top Web & Mobile App Solution from Our Experienced Developers!
          </p>
        </div>

        <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
          <div className="group">
            <input
              type="text"
              id="fname"
              name="fname"
              placeholder="Your Full Name"
              className="w-full bg-slate-50 border border-slate-100 rounded-2xl py-4 px-6 text-slate-900 placeholder:text-slate-400 focus:outline-none focus:border-pink-500 focus:bg-white transition-all duration-300 shadow-sm"
            />
          </div>
          <div className="group">
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Your Email Address"
              className="w-full bg-slate-50 border border-slate-100 rounded-2xl py-4 px-6 text-slate-900 placeholder:text-slate-400 focus:outline-none focus:border-pink-500 focus:bg-white transition-all duration-300 shadow-sm"
            />
          </div>
          <div className="group">
            <input
              type="tel"
              id="phone"
              name="phone"
              placeholder="Phone Number"
              className="w-full bg-slate-50 border border-slate-100 rounded-2xl py-4 px-6 text-slate-900 placeholder:text-slate-400 focus:outline-none focus:border-pink-500 focus:bg-white transition-all duration-300 shadow-sm"
            />
          </div>
          <div className="group">
            <textarea
              name="Describe"
              id="requirement"
              placeholder="Describe your requirement"
              className="w-full bg-slate-50 border border-slate-100 rounded-2xl py-4 px-6 text-slate-900 placeholder:text-slate-400 focus:outline-none focus:border-pink-500 focus:bg-white transition-all duration-300 min-h-[140px] resize-none shadow-sm"
            ></textarea>
          </div>

          <div className="pt-2">
            <button className="group relative flex items-center justify-center gap-3 w-full px-8 py-4 bg-gradient-to-r from-pink-600 to-orange-500 rounded-2xl text-white font-bold tracking-[0.2em] uppercase overflow-hidden shadow-lg shadow-pink-600/20 hover:shadow-pink-600/40 transition-all duration-300">
              <span className="relative z-10">Submit Now</span>
              <FaPaperPlane className="relative z-10 group-hover:translate-x-1 transition-transform" />
              <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-20 transition-opacity z-0"></div>
            </button>

            <div className="flex items-center justify-center gap-2 mt-6 text-slate-400">
              <FaLock className="text-[10px]" />
              <span className="text-[10px] uppercase tracking-widest font-bold">Secure & Confidential</span>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ExpertsForm;
