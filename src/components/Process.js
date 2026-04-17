import React from 'react';
import Image from 'next/image';
import processimg from "@/components/img/img1.png";
import step1 from '@/components/img/1.png';
import step2 from '@/components/img/2.png';
import step3 from '@/components/img/3.png';
import step4 from '@/components/img/4.png';
import step5 from '@/components/img/5.png';

const Process = () => {
  
  const developmentProcess = [
    { id: 1, icon: step1, title: 'Discovery', description: 'Understanding the underlying concept and target audience' },
    { id: 2, icon: step2, title: 'Design', description: 'Creating wireframe and refining them on the basis of feedbacks' },
    { id: 3, icon: step3, title: 'Build', description: 'Develop robust functionality using required technologies' },
    { id: 4, icon: step4, title: 'Launch', description: 'For better end-user experience, we test the product & launch' },
    { id: 5, icon: step5, title: 'Maintain', description: 'Adding new functionalities for delightful end-user experience' },
    { id: 6, icon: step4, title: 'Launch', description: 'For better end-user experience, we test the product & launch' },
  ];

  return (
    <section className="Process">
      <div className="col-full">
        <h3 className='text-[#ff3b71] text-2xl font-bold pb-0'>HOW DO WE DO</h3>
        <div className="beforeline">
          <h4 className='lining'>Development Process</h4>
        </div>
        <div className="devider">
          <div className="col-60">
            <div className="Development">
              {developmentProcess.map(step => (
                <div className="col-50" key={step.id}>
                  <div className="how">
                   <span className="py-1 text-white p-3 font-bold me-3 rounded-md bg-[#ff3b71] text-[20px]">{step.id}</span>
                    <h5 className='text-[#ff3b71] font-bold text-xl mb-2'>{step.title}</h5>
                    <p>{step.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="col-40">
            <div className="Process-img">
              <Image src={processimg} alt="" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Process;
