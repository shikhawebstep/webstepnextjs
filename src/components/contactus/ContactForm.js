import React from "react";
import { FaLock } from "react-icons/fa";

const ContactForm = () => {
    return (
        <>
            <form action="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-2">
                    <div className="form-group ">
                        {/* <label htmlFor="name"> your Full Name</label> */}
                        <input type="text" id="name" name="name" placeholder="your Full Name" />

                    </div>
                    <div className="form-group ">
                        {/* <label htmlFor="Phone number">Phone number</label> */}
                        <input type="tel" id="phone" name="phone" placeholder="123-45-678" />
                    </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="form-group ">
                        {/* <label htmlFor="fname"> your Email address</label> */}
                        <input type="text" id="email" name="email" placeholder="Email address*" />

                    </div>
                    <div className="form-group">
                        {/* <label htmlFor="location">location</label> */}
                        <input type="location" id="location" name="file" placeholder="location " />
                    </div>
                </div>
                <div className="form-group" id="details">
                    {/* <label htmlFor="Project*">Project details*</label> */}
                    <textarea name="Project-details" placeholder="Project details*" className="p-3 w-full  text-gray-900  bg-white focus:outline-none h-24" id="Project" cols="" rows=""></textarea>
                </div>
                <div className=" data">
                    <div className="agree">
                        <div className="flex items-center space-x-2">
                            <input type="checkbox" id="vehicle1" name="vehicle1" className="text-sm" value="Bike" />
                            <label htmlFor="vehicle1" className="text-sm"> I agree to the Privacy Policy</label>
                        </div>
                        <div className="flex items-center space-x-2">
                            {/* <FaLock /> */}
                            <label htmlFor="vehicle1" className="text-sm"> 🔒  We guarantee the protection of your data</label>
                        </div>
                    </div>

                    <input type="submit" />
                </div>
            </form>
        </>
    );
};

export default ContactForm;
