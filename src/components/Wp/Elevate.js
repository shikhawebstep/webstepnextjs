
import React from 'react'
import wp from "@/components/img/wp.png"
import Image from 'next/image';
const Elevate = () => {
  return (
    <>
    <section className="Elevate">
    <div className="col-full">
        <div className="devider">
            <div className="col-40">
             <Image src={wp} alt=""/>
            </div>
            <div className="col-60">
                <div className="Experienced">
                    <h4>Custom WordPress Development Services
                    </h4>
                   <p>WordPress is an impressive and easy-to-use open-source system with a powerful template structure, detailed plugin instructions, and a simple admin panel. eBizneeds is experienced in providing customized wordpress development services. We offers a variety of wordpress solutions that provide a unique and complete canvas for your business and technology. A dedicated wordpress development agency provide the following services.</p> </div>
            </div>       
        </div>
    </div>
</section>
    </>
  )
}

export default Elevate