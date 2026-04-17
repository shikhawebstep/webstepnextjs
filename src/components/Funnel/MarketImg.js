import React from 'react'
import Image from 'next/image';
import revimg from '@/components/img/FM-FE-63-ImageBody-42.png'
const MarketImg = () => {
    return (
        <section className="marketing-lg padding60">
            <div className="col-full">
                <div className="center"><Image src={revimg} alt="" /></div>
            </div>
        </section>
    )
}

export default MarketImg