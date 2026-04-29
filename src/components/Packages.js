"use client"
import React, { useState } from 'react'
import 'reactjs-popup/dist/index.css';
import Modal from './Popup';
import { FaCheckCircle, FaStar } from 'react-icons/fa';
import Link from 'next/link';

const Packages = () => {
    const [activeTab, setActiveTab] = useState('digital marketing');

    const tabs = ['website development', 'digital marketing', 'mobile app development'];

    const packages = [
        {
            title: 'Basic',
            des: "Great for growing businesses needing more features.",
            symbol: '$',
            price: 16,
            pricedes: '/mo',
            events: [
                { title: 'Up to 5 Pages' },
                { title: 'Priority Support' },
                { title: 'Advanced SEO' },
                { title: 'Custom Assets' },
            ],
            btn: "Choose Plan",
            isPopular: false
        },
        {
            title: 'Pro',
            des: "Everything you need to scale your digital presence.",
            symbol: '$',
            price: 44,
            pricedes: '/mo',
            events: [
                { title: 'Up to 15 Pages' },
                { title: '24/7 Support' },
                { title: 'Premium SEO & Analytics' },
                { title: 'Custom UI/UX Design' },
            ],
            btn: "Choose Plan",
            isPopular: true
        }
    ];

    return (
        <section className="py-20 text-slate-900 min-h-screen px-4 md:px-8 bg-slate-50">
            <div className="container mx-auto max-w-7xl">
                <div className="text-center mb-16">
                    <h1 className="text-4xl md:text-5xl font-extrabold mb-4 font-heading bg-clip-text text-transparent bg-gradient-to-r from-pink-600 to-orange-500">
                        Our Packages
                    </h1>
                    <p className="text-slate-500 text-lg md:text-xl max-w-2xl mx-auto">
                        Choose the perfect plan for your business needs. No hidden fees, cancel anytime.
                    </p>
                </div>

                {/* Tabs */}
                <div className="flex flex-wrap justify-center gap-4 mb-16">
                    {tabs.map((tab) => (
                        <button
                            key={tab}
                            onClick={() => setActiveTab(tab)}
                            className={`px-8 py-3 rounded-full font-bold capitalize transition-all duration-300 ${activeTab === tab
                                    ? 'bg-gradient-to-r from-pink-600 to-orange-500 text-white shadow-lg shadow-pink-600/25'
                                    : 'bg-white text-slate-500 hover:bg-slate-100 hover:text-slate-900 border border-slate-200'
                                }`}
                        >
                            {tab}
                        </button>
                    ))}
                </div>

                {/* Pricing Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                    {packages.map((pkg, index) => (
                        <div
                            key={index}
                            className={`relative bg-white rounded-3xl p-8 flex flex-col transition-all duration-300 hover:-translate-y-2 ${pkg.isPopular
                                    ? 'border-2 border-pink-500 shadow-2xl shadow-pink-600/10'
                                    : 'border border-slate-200 hover:border-slate-300 shadow-xl shadow-slate-200/50'
                                }`}
                        >
                            {pkg.isPopular && (
                                <div className="absolute -top-5 left-1/2 -translate-x-1/2 bg-gradient-to-r from-pink-600 to-orange-500 text-white px-4 py-1 rounded-full text-sm font-bold flex items-center gap-1 shadow-lg w-max">
                                    <FaStar className="text-yellow-300" /> Most Popular
                                </div>
                            )}

                            <div className="mb-8">
                                <h2 className="text-2xl font-bold font-heading mb-2 text-slate-900">{pkg.title}</h2>
                                <p className="text-slate-500 text-sm h-10">{pkg.des}</p>
                            </div>

                            <div className="mb-8 border-b border-slate-100 pb-8">
                                <div className="flex items-baseline gap-1 text-slate-900">
                                    <span className="text-2xl font-bold text-slate-400">{pkg.symbol}</span>
                                    <span className="text-5xl font-extrabold">{pkg.price}</span>
                                    <span className="text-slate-400">{pkg.pricedes}</span>
                                </div>
                            </div>

                            <div className="flex-1 mb-8">
                                <ul className="space-y-4">
                                    {pkg.events.map((event, idx) => (
                                        <li key={idx} className="flex items-start gap-3">
                                            <FaCheckCircle className="text-pink-600 mt-1 flex-shrink-0" />
                                            <span className="text-slate-600 text-sm">{event.title}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            <div className="mt-auto flex flex-col gap-3">
                                <Modal />
                                <button className={`w-full py-4 rounded-xl font-bold transition-all ${pkg.isPopular
                                        ? 'bg-gradient-to-r from-pink-600 to-orange-500 text-white hover:opacity-90 shadow-lg'
                                        : 'bg-slate-100 text-slate-800 hover:bg-slate-200'
                                    }`}>
                                    {pkg.btn}
                                </button>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="mt-12 text-center">
                    <Link href="/customize-package" className="inline-block px-10 py-4 bg-slate-900 text-white rounded-xl font-bold hover:bg-slate-800 transition-colors shadow-xl">
                        Create Custom Package
                    </Link>
                </div>
            </div>
        </section>
    )
}

export default Packages
