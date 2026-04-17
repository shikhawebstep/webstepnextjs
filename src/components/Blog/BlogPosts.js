import React from 'react'
import blog1 from '@/components/img/blog1.png'
import blog2 from '@/components/img/blog2.png'
import blog3 from '@/components/img/blog3.png'
import blog4 from '@/components/img/blog4.png'
import Image from 'next/image';
const BlogPosts = () => {
    const blogPostsData = [
  {
    id: 1,
    title: "Which eCommerce Platform is Best for SEO?",
    imageSrc:blog1,
    description: "For any eCommerce website, SEO is very important for business development. We need SEO to generate traffic or sales....Read More",
    author: "admin",
    date: "November 30",
    year: 2023,
    views: 30
  },
  {
    id: 2,
    title: "What Is The Difference Between eCommerce And Dropshipping?",
    imageSrc: blog2,
    description: "For any eCommerce website, SEO is very important for business development. We need SEO to generate traffic or sales....Read More",
    author: "admin",
    date: "November 30",
    year: 2023,
    views: 30
  },
  {
    id: 3,
    title: "How to Integrate eCommerce Into Your Website?",
    imageSrc: blog3,
    description: "For any eCommerce website, SEO is very important for business development. We need SEO to generate traffic or sales....Read More",
    author: "admin",
    date: "November 30",
    year: 2023,
    views: 30
  },
  {
    id: 4,
    title: "How To Use AI In eCommerce?",
    imageSrc: blog4,
    description: "For any eCommerce website, SEO is very important for business development. We need SEO to generate traffic or sales....Read More",
    author: "admin",
    date: "November 30",
    year: 2023,
    views: 30
  },

];

  return (
    <>
    <section className="blog">
      <div className="col-full">
          <div className="Latest">
            <h2>blog</h2><br/>
            <p>Latest Technological Trends & Insights + Actionable Advice</p>
          </div>
        
        <div className="grid-container">
        {blogPostsData.map(post => (
          
          <div className="grid-item"  key={post.id} >
         
            <div className="topimg">
              <Image src={post.imageSrc} alt=""/>
            </div>
            <div className="bottom-content">
              <div className="dummy">
                <h5>{post.title}</h5>
                <p>{post.description}</p>
                <ul>
                  <li><a href="#">By {post.author}</a></li>
                  <li><a href="#">{post.date}, {post.year}</a></li>
                  <li><a href="#">{post.views} Views</a></li>
                </ul>
              </div>
            </div>
            </div>
     
        ))}
        </div>
      </div>
    </section>
    
    </>
  )
}

export default BlogPosts