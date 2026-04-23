import React from 'react';
import blog1 from '@/components/img/blog1.png';
import blog2 from '@/components/img/blog2.png';
import blog3 from '@/components/img/blog3.png';
import blog4 from '@/components/img/blog4.png';
import Image from 'next/image';
import AnimatedSection from '../AnimatedSection';
import { FaCalendarAlt, FaUser, FaEye, FaArrowRight } from 'react-icons/fa';

const BlogPosts = () => {
  const blogPostsData = [
    {
      id: 1,
      title: "Which eCommerce Platform is Best for SEO?",
      imageSrc: blog1,
      description: "For any eCommerce website, SEO is very important for business development. We need SEO to generate traffic or sales....",
      author: "admin",
      date: "Nov 30, 2023",
      views: 30
    },
    {
      id: 2,
      title: "What Is The Difference Between eCommerce And Dropshipping?",
      imageSrc: blog2,
      description: "For any eCommerce website, SEO is very important for business development. We need SEO to generate traffic or sales....",
      author: "admin",
      date: "Nov 30, 2023",
      views: 30
    },
    {
      id: 3,
      title: "How to Integrate eCommerce Into Your Website?",
      imageSrc: blog3,
      description: "For any eCommerce website, SEO is very important for business development. We need SEO to generate traffic or sales....",
      author: "admin",
      date: "Nov 30, 2023",
      views: 30
    },
    {
      id: 4,
      title: "How To Use AI In eCommerce?",
      imageSrc: blog4,
      description: "For any eCommerce website, SEO is very important for business development. We need SEO to generate traffic or sales....",
      author: "admin",
      date: "Nov 30, 2023",
      views: 30
    },
  ];

  return (
    <section className="py-24 bg-slate-50 relative z-10 px-6 font-roboto overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-slate-200 to-transparent"></div>
      
      <div className="container mx-auto max-w-7xl">
        <AnimatedSection delay={0} direction="up" className="text-center mb-16">
          <span className="font-mono text-[10px] tracking-[0.25em] uppercase text-pink-500 font-bold mb-4 block">
            Latest Insights
          </span>
          <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-6 uppercase tracking-tight">
            Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-orange-500">Latest Blogs</span>
          </h2>
          <p className="text-slate-500 text-lg max-w-2xl mx-auto">
            Latest Technological Trends & Insights + Actionable Advice to stay ahead in the digital landscape.
          </p>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {blogPostsData.map((post, index) => (
            <AnimatedSection key={post.id} delay={0.1 * index} direction="up" className="h-full">
              <div className="group flex flex-col bg-white rounded-3xl overflow-hidden shadow-xl border border-slate-100 hover:border-pink-500/20 transition-all duration-500 h-full hover:-translate-y-2">
                <div className="relative h-56 overflow-hidden">
                  <Image 
                    src={post.imageSrc} 
                    alt={post.title} 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" 
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <div className="absolute bottom-4 left-4">
                    <span className="px-3 py-1 bg-white/90 backdrop-blur-md rounded-full text-[10px] font-bold text-pink-600 uppercase tracking-widest shadow-sm">
                      Technology
                    </span>
                  </div>
                </div>
                
                <div className="p-8 flex flex-col flex-grow">
                  <div className="flex items-center gap-4 mb-4 text-[10px] font-bold text-slate-400 uppercase tracking-widest">
                    <div className="flex items-center gap-1.5">
                      <FaCalendarAlt className="text-pink-500" />
                      <span>{post.date}</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <FaEye className="text-orange-500" />
                      <span>{post.views} Views</span>
                    </div>
                  </div>

                  <h5 className="text-xl font-bold text-slate-900 mb-4 group-hover:text-pink-600 transition-colors line-clamp-2 leading-snug">
                    {post.title}
                  </h5>
                  
                  <p className="text-slate-500 text-sm leading-relaxed mb-6 flex-grow line-clamp-3">
                    {post.description}
                  </p>
                  
                  <div className="pt-6 border-t border-slate-50 flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div className="w-6 h-6 rounded-full bg-slate-100 flex items-center justify-center">
                        <FaUser className="text-[10px] text-slate-400" />
                      </div>
                      <span className="text-[10px] font-bold text-slate-900 uppercase tracking-widest">{post.author}</span>
                    </div>
                    
                    <button className="flex items-center gap-2 text-pink-600 text-[10px] font-black uppercase tracking-widest group/link">
                      Read More
                      <FaArrowRight className="group-hover/link:translate-x-1 transition-transform" />
                    </button>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogPosts;
