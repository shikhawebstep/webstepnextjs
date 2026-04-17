import React from 'react'
import ContactForm from './ContactForm'
import { FaMobile } from 'react-icons/fa'
import { CgMail } from "react-icons/cg";
import form from "@/components/img/form.png"
import Image from 'next/image';
import { FaMapMarkerAlt } from "react-icons/fa";
const ContactUs = () => {
  return (
    <>
      <section class="contact">
        <div class="col-full">
          <h2>Contact Us</h2>
          <p><span>FEEL FREE TO CALL OR MESSAGE US, WE ARE AVAILABLE 24/7</span></p>
          
          <div class="grid-container maping">
            <div className="grid-item">
            <div className="map">
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d54891.386069539025!2d76.65618091838071!3d30.698388701971332!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390fee906da6f81f%3A0x512998f16ce508d8!2sSahibzada%20Ajit%20Singh%20Nagar%2C%20Punjab!5e0!3m2!1sen!2sin!4v1712668532890!5m2!1sen!2sin"></iframe>
          </div>
            </div>
            <div className="grid-item">
              <div class=" applications">
                <h5>PLEASE, FILL OUT THIS APPLICATION FORM</h5>
                <Image src={form} alt="" />
                <ContactForm />
              </div>
            </div>
          </div>
          <div className="address_col grid-container">
          <div className="contact_address grid-item">
            <ul>
            <li><FaMapMarkerAlt/>E-45 Industrial Area Phase-8, Mohali, Punjab</li>
            <li><FaMobile/>97818-90033</li>
            <li><CgMail />info@webstepsolutions.com</li>
            </ul>
          </div>
          <div className="contact_address grid-item">
          <ul>
            <li><FaMapMarkerAlt/>E-45 Industrial Area Phase-8, Mohali, Punjab</li>
            <li><FaMobile/>97818-90033</li>
            <li><CgMail />info@webstepsolutions.com</li>
            </ul>
          </div>
          <div className="contact_address grid-item">
          <ul>
            <li><FaMapMarkerAlt/>E-45 Industrial Area Phase-8, Mohali, Punjab</li>
            <li><FaMobile/>97818-90033</li>
            <li><CgMail />info@webstepsolutions.com</li>
            </ul>
          </div>
          </div>

        </div>
      </section>

    </>
  )
}

export default ContactUs