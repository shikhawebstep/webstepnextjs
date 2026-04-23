"use client";
import React from 'react';
import WorkList from './WorkList';
import drTreatCase from '@/components/img/dr-treat-case.png';
import stillwellHansenWork from '@/components/img/Stillwell-Hansen-work.png';
import retrievrWork1 from '@/components/img/Retrievr-work1.png';
import graceMercyWork from '@/components/img/Grace-Mercy-work.png';
import Image from 'next/image';
import AnimatedSection from '../AnimatedSection';
import { FaExternalLinkAlt } from 'react-icons/fa';

const Work = () => {
    const projects = [
        { img: drTreatCase, title: "Dr. Treat", category: "Healthcare / UX Design" },
        { img: stillwellHansenWork, title: "Stillwell Hansen", category: "Infrastructure / Development" },
        { img: retrievrWork1, title: "Retrievr", category: "SaaS / Mobile App" },
        { img: graceMercyWork, title: "Grace Mercy", category: "Non-Profit / Web Design" },
    ];

    return (
        <section className="py-16 md:py-24 bg-slate-50 relative z-10 px-6 font-roboto overflow-hidden">
            <div className="container mx-auto max-w-7xl relative z-10">
                <AnimatedSection delay={0.1} direction="up" className="text-center mb-16">
                    <h5 className="text-3xl md:text-5xl font-black text-slate-900 mb-6 uppercase tracking-tight">
                        Our work—drawn from <span className="text-pink-500">20+ years</span> of projects
                    </h5>
                    <p className="text-slate-500 text-lg max-w-2xl mx-auto leading-relaxed">
                        Twenty years in business has yielded hundreds of client partnerships, each with their own challenges, each uniquely rewarding.
                    </p>
                </AnimatedSection>

                <AnimatedSection delay={0.2} direction="up">
                    <WorkList />
                </AnimatedSection>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                    {projects.map((project, index) => (
                        <AnimatedSection key={index} delay={0.1 * index} direction="up">
                            <div className="group relative bg-white rounded-[2.5rem] overflow-hidden shadow-xl border border-slate-100 transition-all duration-500 hover:shadow-2xl hover:-translate-y-2">
                                <div className="aspect-[16/10] overflow-hidden relative">
                                    <Image 
                                        src={project.img} 
                                        alt={project.title} 
                                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
                                    />
                                    {/* Overlay */}
                                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-slate-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-10">
                                        <div className="flex justify-between items-center transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                                            <div>
                                                <span className="text-pink-400 font-bold text-xs uppercase tracking-widest mb-2 block">{project.category}</span>
                                                <h4 className="text-white text-3xl font-black uppercase tracking-tight">{project.title}</h4>
                                            </div>
                                            <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center text-slate-900 shadow-lg hover:bg-pink-500 hover:text-white transition-colors duration-300">
                                                <FaExternalLinkAlt size={16} />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </AnimatedSection>
                    ))}
                </div>

                <AnimatedSection delay={0.5} direction="up" className="mt-20 text-center">
                    <button className="px-10 py-5 bg-white border border-slate-200 text-slate-900 rounded-2xl text-[11px] font-black uppercase tracking-[0.25em] shadow-xl hover:bg-pink-500 hover:text-white hover:border-pink-500 transition-all duration-300">
                        View More Case Studies
                    </button>
                </AnimatedSection>
            </div>
        </section>
    );
};

export default Work;
