"use client"
import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import unnamed1 from '@/components/img/unnamed.png';
import unnamed2 from '@/components/img/unnamed2.png';
import iconGoogleSmall from '@/components/img/icon-google-small.png';
import { FaStar, FaQuoteLeft } from 'react-icons/fa';
import Image from 'next/image';
import AnimatedSection from './AnimatedSection';

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
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 2 } },
      { breakpoint: 768, settings: { slidesToShow: 1 } }
    ]
  };

  const reviews = [
    { id: 1, name: "Michael O'Malley", date: 'May 15, 2023', image: unnamed1, content: 'Exceptional technical depth. They didn’t just build what we asked; they built what we actually needed to scale.' },
    { id: 2, name: 'Matt Meyer', date: 'May 11, 2023', image: unnamed2, content: 'The communication and project management were top-tier. A true extension of our internal engineering team.' },
    { id: 3, name: 'Sarah Jenkins', date: 'June 02, 2023', image: unnamed1, content: 'Absolutely phenomenal service. Their UI/UX design transformed our user retention metrics within months.' },
    { id: 4, name: 'David Clark', date: 'July 14, 2023', image: unnamed2, content: 'Precision, speed, and innovation. They delivered exactly what we needed, on time and under budget.' },
  ];

  return (
    <section className="py-16 md:py-24 bg-white relative z-10 px-6 font-roboto overflow-hidden">

      {/* Background Glows */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[600px] bg-slate-50/50 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="container mx-auto relative z-10">

        {/* Header Block */}
        <AnimatedSection delay={0.1} direction="up">
          <div className="text-center mb-20 max-w-2xl mx-auto">
            <span className="inline-block px-4 py-1.5 rounded-full bg-slate-900 text-white font-bold text-[9px] tracking-[0.3em] capitalize mb-6 shadow-2xl">
              Client Success
            </span>
            <h2 className="font-heading text-4xl md:text-5xl font-black text-slate-900 mb-6 capitalize tracking-tight">
              Trusted by <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-600 to-orange-500">Industry Leaders</span>
            </h2>
            <p className="text-slate-500 text-lg leading-relaxed">
              We are proud of the long-term partnerships we’ve built with brands that trust us with their digital core.
            </p>
          </div>
        </AnimatedSection>

        <div className="px-4 relative z-10">
          <Slider {...settings} className="testimonial-slider pb-12">
            {reviews.map(review => (
              <div key={review.id} className="p-4 outline-none">
                <div className="bg-white p-10 rounded-[3rem] shadow-2xl border border-slate-100 h-full flex flex-col relative group transition-all duration-700 hover:border-pink-500/30">

                  {/* Subtle hover gradient */}
                  <div className="absolute inset-0 bg-gradient-to-br from-pink-500/5 to-orange-400/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700 rounded-[3rem] pointer-events-none"></div>

                  <div className="flex justify-between items-start mb-8 relative z-10">
                    <div className="flex gap-1 text-yellow-500">
                      {[...Array(5)].map((_, i) => <FaStar key={i} size={16} />)}
                    </div>
                    <div className="w-8 h-8 rounded-full bg-slate-50 flex items-center justify-center border border-slate-100">
                      <Image src={iconGoogleSmall} alt="Google Review" width={18} height={18} />
                    </div>
                  </div>

                  <FaQuoteLeft className="text-pink-100 text-6xl absolute top-20 right-10 z-0 pointer-events-none group-hover:text-pink-200 transition-colors" />

                  <p className="text-slate-600 text-lg leading-relaxed mb-10 flex-grow relative z-10">
                    {review.content}
                  </p>

                  <div className="flex items-center gap-5 mt-auto relative z-10">
                    <div className="w-16 h-16 rounded-2xl overflow-hidden border-2 border-white shadow-xl transform group-hover:scale-110 transition-transform duration-500">
                      <Image src={review.image} alt={review.name} className="w-full h-full object-cover" />
                    </div>
                    <div>
                      <h6 className="font-heading font-black text-slate-900 tracking-wide capitalize text-sm">{review.name}</h6>
                      <p className="text-[10px] text-slate-400 font-black capitalize tracking-widest mt-1">{review.date}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>

        <AnimatedSection delay={0.5} direction="up">
          <div className="flex justify-center mt-12">
            <button className="group relative px-12 py-5 bg-slate-900 text-white rounded-2xl text-[10px] font-black capitalize tracking-[0.3em] overflow-hidden shadow-2xl hover:-translate-y-1 transition-all duration-500">
              <span className="relative z-10">Partner With Us</span>
              <div className="absolute inset-0 bg-gradient-to-r from-pink-600 to-orange-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </button>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default Customer;
