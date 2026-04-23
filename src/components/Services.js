import React from 'react';
import { FiCode, FiLayers, FiMail } from 'react-icons/fi';
import { FaArrowRight } from 'react-icons/fa';
import AnimatedSection from './AnimatedSection';

const Services = () => {
  const servicesData = [
    {
      id: 1,
      title: 'PSD to HTML',
      subTitle: '8,500+ Projects',
      description: 'We deliver high-performance, SEO-friendly HTML markups from your layered PSD files with pixel-perfect precision.',
      buttonText: 'Order Now',
      icon: <FiCode className="text-3xl" />,
      gradient: 'from-pink-500 to-rose-500',
      delay: 0.1
    },
    {
      id: 2,
      title: 'Sketch to HTML',
      subTitle: '600+ Designs',
      description: 'W3C validated and fast-loading HTML markups meticulously crafted from your Sketch application designs.',
      buttonText: 'Order Now',
      icon: <FiLayers className="text-3xl" />,
      gradient: 'from-purple-500 to-indigo-500',
      delay: 0.2
    },
    {
      id: 3,
      title: 'PSD to Email',
      subTitle: '850+ Templates',
      description: 'Responsive email template conversions ensuring great readability and cross-client compatibility.',
      buttonText: 'Order Now',
      icon: <FiMail className="text-3xl" />,
      gradient: 'from-orange-400 to-red-500',
      delay: 0.3
    }
  ];

  return (
    <section className="py-16 md:py-24 bg-white relative z-10 px-6 font-roboto overflow-hidden">
      
      {/* Background patterns */}
      <div className="absolute inset-0 opacity-[0.02] pointer-events-none" style={{ backgroundImage: 'radial-gradient(#000 0.5px, transparent 0.5px)', backgroundSize: '32px 32px' }}></div>

      <div className="container mx-auto max-w-7xl">
        
        {/* Header Section */}
        <AnimatedSection delay={0.1} direction="up">
            <div className="text-center mb-20 max-w-2xl mx-auto">
                <span className="inline-block px-4 py-1.5 rounded-full bg-slate-50 border border-slate-100 text-pink-500 font-bold text-[10px] tracking-widest uppercase mb-4 shadow-sm">
                    Our Expertise
                </span>
                <h2 className="font-heading text-4xl md:text-5xl font-black text-slate-900 mb-6 uppercase tracking-tight">
                    Technical <span className="text-pink-600 underline decoration-pink-200 decoration-8 underline-offset-8">Mastery</span>
                </h2>
                <p className="text-slate-500 text-lg leading-relaxed">
                    We combine precision engineering with creative excellence to deliver high-performance digital products.
                </p>
            </div>
        </AnimatedSection>

        <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-10 relative z-10">
          {servicesData.map(service => (
            <AnimatedSection key={service.id} delay={service.delay} direction="up">
                <div className="group flex flex-col bg-white rounded-[2.5rem] overflow-hidden shadow-2xl transition-all duration-500 border border-slate-100 hover:border-pink-500/20 hover:-translate-y-3 relative">
                    {/* Hover Glow */}
                    <div className="absolute inset-0 bg-gradient-to-br from-white via-white to-pink-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    
                    <div className="p-10 flex flex-col h-full relative z-10">
                        {/* Icon Block */}
                        <div className={`w-20 h-20 rounded-[1.5rem] bg-gradient-to-br ${service.gradient} flex items-center justify-center text-white shadow-xl shadow-pink-500/20 mb-8 transform group-hover:scale-110 group-hover:rotate-6 transition-all duration-500`}>
                            {service.icon}
                        </div>

                        {/* Title & Metadata */}
                        <div className="mb-6">
                            <span className="text-[10px] font-black text-slate-400 uppercase tracking-[0.25em] mb-2 block">
                                {service.subTitle}
                            </span>
                            <h3 className="font-heading text-2xl font-black text-slate-900 tracking-tight uppercase group-hover:text-pink-600 transition-colors">
                                {service.title}
                            </h3>
                        </div>

                        {/* Description */}
                        <p className="text-slate-500 leading-relaxed mb-10 flex-grow text-sm">
                            {service.description}
                        </p>

                        {/* Button */}
                        <button className="flex items-center justify-between gap-3 w-full px-8 py-5 rounded-2xl bg-slate-50 border border-slate-100 hover:border-pink-500/50 hover:bg-slate-900 hover:text-white transition-all duration-500 font-black tracking-widest uppercase text-[10px] group/btn">
                            <span>{service.buttonText}</span>
                            <FaArrowRight className="text-pink-500 group-hover/btn:translate-x-2 transition-transform duration-300" />
                        </button>
                    </div>
                </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Services;
