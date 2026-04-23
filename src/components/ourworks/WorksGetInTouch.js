import React from 'react';
import ExpertsForm from '../ExpertsForm';
import AnimatedSection from '../AnimatedSection';

const WorksGetInTouch = () => {
  return (
    <section className="py-16 md:py-24 bg-white relative z-10 px-6 overflow-hidden font-roboto">
      
      {/* Background Decorative Elements */}
      <div className="absolute top-1/2 left-0 w-[400px] h-[400px] bg-pink-100/50 rounded-full blur-[100px] -translate-x-1/2 pointer-events-none"></div>
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-orange-100/40 rounded-full blur-[100px] translate-x-1/2 pointer-events-none"></div>

      <div className="container mx-auto max-w-7xl relative z-10">
        <AnimatedSection delay={0.1} direction="up">
          <div className="flex flex-col lg:flex-row gap-16 items-center">
            
            {/* Left Content */}
            <div className="lg:w-3/5">
              <div className="mb-10">
                <span className="font-mono text-[10px] tracking-[0.25em] uppercase text-pink-500 font-bold mb-6 block">
                  Scale Your Business
                </span>
                <h4 className="text-4xl md:text-6xl font-black leading-tight text-slate-900 mb-8 tracking-tight uppercase">
                  Ready when <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-orange-500 to-amber-500">you are</span>
                </h4>
                <div className="space-y-4 mb-10">
                    <h5 className="text-2xl font-bold text-slate-800">Let’s talk about your product</h5>
                    <p className="text-slate-500 text-lg leading-relaxed max-w-2xl">
                      Emergent Software has delivered a large variety of custom software applications and websites for companies of all shapes and sizes. Let us show you how we’ve helped clients just like you in the past.
                    </p>
                </div>
                
                <div className="p-8 bg-slate-50 rounded-3xl border border-slate-100 shadow-inner">
                    <p className="text-slate-600 italic">
                      "We can help you streamline your business, connect with more customers, and earn that competitive advantage with our custom-made software solutions."
                    </p>
                </div>
              </div>
            </div>

            {/* Right Form */}
            <div className="lg:w-2/5 w-full">
              <div className="bg-slate-900 p-8 md:p-12 rounded-[2.5rem] shadow-2xl relative overflow-hidden group">
                <div className="absolute inset-0 bg-gradient-to-br from-pink-500/10 to-orange-500/10 z-0 pointer-events-none opacity-50 group-hover:opacity-100 transition-opacity"></div>
                <div className="relative z-10">
                  <ExpertsForm />
                </div>
              </div>
            </div>

          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default WorksGetInTouch;
