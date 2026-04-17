import React from 'react';
import Image from 'next/image';
import webapplication from '@/components/img/Webapplication.png';
import ios from '@/components/img/iosapps.png';

import android from '@/components/img/android.png';
import ecommerce from '@/components/img/ecommerce.png';
import technical from '@/components/img/Technical.png';
import marketing from '@/components/img/Marketing.png';
import webAnalytics from '@/components/img/Web-Analytics.png';
import maintenance from '@/components/img/Maintenance.png';
import read from "@/components/img/read.png";

const OurExpertize = () => {
  const expertiseAreas = [
    { id: 1, icon: ios, title: 'Web Application Development', link: '#' },
    { id: 2, icon: ios, title: 'iOS Apps Development', link: '#' },
    { id: 3, icon: android, title: 'Android Apps Development', link: '#' },
    { id: 4, icon: ecommerce, title: 'E-Commerce Solutions', link: '#' },
    { id: 5, icon: technical, title: 'Technical Consultancy', link: '#' },
    { id: 6, icon: marketing, title: 'Digital Marketing', link: '#' },
    { id: 7, icon: webAnalytics, title: 'Web Analytics', link: '#' },
    { id: 8, icon: maintenance, title: 'Maintenance and Supports', link: '#' },
  ];

  return (
    <section className="our-expertise">
      <div className="col-full">
        <div className="beforeline">
          <h4 className="lining">
            Our <span>Expertise</span>
          </h4>
        </div>

        <div className="grid md:grid-cols-4 grid-cols-1 gap-10">
          {expertiseAreas.map((area) => (
            <div className="text-center flex justify-center" key={area.id}>
              <div className="expertise">
                
                {/* ✅ FIX: add width & height */}
                <Image
                  src={area.icon}
                  alt={area.title}
                  className='m-auto mb-3 object-contain h-[150px]'
                  width={150}
                  height={150}
                />

                <h6 className='font-bold text-xl pb-2 w-full'>{area.title}</h6>

                <button className='text-[#ff3b71] w-full text-lg font-semibold flex items-center justify-center'>
                  <a href={area.link}>Read More</a>

                  <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 512 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M294.1 256L167 129c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.3 34 0L345 239c9.1 9.1 9.3 23.7.7 33.1L201.1 417c-4.7 4.7-10.9 7-17 7s-12.3-2.3-17-7c-9.4-9.4-9.4-24.6 0-33.9l127-127.1z"></path></svg>
                </button>

              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurExpertize;