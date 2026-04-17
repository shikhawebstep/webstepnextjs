import React from 'react';
import Image from 'next/image';

import vector from '@/components/img/Vector-v.png'
const Services = () => {

  const servicesData = [
    {
      id: 1,
      title: 'PSD to HTML',
      className: 'bg-[#FF3B76]',
      subTitle: '8,500+ front-end projects delivered',
      description: 'We deliver PSD to HTML & CSS conversion services to code your layered PSD files into high-performance and SEO-friendly HTML markups.',
      buttonText: 'Order Now',
      imgSrc: vector,
    },
    {
      id: 2,
      title: 'Sketch to HTML',
      className: 'bg-purple-500',
      subTitle: '600+ Sketch designs coded to date',
      description: 'We understand the know-how of Sketch app and code your sketch designs into W3C validated and fast-loading HTML markups.',
      buttonText: 'Order Now',
      imgSrc: vector,
    },
    {
      id: 3,
      className: 'bg-[#df9323]',
      title: 'PSD to Email Template',
      subTitle: '850+ Email Templates coded',
      description: 'With our PSD to responsive email template conversion service, we write tabular email code ensuring great email readability for your users.',
      buttonText: 'Order Now',
      imgSrc: vector,
    }

  ];

  return (
    <section className="Services">
      <div className="col-full">
        <div className="devider">
          {servicesData.map(service => (
            <div className="col-33" key={service.id}>
              <div className={`design${service.id} customdesign ${service.className} text-white p-5  flex justify-between rounded-md md:py-12`}>
                <h6>{service.title}</h6>
                <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 24 24" className="text-4xl font-bold" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path fill="none" d="M0 0h24v24H0V0z"></path><path d="M7.41 8.59 12 13.17l4.59-4.58L18 10l-6 6-6-6 1.41-1.41z"></path></svg>
              </div>
              <div className="dropdown-content">
                <h3 className='md:text-3xl text-xl mb-2 font-semibold uppercase pb-0' >{service.title}</h3>
                {/* <h2 >{service.title}</h2> */}
                <i>{service.subTitle}</i>
                <p>{service.description}</p>
                <button className="border-2 uppercase py-2 font-semibold rounded-3xl p-4 border-pink-500"><a href="#">{service.buttonText}</a></button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Services;
