import React from 'react';
import ExpertsForm from '../ExpertsForm';
import AnimatedSection from '../AnimatedSection';

const MobileDev = () => {
  return (
    <section className="py-16 md:py-24 bg-slate-50 relative z-10 px-6 overflow-hidden font-roboto">

      {/* Subtle background glow */}
      <div className="absolute top-1/2 left-0 w-[400px] h-[400px] bg-blue-100/40 rounded-full blur-[100px] -translate-x-1/2 pointer-events-none"></div>

      <div className="container mx-auto relative z-10">
        <AnimatedSection delay={0.1} direction="up">
          <div className="flex flex-col lg:flex-row gap-16 items-center">

            {/* Left Content */}
            <div className="lg:w-3/5">
              <div className="mb-10">
                <span className="font-mono text-[10px] tracking-[0.25em] capitalize text-blue-500 font-bold mb-6 block">
                  Next-Gen Mobile Solutions
                </span>
                <h2 className="text-4xl md:text-5xl font-black leading-tight text-slate-900 mb-8 tracking-tight capitalize">
                  Hybrid & Native <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-indigo-600">Mobile App</span> Development
                </h2>
                <div className="space-y-6 text-slate-500 text-lg leading-relaxed">
                  <p>
                    In today&apos;s mobile-centric world, having a robust mobile presence is crucial. We specialize in building applications that work flawlessly across all devices, ensuring your brand is always at your customers&apos; fingertips.
                  </p>
                  <p>
                    Whether you need a high-performance native iOS or Android app, or a cost-effective cross-platform solution using Flutter or React Native, our developers have the expertise to bring your vision to life.
                  </p>
                  <p>
                    We focus on creating intuitive user interfaces, fast loading times, and seamless integrations with backend services to provide a truly exceptional mobile experience.
                  </p>
                </div>
              </div>
            </div>

            {/* Right Form */}
            <div className="lg:w-2/5 w-full">

              <ExpertsForm />
            </div>

          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default MobileDev;
