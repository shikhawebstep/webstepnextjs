"use client";
import React, { useState } from 'react';
import SubMenus from './SubMenus';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { FaAngleDown } from 'react-icons/fa';

const Menu = ({ mobile = false, closeMenu, scrolled = false }) => {
    const [activeSubmenu, setActiveSubmenu] = useState(false);

    const navLinks = [
        { name: "Home", href: "/" },
        { name: "Services", href: "#", hasSubmenu: true },
        { name: "Work", href: "/works" },
        { name: "About", href: "/about" },
        { name: "Blog", href: "/blog" },
        { name: "Packages", href: "/packages" },
        { name: "Contact", href: "/contactus" },
    ];

    const linkClasses = mobile
        ? "flex items-center justify-between w-full py-4 text-slate-600 hover:text-[#FF1F8E] font-bold text-[14px] tracking-widest uppercase border-b border-slate-100 transition-colors"
        : `px-5 py-2.5 ${scrolled ? 'text-slate-900' : 'text-slate-500'} hover:text-[#FF1F8E] font-black text-[10px] tracking-[0.2em] uppercase transition-all relative group`;

    return (
        <nav className={`w-full ${mobile ? "block" : "flex items-center justify-center font-roboto"}`}>
            <ul className={`${mobile ? "flex flex-col" : "flex items-center gap-1"}`}>
                {navLinks.map((link, idx) => (
                    <li key={idx} className={mobile ? "w-full" : "relative group"}>
                        {link.hasSubmenu ? (
                            <div
                                className="relative"
                                onMouseEnter={!mobile ? () => setActiveSubmenu(true) : undefined}
                                onMouseLeave={!mobile ? () => setActiveSubmenu(false) : undefined}
                            >
                                <button
                                    onClick={mobile ? () => setActiveSubmenu(!activeSubmenu) : undefined}
                                    className={`${linkClasses} flex items-center gap-2 focus:outline-none`}
                                >
                                    <span>{link.name}</span>
                                    <FaAngleDown className={`text-[10px] transition-transform duration-300 ${activeSubmenu ? "rotate-180 text-[#FF1F8E]" : "opacity-40"}`} />

                                    {!mobile && (
                                        <motion.div
                                            className="absolute bottom-1 left-5 right-5 h-[2px] bg-[#FF1F8E] origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300"
                                        />
                                    )}
                                </button>

                                <AnimatePresence>
                                    {activeSubmenu && (
                                        <motion.div
                                            initial={{ opacity: 0, y: mobile ? 0 : 15 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            exit={{ opacity: 0, y: mobile ? 0 : 15 }}
                                            transition={{ duration: 0.4, ease: "easeOut" }}
                                            className={`${mobile
                                                ? "bg-slate-50 rounded-2xl overflow-hidden mt-2"
                                                : "absolute top-full left-1/2 -translate-x-1/2 mt-4 bg-white rounded-[2rem] shadow-2xl border border-slate-100 z-[100] overflow-hidden min-w-[240px] p-2"
                                                }`}
                                        >
                                            <SubMenus mobile={mobile} closeMenu={() => {
                                                setActiveSubmenu(false);
                                                if (mobile && closeMenu) closeMenu();
                                            }} />
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </div>
                        ) : (
                            <Link
                                href={link.href}
                                className={linkClasses}
                                onClick={mobile ? closeMenu : undefined}
                            >
                                {link.name}
                                {!mobile && (
                                    <motion.div
                                        className="absolute bottom-1 left-5 right-5 h-[2px] bg-[#FF1F8E] origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300"
                                    />
                                )}
                            </Link>
                        )}
                    </li>
                ))}
            </ul>
        </nav>
    );
};

export default Menu;
