import React from 'react';
import ExpertsForm from '../ExpertsForm';
import AnimatedSection from '../AnimatedSection';

const UiDev = () => {
  return (
    <section className="py-16 md:py-24 bg-slate-50 relative z-10 px-6 overflow-hidden font-roboto">
      
      {/* Subtle background glow */}
      <div className="absolute top-1/2 left-0 w-[400px] h-[400px] bg-purple-100/40 rounded-full blur-[100px] -translate-x-1/2 pointer-events-none"></div>

      <div className="container mx-auto max-w-7xl relative z-10">
        <AnimatedSection delay={0.1} direction="up">
          <div className="flex flex-col lg:flex-row gap-16 items-center">
            
            {/* Left Content */}
            <div className="lg:w-3/5">
              <div className="mb-10">
                <span className="font-mono text-[10px] tracking-[0.25em] uppercase text-purple-500 font-bold mb-6 block">
                  Design Thinking
                </span>
                <h2 className="text-4xl md:text-5xl font-black leading-tight text-slate-900 mb-8 tracking-tight uppercase">
                  Strategic <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-indigo-600">UI/UX</span> Solutions
                </h2>
                <div className="space-y-6 text-slate-500 text-lg leading-relaxed">
                    <p>
                      Great design is not just about how something looks, but how it works. Our UI/UX design process is rooted in deep user research and strategic thinking to ensure your product resonates with your audience.
                    </p>
                    <p>
                      From wireframing and prototyping to final visual design and hand-off, we work closely with your team to create a product that is beautiful, functional, and aligned with your business goals.
                    </p>
                    <p>
                      We specialize in creating design systems that are scalable, accessible, and maintainable, ensuring a consistent brand experience across all platforms and devices.
                    </p>
                </div>
              </div>
            </div>

            {/* Right Form */}
            <div className="lg:w-2/5 w-full">
              <div className="bg-slate-900 p-8 md:p-12 rounded-[2.5rem] shadow-2xl relative overflow-hidden group">
                <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-indigo-500/10 z-0 pointer-events-none opacity-50 group-hover:opacity-100 transition-opacity"></div>
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

export default UiDev;
