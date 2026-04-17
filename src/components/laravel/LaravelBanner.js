import React from 'react'
import laravel from "@/components/img/laravel.png"
import Image from 'next/image';

const LaravelBanner = () => {
  return (
    <>
    <section className="services">
        <div className="col-full">
            <div className="devider">
                <div className="col-60">
                    <h2 className="Mobile">Laravel Development Company</h2>
                    <p>eBizneeds is an award-winning laravel development company that offers robust and Custom Laravel Development Services to businesses of all categories and size. We create clean and usable codes so that new functionalities and features can be easily added in the later phase. The testing and debugging of codes become easy and fast with Laravel.</p><button className="Connect-Now"><a href="#">Connect Now</a></button>
                </div>
                <div className="col-40">
                    <Image src={laravel} alt=""/>
                    </div>
                </div>
            </div>
   </section>
    </>
  )
}

export default LaravelBanner