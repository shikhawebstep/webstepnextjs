import React from 'react'
import Image from 'next/image';

import dev from "@/components/img/development-company.png"
const Experience = () => {
  return (
    <>
    <section className="experience">
    <div className="col-full">
        <div className="devider">
            <div className="col-70">
                <h5>We have vast experience in building Enterprise Software and scales.</h5>
                <p>We are not just a web, app development company,but beyond that as well. We work as an extended team of yours. Ideas, Brainstorm, Improve, Develop, Release, Feedback, and continue the cycle until you succeed.</p>
            </div>
            <div className="col-30">
                <Image src={dev} alt=""/>
            </div>
        </div>
    </div>
</section>
    </>
  )
}

export default Experience