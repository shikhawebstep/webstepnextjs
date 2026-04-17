import React from 'react'
import ai from "@/components/img/mobile-app-first1.png"
import Image from 'next/image';

const UiElevate = () => {
  return (
   <>
   <section className="Elevate">
    <div className="col-full">
        <div className="devider">
            <div className="col-40">
             <Image src={ai} alt=""/>
            </div>
            <div className="col-60">
                <div className="Experienced">
                    <h4>UI/UX Design Services Company
                    </h4>
                   <p>UI/UX Design Services Company, TechAvidus provides state-of-the-art user interface designs for your software products. Our designers are fantastic at creating excellent UI and UX designs.
                    Our designers are fantastic in creating exemplary UI and UX designs.
                    We provide accessible interfaces and increased performance while offering enterprise-grade code quality.
                    Our In-House User Experience (UX) team exercises the very best methods and exceptional style and design throughout the development lifecycle.</p>
                </div>
            </div>
        </div>
    </div>
</section>
   </>
  )
}

export default UiElevate