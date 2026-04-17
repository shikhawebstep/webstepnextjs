import React from 'react'
import ExpertsForm from '../ExpertsForm'

const Software = () => {
  return (
   <>
   <section className="Software">
    <div className="col-full">
        <div className="devider">
            <div className="col-60">
                <div className="Experienced">
                    <h4>Ready when <span> you are</span>
                       </h4>
                    <h5>Let’s talk about your product</h5>
                    <h6>Share with us your idea and we will reach out to you!</h6>
                    <p>Emergent Software has delivered a large variety of custom software applications and websites for companies of all shapes and sizes. Whether you’re in finance, retail, insurance, healthcare, manufacturing, a non-profit organization, or aspiring to build the next big software-as-a-service (SaaS), let us show you how we’ve helped clients just like you in the past. We can help you streamline your business, connect with more customers, and earn that competitive advantage with our custom-made software solutions. Below are just a few of the many projects we have successfully delivered.</p>
                 </div>
            </div>
            <div className="col-40">
            <ExpertsForm/>
            </div>
        </div>
    </div>
    
</section>
   
   </>
  )
}

export default Software