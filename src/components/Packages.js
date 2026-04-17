"use client"
import React from 'react'
import 'reactjs-popup/dist/index.css';
import  Modal  from './Popup';
import { FaCheckCircle } from 'react-icons/fa';

const Packages = () => {
    const Package = [
        {
            id: 0,
            title: 'starter',
            des: "Lorem ipsum dolor sit amet cons adipisicing elit. Lorem ipsum dolor sit amet cons adipisicing elit.Lorem ipsum dolor sit amet cons ",
            price: 'free',
            events: [
                {
                    title: '7  events',
                },
                {
                    title: '74  event personas',
                },
                {
                    title: '8 check-in zones',
                },
                {
                    title: '2 member',
                },

            ],

            btn: "choose plan",
            link: 'see all feature',

        },
        {
            id: 0,
            title: 'basic',
            des: "Lorem ipsum dolor sit amet cons adipisicing elit. Lorem ipsum dolor sit amet cons adipisicing elit.Lorem ipsum dolor sit amet cons ",
            symbol: '$',
            price: 16,
            pricedes: '/mo',
            events: [
                {
                    title: '7  events',
                },
                {
                    title: '74  event personas',
                },
                {
                    title: '8 check-in zones',
                },
                {
                    title: '2 member',
                },

            ],
            btn: "choose plan",
            link: 'see all feature',
        },
        {
            id: 0,
            title: 'pro',
            des: "Lorem ipsum dolor sit amet cons adipisicing elit. Lorem ipsum dolor sit amet cons adipisicing elit.Lorem ipsum dolor sit amet cons ",
            symbol: '$',
            price: 44,
            pricedes: '/mo',
            events: [
                {
                    title: '7  events',
                },
                {
                    title: '74  event personas',
                },
                {
                    title: '8 check-in zones',
                },
                {
                    title: '2 member',
                },


            ],
            btn: "choose plan",
            link: 'see all feature',
        },
        {
            id: 0,
            title: 'unlimited',
            des: "Lorem ipsum dolor sit amet cons adipisicing elit. Lorem ipsum dolor sit amet cons adipisicing elit.Lorem ipsum dolor sit amet cons ",
            price: 99,
            symbol: '$',
            pricedes: '/mo',
            events: [
                {
                    title: '7  events',
                },
                {
                    title: '74  event personas',
                },
                {
                    title: '8 check-in zones',
                },
                {
                    title: '2 member',
                },


            ],
            btn: "choose plan",
            link: 'see all feature',
        },

    ];
    return (
        <>

            <div id="popup-root" >
                <section className="packages">
                    <div className="col-full">

                        <div className="packages-inner">
                            <h1>Packages</h1>
                            <div className="shadow-box tabing-box">
                                <button className="btn btn-pink ">website development</button>
                                <button className="btn btn-pink active">digital marketing</button>
                                <button className="btn btn-pink ">mobile app development</button>
                            </div>
                            <div className="grid">
                            {Package.map((curElm, index) => {
                                return (
                                    <React.Fragment key={index}>
                                        <div className="packages-box devider shadow-box ">
                                            <div className="col bg-pink col-20">
                                                <h2>{curElm.title}</h2>
                                            </div>
                                            <div className="col col-20">
                                                <p>{curElm.des}</p>
                                            </div>
                                            <div className="col col-20">
                                                <h1><sup>{curElm.symbol}</sup>{curElm.price} <sub>{curElm.pricedes}</sub></h1>
                                            </div>
                                            <div className="col col-20">
                                                <ul>
                                                    {curElm.events.map((event, idx) => (
                                                        <li key={idx}> <FaCheckCircle />{event.title}</li>

                                                    ))}

                                                   <Modal/>
                                                </ul>

                                            </div>
                                            <div className="col">
                                                <button className="bg-black">{curElm.btn}</button>
                                            </div>
                                        </div>

                                    </React.Fragment>
                                )

                            })}
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </>
    )
}


export default Packages