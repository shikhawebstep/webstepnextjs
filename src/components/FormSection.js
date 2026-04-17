import React from 'react'
import ContactForm from './contactus/ContactForm'
import form from "@/components/img/form.png"
import Image from 'next/image';
const FormSection = () => {
    return (
        <>
            <section className="form-sec bg-blue-100 py-12 px-4 md:px-0">
                <div className="col-full">
                    <div className="devider ">
                        <div className="col-50 text-left">
                            <h2 className='text-3xl font-bold text-gray-900'>Work with the best developers</h2>
                            <p className='text-gray-700 mt-3'>Code & Care offers corporate innovators, businesses and startups a free 15-minute project consultation and/or demo of our services.</p>
                            <h3 className='text-2xl font-semibold text-gray-900 mt-6 pb-0'>What happens next?</h3>
                            <div className='mt-4 space-y-6 '>
                                <div className='text-left'>
                                <p className='text-xl font-semibold text-gray-900 text-[18px] pb-0'>/01</p>
                                <p className="text-gray-700 mt-0 text-[18px] leading-8">Sales manager contacts you within one business day to gather your high-level requirements.</p>
                                <hr className="border mt-2 border-black"></hr>
                                </div>
                                <div className='text-left'>
                                <p className='text-xl font-semibold text-gray-900 text-[18px] pb-0'>/02</p>
                                <p className="text-gray-700 mt-0 text-[18px] leading-8">We sign an NDA to protect your idea.</p>
                                <hr className="border mt-2 border-black"></hr>
                                </div>
                                <div className='text-left'>
                                <p className='text-xl font-semibold text-gray-900 text-[18px] pb-0'>/03</p>
                                <p className="text-gray-700 mt-0 text-[18px] leading-8">A pre-sale business analyst maps out an approximate timeline and gives you an estimate.</p>
                                <hr className="border mt-2 border-black"></hr>
                                </div>
                            
                            </div>
                        </div>
                        <div className="col-50">
                            <div className=" applications">
                                <h5 className='md:text-2xl text-xl font-bold text-center mb-3'>PLEASE, FILL OUT THIS APPLICATION FORM</h5>
                                {/* <Image src={form} alt="" /> */}
                                <ContactForm />
                            </div>

                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default FormSection