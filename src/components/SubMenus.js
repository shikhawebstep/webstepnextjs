import React from 'react'
import Link from 'next/link';
import { FaLaravel, FaMobile, FaPhp, FaWordpress } from "react-icons/fa";
import { SiVorondesign } from "react-icons/si";
import { BsStack } from "react-icons/bs";
const SubMenus = () => {
    return (
        <div className="subchilds">
            <div className="subchild_inner">
                <ul>
                    <li> <div className="first">
                        <div className="bg-pink"> <i><FaPhp /></i></div></div>
                        <div className="sec">
                            <Link href="/php">Php Development</Link>
                            <span>Lorem ipsum dolor sit amet consectetur adipisicing elit.</span></div>
                    </li>
                    <li>
                        <div className="first">
                            <div className="bg-purple"> <i><BsStack /></i></div></div>
                        <div className="sec">
                            <Link href="/fullstack">fullstack Development</Link>
                            <span>Lorem ipsum dolor sit amet consectetur adipisicing elit.</span>
                        </div>
                    </li>
                    <li>
                        <div className="first">
                            <div className="bg-grey"> <i><FaLaravel /></i></div></div>
                        <div className="sec">
                            <Link href="/laravel">Laravel Development</Link>
                            <span>Lorem ipsum dolor sit amet consectetur adipisicing elit.</span>
                        </div>
                    </li>
                    <li>
                        <div className="first">
                            <div className="bg-violet"> <i><SiVorondesign /></i></div></div>
                        <div className="sec">
                            <Link href="/uiux">uiux Development</Link>
                            <span>Lorem ipsum dolor sit amet consectetur adipisicing elit.</span>
                        </div>
                    </li>
                    <li>
                        <div className="first">
                            <div className="bg-pink"> <i><FaWordpress /></i></div></div>
                        <div className="sec">
                            <Link href="/wordpress">wordpress Development</Link>
                            <span>Lorem ipsum dolor sit amet consectetur adipisicing elit.</span>
                        </div>
                    </li>
                    <li>
                        <div className="first">
                            <div className="bg-grey"> <i><FaMobile /></i></div></div>
                        <div className="sec">
                            <Link href="/mobileApp">MobileApp Development</Link>
                            <span>Lorem ipsum dolor sit amet consectetur adipisicing elit.</span>
                        </div>
                    </li>
                    <li>
                        <div className="first">
                            <div className="bg-purple"> <i><BsStack /></i></div></div>
                        <div className="sec">
                            <Link href="/nodejs">NodeJs Development</Link>
                            <span>Lorem ipsum dolor sit amet consectetur adipisicing elit.</span>
                        </div>
                    </li>
                    <li>
                        <div className="first">
                            <div className="bg-pink"> <i><FaPhp /></i></div></div>
                        <div className="sec">
                            <Link href="/softwaretesting">Software Testing</Link>
                            <span>Lorem ipsum dolor sit amet consectetur adipisicing elit.</span>
                        </div>
                    </li>

                </ul>
            </div>
        </div>
    )
}

export default SubMenus