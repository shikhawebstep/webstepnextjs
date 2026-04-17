import React from 'react';

import img from '@/components/img/softwaredev.png'
import img2 from '@/components/img/ui-ux.webp'
import img3 from '@/components/img/fullstack.png'
import img4 from '@/components/img/laravel-featured.webp'
import img5 from '@/components/img/wpdev.png'
import img6 from '@/components/img/nodejs.png'
import img7 from '@/components/img/php-dev.png'
import imgfirt from '@/components/img/mobiledev.png'
import { FaArrowRight } from 'react-icons/fa';
import Link from 'next/link';
import Image from 'next/image';
const ServicesPage = () => {
  
  const servicesData = [
    {
      id: 1,
      imgSrc: imgfirt,
      title: 'Mobile App Development',
      description: 'A brand is your company’s personality and promise to your customer. that help create a feeling',
      href: '/mobileApp'
    },
    {
      id: 2,
      imgSrc: img2,
      title: 'UI/UX Designing',
      description: 'A brand is your company’s personality and promise to your customer. that help create a feeling',
      href: '/uiux'
    },
    {
      id: 3,
      imgSrc: img3,
      title: 'Full Stack Development',
      description: 'A brand is your company’s personality and promise to your customer. that help create a feeling',
      href: '/fullstack'
    },
    {
      id: 4,
      imgSrc: img,
      title: 'Software Testing',
      description: 'A brand is your company’s personality and promise to your customer. that help create a feeling',
      href: '/softwaretesting'
    },
    {
      id: 5,
      imgSrc: img4,
      title: 'Laravel Development',
      description: 'A brand is your company’s personality and promise to your customer. that help create a feeling',
      href: '/laravel'
    },
    {
      id: 6,
      imgSrc: img6,
      title: 'Node.js Development',
      description: 'A brand is your company’s personality and promise to your customer. that help create a feeling',
      href: '/nodejs'
    },
    {
      id: 7,
      imgSrc: img7,
      title: 'PHP Development',
      description: 'A brand is your company’s personality and promise to your customer. that help create a feeling',
      href: '/php'
    },
    {
      id: 8,
      imgSrc: img5,
      title: 'WordPress Website Development',
      description: 'A brand is your company’s personality and promise to your customer. that help create a feeling',
      href: '/wordpress'
    }
    
  ];

  return (
    <section className="Services-page">
      <div className="col-full">
      <div className="beforeline">
        <h4 className='md:text-5xl text-3xl font-bold pb-16'>Services</h4>
        </div>
        <div className="grid md:grid-cols-4 grid-cols-1 gap-10">
          {servicesData.map(service => (
            <div className="border rounded-md p-5 pt-16 relative border-black" key={service.id}>
              <div className="">
              <div className="bg-[#e7efff] h-[80px] w-[80px] absolute -top-5 -left-5 rounded-full p-5">   <Image src={service.imgSrc} className='h-full w-full object-contain' alt="" /></div>
             
                <h6 className='font-bold text-2xl mb-3'>{service.title}</h6>
                <span className='font-sm'>{service.description}</span>
                <button className='bg-[#e7efff] p-2 px-5 flex justify-center gap-2 items-center rounded-3xl  mt-4'><svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 448 512" className="text-[#ff3b71]" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M416 208H272V64c0-17.67-14.33-32-32-32h-32c-17.67 0-32 14.33-32 32v144H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h144v144c0 17.67 14.33 32 32 32h32c17.67 0 32-14.33 32-32V304h144c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z"></path></svg><Link href={service.href}>learn more</Link></button>
              </div>
            </div>
          ))}
        </div>
        <div className="text-center text-center flex justify-center items-center gap-2 mt-7 "> <Link href="/services" className='text-2xl font-semibold text-[#ff3b71]  flex justify-center items-center gap-2 '>View All Services <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 448 512" className="text-[#ff3b71]" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M190.5 66.9l22.2-22.2c9.4-9.4 24.6-9.4 33.9 0L441 239c9.4 9.4 9.4 24.6 0 33.9L246.6 467.3c-9.4 9.4-24.6 9.4-33.9 0l-22.2-22.2c-9.5-9.5-9.3-25 .4-34.3L311.4 296H24c-13.3 0-24-10.7-24-24v-32c0-13.3 10.7-24 24-24h287.4L190.9 101.2c-9.8-9.3-10-24.8-.4-34.3z"></path></svg></Link></div>
    
      </div>
    </section>
  );
}

export default ServicesPage;
