import React from 'react';
import ExpertsForm from '../ExpertsForm';
import AnimatedSection from '../AnimatedSection';

const Software = () => {
  return (
    <section className="py-24 bg-white relative z-10 px-6 overflow-hidden font-roboto">
      {/* Ambient background glows */}
      <div className="absolute top-1/2 left-0 w-[400px] h-[400px] bg-pink-50 rounded-full blur-[100px] -translate-y-1/2 -translate-x-1/2 pointer-events-none opacity-60"></div>

      <div className="container mx-auto relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          <div className="w-full lg:w-3/5">
            <AnimatedSection delay={0.1} direction="left">
              <div className="mb-10">
                <span className="font-mono text-[10px] tracking-[0.25em] capitalize text-pink-500 font-bold mb-4 block">
                  Scale Your Business
                </span>
                <h4 className="text-4xl md:text-5xl font-black text-slate-900 mb-6 leading-tight capitalize tracking-tight">
                  Ready when <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-orange-500">you are</span>
                </h4>
                <h5 className="text-xl md:text-2xl font-bold text-slate-700 mb-6">
                  Let’s talk about your product
                </h5>
                <p className="text-slate-500 text-lg leading-relaxed mb-8">
                  Share with us your idea and we will reach out to you! Emergent Software has delivered a large variety of custom software applications and websites for companies of all shapes and sizes.
                </p>

                <div className="p-8 bg-slate-50 rounded-3xl border border-slate-100 relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl from-pink-500/10 to-transparent blur-2xl"></div>
                  <p className="text-slate-600 text-sm md:text-base leading-relaxed relative z-10">
                    Whether you’re in finance, retail, insurance, healthcare, manufacturing, a non-profit organization, or aspiring to build the next big SaaS, let us show you how we’ve helped clients just like you. We can help you streamline your business, connect with more customers, and earn that competitive advantage with our custom-made software solutions.
                  </p>
                </div>
              </div>
            </AnimatedSection>
          </div>

          <div className="w-full lg:w-2/5">
            <AnimatedSection delay={0.2} direction="right">
              <ExpertsForm />
            </AnimatedSection>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Software;
