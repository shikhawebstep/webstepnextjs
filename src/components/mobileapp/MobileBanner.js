import React from 'react'
import mobile from "@/components/img/mobile_app_development.png"
import Image from 'next/image';

const MobileBanner = () => {
  return (
    <>
    <section className="services">
    <div className="col-full">
        <div className="devider">
            <div className="col-60">
                <h2 className="Mobile">Mobile App Development Services</h2>
                <p>Make Advancement in Your Business With Our Mobile App Development Solutions Our top-rated custom mobile app development company delivers customized app development services according to business requirements, cost, and time. We also focus on developing a robust mobile application.</p>
               <button className="Connect-Now"><a href="#">Connect Now</a></button>
            </div>
            <div className="col-40">
                <Image src={mobile} alt=""/>
                </div>
            </div>
        </div>
</section>
    </>
  )
}

export default MobileBanner