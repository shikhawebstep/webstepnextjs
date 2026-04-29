"use client"
import React, { useState, useRef } from 'react';
import Slider from 'react-slick';
import Image from 'next/image';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { motion, AnimatePresence } from 'framer-motion';
import { FaQuoteLeft, FaLinkedinIn, FaTwitter, FaEnvelope } from 'react-icons/fa';
import { HiChevronLeft, HiChevronRight } from 'react-icons/hi';
import team1 from '@/components/img/team.png';
import team2 from '@/components/img/team2.png';

const teamData = [
    {
        name: "John Doe",
        role: "CEO & Founder",
        tag: "Leadership",
        description: "By introducing extraordinary services of web development processes we make your site highly workable and convenient to be operated from customer's side. Our web developers make your site accessible and more explorative.",
        image: team1,
        stats: [{ label: "Projects", value: "200+" }, { label: "Clients", value: "80+" }, { label: "Years", value: "10+" }],
        socials: { linkedin: "#", twitter: "#", email: "john@webstepsolutions.com" },
        accent: "from-pink-500 to-rose-500",
        glow: "rgba(236,72,153,0.1)",
    },
    {
        name: "Jane Smith",
        role: "Marketing Director",
        tag: "Strategy",
        description: "WebStep Solutions is a top leading agency committed to delivering customer-friendly solutions through responsive designs, customized themes, mobile apps, digital marketing, SEO and branding.",
        image: team2,
        stats: [{ label: "Campaigns", value: "500+" }, { label: "Growth", value: "3x" }, { label: "Brands", value: "60+" }],
        socials: { linkedin: "#", twitter: "#", email: "jane@webstepsolutions.com" },
        accent: "from-orange-500 to-amber-400",
        glow: "rgba(249,115,22,0.1)",
    },
];

const MarketingTeam = () => {
    const [index, setIndex] = useState(0);
    const [direction, setDirection] = useState(1);
    const sliderRef = useRef();

    const go = (next) => {
        setDirection(next > index ? 1 : -1);
        setIndex(next);
        sliderRef.current?.slickGoTo(next);
    };

    const prev = () => go(index === 0 ? teamData.length - 1 : index - 1);
    const next = () => go(index === teamData.length - 1 ? 0 : index + 1);

    const member = teamData[index];

    const settings = {
        arrows: false, infinite: true, speed: 600,
        slidesToShow: 1, slidesToScroll: 1, fade: true,
        afterChange: i => setIndex(i),
    };

    return (
        <section className="py-24 md:py-36 bg-slate-50 relative z-10 px-6 overflow-hidden font-roboto">

            {/* Background glows */}
            <div className="absolute top-0 right-0 w-[700px] h-[700px] bg-pink-100/50 rounded-full blur-[160px] -translate-y-1/3 translate-x-1/4 pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-orange-100/50 rounded-full blur-[140px] translate-y-1/3 -translate-x-1/4 pointer-events-none" />
            <div className="absolute inset-0 pointer-events-none opacity-[0.03]"
                style={{ backgroundImage: 'linear-gradient(rgba(0,0,0,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(0,0,0,0.1) 1px, transparent 1px)', backgroundSize: '48px 48px' }} />

            <div className="container mx-auto relative z-10 max-w-7xl">

                {/* Header */}
                <div className="text-center mb-20">
                    <motion.span initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
                        className="inline-block px-4 py-1.5 rounded-full bg-white border border-slate-100 text-pink-500 font-bold text-[10px] tracking-widest capitalize mb-5 shadow-sm">
                        Our Experts
                    </motion.span>
                    <motion.h2 initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} viewport={{ once: true }}
                        className="text-5xl md:text-6xl font-black text-slate-900 tracking-tight">
                        Meet The{" "}
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-orange-500">Marketing Team</span>
                    </motion.h2>
                    <motion.p initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} viewport={{ once: true }}
                        className="text-slate-500 text-lg max-w-xl mx-auto mt-5 leading-relaxed">
                        Creative personalities with a passion for building brands and generating leads in the digital space.
                    </motion.p>
                </div>

                {/* Card */}
                <div className="relative max-w-6xl mx-auto">

                    {/* Outer glow that changes per member */}
                    <div className="absolute -inset-px rounded-[3rem] blur-[60px] opacity-20 transition-all duration-1000 pointer-events-none"
                        style={{ background: `radial-gradient(ellipse at center, ${member.glow}, transparent 70%)` }} />

                    <div className="relative bg-white rounded-[3rem] border border-slate-100 shadow-2xl overflow-hidden">

                        {/* Top accent line */}
                        <div className={`absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r ${member.accent} opacity-60 transition-all duration-700`} />

                        <div className="flex flex-col lg:flex-row">

                            {/* ── LEFT: Image panel ── */}
                            <div className="w-full lg:w-[42%] relative">
                                <div className="relative h-full min-h-[420px] lg:min-h-[600px] overflow-hidden bg-slate-100">

                                    {/* Image slider */}
                                    <Slider {...settings} ref={sliderRef} className="h-full">
                                        {teamData.map((m, i) => (
                                            <div key={i} className="outline-none h-full">
                                                <div className="relative h-full min-h-[420px] lg:min-h-[600px]">
                                                    <Image src={m.image} alt={m.name} fill
                                                        className="object-cover object-top transition-all duration-700"
                                                        priority={i === 0} />
                                                </div>
                                            </div>
                                        ))}
                                    </Slider>

                                    {/* Gradient overlays */}
                                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-transparent to-white/10 pointer-events-none" />

                                    {/* Name tag on image */}
                                    <div className="absolute bottom-6 left-6 z-10">
                                        <AnimatePresence mode="wait">
                                            <motion.div key={index}
                                                initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }}
                                                transition={{ duration: 0.4 }}
                                                className={`inline-block px-4 py-1.5 rounded-full bg-gradient-to-r ${member.accent} text-white text-[10px] font-black tracking-widest capitalize shadow-lg`}>
                                                {member.tag}
                                            </motion.div>
                                        </AnimatePresence>
                                    </div>

                                    {/* Nav arrows over image */}
                                    <div className="absolute bottom-6 right-6 z-10 flex gap-2">
                                        <button onClick={prev} className="w-10 h-10 rounded-full bg-white/80 backdrop-blur-md border border-slate-200 flex items-center justify-center text-slate-600 hover:bg-white hover:border-pink-500/40 transition-all duration-300 group">
                                            <HiChevronLeft className="w-5 h-5 group-hover:text-pink-500 transition-colors" />
                                        </button>
                                        <button onClick={next} className="w-10 h-10 rounded-full bg-white/80 backdrop-blur-md border border-slate-200 flex items-center justify-center text-slate-600 hover:bg-white hover:border-pink-500/40 transition-all duration-300 group">
                                            <HiChevronRight className="w-5 h-5 group-hover:text-pink-500 transition-colors" />
                                        </button>
                                    </div>

                                    {/* Slide dots */}
                                    <div className="absolute top-6 right-6 flex flex-col gap-1.5 z-10">
                                        {teamData.map((_, i) => (
                                            <button key={i} onClick={() => go(i)}
                                                className={`rounded-full transition-all duration-300 ${i === index ? 'h-6 w-1.5 bg-pink-500' : 'h-1.5 w-1.5 bg-slate-300 hover:bg-pink-300'}`} />
                                        ))}
                                    </div>
                                </div>
                            </div>

                            {/* ── RIGHT: Content ── */}
                            <div className="w-full lg:w-[58%] p-10 md:p-14 flex flex-col justify-center relative bg-white">

                                <AnimatePresence mode="wait">
                                    <motion.div key={index}
                                        initial={{ opacity: 0, x: direction * 30 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        exit={{ opacity: 0, x: direction * -20 }}
                                        transition={{ duration: 0.45, ease: "easeOut" }}
                                        className="space-y-8"
                                    >
                                        {/* Name + role */}
                                        <div>
                                            <p className="text-[10px] font-black tracking-[0.25em] capitalize text-slate-400 mb-3">
                                                #{String(index + 1).padStart(2, "0")} / {teamData.length}
                                            </p>
                                            <h3 className="text-4xl md:text-5xl font-black text-slate-900 tracking-tight leading-tight mb-3">
                                                {member.name}
                                            </h3>
                                            <span className={`text-xs font-black tracking-[0.2em] capitalize text-transparent bg-clip-text bg-gradient-to-r ${member.accent}`}>
                                                {member.role}
                                            </span>
                                        </div>

                                        {/* Divider */}
                                        <div className={`h-px bg-gradient-to-r ${member.accent} opacity-20 w-24`} />

                                        {/* Quote */}
                                        <div className="relative pl-6">
                                            <div className={`absolute left-0 top-0 w-0.5 h-full bg-gradient-to-b ${member.accent} rounded-full opacity-50`} />
                                            <FaQuoteLeft className="text-slate-100 text-5xl absolute -top-3 -left-2 pointer-events-none" />
                                            <p className="text-slate-600 leading-loose text-base md:text-lg relative z-10 italic">
                                                "{member.description}"
                                            </p>
                                        </div>

                                        {/* Stats */}
                                        <div className="grid grid-cols-3 gap-4">
                                            {member.stats.map((s, i) => (
                                                <div key={i} className="bg-slate-50 border border-slate-100 rounded-2xl p-4 text-center hover:border-pink-500/20 hover:bg-white transition-all duration-300">
                                                    <p className={`text-2xl font-black text-transparent bg-clip-text bg-gradient-to-br ${member.accent}`}>{s.value}</p>
                                                    <p className="text-[10px] text-slate-400 font-bold tracking-widest capitalize mt-1">{s.label}</p>
                                                </div>
                                            ))}
                                        </div>

                                        {/* Socials */}
                                        <div className="flex items-center gap-4 pt-2">
                                            <span className="text-[10px] text-slate-400 font-bold tracking-widest capitalize">Connect</span>
                                            <div className="h-px flex-1 bg-slate-100" />
                                            {[
                                                { icon: <FaLinkedinIn />, href: member.socials.linkedin, label: "LinkedIn" },
                                                { icon: <FaTwitter />, href: member.socials.twitter, label: "Twitter" },
                                                { icon: <FaEnvelope />, href: `mailto:${member.socials.email}`, label: "Email" },
                                            ].map((s, i) => (
                                                <a key={i} href={s.href} aria-label={s.label}
                                                    className="w-10 h-10 rounded-xl bg-slate-50 border border-slate-100 flex items-center justify-center text-slate-400 hover:text-pink-500 hover:border-pink-500/40 hover:bg-pink-50 transition-all duration-300 text-sm">
                                                    {s.icon}
                                                </a>
                                            ))}
                                        </div>
                                    </motion.div>
                                </AnimatePresence>

                                {/* Thumbnail strip */}
                                <div className="flex gap-3 mt-10 pt-8 border-t border-slate-100">
                                    {teamData.map((m, i) => (
                                        <button key={i} onClick={() => go(i)}
                                            className={`relative w-14 h-14 rounded-2xl overflow-hidden transition-all duration-300 flex-shrink-0 ${i === index
                                                ? "ring-2 ring-pink-500 scale-110 shadow-lg shadow-pink-500/20"
                                                : "opacity-40 hover:opacity-80 ring-1 ring-slate-200"
                                                }`}>
                                            <Image src={m.image} alt={m.name} fill className="object-cover object-top" />
                                        </button>
                                    ))}
                                    <div className="flex flex-col justify-center ml-2">
                                        <p className="text-sm font-bold text-slate-900">{teamData[index].name}</p>
                                        <p className="text-[11px] text-slate-400">{teamData[index].role}</p>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default MarketingTeam;
