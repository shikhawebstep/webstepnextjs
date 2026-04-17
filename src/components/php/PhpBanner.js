import React from 'react'
import php from "@/components/img/php.png"
import Image from 'next/image';

const PhpBanner = () => {
  return (
   <>
   <section className="services">
        <div className="col-full">
            <div className="devider">
                <div className="col-60">
                    <h2 className="Mobile">PHP Development Company</h2>
                    <p>Get a fantastic PHP website or application for your enterprise and excitingly serve your customers.
                        eBizneeds offers you full-stack PHP development services that can help you meet your specific business objectives. PHP is an open-source programming language that gives you 360 freedoms for programming to shape the app as you want. It can integrate quickly, that’s why almost all businesses like to have PHP solutions for growth-boosting.
                    </p></div>
                <div className="col-40">
                    <Image src={php} alt=""/>
                    </div>
                </div>
            </div>
   </section>
   </>
  )
}

export default PhpBanner