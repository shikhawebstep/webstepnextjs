import React from 'react'
import img from '@/components/img/FM-FE-46-ImageBody-25.png'
import Image from 'next/image';

const Constatnt = () => {
    return (
        <>
            <section className="constant-section padding60">
                <div className="col-full">
                    <div className="constant-inner text-center max-1140">
                        <h3>You’re About To Be Given <span className="block">A CONSTANT SUPPLY Of Email Packed</span></h3>
                        <h2>Fresh Lead Magnets On YOUR Topic, <span className="block"> For YOUR Audience At The Click Of A Button</span></h2>
                        <button className="bg-blue w-50 m4">Funnel Mates Makes It Dead Simple</button>
                        <Image src={img} alt="" />
                        <iframe width="100%" height="500" src="https://www.youtube.com/embed/F74c_1nwVbY?si=ydEVgifMEIrvVpgq" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>                    </div>
                </div>
            </section>

        </>
    )
}

export default Constatnt
