import React from 'react';
import Link from 'next/link';
import { FiSmartphone, FiLayout, FiServer, FiCheckCircle } from 'react-icons/fi';
import { FaLaravel, FaNodeJs, FaPhp, FaWordpress, FaArrowRight } from 'react-icons/fa';

const ServicesPage = () => {
  const servicesData = [
    {
      id: 1,
      icon: <FiSmartphone className="text-3xl text-pink-500 group-hover:text-white transition-colors duration-300" />,
      title: 'Mobile App Development',
      description: 'A brand is your company’s personality and promise to your customer that helps create a lasting feeling.',
      href: '/mobileApp'
    },
    {
      id: 2,
      icon: <FiLayout className="text-3xl text-orange-400 group-hover:text-white transition-colors duration-300" />,
      title: 'UI/UX Designing',
      description: 'A brand is your company’s personality and promise to your customer that helps create a lasting feeling.',
      href: '/uiux'
    },
    {
      id: 3,
      icon: <FiServer className="text-3xl text-pink-500 group-hover:text-white transition-colors duration-300" />,
      title: 'Full Stack Development',
      description: 'A brand is your company’s personality and promise to your customer that helps create a lasting feeling.',
      href: '/fullstack'
    },
    {
      id: 4,
      icon: <FiCheckCircle className="text-3xl text-orange-400 group-hover:text-white transition-colors duration-300" />,
      title: 'Software Testing',
      description: 'A brand is your company’s personality and promise to your customer that helps create a lasting feeling.',
      href: '/softwaretesting'
    },
    {
      id: 5,
      icon: <FaLaravel className="text-3xl text-pink-500 group-hover:text-white transition-colors duration-300" />,
      title: 'Laravel Development',
      description: 'A brand is your company’s personality and promise to your customer that helps create a lasting feeling.',
      href: '/laravel'
    },
    {
      id: 6,
      icon: <FaNodeJs className="text-3xl text-orange-400 group-hover:text-white transition-colors duration-300" />,
      title: 'Node.js Development',
      description: 'A brand is your company’s personality and promise to your customer that helps create a lasting feeling.',
      href: '/nodejs'
    },
    {
      id: 7,
      icon: <FaPhp className="text-3xl text-pink-500 group-hover:text-white transition-colors duration-300" />,
      title: 'PHP Development',
      description: 'A brand is your company’s personality and promise to your customer that helps create a lasting feeling.',
      href: '/php'
    },
    {
      id: 8,
      icon: <FaWordpress className="text-3xl text-orange-400 group-hover:text-white transition-colors duration-300" />,
      title: 'WordPress Website',
      description: 'A brand is your company’s personality and promise to your customer that helps create a lasting feeling.',
      href: '/wordpress'
    }
  ];

  return (
    <section className="py-16 md:py-24 bg-white relative z-10 px-6 font-roboto">
      <div className="container mx-auto">
        <div className="text-center mb-16 relative z-10">
          <span className="inline-block px-4 py-1.5 rounded-full bg-slate-50 border border-slate-100 text-pink-500 font-bold text-[10px] tracking-widest capitalize mb-4 shadow-sm">
            What We Offer
          </span>
          <h4 className="text-4xl md:text-5xl font-black text-slate-900">Our Services</h4>
        </div>

        <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-6 relative z-10">
          {servicesData.map(service => (
            <div key={service.id} className="group relative bg-white border border-slate-100 rounded-3xl p-8 hover:border-pink-500/20 transition-all duration-500 shadow-xl hover:shadow-2xl flex flex-col items-start overflow-hidden hover:-translate-y-2">

              {/* Subtle hover gradient */}
              <div className="absolute inset-0 bg-gradient-to-br from-pink-500/5 to-orange-400/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>

              <div className="w-16 h-16 flex-shrink-0 bg-slate-50 border border-slate-100 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-gradient-to-br group-hover:from-pink-600 group-hover:to-orange-500 group-hover:border-transparent transition-all duration-500 relative z-10 shadow-sm">
                {service.icon}
              </div>
              <h6 className="font-bold text-xl mb-4 text-slate-900 group-hover:text-pink-600 transition-colors duration-300 relative z-10">
                {service.title}
              </h6>
              <p className="text-slate-500 text-sm leading-relaxed mb-6 relative z-10 flex-grow">
                {service.description}
              </p>
              <Link href={service.href} className="inline-flex items-center mt-auto gap-2 text-[10px] tracking-[0.2em] font-bold capitalize text-slate-400 group-hover:text-pink-500 transition-colors duration-300 relative z-10">
                Learn more <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          ))}
        </div>

        <div className="text-center mt-16 relative z-10">
          <Link href="/services" className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-pink-600 to-orange-500 text-white rounded-xl font-bold tracking-widest capitalize text-xs hover:shadow-lg hover:shadow-pink-600/20 hover:-translate-y-1 transition-all duration-300 group">
            View All Services <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ServicesPage;

