"use client";
import React from "react";
import { FaLock, FaPaperPlane } from "react-icons/fa";

const ContactForm = () => {
    return (
        <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="group">
                    <input 
                        type="text" 
                        id="name" 
                        name="name" 
                        placeholder="Your Full Name*" 
                        required
                        className="w-full bg-slate-50 border border-slate-200 rounded-2xl py-4 px-6 text-slate-900 placeholder:text-slate-400 focus:outline-none focus:border-pink-500 transition-all duration-300 shadow-sm"
                    />
                </div>
                <div className="group">
                    <input 
                        type="tel" 
                        id="phone" 
                        name="phone" 
                        placeholder="Phone Number*" 
                        required
                        className="w-full bg-slate-50 border border-slate-200 rounded-2xl py-4 px-6 text-slate-900 placeholder:text-slate-400 focus:outline-none focus:border-pink-500 transition-all duration-300 shadow-sm"
                    />
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="group">
                    <input 
                        type="email" 
                        id="email" 
                        name="email" 
                        placeholder="Email Address*" 
                        required
                        className="w-full bg-slate-50 border border-slate-200 rounded-2xl py-4 px-6 text-slate-900 placeholder:text-slate-400 focus:outline-none focus:border-pink-500 transition-all duration-300 shadow-sm"
                    />
                </div>
                <div className="group">
                    <input 
                        type="text" 
                        id="location" 
                        name="location" 
                        placeholder="Location" 
                        className="w-full bg-slate-50 border border-slate-200 rounded-2xl py-4 px-6 text-slate-900 placeholder:text-slate-400 focus:outline-none focus:border-pink-500 transition-all duration-300 shadow-sm"
                    />
                </div>
            </div>

            <div className="group">
                <textarea 
                    name="Project-details" 
                    id="Project" 
                    placeholder="Project Details*" 
                    required
                    className="w-full bg-slate-50 border border-slate-200 rounded-2xl py-4 px-6 text-slate-900 placeholder:text-slate-400 focus:outline-none focus:border-pink-500 transition-all duration-300 min-h-[160px] resize-y shadow-sm"
                ></textarea>
            </div>

            <div className="flex flex-col gap-6 pt-2">
                <div className="flex flex-col gap-3">
                    <label className="flex items-center gap-3 cursor-pointer group">
                        <div className="relative flex items-center justify-center">
                            <input 
                                type="checkbox" 
                                id="privacy" 
                                name="privacy" 
                                required
                                className="appearance-none w-5 h-5 border border-slate-300 rounded bg-slate-50 checked:bg-pink-500 checked:border-pink-500 transition-all cursor-pointer" 
                            />
                            <svg className="absolute w-3 h-3 text-white pointer-events-none opacity-0 peer-checked:opacity-100" viewBox="0 0 14 10" fill="none">
                                <path d="M1 5L4.5 8.5L13 1" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>
                        </div>
                        <span className="text-sm text-slate-500 group-hover:text-slate-900 transition-colors">
                            I agree to the <a href="#" className="text-pink-600 hover:text-pink-500 font-bold">Privacy Policy</a>
                        </span>
                    </label>

                    <div className="flex items-center gap-2 text-slate-400">
                        <FaLock className="text-xs" />
                        <span className="text-xs uppercase tracking-widest font-bold">We guarantee the protection of your data</span>
                    </div>
                </div>

                <button 
                    type="submit" 
                    className="group relative flex items-center justify-center gap-3 w-full sm:w-auto px-8 py-4 bg-gradient-to-r from-pink-600 to-orange-500 rounded-2xl text-white font-bold tracking-[0.2em] uppercase overflow-hidden shadow-lg shadow-pink-600/20 hover:shadow-pink-600/40 transition-all duration-300"
                >
                    <span className="relative z-10">Send Message</span>
                    <FaPaperPlane className="relative z-10 group-hover:translate-x-1 transition-transform" />
                    <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-20 transition-opacity z-0"></div>
                </button>
            </div>
        </form>
    );
};

export default ContactForm;

