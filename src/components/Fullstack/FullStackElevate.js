import React from 'react'
import stack from "@/components/img/full-stack.png"
import Image from 'next/image';

const FullStackElevate = () => {
    return (
        <>
            <section className="Elevate">
                <div className="col-full">
                    <div className="devider">
                        <div className="col-40">
                            <Image src={stack} alt="" />
                        </div>
                        <div className="col-60">
                            <div className="Experienced">
                                <h4>Full Stack Development
                                </h4>
                                <p>Our highly competent software developers provide full stack web development services from simple static frontend web apps to robust backend services. We have a collection of perfect software developers, front-end software engineers, back-end developers, database engineers, and operating system experts.
                                    You can outsource our full-stack web development services to leverage the specialization of ReactJS, Mean.JS, Meteor, LMP, and PHP. As a recognized full-stack web development company, we ensure that our full-stack web developers are all set to help you with the required expertise in different fields. </p> </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default FullStackElevate