import React from 'react'
import { FaEnvelope, FaFacebook, FaInstagram, FaLinkedin, FaMobile, FaMobileAlt, FaPhone, FaQuoteLeft, FaTwitter, FaWhatsapp, FaYoutube } from 'react-icons/fa'
import { LuMessageSquarePlus } from "react-icons/lu";
import { AiOutlineMessage } from "react-icons/ai";
import ft from "@/components/img/ft-img.png"
import Image from 'next/image';
import logo from "@/components/img/logo.png"
import { FaMessage } from 'react-icons/fa6';
const Footer = () => {
    return (
        <>

            <div className="col-full ">
                <div className="fixed bottom-0 left-0 md:w-[994px] w-full m-auto right-0 bg-[#FF3B76] text-white grid md:grid-cols-5 grid-cols-2 justify-center items-center gap-4 md:gap-6 p-3 md:p-5 rounded-md shadow-lg">
                    
                        <ul className='fixed bottom-0 left-0 md:w-[994px] w-full m-auto right-0 bg-[#FF3B76] text-white grid md:grid-cols-5 grid-cols-2 justify-center items-center gap-4 md:gap-6 p-3 md:p-5 rounded-md shadow-lg'>
                            <li className="flex items-center gap-2 text-sm md:text-base p-2 md:p-3"><FaPhone  className='rotate-90'/>Call</li>
                            <li className="flex items-center gap-2 text-sm md:text-base p-2 md:p-3"><FaMessage />Live Chat</li>
                            <li className="flex items-center gap-2 text-sm md:text-base p-2 md:p-3"><FaWhatsapp />Whatsapp</li>
                            <li className="flex items-center gap-2 text-sm md:text-base p-2 md:p-3"><FaEnvelope />Email</li>
                            <li className="flex items-center gap-2 text-sm md:text-base p-2 md:p-3"><FaQuoteLeft />Get Quote</li>
                        </ul>
                    
                </div>
            </div>
            <footer>
                <div className="col-full">
                    <div className="devider">
                        <div className="col-60">
                            <Image src={logo} alt="" />
                            <p className='mt-5'>Our team of researchers, designers, writers, editors, and project managers learn what you do, why you do it, and why it matters. We get to know your audience, your competition, and the market forces at play in your industry.</p>
                            <h6>Location</h6>
                            <p>E-45 Industrial Area Phase-8, Mohali, Punjab</p>
                        </div>
                        <div className="col-40 social-icons">
                            <h4 className='mb-0 pb-0'>Social</h4>
                            <ul className='flex gap-4 justify-baseline text-2xl py-5' >
                                <li ><FaFacebook className='max-w-[30px]' /></li>
                                <li><FaInstagram className='max-w-[30px]' /></li>
                                <li><FaLinkedin className='max-w-[30px]' /></li>
                                <li><FaTwitter className='max-w-[30px]' /></li>
                                <li><FaYoutube className='max-w-[30px]' /></li>
                            </ul>
                            <div className="mail md:w-10/12  w-full">
                                <input type="text" id="email" className='md:flex-1 px-4 md:w-auto w-6/12 py-3 text-gray-900 bg-gray-300 rounded-l-md outline-none' name="email" placeholder="your email "></input><input type="button" id="Subscribe" name="vehicle1" className='px-4 py-3 bg-[#ff3b71] text-white  font-semibold rounded-r-md max-w-fit' value="Subscribe" />
                            </div>
                        </div>
                    </div>
                  <div className="border-t border-gray-600 mt-8 flex justify-center items-center pt-5 text-sm px-4"><p className="text-center">info@webstepsolutions.com</p></div>
                </div>
            </footer>
        </>
    )
}

export default Footer