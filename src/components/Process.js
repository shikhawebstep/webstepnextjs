"use client";
import React from 'react';
import { FaSearch, FaPenNib, FaCode, FaRocket, FaCog, FaChartLine, FaArrowRight } from 'react-icons/fa';

const Process = () => {
  const developmentProcess = [
    {
      id: '01',
      title: 'Discovery',
      subtitle: 'Insight & Strategy',
      description: 'Understanding the underlying concept and target audience to build a solid foundation.',
      icon: <FaSearch />,
      color: "from-[#FF1F8E] to-[#FF0055]"
    },
    {
      id: '02',
      title: 'Design',
      subtitle: 'UI/UX Architecture',
      description: 'Creating wireframes and refining them based on feedback for an intuitive experience.',
      icon: <FaPenNib />,
      color: "from-[#FF0055] to-[#D400CC]"
    },
    {
      id: '03',
      title: 'Build',
      subtitle: 'Development Phase',
      description: 'Developing robust functionality using cutting-edge technologies and best practices.',
      icon: <FaCode />,
      color: "from-[#D400CC] to-[#8E2DE2]"
    },
    {
      id: '04',
      title: 'Launch',
      subtitle: 'Quality Assurance',
      description: 'For better end-user experience, we rigorously test the product and ensure a smooth launch.',
      icon: <FaRocket />,
      color: "from-[#8E2DE2] to-[#4A00E0]"
    },
    {
      id: '05',
      title: 'Maintain',
      subtitle: 'Ongoing Support',
      description: 'Adding new functionalities and providing support for a delightful end-user experience.',
      icon: <FaCog />,
      color: "from-[#FF1F8E] to-[#D400CC]"
    },
    {
      id: '06',
      title: 'Optimization',
      subtitle: 'Growth & Scaling',
      description: 'Analyzing performance and optimizing the product to drive continuous growth and success.',
      icon: <FaChartLine />,
      color: "from-[#D400CC] to-[#4A00E0]"
    }
  ];

  return (
    <section className="py-20 md:py-24 relative overflow-hidden bg-white px-6 font-roboto">
      {/* Background Ambience */}
      <div className="absolute top-1/2 left-0 w-[800px] h-[800px] bg-[#FF1F8E]/5 rounded-full blur-[150px] pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col items-center text-center mb-20">
          <div className="">
            <div className="flex items-center justify-center gap-4 mb-6">
              <div className="w-10 h-[2px] bg-[#FF1F8E]"></div>
              <span className="text-[11px] font-bold tracking-[0.3em] text-[#FF1F8E] uppercase">Workflow Excellence</span>
              <div className="w-10 h-[2px] bg-[#FF1F8E]"></div>
            </div>

            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-slate-900 leading-none tracking-tighter mb-8">
              A High-Performance
              <span className="text-[#FF1F8E]"> Development </span>
            </h2>

            <div>
              <p className="text-lg text-slate-500 max-w-xl mx-auto leading-relaxed font-medium">
                Our systematic 6-step approach ensures every project is delivered with bulletproof stability and precision.
              </p>
            </div>
          </div>
        </div>

        <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-6 md:gap-8">
          {developmentProcess.map((step) => (
            <div
              key={step.id}
              className="group bg-white p-10 rounded-[2.5rem] border border-slate-100 hover:border-[#FF1F8E]/20 transition-all duration-500 shadow-sm hover:shadow-xl flex flex-col relative overflow-hidden"
            >
              {/* ID Badge */}
              <span className="absolute top-8 right-8 text-6xl font-black text-slate-100 group-hover:text-[#FF1F8E]/5 transition-colors duration-500 select-none">
                {step.id}
              </span>

              <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${step.color} flex items-center justify-center text-white text-xl mb-8 shadow-lg group-hover:scale-110 transition-transform relative z-10`}>
                {step.icon}
              </div>

              <div className="relative z-10">
                <span className="text-[10px] font-black text-[#FF1F8E] uppercase tracking-[0.2em] mb-2 block opacity-80">
                  {step.subtitle}
                </span>
                <h3 className="text-2xl font-black text-slate-900 mb-6 group-hover:text-[#FF1F8E] transition-colors">
                  {step.title}
                </h3>
                <p className="text-slate-500 text-sm leading-relaxed mb-10 font-medium">
                  {step.description}
                </p>
                <div className="flex items-center gap-3 text-[10px] font-black uppercase tracking-widest text-[#FF1F8E]">
                  Learn More <FaArrowRight />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Process;
