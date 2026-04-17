import React, { useState } from 'react';
import SubMenus from './SubMenus';
import Link from 'next/link';
import { FaArrowDown } from 'react-icons/fa6';
import { FaAngleDown } from 'react-icons/fa';
const Menu = () => {
    const [toggleMenu, setToggleMenu] = useState(false);

    const handleToggleMenu = () => {
        setToggleMenu(!toggleMenu);
    };

    return (
        <>
        <div className='menu md:flex absolute md:static top-16 left-0 z-50 justify-center w-full md:w-auto bg-black md:bg-transparent p-5 md:p-0 transition-all hidden'> 
            <div className="navigation-bar">
                <ul className='md:flex gap-10 relative'>
                    <li>
                        <Link href="/">home</Link>
                    </li>
                    <li onClick={handleToggleMenu}>
                        <Link href="/services">services</Link> <FaAngleDown className='text-[#fff] inline-block ml-1' />
                        {toggleMenu && (
                            <>
                                <div className="onlymobile">
                                    <SubMenus />
                                </div>
                               
                            </>
                        )}
                        <div className="onlyDesktop">
                        <SubMenus />
                    </div>
                    </li>
                  
                    <li>
                        <Link href="/projects">projects</Link>
                    </li>
                    <li>
                        <Link href="/works">our work</Link>
                    </li>
                    <li>
                        <Link href="/blog">blog</Link>
                    </li>
                    {/* <li>
                        <Link href="/packages">packages</Link>
                    </li> */}
                    {/* <li>
                    <Link href="/blogv1">blogv1</Link>
                </li> */}
                    <li>
                        <Link href="/team">team</Link>
                    </li>
                    <li>
                        <Link href="/contactus">contact us</Link>
                    </li>
                </ul>
            </div>
            </div>
        </>
    );
};

export default Menu;
