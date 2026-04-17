import React from 'react'
import php from "@/components/img/node.png"
import Image from 'next/image';

const PhpElevate = () => {
  return (
   <>
   <section className="Elevate">
    <div className="col-full">
        <div className="devider">
            <div className="col-40">
             <Image src={php} alt=""/>
            </div>
            <div className="col-60">
                <div className="Experienced">
                    <h4>Hire Professional PHP Developers
                    </h4>
                   <p>Hire PHP developers and get your project done by comprehensively experienced web developers. eBizneeds is one of the most trustworthy PHP web development companies that believe in developing extraordinary solutions for their clients.</p>
                   </div>
            </div>       
        </div>
    </div>
</section>
   </>
  )
}

export default PhpElevate