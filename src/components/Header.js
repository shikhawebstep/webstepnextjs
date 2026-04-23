"use client"
import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import logo from "@/components/img/logo.png";
import Menu from "./Menu";

const Header = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 20);
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <>


            {/* Main header */}
            <header
                className={`sticky top-0 z-[999] w-full transition-all duration-500 ${scrolled
                    ? "bg-white/80 backdrop-blur-xl py-3 shadow-[0_8px_32px_rgba(0,0,0,0.05)]"
                    : "bg-white py-5"
                    } border-b border-slate-100`}
            >
                <div className="max-w-screen-2xl mx-auto px-6 md:px-12 flex items-center justify-between gap-8">

                    {/* Logo */}
                    <Link href="/" className="flex items-center gap-3.5 shrink-0 group">
                        <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-pink-600 to-orange-500 flex items-center justify-center shadow-lg shadow-pink-600/20 group-hover:shadow-pink-600/40 transition-all duration-500 group-hover:rotate-6">
                            <Image src={logo} alt="Logo" width={28} height={28} className="object-contain" />
                        </div>
                        <div className="flex flex-col">
                            <span className="font-roboto font-black text-2xl tracking-tight text-slate-900 leading-tight">
                                Webstep<span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-orange-500">Solutions</span>
                            </span>
                            <span className="font-mono text-[8px] tracking-[0.3em] uppercase text-slate-400 -mt-0.5 group-hover:text-pink-500/50 transition-colors">
                                Digital Agency
                            </span>
                        </div>
                    </Link>

                    {/* Desktop Navigation */}
                    <div className="hidden lg:block flex-1">
                        <Menu />
                    </div>

                    {/* Desktop Actions */}
                    <div className="hidden lg:flex items-center gap-6 shrink-0">
                        {/* Phone */}
                        <div className="flex items-center gap-3 py-2 px-4 rounded-full bg-slate-50 border border-slate-100 hover:border-pink-500/30 transition-all group">
                            <div className="w-8 h-8 rounded-full bg-pink-600/10 flex items-center justify-center text-pink-500 group-hover:scale-110 transition-transform">
                                📞
                            </div>
                            <div className="flex flex-col leading-none">
                                <span className="font-mono text-[8px] tracking-[0.1em] uppercase text-slate-400 mb-0.5">
                                    Quick Connect
                                </span>
                                <a href="tel:9781890033"
                                    className="text-sm font-bold text-slate-900 tracking-wide hover:text-pink-600 transition-colors"
                                >
                                    97818-90033
                                </a>
                            </div>
                        </div>

                        {/* CTA button */}
                        <button className="relative overflow-hidden group px-7 py-3 rounded-xl bg-gradient-to-r from-pink-600 to-orange-500 text-white font-bold text-[11px] tracking-[0.15em] uppercase shadow-lg shadow-pink-600/20 hover:shadow-pink-600/40 transition-all duration-300">
                            <span className="relative z-10">Get a Quote</span>
                            <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-20 transition-opacity" />
                        </button>
                    </div>

                    {/* Mobile toggle */}
                    <button
                        onClick={() => setMenuOpen(!menuOpen)}
                        aria-label="Toggle menu"
                        className="lg:hidden w-11 h-11 flex flex-col items-center justify-center gap-[6px] border border-slate-100 rounded-xl bg-slate-50 hover:bg-slate-100 transition-all"
                    >
                        <span
                            className={`block w-5 h-[2px] bg-slate-900 transition-all duration-300 ${menuOpen ? "rotate-45 translate-y-[8px]" : ""
                                }`}
                        />
                        <span
                            className={`block h-[2px] bg-slate-900 transition-all duration-300 ${menuOpen ? "opacity-0 w-0" : "w-3"
                                }`}
                        />
                        <span
                            className={`block w-5 h-[2px] bg-slate-900 transition-all duration-300 ${menuOpen ? "-rotate-45 -translate-y-[8px]" : ""
                                }`}
                        />
                    </button>
                </div>

                {/* Mobile menu drawer */}
                <AnimatePresence>
                    {menuOpen && (
                        <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: 'auto' }}
                            exit={{ opacity: 0, height: 0 }}
                            transition={{ duration: 0.4, ease: [0.4, 0, 0.2, 1] }}
                            className="lg:hidden overflow-hidden border-t border-slate-100 bg-white/95 backdrop-blur-2xl"
                        >
                            <div className="px-6 py-8 flex flex-col gap-8">
                                <Menu mobile={true} closeMenu={() => setMenuOpen(false)} />

                                {/* Mobile CTA Section */}
                                <div className="space-y-4">
                                    <a href="tel:9781890033" className="flex items-center justify-between p-5 bg-slate-50 border border-slate-100 rounded-2xl">
                                        <div className="flex flex-col">
                                            <span className="text-[10px] uppercase tracking-widest text-slate-400 mb-1">Call Us</span>
                                            <span className="text-lg font-bold text-slate-900">97818-90033</span>
                                        </div>
                                        <div className="w-12 h-12 rounded-full bg-pink-600/10 flex items-center justify-center text-pink-500 border border-pink-500/20">
                                            📞
                                        </div>
                                    </a>

                                    <button className="w-full py-5 rounded-2xl bg-gradient-to-r from-pink-600 to-orange-500 text-white font-bold tracking-[0.2em] uppercase shadow-xl shadow-pink-600/20">
                                        Get started
                                    </button>
                                </div>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </header>
        </>
    );
};

export default Header;
