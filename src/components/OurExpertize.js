import React from 'react';
import { FaApple, FaAndroid } from 'react-icons/fa';
import { FiMonitor, FiShoppingCart, FiCpu, FiTrendingUp, FiPieChart, FiSettings } from 'react-icons/fi';
import { FaArrowRight } from 'react-icons/fa';

const OurExpertize = () => {
  const expertiseAreas = [
    { id: 1, icon: <FiMonitor size={32} />, title: 'Web Application Development', link: '#' },
    { id: 2, icon: <FaApple size={32} />, title: 'iOS Apps Development', link: '#' },
    { id: 3, icon: <FaAndroid size={32} />, title: 'Android Apps Development', link: '#' },
    { id: 4, icon: <FiShoppingCart size={32} />, title: 'E-Commerce Solutions', link: '#' },
    { id: 5, icon: <FiCpu size={32} />, title: 'Technical Consultancy', link: '#' },
    { id: 6, icon: <FiTrendingUp size={32} />, title: 'Digital Marketing', link: '#' },
    { id: 7, icon: <FiPieChart size={32} />, title: 'Web Analytics', link: '#' },
    { id: 8, icon: <FiSettings size={32} />, title: 'Maintenance and Supports', link: '#' },
  ];

  return (
    <section className="py-16 md:py-24 bg-white relative z-10 px-6 font-roboto">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-slate-50 border border-slate-100 text-pink-500 font-bold text-[10px] tracking-widest uppercase mb-4 shadow-sm">
            What We Do Best
          </span>
          <h4 className="text-4xl md:text-5xl font-black text-slate-900">Our Expertise</h4>
        </div>

        <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-6">
          {expertiseAreas.map((area) => (
            <div className="group bg-white p-8 rounded-[2rem] shadow-xl transition-all duration-500 border border-slate-100 hover:border-pink-500/20 flex flex-col items-center justify-center text-center relative overflow-hidden hover:-translate-y-2" key={area.id}>

              {/* Hover gradient effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-pink-500/5 to-orange-400/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>

              <div className="relative z-10 flex flex-col items-center">
                <div className="w-20 h-20 bg-slate-50 border border-slate-100 rounded-2xl flex items-center justify-center mb-8 text-pink-500 group-hover:scale-110 group-hover:text-white group-hover:bg-gradient-to-br group-hover:from-pink-600 group-hover:to-orange-500 group-hover:border-transparent transition-all duration-500 shadow-sm">
                  {area.icon}
                </div>

                <h6 className="font-bold text-lg text-slate-900 mb-6 leading-snug tracking-wide">
                  {area.title}
                </h6>

                <a href={area.link} className="inline-flex items-center gap-2 text-[10px] font-bold tracking-[0.2em] uppercase text-slate-400 group-hover:text-pink-500 transition-colors duration-300">
                  Read More <FaArrowRight className="text-pink-500 group-hover:translate-x-1 transition-transform" />
                </a>
              </div>

            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurExpertize;
