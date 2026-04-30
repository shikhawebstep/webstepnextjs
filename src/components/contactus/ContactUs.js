import React from 'react'
import ContactForm from './ContactForm'
import { FaMobile, FaMapMarkerAlt, FaGlobe, FaEnvelope } from 'react-icons/fa'
import AnimatedSection from '../AnimatedSection';

const ContactUs = () => {
    return (
        <section className="bg-white font-roboto">

            {/* Hero Banner Section */}
            <div className="relative py-20 lg:py-28 overflow-hidden bg-slate-900">
                <div className="absolute inset-0 z-0 opacity-20 pointer-events-none" style={{ backgroundImage: 'radial-gradient(#ec4899 0.5px, transparent 0.5px)', backgroundSize: '40px 40px' }}></div>
                <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-pink-500/10 rounded-full blur-[120px] translate-x-1/2 -translate-y-1/2"></div>

                <div className="container mx-auto relative z-10 px-6">
                    <AnimatedSection delay={0.1} direction="up">
                        <div className="text-center max-w-3xl mx-auto">
                            <span className="inline-block px-4 py-1.5 rounded-full bg-pink-500/10 border border-pink-500/20 text-pink-500 font-bold text-[10px] tracking-widest capitalize mb-6">
                                Get In Touch
                            </span>
                            <h1 className="text-5xl md:text-7xl font-black text-white mb-8 tracking-tight capitalize leading-[1.1]">
                                Let&apos;s Start Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-orange-400">Next Big Thing</span>
                            </h1>
                            <p className="text-slate-400 text-lg md:text-xl leading-relaxed">
                                Have a groundbreaking idea? We&apos;re here to turn it into reality. Reach out and let&apos;s start building the future together.
                            </p>
                        </div>
                    </AnimatedSection>
                </div>
            </div>

            <div className="container mx-auto relative z-10 px-6 -mt-16 lg:-mt-24 pb-20">
                <div className="grid lg:grid-cols-12 gap-8 items-start">

                    {/* Left Column: Info Cards */}
                    <div className="lg:col-span-4 space-y-6">
                        <AnimatedSection delay={0.2} direction="left">
                            <div className="bg-white p-8 rounded-[2.5rem] shadow-2xl border border-slate-100 flex flex-col gap-6">
                                <div className="flex items-start gap-5">
                                    <div className="w-12 h-12 rounded-2xl bg-pink-50 flex items-center justify-center text-pink-600 shadow-sm flex-shrink-0">
                                        <FaMapMarkerAlt size={20} />
                                    </div>
                                    <div>
                                        <h4 className="font-black text-slate-900 text-sm capitalize tracking-wider mb-2">Our HQ</h4>
                                        <p className="text-slate-500 text-sm leading-relaxed">E-45 Industrial Area Phase-8, Mohali, Punjab</p>
                                    </div>
                                </div>

                                <div className="h-px bg-slate-100 w-full" />

                                <div className="flex items-start gap-5">
                                    <div className="w-12 h-12 rounded-2xl bg-orange-50 flex items-center justify-center text-orange-600 shadow-sm flex-shrink-0">
                                        <FaMobile size={20} />
                                    </div>
                                    <div>
                                        <h4 className="font-black text-slate-900 text-sm capitalize tracking-wider mb-2">Call Us</h4>
                                        <p className="text-slate-500 text-sm leading-relaxed font-bold">+91 97818-90033</p>
                                    </div>
                                </div>

                                <div className="h-px bg-slate-100 w-full" />

                                <div className="flex items-start gap-5">
                                    <div className="w-12 h-12 rounded-2xl bg-blue-50 flex items-center justify-center text-blue-600 shadow-sm flex-shrink-0">
                                        <FaEnvelope size={20} />
                                    </div>
                                    <div>
                                        <h4 className="font-black text-slate-900 text-sm capitalize tracking-wider mb-2">Email</h4>
                                        <p className="text-slate-500 text-sm leading-relaxed">info@webstepsolutions.com</p>
                                    </div>
                                </div>
                            </div>

                            <div className="mt-8 bg-slate-900 p-10 rounded-[2.5rem] shadow-2xl relative overflow-hidden group">
                                <div className="absolute inset-0 bg-gradient-to-br from-pink-500/20 to-transparent z-0"></div>
                                <div className="relative z-10">
                                    <h4 className="text-white font-black text-2xl mb-4 tracking-tight capitalize">Ready for <br /> global impact?</h4>
                                    <p className="text-white/60 text-sm mb-8 leading-relaxed">Join 500+ businesses that scaled with our software solutions.</p>
                                    <div className="flex items-center gap-2 text-pink-500 font-black text-[10px] tracking-widest capitalize">
                                        <FaGlobe />
                                        <span>Worldwide Support</span>
                                    </div>
                                </div>
                            </div>
                        </AnimatedSection>
                    </div>

                    {/* Right Column: Form & Map */}
                    <div className="lg:col-span-8 space-y-8">
                        <AnimatedSection delay={0.3} direction="right">
                            <div className="bg-white p-8 md:p-12 rounded-[3rem] shadow-2xl border border-slate-100 relative overflow-hidden">
                                <div className="absolute top-0 right-0 w-64 h-64 bg-slate-50 rounded-full blur-[80px] -translate-y-1/2 translate-x-1/2"></div>
                                <div className="mb-10">
                                    <h2 className="text-3xl md:text-4xl font-black text-slate-900 mb-4 tracking-tight capitalize">Send us a Message</h2>
                                    <p className="text-slate-400 text-sm">Fill out the form below and we&apos;ll get back to you within 24 hours.</p>
                                </div>
                                <ContactForm />
                            </div>


                        </AnimatedSection>
                    </div>

                </div>

                <div className="mt-8 rounded-[3rem] overflow-hidden shadow-2xl border border-slate-100 h-[450px] relative group">
                    <div className="absolute inset-0 bg-pink-500/5 z-10 pointer-events-none group-hover:opacity-0 transition-opacity"></div>
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d54891.386069539025!2d76.65618091838071!3d30.698388701971332!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390fee906da6f81f%3A0x512998f16ce508d8!2sSahibzada%20Ajit%20Singh%20Nagar%2C%20Punjab!5e0!3m2!1sen!2sin!4v1712668532890!5m2!1sen!2sin"
                        className="w-full h-full border-0 grayscale hover:grayscale-0 transition-all duration-700"
                        loading="lazy"
                    ></iframe>
                    <div className="absolute bottom-8 left-8 p-4 bg-white/90 backdrop-blur-md rounded-2xl border border-white/50 shadow-xl z-20 hidden md:flex items-center gap-4">
                        <div className="w-10 h-10 rounded-xl bg-pink-500 flex items-center justify-center text-white">
                            <FaMapMarkerAlt />
                        </div>
                        <div>
                            <span className="block font-black text-[10px] capitalize tracking-widest text-slate-900">Visit Our Studio</span>
                            <span className="text-xs text-slate-500">Phase 8, Mohali</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ContactUs
