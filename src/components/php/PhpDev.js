import React from 'react';
import ExpertsForm from '../ExpertsForm';
import AnimatedSection from '../AnimatedSection';

const PhpDev = () => {
  return (
    <section className="py-16 md:py-24 bg-slate-50 relative z-10 px-6 overflow-hidden font-roboto">

      {/* Subtle background glow */}
      <div className="absolute top-1/2 left-0 w-[400px] h-[400px] bg-pink-100/40 rounded-full blur-[100px] -translate-x-1/2 pointer-events-none"></div>

      <div className="container mx-auto relative z-10">
        <AnimatedSection delay={0.1} direction="up">
          <div className="flex flex-col lg:flex-row gap-16 items-center">

            {/* Left Content */}
            <div className="lg:w-3/5">
              <div className="mb-10">
                <span className="font-mono text-[10px] tracking-[0.25em] capitalize text-pink-500 font-bold mb-6 block">
                  Comprehensive Solutions
                </span>
                <h2 className="text-4xl md:text-5xl font-black leading-tight text-slate-900 mb-8 tracking-tight capitalize">
                  Full Stack <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-orange-500">PHP Development</span> Solutions
                </h2>
                <div className="space-y-6 text-slate-500 text-lg leading-relaxed">
                  <p>
                    TechnoScore can promise you results you've never experienced before. Did you know that almost all popular global brands use PHP? Due to its many advantages, this programming language has been continuously evolving since its launch.
                  </p>
                  <p>
                    As a trusted PHP web development company, we offer custom PHP development, CMS development, enterprise solutions, and more. With decades of experience, we've provided PHP services to various businesses, from small-scale startups to multinational brands.
                  </p>
                  <p>
                    Our dedicated developers have designed eCommerce stores, apps, and customized portals that support enterprises to scale fast and remain future-proof.
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

export default PhpDev;
