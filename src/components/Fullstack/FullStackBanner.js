import React from 'react'
import mobileapp from "@/components/img/mobile_app_development2.png"
import Image from 'next/image';

const FullStackBanner = () => {
  return (
   <>
   <section className="services">
   <div className="col-full">
       <div className="devider">
           <div className="col-60">
               <h2 className="Mobile">Full Stack Development Company</h2>
               <p>We help enterprises regarding their full-stack mobile app development, web development, and other software needs for business. Our full-stack developers have in-depth experience in working on backend & frontend development technology and can assist you in getting result-oriented solutions.
                   From ideation to deployment, we provide end-to-end development services to bring your digital vision to life.
                   </p><button className="Connect-Now"><a href="#">Connect Now</a></button>
           </div>
           <div className="col-40">
               <Image src={mobileapp} alt=""/>
               </div>
           </div>
       </div>
</section>
   </>
  )
}

export default FullStackBanner