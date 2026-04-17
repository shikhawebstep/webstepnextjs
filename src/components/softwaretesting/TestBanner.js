import React from 'react'
import testing from "@/components/img/software.png"
import Image from 'next/image';

const TestBanner = () => {
  return (
   <>
   <section className="services">
   <div className="col-full">
       <div className="devider">
           <div className="col-60">
               <h2 className="Mobile">Software Testing Service</h2>
               <p>Transform your business with creative and cost-effective custom software solutions.
                   Offshore Software Testing Company, TechAvidus focuses on empowering Software Quality Assurance that helps customers stay in touch with businesses anytime, anywhere, on any device.
                   </p><button className="Connect-Now"><a href="#">Connect Now</a></button>
           </div>
           <div className="col-40">
               <Image src={testing} alt=""/>
               </div>
           </div>
       </div>
</section>
   </>
  )
}

export default TestBanner