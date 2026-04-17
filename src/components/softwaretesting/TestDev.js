import React from 'react'
import ExpertsForm from '../ExpertsForm'
const TestDev = () => {
  return (
    <>
    <section className="Software">
    <div className="col-full">
        <div className="devider">
            <div className="col-60">
                <div className="Experienced">
                    <h4>Software Testing Services Company  </h4>
                   <p>Offshore Software Testing Company, TechAvidus focuses on empowering Software Quality Assurance that helps customers stay in touch with businesses anytime, anywhere, on any device.
                    Today, application performance is critical to succeeding in the digital, 'always-on' world. Several organizations are responding with an increased focus on quality, but in today's digital transformation, many organizations are struggling to adapt to the changes in testing practices.
                    At TechAvidus, we believe that quality and software testing are integral aspects of the software development life cycle.</p>
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

export default TestDev