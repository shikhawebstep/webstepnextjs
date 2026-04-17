"use client"
import React from 'react';
import WorkList from './WorkList';
import drTreatCase from '@/components/img/dr-treat-case.png';
import stillwellHansenWork from '@/components/img/Stillwell-Hansen-work.png';
import retrievrWork1 from '@/components/img/Retrievr-work1.png';
import graceMercyWork from '@/components/img/Grace-Mercy-work.png';
import Image from 'next/image';
const Work = () => {

    return (
        <>
            <section className="work">
                <div className="col-full">
                    <h5>Our work—drawn from 20+ years of projects </h5>
                    <p>Twenty years in business has yielded hundreds of client partnerships, each with their own challenges, each uniquely rewarding.</p>
                   
                  
                        <div className="onlymobile">
                            <Image src="" alt="" />
                            <WorkList />
                        </div>
                

                    <div className="grid-container">
                        <div className="grid-item">
                            <Image src={drTreatCase} alt="Dr. Treat Case" />
                        </div>
                        <div className="grid-item">
                            <Image src={stillwellHansenWork} alt="Stillwell Hansen Work" />
                        </div>
                        <div className="grid-item">
                            <Image src={retrievrWork1} alt="Retrievr Work 1" />
                        </div>
                        <div className="grid-item">
                            <Image src={graceMercyWork} alt="Grace Mercy Work" />
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Work;
