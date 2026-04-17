import React from 'react';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import projectImage1 from '@/components/img/Rectangle.png';
import projectImage2 from '@/components/img/Rectangle2.png';
import projectImage3 from '@/components/img/Rectangle3.png';
import projectImage4 from '@/components/img/download4.png';
import projectImage5 from '@/components/img/Rectangle5.png';
import projectImage6 from '@/components/img/Rectangle4.png';
import projectImage7 from '@/components/img/Rectangle6.png';
import projectImage8 from '@/components/img/Rectangle7.png';
import Image from 'next/image';
const OurProjects = () => {
    // Array of image sources
    const projectImages = [
        projectImage1,
        projectImage2,
        projectImage3,
        projectImage4,
        projectImage5,
        projectImage6,
        projectImage7,
        projectImage8
    ];

    return (
        <>
            <section className="project">
                <div className="col-full">
                    <div className="beforeline">
                        <h4 className='lining'>our projects</h4>
                    </div>
                    <div className="grid-container">
                        {/* Mapping over the projectImages array */}
                        {projectImages.map((imageSrc, index) => (
                            <div className="grid-item" key={index}>
                                <Image src={imageSrc} alt={`Project ${index + 1}`} />
                            </div>
                        ))}
                    </div>
                    <div className="more-projects">
                        <ul>
                            <li><FaArrowLeft/></li>
                            <li>1</li>
                            <li>2</li>
                            <li>3</li>
                            <li>4</li>
                            <li><FaArrowRight/></li>
                        </ul>
                        <div className="seemore"><button><a href="#">See more projects</a></button></div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default OurProjects;
