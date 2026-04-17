"use client"
import React, { useState } from "react";
import logo from '@/components/img/logo.png'
import Menu from "./Menu";
import Image from 'next/image';
import navbtn from '@/components/img/navigation-mobile-phone.png'
const Header = () => {
    const [toggle, setToggle] = useState(false);
    const toggleMenu = () => {
        setToggle(!toggle)
    }
    return (
        <>
            <header>
                <div className="col-full">
                    <div className="devider">
                        <div className="col-20">
                            <Image src={logo} alt="" />
                        </div>
                        <div className="col-60">
                            <Image src={navbtn} onClick={toggleMenu} alt="" className="onlymobile" />

                          {toggle?(<>
                            <div className="onlymobile">
                            <Menu/>
                            </div>
                            
                            </>):(null)}
                          <div className="onlyDesktop">
                          <Menu/>
                          </div>
                           
                        </div>
                        <div className="col-20 onlyDesktop">
                            <div className="phone">
                                <button>
                                    <i className="phone-icon"></i>
                                    <a href="#">97818-90033</a>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
        </>
    );
};

export default Header;
