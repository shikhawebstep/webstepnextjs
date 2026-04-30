"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { FiPhone, FiArrowRight } from "react-icons/fi";
import logo from "@/components/img/logo.png";
import Menu from "./Menu";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-[999] transition-all duration-700 ease-in-out ${
        scrolled
          ? "bg-white/90 backdrop-blur-3xl py-4 border-b border-slate-100 shadow-xl"
          : "bg-transparent py-8 border-transparent"
      }`}
    >
      <div className="max-w-screen-2xl mx-auto px-6 md:px-12 flex items-center justify-between gap-12">
        {/* Logo */}
        <Link href="/" className="flex items-center group relative z-10">
          <Image src={logo} alt="WebStep Solutions" width={160} className="transition-transform duration-500 group-hover:scale-105" />
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden lg:block flex-1">
          <Menu scrolled={scrolled} />
        </div>

        {/* Desktop Actions */}
        <div className="hidden lg:flex items-center gap-8">
          {/* Phone */}
          <div className="flex items-center gap-4 group cursor-pointer">
            <div className="w-11 h-11 rounded-2xl bg-slate-50 border border-slate-100 flex items-center justify-center text-slate-400 group-hover:text-white group-hover:bg-[#FF1F8E] group-hover:border-[#FF1F8E] transition-all duration-500 shadow-sm">
              <FiPhone size={20} />
            </div>
            <div className="flex flex-col leading-none">
              <span className="text-[9px] font-black tracking-[0.2em] uppercase text-slate-300 mb-1">Expert Support</span>
              <a href="tel:9781890033" className="text-[13px] font-black text-slate-900 hover:text-[#FF1F8E] transition-colors tracking-widest uppercase">97818-90033</a>
            </div>
          </div>

          {/* CTA Button */}
          <button className="group relative px-8 py-4 bg-slate-900 text-white rounded-2xl font-black text-[10px] tracking-[0.2em] uppercase overflow-hidden transition-all duration-300 hover:bg-[#FF1F8E] hover:shadow-[0_15px_35px_rgba(255,31,142,0.3)]">
            <span className="relative z-10 flex items-center gap-3">
              Get a Quote <FiArrowRight className="group-hover:translate-x-1 transition-transform" />
            </span>
          </button>
        </div>

        {/* Mobile Toggle */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="lg:hidden w-12 h-12 flex flex-col items-center justify-center gap-[6px] border border-slate-100 rounded-2xl bg-white shadow-sm"
        >
          <span className={`block w-6 h-[2px] bg-slate-900 transition-all duration-300 ${menuOpen ? "rotate-45 translate-y-[8px]" : ""}`} />
          <span className={`block h-[2px] bg-slate-900 transition-all duration-300 ${menuOpen ? "opacity-0 w-0" : "w-4"}`} />
          <span className={`block w-6 h-[2px] bg-slate-900 transition-all duration-300 ${menuOpen ? "-rotate-45 -translate-y-[8px]" : ""}`} />
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="lg:hidden overflow-hidden border-t border-slate-100 bg-white shadow-2xl">
          <div className="px-8 py-12 flex flex-col gap-12">
            <Menu mobile={true} closeMenu={() => setMenuOpen(false)} />
            
            <div className="space-y-6">
              <a href="tel:9781890033" className="flex items-center justify-between p-6 bg-slate-50 border border-slate-100 rounded-[2rem]">
                <div>
                  <span className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-300 mb-1 block">Expert Support</span>
                  <span className="text-xl font-black text-slate-900">97818-90033</span>
                </div>
                <FiPhone size={24} className="text-[#FF1F8E]" />
              </a>
              <button className="w-full py-6 rounded-[2rem] bg-[#FF1F8E] text-white font-black text-[11px] tracking-[0.3em] uppercase shadow-xl">
                Get Started
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
