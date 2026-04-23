"use client";
import React from 'react';
import ContactForm from './contactus/ContactForm';
import { FaMapMarkerAlt, FaEnvelope, FaPhoneAlt, FaClock } from 'react-icons/fa';

const FormSection = () => {
  return (
    <section className="py-16 md:py-24 bg-white relative z-10 px-6 overflow-hidden font-roboto">

      {/* Decorative background glows */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-pink-50 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/4 pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-orange-50 rounded-full blur-[120px] translate-y-1/2 -translate-x-1/4 pointer-events-none"></div>

      <div className="container mx-auto relative z-10">
        <div className="flex flex-col lg:flex-row bg-white rounded-[2.5rem] shadow-2xl overflow-hidden border border-slate-100">

          {/* Left Info Side */}
          <div className="w-full lg:w-5/12 bg-slate-50 border-r border-slate-100 p-10 md:p-16 flex flex-col justify-between relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-pink-500/5 to-orange-500/5 z-0 pointer-events-none"></div>
            <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-pink-100 rounded-full blur-[80px] z-0 pointer-events-none"></div>

            <div className="relative z-10">
              <span className="inline-block px-4 py-1.5 rounded-full bg-white border border-slate-200 text-pink-500 font-bold text-[10px] tracking-widest uppercase mb-8 shadow-sm">
                Get In Touch
              </span>
              <h4 className="text-4xl md:text-5xl font-black leading-tight text-slate-900 mb-6">
                Ready to Bring Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-orange-500">Ideas to Life?</span>
              </h4>
              <p className="text-slate-500 text-lg leading-relaxed mb-12">
                We're here to help you navigate the digital landscape. Reach out to discuss your project, or just say hello!
              </p>

              <div className="space-y-8">
                <div className="flex gap-5 items-start group">
                  <div className="w-12 h-12 rounded-2xl bg-white border border-slate-200 flex items-center justify-center flex-shrink-0 text-pink-500 group-hover:scale-110 group-hover:bg-pink-50 transition-all duration-300 shadow-sm">
                    <FaMapMarkerAlt size={20} />
                  </div>
                  <div>
                    <h6 className="font-bold text-slate-900 text-lg mb-1">Global HQ</h6>
                    <p className="text-slate-500 text-sm leading-relaxed">E-45 Industrial Area Phase-8<br />Mohali, Punjab</p>
                  </div>
                </div>

                <div className="flex gap-5 items-start group">
                  <div className="w-12 h-12 rounded-2xl bg-white border border-slate-200 flex items-center justify-center flex-shrink-0 text-orange-500 group-hover:scale-110 group-hover:bg-orange-50 transition-all duration-300 shadow-sm">
                    <FaEnvelope size={20} />
                  </div>
                  <div>
                    <h6 className="font-bold text-slate-900 text-lg mb-1">Contact Us</h6>
                    <p className="text-slate-500 text-sm leading-relaxed">
                      <a href="mailto:info@webstepsolutions.com" className="hover:text-pink-500 transition-colors">info@webstepsolutions.com</a><br />
                      <a href="tel:9781890033" className="hover:text-orange-500 transition-colors">+91 97818 90033</a>
                    </p>
                  </div>
                </div>

                <div className="flex gap-5 items-start group">
                  <div className="w-12 h-12 rounded-2xl bg-white border border-slate-200 flex items-center justify-center flex-shrink-0 text-pink-500 group-hover:scale-110 group-hover:bg-pink-50 transition-all duration-300 shadow-sm">
                    <FaClock size={20} />
                  </div>
                  <div>
                    <h6 className="font-bold text-slate-900 text-lg mb-1">Working Hours</h6>
                    <p className="text-slate-500 text-sm leading-relaxed">Mon - Sat: 9:00 AM - 6:00 PM<br />Sun: Closed</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Form Side */}
          <div className="w-full lg:w-7/12 p-10 md:p-16 relative bg-white">
            <div className="mb-10 relative z-10">
              <h3 className="text-3xl font-extrabold text-slate-900 mb-3">Send us a message</h3>
              <p className="text-slate-500">Fill out the form below and our team will get back to you within 24 hours.</p>
            </div>

            <div className="relative z-10">
              <ContactForm />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default FormSection;
