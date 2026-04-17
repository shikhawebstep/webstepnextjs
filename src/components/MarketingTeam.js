"use client"
import React, { useState, useRef } from 'react';
import Slider from 'react-slick';
import Image from 'next/image';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import team1 from '@/components/img/team.png';
import team2 from '@/components/img/team2.png';


const MarketingTeam = () => {
    const [slideIndex, setSlideIndex] = useState(0);
    const sliderRef = useRef();
    const teamData = [
        {
            name: "John Doe",
            role: "CEO & Founder",
            description:
                "By introducing extraordinary services of web development processes we make your site highly workable and convenient to be operated from customer’s site. Our web developers make your site accessible and more explorative for the customers which are much-needed factors for public engagement. Web Step solutions provide complete and innovative e-commerce solution to your business site and help your site to produce unexpectedly high-end results in businesses. A web presence obviously influences the customers. Majority of users want to see beautiful designs rather reading bulk content. Perfectly arranged and managed website will deliver you amazing trafficking with reduced bouncing rates. Web step solutions arduously and technically prepare your website to enhance your target audience and keep them forever at your site by making it extremely convenient to use and highly accessible for your customers. Outgrow your businesses by providing shatterproof solution.",
            image: team1,
        },
        {
            name: "Jane Smith",
            role: "Marketing Director",
            description:
                "WebStep Solutions is top leading web development and web designer agency committed to deliver customer-friendly solution to your business web site and seriously emphasize on managing business processes through responsive designs, customized themes, mobile apps, digital marketing, SEO, branding and highly communicative website for your services.",
            image: team2,
        },
    ];


    const settings = {
        arrows: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        afterChange: currentSlide => setSlideIndex(currentSlide)
    };

    const currentSlide = index => {
        setSlideIndex(index);
        sliderRef.current.slickGoTo(index);
    };
    const handleThumbnailClick = (index) => {
        setSlideIndex(index);
        sliderRef.current?.slickGoTo(index);
    };

    return (
        <section className="Marketing-Team">
            <div className="col-full">
                <div className="beforeline">
                    <h4 className='md:text-4xl text-2xl font-bold text-center pb-0'>Meet The MedTech Marketing Team</h4>
                </div>
                <p className='text-center pt-5 text-[19px]'>We are a group of 24 creative personalities with a passion for building brands and generating leads in the medical space.</p>

                <div className="grid grid-cols-1 w-10/12 m-auto md:grid-cols-2 gap-8 items-top pt-6">
                      <div className="relative">
            <Slider {...settings} ref={sliderRef}>
              {teamData.map((member, index) => (
                <div key={index}>
                  <Image
                    src={member.image}
                    alt={member.name}
                    className="w-full rounded-xl"
                  />
                </div>
              ))}
            </Slider>

            {/* Thumbnails */}
            <div className="flex gap-3 mt-4">
              {teamData.map((member, index) => (
                <img
                  key={index}
                  src={member.image.src}
                  alt={member.name}
                  onClick={() => handleThumbnailClick(index)}
                  className={`w-20 h-20 object-cover rounded-lg cursor-pointer border-2 ${
                    slideIndex === index
                      ? "border-pink-500"
                      : "border-transparent"
                  }`}
                />
              ))}
            </div>
          </div>
                    <div className="mt-6">
                        <div className="businesses">
                            <h3 className="text-2xl font-semibold text-gray-800 pb-0">{teamData[slideIndex].name}</h3>
                            {/* <h6>We enable your businesses to outperform:</h6> */}
                            <p className="text-lg text-pink-600 font-medium py-4 text-left">  {teamData[slideIndex].role}</p>
                            <span className="text-gray-600 mt-2"> {teamData[slideIndex].description}</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default MarketingTeam;
