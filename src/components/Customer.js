"use client"
import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import unnamed1 from '@/components/img/unnamed.png';
import unnamed2 from '@/components/img/unnamed2.png';
import iconGoogleSmall from '@/components/img/icon-google-small.png';
import star from '@/components/img/star.png';
import Image from 'next/image';
const Customer = () => {
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    centerPadding: '50px',
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1
        }
      }
    ]
  };

  const reviews = [
    {
      id: 1,
      name: 'Michael O\'Malley',
      date: 'May 15, 2023',
      image: unnamed1,
      rating: 5,
      content: 'I recently had the pleasure of working with Nerdy South.'
    },
    {
      id: 2,
      name: 'Matt Meyer',
      date: 'May 11, 2023',
      image: unnamed2,
      rating: 4,
      content: 'I recently had the pleasure of working with Nerdy South.'
    },
    {
      id: 3,
      name: 'Matt Meyer',
      date: 'May 11, 2023',
      image: unnamed2,
      rating: 4,
      content: 'I recently had the pleasure of working with Nerdy South.'
    },
    {
      id: 4,
      name: 'Matt Meyer',
      date: 'May 11, 2023',
      image: unnamed2,
      rating: 4,
      content: 'I recently had the pleasure of working with Nerdy South.'
    },
    {
      id: 5,
      name: 'Matt Meyer',
      date: 'May 11, 2023',
      image: unnamed1,
      rating: 4,
      content: 'I recently had the pleasure of working with Nerdy South.'
    },
    {
      id: 6,
      name: 'Matt Meyer',
      date: 'May 11, 2023',
      image: unnamed1,
      rating: 4,
      content: 'I recently had the pleasure of working with Nerdy South.'
    },

  ];

  return (
    <section className="Customer">
      <div className=" container mx-auto py-10 relative">
        <div className="beforeline">
          <h4 className='text-center text-4xl font-bold mb-6 pb-0'>Outstanding Customer Service</h4>
        </div>
        <p className='text-center pb-5 text-[18px]'> Just don't take our word for it, we are a 5-star rated business on Google:</p>
        <Slider {...settings}>
          {reviews.map(review => (
            <div className="review" key={review.id}>
              <Image src={iconGoogleSmall} alt="Google" className="google" />
              <div className="business">
                <Image src={review.image} alt="" />
                <div className="working">
                  <h6>{review.name}</h6>
                  <Image src={star} alt="" />
                  <p>{review.date}</p>
                </div>
              </div>
              <p>{review.content}</p>
              <button><a href="#">Read more</a></button>
            </div>
          ))}
        </Slider>
        <div className='flex justify-center mt-8'>
          <button className=" bg-[#ff3b71] text-white py-3 px-6 rounded-full text-lg font-semibold hover:bg-pink-600 shadow-md">Get a Free Website Analysis</button>
        </div>
      </div>
    </section>
  );
}

export default Customer;
