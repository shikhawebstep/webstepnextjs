import React from 'react';

const ConverstionService = () => {
  return (
    <section className="py-16 bg-white relative z-10 px-6 font-roboto">
      {/* Subtle background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-gradient-to-r from-pink-50 to-orange-50 blur-[100px] pointer-events-none rounded-full"></div>

      <div className="container mx-auto max-w-4xl text-center relative z-10">
        <div className="inline-block px-4 py-1.5 rounded-full bg-slate-50 border border-slate-100 text-pink-500 font-bold text-[10px] tracking-widest capitalize mb-8 shadow-sm">
          Conversion Services
        </div>
        <h3 className="text-4xl md:text-6xl font-black text-slate-900 leading-tight mb-8 tracking-tight">
          Bridging the Gap <br />Between <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-orange-500">Design</span> and <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-orange-500">Code</span>
        </h3>
        <p className="text-xl text-slate-500 leading-relaxed font-light">
          We flawlessly code beautiful designs into static HTML markup, dynamic CMS, and robust E-commerce platforms tailored for agencies, designers, and ambitious individuals.
        </p>
      </div>
    </section>
  );
};

export default ConverstionService;
