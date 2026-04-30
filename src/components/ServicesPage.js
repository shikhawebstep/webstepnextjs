"use client";
import React from 'react';
import Link from 'next/link';
import { FiSmartphone, FiLayout, FiServer, FiCheckCircle, FiArrowRight } from 'react-icons/fi';
import { FaLaravel, FaNodeJs, FaPhp, FaWordpress } from 'react-icons/fa';

const ServicesPage = () => {
  const servicesData = [
    {
      id: 1,
      icon: <FiSmartphone />,
      title: 'Mobile App Development',
      description: 'Crafting native and cross-platform mobile experiences that engage and delight users.',
      href: '/mobileApp',
      color: 'from-[#FF1F8E] to-[#FF0055]'
    },
    {
      id: 2,
      icon: <FiLayout />,
      title: 'UI/UX Designing',
      description: 'Designing intuitive, user-centric interfaces that blend aesthetic beauty with functional clarity.',
      href: '/uiux',
      color: 'from-[#FF0055] to-[#D400CC]'
    },
    {
      id: 3,
      icon: <FiServer />,
      title: 'Full Stack Development',
      description: 'Building robust, scalable backends and dynamic frontends that power modern web applications.',
      href: '/fullstack',
      color: 'from-[#D400CC] to-[#8E2DE2]'
    },
    {
      id: 4,
      icon: <FiCheckCircle />,
      title: 'Software Testing',
      description: 'Ensuring your digital products are bug-free and perform flawlessly across all platforms.',
      href: '/softwaretesting',
      color: 'from-[#8E2DE2] to-[#4A00E0]'
    },
    {
      id: 5,
      icon: <FaLaravel />,
      title: 'Laravel Development',
      description: 'Leveraging the power of the Laravel framework to build secure and feature-rich web applications.',
      href: '/laravel',
      color: 'from-[#FF1F8E] to-[#FF0055]'
    },
    {
      id: 6,
      icon: <FaNodeJs />,
      title: 'Node.js Development',
      description: 'Creating high-performance, real-time applications using event-driven Node.js architecture.',
      href: '/nodejs',
      color: 'from-[#FF0055] to-[#D400CC]'
    },
    {
      id: 7,
      icon: <FaPhp />,
      title: 'PHP Development',
      description: 'Custom PHP solutions tailored to your unique business requirements and goals.',
      href: '/php',
      color: 'from-[#D400CC] to-[#8E2DE2]'
    },
    {
      id: 8,
      icon: <FaWordpress />,
      title: 'WordPress Website',
      description: 'Building flexible, easy-to-manage WordPress sites that empower your digital presence.',
      href: '/wordpress',
      color: 'from-[#8E2DE2] to-[#4A00E0]'
    }
  ];

  return (
    <section className="py-20 md:py-24 bg-white relative z-10 px-6 font-roboto overflow-hidden">
      {/* Background Ambience */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#FF1F8E]/5 rounded-full blur-[150px] pointer-events-none" />

      <div className="container mx-auto relative z-10">
        <div className="flex flex-col items-center text-center mb-20">
          <div className="flex items-center gap-4 mb-6">
            <div className="w-10 h-[2px] bg-[#FF1F8E]"></div>
            <span className="text-[11px] font-bold tracking-[0.3em] text-[#FF1F8E] uppercase">Service Spectrum</span>
            <div className="w-10 h-[2px] bg-[#FF1F8E]"></div>
          </div>

          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-slate-900 leading-none tracking-tighter">
            Powerful <span className="text-[#FF1F8E]">Service</span>
          </h2>
        </div>

        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-6 md:gap-8">
          {servicesData.map((service) => (
            <div
              key={service.id}
              className="group bg-white border border-slate-100 p-8 rounded-[2rem] hover:border-[#FF1F8E]/20 transition-all duration-500 shadow-sm hover:shadow-xl flex flex-col h-full overflow-hidden"
            >
              <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${service.color} flex items-center justify-center text-white text-xl mb-8 shadow-lg group-hover:scale-110 transition-transform`}>
                {service.icon}
              </div>

              <h3 className="text-xl font-bold text-slate-900 group-hover:text-[#FF1F8E] mb-4 transition-colors">
                {service.title}
              </h3>

              <p className="text-slate-500 text-sm leading-relaxed mb-8 flex-grow font-medium">
                {service.description}
              </p>

              <Link href={service.href} className="inline-flex items-center gap-2 text-[10px] font-black tracking-widest uppercase text-slate-400 group-hover:text-[#FF1F8E] transition-colors">
                Discover <FiArrowRight className="group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <Link href="/services" className="inline-flex items-center gap-4 px-10 py-5 bg-slate-900 text-white rounded-full font-bold tracking-widest uppercase text-[10px] hover:bg-[#FF1F8E] transition-all duration-300 shadow-xl">
            Explore All Services <FiArrowRight />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ServicesPage;
