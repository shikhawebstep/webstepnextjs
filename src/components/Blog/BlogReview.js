"use client";
import React from 'react';
import review from '@/components/img/review-icon1.png';
import review1 from '@/components/img/review-icon2.png';
import review2 from '@/components/img/review-icon3.png';
import review3 from '@/components/img/review-icon4.png';
import Image from 'next/image';
import AnimatedSection from '../AnimatedSection';
import { FaStar, FaShieldAlt, FaAward, FaThumbsUp } from 'react-icons/fa';
import { motion } from 'framer-motion';

const BlogReview = () => {
    const reviews = [
        { src: review, alt: 'Review 1', label: 'Clutch' },
        { src: review1, alt: 'Review 2', label: 'Google' },
        { src: review2, alt: 'Review 3', label: 'UpCity' },
        { src: review3, alt: 'Review 4', label: 'DesignRush' },
    ];

    return (
        <section className="py-16 md:py-24 bg-white relative z-10 px-6 overflow-hidden font-roboto">

            {/* Advanced Mesh Background */}
            <div className="absolute inset-0 pointer-events-none overflow-hidden">
                <div className="absolute top-[-10%] right-[-5%] w-[600px] h-[600px] bg-pink-100/50 rounded-full blur-[120px] animate-pulse" />
                <div className="absolute bottom-[-10%] left-[-5%] w-[500px] h-[500px] bg-orange-100/40 rounded-full blur-[100px] animate-pulse [animation-delay:2s]" />
                <div className="absolute top-[30%] left-[40%] w-[300px] h-[300px] bg-purple-50/50 rounded-full blur-[80px]" />
            </div>

            {/* Decorative Floating Elements */}
            <motion.div
                animate={{ y: [0, -20, 0], rotate: [0, 5, 0] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                className="absolute top-20 left-[10%] text-pink-200 opacity-40 hidden lg:block"
            >
                <FaAward size={64} />
            </motion.div>
            <motion.div
                animate={{ y: [0, 20, 0], rotate: [0, -10, 0] }}
                transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                className="absolute bottom-20 right-[10%] text-orange-200 opacity-40 hidden lg:block"
            >
                <FaShieldAlt size={56} />
            </motion.div>

            <div className="container mx-auto relative z-10">
                <div className="bg-white/40 backdrop-blur-xl rounded-[3rem] p-12 md:p-20 border border-white/60 shadow-[0_32px_64px_-16px_rgba(0,0,0,0.05)] relative overflow-hidden">

                    {/* Subtle grid overlay inside card */}
                    <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: 'radial-gradient(#000 0.5px, transparent 0.5px)', backgroundSize: '32px 32px' }}></div>

                    <div className="relative z-10">
                        <AnimatedSection delay={0} direction="up" className="text-center mb-16">
                            <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-white/80 border border-pink-100 text-pink-600 font-black text-[10px] tracking-[0.2em] capitalize mb-8 shadow-sm">
                                <FaThumbsUp className="text-orange-500" />
                                Trusted by 500+ Clients
                            </div>

                            <div className="flex flex-col items-center gap-6 mb-10">
                                <div className="flex gap-2 text-orange-400 drop-shadow-[0_0_8px_rgba(251,146,60,0.4)]">
                                    {[...Array(5)].map((_, i) => (
                                        <motion.div
                                            key={i}
                                            initial={{ scale: 0 }}
                                            whileInView={{ scale: 1 }}
                                            viewport={{ once: true }}
                                            transition={{ delay: 0.1 * i, type: "spring", stiffness: 200 }}
                                        >
                                            <FaStar size={24} />
                                        </motion.div>
                                    ))}
                                </div>

                                <h2 className="text-4xl md:text-6xl font-black text-slate-900 leading-[1.1] tracking-tight max-w-4xl">
                                    Top-Rated <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-orange-500 to-amber-500">Web Design</span> & Digital Agency
                                </h2>
                            </div>

                            <div className="flex flex-col md:flex-row items-center justify-center gap-4 text-slate-500">
                                <div className="h-px w-12 bg-gradient-to-r from-transparent to-slate-200 hidden md:block"></div>
                                <p className="font-bold text-sm capitalize tracking-[0.3em] flex items-center gap-3">
                                    <span className="text-pink-600 text-2xl font-black">4.9</span>
                                    Average Rating Across 200+ Reviews
                                </p>
                                <div className="h-px w-12 bg-gradient-to-l from-transparent to-slate-200 hidden md:block"></div>
                            </div>
                        </AnimatedSection>

                        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 md:gap-10">
                            {reviews.map((item, index) => (
                                <AnimatedSection key={index} delay={0.1 * index} direction="up">
                                    <div className="group relative">
                                        {/* Hover Glow Effect */}
                                        <div className="absolute inset-0 bg-gradient-to-br from-pink-500 to-orange-500 rounded-3xl blur-2xl opacity-0 group-hover:opacity-10 transition-opacity duration-500"></div>

                                        <div className="relative bg-white/60 backdrop-blur-md p-8 rounded-3xl border border-white shadow-sm hover:shadow-xl hover:border-pink-200/50 hover:-translate-y-2 transition-all duration-500 flex flex-col items-center justify-center min-h-[160px]">
                                            <div className="h-12 w-full relative mb-4">
                                                <Image
                                                    src={item.src}
                                                    alt={item.alt}
                                                    className="w-full h-full object-contain grayscale opacity-40 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700 transform group-hover:scale-110"
                                                />
                                            </div>
                                            <span className="text-[9px] font-black capitalize tracking-[0.2em] text-slate-300 group-hover:text-pink-500 transition-colors">
                                                {item.label} Partner
                                            </span>
                                        </div>
                                    </div>
                                </AnimatedSection>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Bottom stats pill */}
                <AnimatedSection delay={0.5} direction="up" className="flex justify-center mt-12">
                    <div className="px-8 py-4 bg-slate-900 rounded-2xl flex flex-wrap items-center justify-center gap-8 shadow-2xl">
                        <div className="flex items-center gap-3">
                            <span className="text-white font-black text-2xl">99%</span>
                            <span className="text-slate-400 text-[10px] font-bold capitalize tracking-widest leading-tight">Customer<br />Satisfaction</span>
                        </div>
                        <div className="w-px h-8 bg-slate-800 hidden sm:block"></div>
                        <div className="flex items-center gap-3">
                            <span className="text-pink-500 font-black text-2xl">10+</span>
                            <span className="text-slate-400 text-[10px] font-bold capitalize tracking-widest leading-tight">Years Of<br />Excellence</span>
                        </div>
                        <div className="w-px h-8 bg-slate-800 hidden sm:block"></div>
                        <div className="flex items-center gap-3">
                            <span className="text-orange-500 font-black text-2xl">24/7</span>
                            <span className="text-slate-400 text-[10px] font-bold capitalize tracking-widest leading-tight">Expert<br />Support</span>
                        </div>
                    </div>
                </AnimatedSection>
            </div>
        </section>
    );
};

export default BlogReview;
