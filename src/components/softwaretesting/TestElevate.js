import React from 'react'
import offshore from "@/components/img/Offshore-Software.png"
import Image from 'next/image';

const TestElevate = () => {
  return (
   <>
   <section className="Elevate">
    <div className="col-full">
        <div className="devider">
            <div className="col-40">
             <Image src={offshore} alt=""/>
            </div>
            <div className="col-60">
                <div className="Experienced">
                    <h4>Why TechAvidus ForSoftware Testing Services?
                    </h4>
                   <p>If you are looking for an offshore software testing company specialized in software quality assurance, then TechAvidus, with its proven testing processes, is your correct choice of software testing outsourcing partner. We use manual and automated software testing methods with a well-
                    </p>  
                    </div>
                </div>
            </div>       
        </div>
</section>
   </>
  )
}

export default TestElevate