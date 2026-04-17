import React from 'react'
import node from "@/components/img/node.png"
import Image from 'next/image';

const NodeElevate = () => {
  return (
    <>
    <section className="Elevate">
    <div className="col-full">
        <div className="devider">
            <div className="col-40">
             <Image src={node} alt=""/>
            </div>
            <div className="col-60">
                <div className="Experienced">
                    <h4>Hire Node.js Developer From eBizneeds
                    </h4>
                   <p>Get high scalable web and mobile app solutions from professionally experienced Node.js developers and leverage them for your business. Node.js is a great technology for creating feature-rich, robust, and secure applications for mobile and web platforms. It facilitates businesses to offer the best service to their customers. So, hire node.js developers from eBizneeds and get a high-quality app for your business.
                    </p>
                   </div>
            </div>       
        </div>
    </div>
</section>
    </>
  )
}

export default NodeElevate