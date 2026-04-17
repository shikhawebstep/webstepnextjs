import React from 'react'
import node from "@/components/img/node-js.png"
import Image from 'next/image';

const NodeBanner = () => {
  return (
    <>
    <section className="services">
    <div className="col-full">
        <div className="devider">
            <div className="col-60">
                <h2 className="Mobile">Node.js Development Company</h2>
                <p>eBizneeds, a leading Node.js development company, stands out as a trusted IT partner, boasting a team of skilled developers recognized for delivering cutting-edge, scalable, and feature-rich web and mobile app solutions. With a strong focus on user-centric front-end designs and lightning-fast back-end development, we ensure seamless user experiences. Our expertise lies in deve

                </p></div>
            <div className="col-40">
                <Image src={node} alt=""/>
                </div>
            </div>
        </div>
</section>
    </>
  )
}

export default NodeBanner