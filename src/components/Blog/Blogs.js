import React from 'react'
import Lists from '../Lists'
import QuoteForm from '../QuoteForm'

const Blogs = () => {
  return (
   <>
   <section className="services">
        <div className="col-full">
            <div className="devider">
                <div className="col-60">
                    <h2>blog</h2>
                    <p>Twenty years in business has yielded hundreds of client partnerships, each with their own challenges, each uniquely rewarding. TechnoScore is dedicated to helping our clients overcome complex business problems with exceptional technological solutions, designed for efficiency. Right from conceptualization, designing, and implementation to quality engineering,.</p>
                    <Lists/>
                </div>
                <div className="col-40">
                    <QuoteForm/>
                </div>
            </div>
        </div>
   </section>
   </>
  )
}

export default Blogs