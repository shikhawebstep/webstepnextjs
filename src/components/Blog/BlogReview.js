import React from 'react'
import review from '@/components/img/review-icon1.png'
import review1 from '@/components/img/review-icon2.png'
import review2 from '@/components/img/review-icon3.png'
import review3 from '@/components/img/review-icon4.png'
import Image from 'next/image';
const BlogReview = () => {
  return (
    <>
    <section class="Reviews">
    <div class="col-full">
        <h4>TOP-RATED SAN DIEGO WEB DESIGN AGENCY</h4>
        <p>200+ Reviews with an Average of 4.9 Stars</p>
        <div class="devider">
            <div class="col-25">
                <Image src={review} alt=""/>
            </div>
            <div class="col-25">
                <Image src={review1} alt=""/>
            </div>
            <div class="col-25">
                <Image src={review2} alt=""/>
            </div>
            <div class="col-25">
                <Image src={review3} alt=""/>
            </div>
            
        </div>
    </div>
</section>
    </>
  )
}

export default BlogReview