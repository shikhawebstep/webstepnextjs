"use client"
import React, { useEffect } from 'react';
import { animate } from 'animejs';
import Image from 'next/image';

import plus from '@/components/img/plus.png'
import image from "@/components/img/img2.png"
import img3 from '@/components/img/img4.png'
import img4 from "@/components/img/img3.png"

const Banner = () => {
useEffect(() => {
  animate('.text-animate', {
    opacity: [
      { value: 1, duration: 2000 },   // light
      { value: 0.7, duration: 2000 }  // dark
    ],
    easing: 'easeInOutSine',
    loop: true
  });
}, []); 
  const pulseAnimation = {
    visibility: 'visible',
    animationDuration: '4s',
    animationDelay: '300ms',
    animationIterationCount: 'infinite',
    
  };

  const vectorAnimation = {
    visibility: 'visible',
    animationDuration: '5s',
    animationIterationCount: 'infinite',
   
  };

  return (
    <section className="banner">
      <div className="col-full pt-16">
        <div className="devider banner bg-black text-white flex flex-col items-center justify-center text-center  bg-cover bg-center bg-no-repeat">
         <div className="imgbg">
           <Image src={plus} alt="plus" className="wow pulse animated text-animate" style={pulseAnimation} />
         
          <h3 className="animate-pulse text-4xl font-bold py-5 md:tracking-[40px]  uppercase mb-0" style={pulseAnimation}>WELCOME TO</h3>
            <Image src={image} alt="banner" className="wow pulse animated text-animate" style={pulseAnimation} />
</div>
          <div className="">
            
            <h1 className="animate-pulse md:text-8xl text-5xl font-bold py-5 md:my-5 text-center text-animate" style={pulseAnimation}>IT AGENCY</h1>
            
          </div>

          <h2 className="animate-pulse md:text-5xl text-4xl shadow-md uppercase font-medium md:mt-4" style={pulseAnimation}>
            Web Design, Marketing & Branding
          </h2>
        </div>

        <button className="my-10 px-15 py-5 bg-[#ff3b71] text-2xl font-semibold text-white uppercase bold rounded-full animate-pulse flex justify-center w-full m-auto max-w-fit px-20 py-6" >
          <a href="#">Get Started</a>
        </button>
      </div>

      <div className="group">
        <Image src={img3} alt="img3" className="wow pulse animated text-animate" style={pulseAnimation} />

        <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 512 512" className="text-7xl animate-pulse text-center text-white " height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="32" d="M176 262.62 256 342l80-79.38m-80 68.35V170"></path><path fill="none" strokeMiterlimit="10" strokeWidth="32" d="M256 64C150 64 64 150 64 256s86 192 192 192 192-86 192-192S362 64 256 64z"></path></svg>

        <Image src={img4} alt="img4" className="wow pulse animated text-animate" style={pulseAnimation} />
      </div>
    </section>
  );
};

export default Banner;