import React from 'react'
import mobile from "@/components/img/mobile_app.png"
import Image from 'next/image';

const UiBanner = () => {
  return (
    <>
    <section className="services">
    <div className="col-full">
        <div className="devider">
            <div className="col-60">
                <h2 className="Mobile">Engage Users with UI UX Designing Company</h2>
                <p>As a UI/UX designing company, we specialize in creating intuitive and engaging user experiences for digital products. Our team of designers and developers work collaboratively to craft visually appealing and user-friendly interfaces that effectively communicate brand messages and meet business objectives. Our ultimate goal is to help our clients create memorable and enjoyable experiences that keep users coming back.</p>
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

export default UiBanner