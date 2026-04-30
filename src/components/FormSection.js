"use client";
import React from 'react';
import ContactForm from './contactus/ContactForm';
import { FaMapMarkerAlt, FaEnvelope, FaClock, FaInstagram, FaLinkedinIn, FaTwitter } from 'react-icons/fa';

const FormSection = () => {
  return (
    <section className="py-20 md:py-24 relative z-10 px-6 overflow-hidden font-roboto bg-white">
      {/* Background Ambience */}
      <div className="absolute top-1/4 right-0 w-[800px] h-[800px] bg-[#FF1F8E]/5 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-[#D400CC]/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="container mx-auto relative z-10">
        {/* Header Block */}
        <div className="flex flex-col items-center text-center mb-20">
          <div className="">
            <div className="flex items-center justify-center gap-4 mb-8">
              <div className="w-10 h-[2px] bg-[#FF1F8E]"></div>
              <span className="text-[11px] font-bold tracking-[0.3em] text-[#FF1F8E] uppercase">Get In Touch</span>
              <div className="w-10 h-[2px] bg-[#FF1F8E]"></div>
            </div>

            <h2 className="md:text-6xl text-4xl font-black text-slate-900 leading-[0.9] tracking-tighter mb-8">
              Ready to Bring Your {' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF1F8E] to-[#FF8E5E] ">Ideas to Life?</span>
            </h2>

            <p className="text-slate-500  text-lg md:text-xl leading-relaxed max-w-2xl mx-auto font-medium">
              We&apos;re here to help you navigate the digital landscape. Reach out to discuss your project, or just say hello!
            </p>
          </div>
        </div>

        <div className="flex flex-col lg:flex-row bg-white rounded-[4rem] shadow-[0_50px_100px_-20px_rgba(0,0,0,0.08)] overflow-hidden border border-slate-100">
          {/* Left Info Side */}
          <div className="w-full lg:w-[45%] p-12 md:p-20 flex flex-col justify-center relative overflow-hidden bg-white border-r border-slate-100">
            <div className="space-y-12">
              {[
                {
                  icon: <FaMapMarkerAlt />,
                  title: "Global HQ",
                  detail: "E-45 Industrial Area Phase-8",
                  subDetail: "Mohali, Punjab",
                  color: "text-[#FF1F8E]"
                },
                {
                  icon: <FaEnvelope />,
                  title: "Contact Us",
                  detail: "info@webstepsolutions.com",
                  subDetail: "+91 97818 90033",
                  color: "text-[#FF8E5E]"
                },
                {
                  icon: <FaClock />,
                  title: "Working Hours",
                  detail: "Mon - Sat: 9:00 AM - 6:00 PM",
                  subDetail: "Sun: Closed",
                  color: "text-[#D400CC]"
                }
              ].map((item, i) => (
                <div
                  key={i}
                  className="flex gap-8 items-start group"
                >
                  <div className={`w-16 h-16 rounded-[1.5rem] bg-white border border-slate-100 flex items-center justify-center flex-shrink-0 ${item.color} shadow-sm group-hover:scale-110 transition-all duration-500`}>
                    {item.icon}
                  </div>
                  <div className="pt-2">
                    <h4 className="font-black text-slate-900 text-2xl mb-2 group-hover:text-[#FF1F8E] transition-colors">{item.title}</h4>
                    <p className="text-slate-500 text-lg font-medium leading-snug">{item.detail}</p>
                    <p className="text-slate-400 text-lg font-medium leading-snug">{item.subDetail}</p>
                  </div>
                </div>
              ))}

              {/* Social Connectivity */}
              <div className="pt-10 border-t border-slate-100">
                <p className="text-[10px] font-black uppercase tracking-[0.3em] text-slate-300 mb-8">Social Connectivity</p>
                <div className="flex gap-5">
                  {[<FaLinkedinIn key="li" />, <FaInstagram key="ig" />, <FaTwitter key="tw" />].map((icon, i) => (
                    <a key={i} href="#" className="w-14 h-14 rounded-2xl bg-white border border-slate-100 flex items-center justify-center text-slate-300 hover:bg-[#FF1F8E] hover:text-white hover:border-[#FF1F8E] transition-all duration-500 shadow-sm">
                      {icon}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Right Form Side */}
          <div className="w-full lg:w-[55%] p-12 md:p-20 relative bg-slate-50/30">
            <div className="relative z-10 h-full flex flex-col">
              <div className="mb-14">
                <h3 className="text-4xl font-black text-slate-900 mb-4 tracking-tight">Initiate Inquiry</h3>
                <p className="text-slate-500 text-xl font-medium leading-relaxed">Complete the form below and our specialists will engage with you shortly.</p>
              </div>

              <div className="flex-grow">
                <ContactForm light={true} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FormSection;
