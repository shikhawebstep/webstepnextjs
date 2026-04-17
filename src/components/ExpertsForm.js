import React from 'react'

const ExpertsForm = () => {
  return (
   <>
   <div className="product">
   <h6>Get In Touch</h6>
   <h5>Talk to Our Experts
   </h5>
   <p>Get the Top Web & Mobile App Solution from Our Experienced Developers!
   </p>
   <div className="Business">
       <input type="text" id="fname" name="fname" placeholder="your Full Name"></input>
       <input type="text" id="email" name="email" placeholder="your email "></input>
       <input type="tel" id="phone" name="phone" placeholder="123-45-678"></input>
       <textarea name="Describe" id="requirement" placeholder="Describe your requirement"></textarea>
      <button>submit now</button>
    </div>
 </div>
   </>
  )
}

export default ExpertsForm