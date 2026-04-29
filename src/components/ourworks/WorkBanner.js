import React from 'react';
import QuoteForm from '../QuoteForm';
import Lists from '../Lists';
import AnimatedSection from '../AnimatedSection';

const WorkBanner = () => {
  return (
    <section className="py-16 md:py-24 bg-white relative z-10 px-6 overflow-hidden font-roboto">

      {/* Decorative background glows */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-pink-50 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/4 pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-orange-50 rounded-full blur-[120px] translate-y-1/2 -translate-x-1/4 pointer-events-none"></div>

      <div className="container mx-auto relative z-10">
        <AnimatedSection delay={0.1} direction="up">
          <div className="flex flex-col lg:flex-row gap-16 items-center">

            {/* Left Content */}
            <div className="lg:w-3/5">
              <div className="mb-10">
                <span className="inline-block px-4 py-1.5 rounded-full bg-white border border-slate-200 text-pink-500 font-bold text-[10px] tracking-widest capitalize mb-6 shadow-sm">
                  Our Portfolio
                </span>
                <h2 className="text-4xl md:text-6xl font-black leading-tight text-slate-900 mb-8 tracking-tight capitalize">
                  Crafting Digital <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-orange-500 to-amber-500">Masterpieces</span>
                </h2>
                <p className="text-slate-500 text-lg md:text-xl leading-relaxed mb-10 max-w-2xl">
                  Twenty years in business has yielded hundreds of client partnerships, each with their own challenges, each uniquely rewarding. TechnoScore is dedicated to helping our clients overcome complex business problems with exceptional technological solutions.
                </p>

                <div className="w-16 h-1.5 bg-gradient-to-r from-pink-600 to-orange-400 mb-10 rounded-full"></div>
              </div>

              <Lists />
            </div>

            {/* Right Form */}
            <div className="lg:w-2/5 w-full">
              <div className="bg-slate-50 p-8 md:p-12 rounded-[2.5rem] shadow-2xl border border-slate-100 relative overflow-hidden group">
                <div className="absolute inset-0 bg-gradient-to-br from-pink-500/5 to-orange-500/5 z-0 pointer-events-none transition-opacity group-hover:opacity-100 opacity-50"></div>
                <div className="relative z-10">
                  <QuoteForm />
                </div>
              </div>
            </div>

          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default WorkBanner;
