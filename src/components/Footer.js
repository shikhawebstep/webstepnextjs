"use client";
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import {
    FaEnvelope,
    FaPhoneAlt,
    FaMapMarkerAlt,
    FaFacebookF,
    FaInstagram,
    FaLinkedinIn,
    FaTwitter,
    FaYoutube,
    FaArrowRight,
    FaRegCommentDots,
    FaPaperPlane,
    FaChevronUp
} from 'react-icons/fa';
import logo from "@/components/img/logo.png";

const Footer = () => {
    const currentYear = new Date().getFullYear();

    const socialLinks = [
        { icon: <FaFacebookF size={18} />, href: "#", label: "Facebook" },
        { icon: <FaInstagram size={18} />, href: "#", label: "Instagram" },
        { icon: <FaLinkedinIn size={18} />, href: "#", label: "LinkedIn" },
        { icon: <FaTwitter size={18} />, href: "#", label: "Twitter" },
        { icon: <FaYoutube size={18} />, href: "#", label: "YouTube" },
    ];

    const quickLinks = [
        { name: "Home", href: "/" },
        { name: "Services", href: "/services" },
        { name: "Our Work", href: "/works" },
        { name: "About Us", href: "/about" },
        { name: "Blog", href: "/blog" },
        { name: "Contact", href: "/contactus" },
    ];

    const services = [
        { name: "Web Development", href: "/fullstack" },
        { name: "Mobile Apps", href: "/mobileApp" },
        { name: "UI/UX Design", href: "/uiux" },
        { name: "Digital Marketing", href: "/marketing" },
        { name: "SEO Optimization", href: "/seo" },
    ];

    return (
        <footer className="bg-white text-slate-500 pt-24 pb-12 relative overflow-hidden border-t border-slate-100 font-roboto">
            {/* Background Decor */}
            <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#FF1F8E]/5 rounded-full blur-[150px] pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-[#D400CC]/5 rounded-full blur-[150px] pointer-events-none" />

            <div className="container mx-auto px-6 relative z-10 ">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-20">
                    {/* Brand Section */}
                    <div className="space-y-8">
                        <Link href="/" className="flex w-fit items-center group">
                            <Image src={logo} alt="Logo" width={170} />
                        </Link>
                        <p className="text-lg leading-relaxed text-slate-400 font-medium">
                            Empowering brands with cutting-edge digital solutions. We transform complex ideas into seamless digital experiences.
                        </p>
                        <div className="flex items-center gap-4">
                            {socialLinks.map((social, idx) => (
                                <a
                                    key={idx}
                                    href={social.href}
                                    aria-label={social.label}
                                    className="w-10 h-10 rounded-xl bg-slate-50 border border-slate-100 flex items-center justify-center text-slate-300 hover:bg-[#FF1F8E] hover:text-white hover:border-[#FF1F8E] transition-all duration-300 shadow-sm"
                                >
                                    {social.icon}
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Navigation */}
                    <div>
                        <h4 className="text-slate-900 font-black text-lg mb-8 uppercase tracking-[0.2em] flex items-center gap-2">
                            <span className="w-8 h-px bg-[#FF1F8E]"></span> Navigation
                        </h4>
                        <ul className="space-y-4">
                            {quickLinks.map((link, idx) => (
                                <li key={idx}>
                                    <Link href={link.href} className="hover:text-[#FF1F8E] transition-colors flex items-center gap-2 group text-slate-400 font-bold text-[11px] uppercase tracking-widest">
                                        {link.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Expertise */}
                    <div>
                        <h4 className="text-slate-900 font-black text-lg mb-8 uppercase tracking-[0.2em] flex items-center gap-2">
                            <span className="w-8 h-px bg-[#FF1F8E]"></span> Expertise
                        </h4>
                        <ul className="space-y-4">
                            {services.map((service, idx) => (
                                <li key={idx}>
                                    <Link href={service.href} className="hover:text-[#FF1F8E] transition-colors flex items-center gap-2 group text-slate-400 font-bold text-[11px] uppercase tracking-widest">
                                        {service.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Newsletter */}
                    <div className="space-y-8">
                        <div>
                            <h4 className="text-slate-900 font-black text-lg mb-6 uppercase tracking-[0.2em]">Newsletter</h4>
                            <p className="text-sm mb-6 text-slate-400 leading-relaxed font-medium">Subscribe to get the latest digital trends delivered to your inbox.</p>
                            <div className="relative group flex items-center">
                                <input
                                    type="email"
                                    placeholder="Your email address"
                                    className="w-full bg-slate-50 border border-slate-100 rounded-full py-4 pl-6 pr-14 text-slate-900 placeholder:text-slate-300 focus:outline-none focus:border-[#FF1F8E]/50 transition-all duration-500 shadow-sm"
                                />
                                <button className="absolute right-2 w-10 h-10 rounded-full bg-[#FF1F8E] flex items-center justify-center text-white shadow-lg hover:scale-105 transition-all">
                                    <FaPaperPlane size={14} />
                                </button>
                            </div>
                        </div>
                        <div className="flex items-center gap-4 p-5 rounded-2xl bg-slate-50 border border-slate-100">
                            <div className="w-12 h-12 rounded-xl bg-white border border-slate-100 flex items-center justify-center text-[#FF1F8E] shadow-sm">
                                <FaPhoneAlt size={18} />
                            </div>
                            <div>
                                <p className="text-[10px] uppercase tracking-widest text-slate-300 font-black">Talk to us</p>
                                <a href="tel:9781890033" className="text-slate-900 font-black hover:text-[#FF1F8E] transition-colors">+91 97818-90033</a>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Copyright */}
                <div className="pt-12 border-t border-slate-100 flex flex-col md:flex-row justify-between items-center gap-6">
                    <p className="text-xs text-slate-300 font-bold uppercase tracking-widest">
                        © {currentYear} <span className="text-slate-900">Webstep Solutions</span>. All Rights Reserved.
                    </p>
                    <div className="flex items-center gap-8 text-[10px] font-black uppercase tracking-widest text-slate-300">
                        <Link href="/privacy" className="hover:text-slate-900 transition-colors">Privacy Policy</Link>
                        <Link href="/terms" className="hover:text-slate-900 transition-colors">Terms of Service</Link>
                        <button onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className="flex items-center gap-2 group hover:text-slate-900 transition-colors">
                            Back to top <FaChevronUp size={12} className="group-hover:-translate-y-1 transition-transform" />
                        </button>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
