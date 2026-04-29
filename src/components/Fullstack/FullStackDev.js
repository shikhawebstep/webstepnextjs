import React from 'react';
import ExpertsForm from '../ExpertsForm';
import AnimatedSection from '../AnimatedSection';

const FullStackDev = () => {
  return (
    <section className="py-16 md:py-24 bg-slate-50 relative z-10 px-6 overflow-hidden font-roboto">

      {/* Subtle background glow */}
      <div className="absolute top-1/2 right-0 w-[400px] h-[400px] bg-orange-100/40 rounded-full blur-[100px] translate-x-1/2 pointer-events-none"></div>

      <div className="container mx-auto relative z-10">
        <AnimatedSection delay={0.1} direction="up">
          <div className="flex flex-col lg:flex-row-reverse gap-16 items-center">

            {/* Right Content (appears on left on mobile, right on desktop due to reverse) */}
            <div className="lg:w-3/5">
              <div className="mb-10">
                <span className="font-mono text-[10px] tracking-[0.25em] capitalize text-pink-500 font-bold mb-6 block">
                  Scalable Solutions
                </span>
                <h2 className="text-4xl md:text-5xl font-black leading-tight text-slate-900 mb-8 tracking-tight capitalize">
                  End-to-End <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-orange-500">Full Stack</span> Solutions
                </h2>
                <div className="space-y-6 text-slate-500 text-lg leading-relaxed">
                  <p>
                    Our full-stack development team brings together the best of both worlds—stunning frontend experiences and robust, high-performance backends. We specialize in building applications that are not only visually appealing but also highly functional and secure.
                  </p>
                  <p>
                    Whether you're looking for a React-based frontend with a Node.js backend or a more traditional PHP stack, our experts have the skills to deliver a seamless digital product.
                  </p>
                  <p>
                    From ideation and UI/UX design to database architecture and cloud deployment, we handle the entire development lifecycle so you can focus on growing your business.
                  </p>
                </div>
              </div>
            </div>

            {/* Left Form */}
            <div className="lg:w-2/5 w-full">

              <ExpertsForm />


            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default FullStackDev;
