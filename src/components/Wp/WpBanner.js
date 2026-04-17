import React from 'react'
import wpdev from "@/components/img/WordPress.png"
import Image from 'next/image';
const WpBanner = () => {
    return (
        <>
            <section className="services">
                <div className="col-full">
                    <div className="devider">
                        <div className="col-60">
                            <h2 className="Mobile">WordPress Website Development Company</h2>
                            <p>eBizneeds has years of experience with a team of professional wordpress developers offering custom wordpress development services to help businesses leave a mark in this digital world. We aim to deliver high-quality code for wordpress development, so your business can grow effectively in this competition. We have earned positive reviews from clients on clutch, codeable and other platforms.</p></div>
                        <div className="col-40">
                            <Image src={wpdev} alt="" />
                        </div>
                    </div>
                </div>
        </section>
   </>
  )
}

export default WpBanner