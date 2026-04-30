"use client";
import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import clientMichael from '@/components/img/client_michael.png';
import clientSarah from '@/components/img/client_sarah.png';
import riyaArchitect from '@/components/img/riya_architect.png';
import amanArchitect from '@/components/img/aman_architect.png';
import { FaStar, FaQuoteRight } from 'react-icons/fa';
import Image from 'next/image';

const reviews = [
  { id: 1, name: "Michael O'Malley", role: 'Product Lead, Velocity', content: 'Exceptional technical depth. They didn\'t just build what we asked; they built what we actually needed to scale our infrastructure.', image: clientMichael },
  { id: 2, name: 'Sarah Jenkins', role: 'Design Director, Aura', content: 'Absolutely phenomenal service. Their UI/UX design transformed our user retention metrics within months of the initial rollout.', image: clientSarah },
  { id: 3, name: 'Matt Meyer', role: 'CTO, TechCorp', content: 'The communication and project management were top-tier. A true extension of our internal engineering team throughout the lifecycle.', image: amanArchitect },
  { id: 4, name: 'Riya Sharma', role: 'Creative Partner', content: 'Precision, speed, and innovation. They delivered exactly what we needed, on time and under budget, exceeding our expectations.', image: riyaArchitect },
];

const Customer = () => {
  const settings = {
    infinite: true,
    speed: 800,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    arrows: false,
    dots: true,
    pauseOnHover: true,
    responsive: [
      { breakpoint: 1280, settings: { slidesToShow: 2 } },
      { breakpoint: 768, settings: { slidesToShow: 1 } },
    ],
  };

  return (
    <section className="relative py-24 md:py-32 bg-white overflow-hidden font-sans">

      {/* Ambient glow */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="w-[900px] h-[900px] bg-[#FF1F8E]/5 rounded-full blur-[180px]" />
      </div>

      <div className="relative z-10 container  mx-auto px-6 lg:px-12">

        {/* ── Header ── */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-3 mb-5">
            <span className="w-10 h-px bg-slate-200" />
            <span className="text-[10px] font-black tracking-[0.4em] text-[#FF1F8E] uppercase">
              Success Stories
            </span>
            <span className="w-10 h-px bg-slate-200" />
          </div>

          <h2 className="text-5xl md:text-6xl font-black text-slate-900 leading-[1.0] tracking-tight mb-6">
            Global Client{' '}
            <span className="text-[#FF1F8E]">Success Stories</span>
          </h2>

          <p className="text-slate-400 text-base max-w-md mx-auto font-medium">
            Hear directly from the teams we&apos;ve partnered with to build, scale, and launch.
          </p>
        </div>

        {/* ── Slider ── */}
        <div className="relative">
          <Slider {...settings} className="testimonial-slider pb-16">
            {reviews.map((review) => (
              <div key={review.id} className="px-4 outline-none">
                <div className="group relative bg-white border border-slate-100 rounded-[2.5rem] p-8 flex flex-col min-h-[400px] overflow-hidden hover:border-[#FF1F8E]/25 hover:shadow-[0_8px_50px_rgba(255,31,142,0.08)] transition-all duration-500 shadow-sm">

                  {/* Top accent line on hover */}
                  <span className="absolute top-0 left-8 right-8 h-[2px] bg-[#FF1F8E]/0 group-hover:bg-[#FF1F8E]/40 transition-colors duration-500 rounded-b-full" />

                  {/* Decorative quote icon */}
                  <div className="absolute bottom-8 right-8 text-slate-100 group-hover:text-[#FF1F8E]/10 transition-colors duration-500">
                    <FaQuoteRight size={60} />
                  </div>

                  {/* Stars */}
                  <div className="flex gap-1 text-[#FF1F8E] mb-6 relative z-10">
                    {[...Array(5)].map((_, i) => (
                      <FaStar key={i} size={14} />
                    ))}
                  </div>

                  {/* Quote */}
                  <p className="text-slate-500 group-hover:text-slate-700 text-base leading-relaxed mb-8 flex-grow italic relative z-10 transition-colors duration-400">
                    &quot;{review.content}&quot;
                  </p>

                  {/* Author */}
                  <div className="flex items-center gap-4 pt-6 border-t border-slate-100 mt-auto relative z-10">
                    <div className="w-14 h-14 shrink-0 rounded-2xl overflow-hidden border-2 border-white shadow-lg group-hover:scale-105 transition-transform duration-500">
                      <Image
                        src={review.image}
                        alt={review.name}
                        className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
                      />
                    </div>
                    <div>
                      <h6 className="font-black text-slate-900 text-lg leading-tight tracking-tight">
                        {review.name}
                      </h6>
                      <p className="text-[10px] font-bold text-[#FF1F8E] uppercase tracking-[0.25em] mt-0.5">
                        {review.role}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>

        {/* ── Bottom trust bar ── */}
        <div className="mt-16 flex flex-wrap items-center justify-center gap-x-10 gap-y-4">
          {['500+ Projects Delivered', '4.9 / 5.0 Avg. Rating', 'Google Verified', '40+ Countries'].map((item, i) => (
            <div key={i} className="flex items-center gap-2 text-slate-400">
              <span className="w-1 h-1 rounded-full bg-[#FF1F8E]" />
              <span className="text-[11px] font-bold uppercase tracking-[0.2em]">{item}</span>
            </div>
          ))}
        </div>
      </div>

      <style>{`
                .testimonial-slider .slick-dots {
                    bottom: -8px;
                }
                .testimonial-slider .slick-dots li {
                    margin: 0 4px;
                }
                .testimonial-slider .slick-dots li button:before {
                    font-size: 8px;
                    color: #e2e8f0;
                    opacity: 1;
                    transition: all 0.3s ease;
                }
                .testimonial-slider .slick-dots li.slick-active button:before {
                    font-size: 10px;
                    color: #FF1F8E;
                }
                .testimonial-slider .slick-track {
                    display: flex !important;
                }
                .testimonial-slider .slick-slide {
                    height: inherit !important;
                }
                .testimonial-slider .slick-slide > div {
                    height: 100%;
                }
            `}</style>
    </section>
  );
};

export default Customer;