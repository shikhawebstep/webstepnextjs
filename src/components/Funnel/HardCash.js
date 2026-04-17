import React from 'react'
import hardcash from '@/components/img/FM-FE-15-ImageBody-03.png'
import Image from 'next/image';

const HardCash = () => {
  return (
    <>
    
    <section className="hard-cash padding60 ">
      <div className="col-full">
         <div className="max-1140">
         <div className="center">
            <h2 className='m4'>What’s Better Than Instantly Activated, Designed, 
            <span className="block"> Hosted, Email Written & Branded Funnels?</span></h2>
              <Image src={hardcash} alt="" />
              <h4 className='m4'>“Give A Man A fish And You’ll Feed Him For A day; <br/>Teach Him How To Fish And He’ll Eat For A Lifetime.”</h4>
         </div>
         
         </div>
      </div> 
    </section>
    </>
  )
}

export default HardCash