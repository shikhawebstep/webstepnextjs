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
        <footer className="bg-white text-slate-600 pt-24 pb-12 relative overflow-hidden border-t border-slate-100">
            {/* Decorative Background Glows */}
            <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-pink-50 blur-[120px] rounded-full pointer-events-none"></div>
            <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-orange-50 blur-[120px] rounded-full pointer-events-none"></div>

            {/* Mobile Sticky Action Bar */}
            <div className="fixed lg:hidden bottom-6 left-6 right-6 z-[100] pointer-events-none">
                <div className="bg-white/80 backdrop-blur-2xl border border-slate-200 rounded-3xl shadow-2xl p-2 flex justify-around items-center pointer-events-auto max-w-lg mx-auto">
                    {[
                        { icon: <FaPhoneAlt size={18} />, href: "tel:9781890033", label: "Call" },
                        { icon: <FaRegCommentDots size={18} />, href: "#", label: "Chat" },
                        { icon: <FaEnvelope size={18} />, href: "mailto:hello@webstepsolutions.com", label: "Email" },
                        { icon: <FaMapMarkerAlt size={18} />, href: "#", label: "Visit" }
                    ].map((item, idx) => (
                        <a 
                            key={idx}
                            href={item.href}
                            className="flex flex-col items-center gap-1.5 p-3 text-slate-400 hover:text-pink-500 transition-colors"
                        >
                            {item.icon}
                            <span className="text-[10px] font-bold uppercase tracking-widest">{item.label}</span>
                        </a>
                    ))}
                </div>
            </div>

            <div className="container mx-auto px-6 relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-20">
                    {/* Brand Section */}
                    <div className="space-y-8">
                        <Link href="/" className="flex items-center gap-3.5 group">
                            <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-pink-600 to-orange-500 flex items-center justify-center shadow-lg shadow-pink-600/20 group-hover:rotate-6 transition-all duration-500">
                                <Image src={logo} alt="Logo" width={28} height={28} className="object-contain" />
                            </div>
                            <div className="flex flex-col">
                                <span className="font-roboto font-black text-2xl tracking-tight text-slate-900 leading-tight">
                                    Webstep<span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-orange-500">Solutions</span>
                                </span>
                                <span className="font-mono text-[8px] tracking-[0.3em] uppercase text-slate-400 -mt-0.5">
                                    Digital Agency
                                </span>
                            </div>
                        </Link>
                        <p className="text-lg leading-relaxed text-slate-500 font-medium">
                            Empowering brands with cutting-edge digital solutions. We transform complex ideas into seamless digital experiences.
                        </p>
                        <div className="flex items-center gap-4">
                            {socialLinks.map((social, idx) => (
                                <a 
                                    key={idx} 
                                    href={social.href}
                                    aria-label={social.label}
                                    className="w-10 h-10 rounded-xl bg-slate-50 border border-slate-100 flex items-center justify-center hover:bg-gradient-to-br hover:from-pink-600 hover:to-orange-500 hover:text-white hover:border-transparent transition-all duration-300 shadow-sm"
                                >
                                    {social.icon}
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="text-slate-900 font-bold text-lg mb-8 uppercase tracking-[0.2em] flex items-center gap-2">
                            <span className="w-8 h-px bg-pink-500"></span> Navigation
                        </h4>
                        <ul className="space-y-4">
                            {quickLinks.map((link, idx) => (
                                <li key={idx}>
                                    <Link href={link.href} className="hover:text-pink-500 transition-colors flex items-center gap-2 group text-slate-500 font-medium">
                                        <FaArrowRight size={12} className="opacity-0 -ml-4 group-hover:opacity-100 group-hover:ml-0 transition-all duration-300 text-pink-500" />
                                        {link.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Services */}
                    <div>
                        <h4 className="text-slate-900 font-bold text-lg mb-8 uppercase tracking-[0.2em] flex items-center gap-2">
                            <span className="w-8 h-px bg-orange-500"></span> Expertise
                        </h4>
                        <ul className="space-y-4">
                            {services.map((service, idx) => (
                                <li key={idx}>
                                    <Link href={service.href} className="hover:text-orange-500 transition-colors flex items-center gap-2 group text-slate-500 font-medium">
                                        <FaArrowRight size={12} className="opacity-0 -ml-4 group-hover:opacity-100 group-hover:ml-0 transition-all duration-300 text-orange-500" />
                                        {service.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Newsletter & Contact */}
                    <div className="space-y-8">
                        <div>
                            <h4 className="text-slate-900 font-bold text-lg mb-6 uppercase tracking-[0.2em]">Newsletter</h4>
                            <p className="text-sm mb-6 text-slate-500 leading-relaxed font-medium">Subscribe to get the latest digital trends and updates delivered to your inbox.</p>
                            <div className="relative group">
                                <input 
                                    type="email" 
                                    placeholder="your@email.com" 
                                    className="w-full bg-slate-50 border border-slate-200 rounded-2xl py-4 px-6 text-slate-900 placeholder:text-slate-400 focus:outline-none focus:border-pink-500 transition-all"
                                />
                                <button className="absolute right-2 top-1/2 -translate-y-1/2 w-10 h-10 rounded-xl bg-gradient-to-r from-pink-600 to-orange-500 flex items-center justify-center text-white shadow-lg shadow-pink-600/20 group-hover:scale-105 transition-all">
                                    <FaPaperPlane size={16} />
                                </button>
                            </div>
                        </div>
                        <div className="space-y-4">
                            <div className="flex items-center gap-4 p-4 rounded-2xl bg-slate-50 border border-slate-100">
                                <div className="w-10 h-10 rounded-xl bg-pink-600/10 flex items-center justify-center text-pink-500 border border-pink-500/10">
                                    <FaPhoneAlt size={16} />
                                </div>
                                <div>
                                    <p className="text-[10px] uppercase tracking-widest text-slate-400 font-bold">Talk to us</p>
                                    <a href="tel:9781890033" className="text-slate-900 font-bold hover:text-pink-500 transition-colors tracking-wide">97818-90033</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Bottom Copyright */}
                <div className="pt-12 border-t border-slate-100 flex flex-col md:flex-row justify-between items-center gap-6">
                    <p className="text-sm text-slate-500 font-medium">
                        © {currentYear} <span className="text-slate-900 font-bold">Webstep Solutions</span>. All rights reserved.
                    </p>
                    <div className="flex items-center gap-8 text-xs font-bold uppercase tracking-widest text-slate-400">
                        <Link href="/privacy" className="hover:text-slate-900 transition-colors">Privacy Policy</Link>
                        <Link href="/terms" className="hover:text-slate-900 transition-colors">Terms of Service</Link>
                        <button 
                            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                            className="flex items-center gap-2 group hover:text-slate-900 transition-colors"
                        >
                            Back to top <FaChevronUp size={12} className="group-hover:-translate-y-1 transition-transform" />
                        </button>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;


