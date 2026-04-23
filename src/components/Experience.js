import React from 'react';
import Image from 'next/image';
import dev from "@/components/img/development-company.png";
import { FiTrendingUp } from 'react-icons/fi';
import AnimatedSection from './AnimatedSection';

const Experience = () => {
    return (
        <section className="py-16 md:py-24 bg-white relative z-10 px-6 font-roboto overflow-hidden">

            {/* Ambient background decorative elements */}
            <div className="absolute top-1/2 left-0 w-[400px] h-[400px] bg-pink-100/30 rounded-full blur-[100px] -translate-x-1/2 pointer-events-none"></div>

            <div className="container mx-auto max-w-7xl">
                <div className="flex flex-col-reverse lg:flex-row items-center gap-16 lg:gap-24">

                    {/* Content Side */}
                    <div className="w-full lg:w-1/2 relative z-10">
                        <AnimatedSection delay={0.1} direction="left">
                            <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-slate-900 text-white mb-8 shadow-2xl shadow-slate-900/20">
                                <FiTrendingUp className="text-pink-500" />
                                <span className="text-[9px] font-black uppercase tracking-[0.3em]">Proven Experience</span>
                            </div>

                            <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl font-black text-slate-900 leading-[1.1] tracking-tight uppercase mb-8">
                                Vast experience in
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-600 via-orange-500 to-amber-500">
                                    Enterprise Software
                                </span>
                            </h2>

                            <div className="space-y-6 text-slate-500 text-lg leading-relaxed mb-10">
                                <p>
                                    We are not just a development company; we are your strategic partners. We work as an extended team of yours to brainstorm, improve, develop, and release.
                                </p>
                                <p>
                                    Our agile approach ensures that we thrive on feedback, continuing the cycle until your product reaches its maximum potential.
                                </p>
                            </div>

                            <div className="grid grid-cols-2 gap-8">
                                {[
                                    { num: '500+', label: 'Products Launched' },
                                    { num: '100%', label: 'Commitment' }
                                ].map((item, idx) => (
                                    <div key={idx} className="p-6 bg-slate-50 rounded-3xl border border-slate-100 group hover:border-pink-500/20 transition-colors">
                                        <span className="block font-heading text-3xl font-black text-slate-900 mb-1">{item.num}</span>
                                        <span className="block text-[8px] font-black text-slate-400 uppercase tracking-widest">{item.label}</span>
                                    </div>
                                ))}
                            </div>
                        </AnimatedSection>
                    </div>

                    {/* Image Side */}
                    <div className="w-full lg:w-1/2 relative">
                        <AnimatedSection delay={0.3} direction="right">
                            <div className="relative group">
                                {/* Visual Composition */}
                                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[110%] h-[110%] bg-gradient-to-br from-pink-100 to-orange-100 rounded-full blur-[80px] opacity-40 animate-pulse pointer-events-none"></div>

                                {/* Decorative Card background */}
                                <div className="absolute inset-0 bg-white rounded-[3rem] border border-slate-100 shadow-2xl -z-10 rotate-3 group-hover:rotate-6 transition-transform duration-700"></div>

                                <div className="relative z-10 p-8">
                                    <Image src={dev} alt="Enterprise Development" className="w-full h-auto max-w-[500px] mx-auto transform group-hover:scale-105 group-hover:-translate-y-4 transition-all duration-700" />
                                </div>

                                {/* Floating mini-badge */}
                                <div className="absolute bottom-10 right-0 p-6 bg-slate-900 rounded-3xl shadow-2xl text-white transform rotate-6 hover:rotate-0 transition-transform cursor-default z-20">
                                    <span className="block font-black text-2xl leading-none mb-1 text-pink-500">20+</span>
                                    <span className="block text-[7px] font-black uppercase tracking-[0.3em]">Years Active</span>
                                </div>
                            </div>
                        </AnimatedSection>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default Experience;
