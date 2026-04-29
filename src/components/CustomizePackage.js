"use client";
import React, { useState } from 'react';
import { FaLaptopCode, FaShoppingCart, FaBriefcase, FaPaintBrush, FaSearch, FaPenNib, FaCreditCard, FaShareAlt, FaCheckCircle, FaTrash, FaGripVertical } from 'react-icons/fa';

export default function CustomizePackage() {
    const [selections, setSelections] = useState({
        websiteType: null,
        pages: null,
        design: null,
        features: []
    });

    const [isDraggingOver, setIsDraggingOver] = useState(false);
    const [showForm, setShowForm] = useState(false);
    const [contactInfo, setContactInfo] = useState({
        name: '',
        email: '',
        phone: '',
        message: ''
    });

    // Options configuration
    const itemsData = {
        websiteType: [
            { id: 'ecommerce', title: 'E-Commerce', icon: <FaShoppingCart />, price: 500 },
            { id: 'corporate', title: 'Corporate', icon: <FaBriefcase />, price: 300 },
            { id: 'portfolio', title: 'Portfolio', icon: <FaLaptopCode />, price: 200 },
            { id: 'landing', title: 'Landing Page', icon: <FaPaintBrush />, price: 100 },
        ],
        pages: [
            { id: '1-5', title: '1 - 5 Pages', price: 0 },
            { id: '5-10', title: '5 - 10 Pages', price: 100 },
            { id: '10-20', title: '10 - 20 Pages', price: 250 },
            { id: '20+', title: '20+ Pages', price: 500 },
        ],
        design: [
            { id: 'template', title: 'Template Based', desc: 'Standard pre-made design', price: 0 },
            { id: 'custom', title: 'Custom Design', desc: 'Tailored to your brand', price: 300 },
            { id: 'premium', title: 'Premium UI/UX', desc: 'High-end interactions & animations', price: 600 },
        ],
        features: [
            { id: 'seo', title: 'SEO Setup', icon: <FaSearch />, price: 150 },
            { id: 'content', title: 'Content Writing', icon: <FaPenNib />, price: 200 },
            { id: 'payment', title: 'Payment Gateway', icon: <FaCreditCard />, price: 100 },
            { id: 'social', title: 'Social Media Integrations', icon: <FaShareAlt />, price: 50 },
        ]
    };

    const calculateTotal = () => {
        let total = 0;
        if (selections.websiteType) total += selections.websiteType.price;
        if (selections.pages) total += selections.pages.price;
        if (selections.design) total += selections.design.price;
        selections.features.forEach(f => total += f.price);
        return total;
    };

    // Drag and Drop Handlers
    const handleDragStart = (e, item, category) => {
        e.dataTransfer.setData('application/json', JSON.stringify({ itemId: item.id, category }));
        e.dataTransfer.effectAllowed = 'copyMove';
        setTimeout(() => {
            e.target.style.opacity = '0.5';
        }, 0);
    };

    const handleDragEnd = (e) => {
        e.target.style.opacity = '1';
        setIsDraggingOver(false);
    };

    const handleDragOver = (e) => {
        e.preventDefault();
        setIsDraggingOver(true);
        e.dataTransfer.dropEffect = 'copy';
    };

    const handleDragLeave = () => {
        setIsDraggingOver(false);
    };

    const handleDrop = (e) => {
        e.preventDefault();
        setIsDraggingOver(false);
        try {
            const data = JSON.parse(e.dataTransfer.getData('application/json'));
            const { itemId, category } = data;

            const fullItem = itemsData[category].find(i => i.id === itemId);
            if (!fullItem) return;

            setSelections(prev => {
                if (category === 'features') {
                    if (!prev.features.some(f => f.id === fullItem.id)) {
                        return { ...prev, features: [...prev.features, fullItem] };
                    }
                    return prev;
                } else {
                    return { ...prev, [category]: fullItem };
                }
            });
        } catch (err) {
            console.error("Drop failed", err);
        }
    };

    const removeSelection = (category, itemId = null) => {
        setSelections(prev => {
            if (category === 'features') {
                return { ...prev, features: prev.features.filter(f => f.id !== itemId) };
            }
            return { ...prev, [category]: null };
        });
    };

    const handleSubmit = () => {
        if (!selections.websiteType || !selections.pages || !selections.design) {
            alert("Please drag and drop at least a Website Type, Pages count, and Design type into your package.");
            return;
        }
        setShowForm(true);
    };

    const handleFinalSubmit = (e) => {
        e.preventDefault();
        alert(`Request Submitted!\nTotal estimated cost: $${calculateTotal()}\nWe will contact you at ${contactInfo.email} soon.`);
        setShowForm(false);
    };

    return (
        <section className="py-20 text-slate-900 min-h-screen px-4 md:px-8 bg-slate-50">
            <div className="container mx-auto max-w-7xl">
                <div className="text-center mb-12">
                    <h1 className="text-4xl md:text-5xl font-extrabold mb-4 font-heading bg-clip-text text-transparent bg-gradient-to-r from-pink-600 to-orange-500">
                        Build Your Custom Package
                    </h1>
                    <p className="text-slate-500 text-lg md:text-xl max-w-2xl mx-auto">
                        Drag and drop the features you need into your package box to get an instant estimate.
                    </p>
                </div>

                <div className="flex flex-col lg:flex-row gap-8">
                    {/* Left Side: Available Options (Draggable) */}
                    <div className="lg:w-1/2 space-y-8">
                        {/* Category 1: Website Type */}
                        <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
                            <h2 className="text-xl font-bold mb-4 flex items-center gap-2 text-slate-900">
                                <span className="bg-gradient-to-br from-pink-600 to-orange-500 text-white w-6 h-6 rounded-full flex items-center justify-center text-sm shadow-md">1</span>
                                Website Type
                            </h2>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                                {itemsData.websiteType.map(item => (
                                    <div
                                        key={item.id}
                                        draggable
                                        onDragStart={(e) => handleDragStart(e, item, 'websiteType')}
                                        onDragEnd={handleDragEnd}
                                        className="bg-slate-50 p-4 rounded-xl border border-slate-200 hover:border-pink-500 cursor-grab active:cursor-grabbing transition-all flex items-center gap-3 group shadow-sm hover:shadow-md"
                                    >
                                        <div className="text-slate-400 group-hover:text-pink-500"><FaGripVertical /></div>
                                        <div className="text-2xl text-pink-600">{item.icon}</div>
                                        <div className="flex-1">
                                            <h3 className="font-semibold text-sm text-slate-800">{item.title}</h3>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Category 2: Pages */}
                        <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
                            <h2 className="text-xl font-bold mb-4 flex items-center gap-2 text-slate-900">
                                <span className="bg-gradient-to-br from-pink-600 to-orange-500 text-white w-6 h-6 rounded-full flex items-center justify-center text-sm shadow-md">2</span>
                                Number of Pages
                            </h2>
                            <div className="grid grid-cols-2 gap-3">
                                {itemsData.pages.map(item => (
                                    <div
                                        key={item.id}
                                        draggable
                                        onDragStart={(e) => handleDragStart(e, item, 'pages')}
                                        onDragEnd={handleDragEnd}
                                        className="bg-slate-50 p-4 rounded-xl border border-slate-200 hover:border-pink-500 cursor-grab active:cursor-grabbing transition-all flex items-center gap-3 group shadow-sm hover:shadow-md"
                                    >
                                        <div className="text-slate-400 group-hover:text-pink-500"><FaGripVertical /></div>
                                        <h3 className="font-semibold text-sm text-slate-800">{item.title}</h3>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Category 3: Design */}
                        <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
                            <h2 className="text-xl font-bold mb-4 flex items-center gap-2 text-slate-900">
                                <span className="bg-gradient-to-br from-pink-600 to-orange-500 text-white w-6 h-6 rounded-full flex items-center justify-center text-sm shadow-md">3</span>
                                Design Quality
                            </h2>
                            <div className="space-y-3">
                                {itemsData.design.map(item => (
                                    <div
                                        key={item.id}
                                        draggable
                                        onDragStart={(e) => handleDragStart(e, item, 'design')}
                                        onDragEnd={handleDragEnd}
                                        className="bg-slate-50 p-4 rounded-xl border border-slate-200 hover:border-pink-500 cursor-grab active:cursor-grabbing transition-all flex items-center gap-3 group shadow-sm hover:shadow-md"
                                    >
                                        <div className="text-slate-400 group-hover:text-pink-500"><FaGripVertical /></div>
                                        <div>
                                            <h3 className="font-semibold text-sm text-slate-800">{item.title}</h3>
                                            <p className="text-xs text-slate-500">{item.desc}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Category 4: Features */}
                        <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
                            <h2 className="text-xl font-bold mb-4 flex items-center gap-2 text-slate-900">
                                <span className="bg-gradient-to-br from-pink-600 to-orange-500 text-white w-6 h-6 rounded-full flex items-center justify-center text-sm shadow-md">4</span>
                                Additional Features
                            </h2>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                                {itemsData.features.map(item => (
                                    <div
                                        key={item.id}
                                        draggable
                                        onDragStart={(e) => handleDragStart(e, item, 'features')}
                                        onDragEnd={handleDragEnd}
                                        className="bg-slate-50 p-4 rounded-xl border border-slate-200 hover:border-pink-500 cursor-grab active:cursor-grabbing transition-all flex items-center gap-3 group shadow-sm hover:shadow-md"
                                    >
                                        <div className="text-slate-400 group-hover:text-pink-500"><FaGripVertical /></div>
                                        <div className="text-lg text-pink-600">{item.icon}</div>
                                        <h3 className="font-semibold text-sm text-slate-800">{item.title}</h3>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Right Side: The Package Dropzone or Contact Form */}
                    <div className="lg:w-1/2">
                        <div className="sticky top-24">
                            {!showForm ? (
                                <div
                                    onDrop={handleDrop}
                                    onDragOver={handleDragOver}
                                    onDragLeave={handleDragLeave}
                                    className={`bg-white rounded-3xl p-8 shadow-xl border-2 transition-all duration-300 min-h-[600px] flex flex-col ${isDraggingOver ? 'border-pink-500 border-dashed bg-slate-50/80 scale-[1.01]' : 'border-slate-200 border-solid'}`}
                                >
                                    <div className="flex justify-between items-end mb-8 border-b border-slate-100 pb-6">
                                        <div>
                                            <h2 className="text-2xl font-bold font-heading text-slate-900">Your Package</h2>
                                            <p className="text-sm text-slate-500 mt-1">Drop items here to build</p>
                                        </div>
                                        <div className="text-right">
                                            <span className="block text-slate-500 text-sm mb-1">Estimated Total</span>
                                            <span className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-pink-600 to-orange-500">
                                                ${calculateTotal()}
                                            </span>
                                        </div>
                                    </div>

                                    <div className="flex-1 space-y-4">
                                        {/* Dropped Website Type */}
                                        <div className="bg-slate-50 rounded-xl p-4 border border-slate-200">
                                            <div className="text-xs text-slate-400 mb-2 capitalize font-bold tracking-wider">Website Type</div>
                                            {selections.websiteType ? (
                                                <div className="flex justify-between items-center bg-white p-3 rounded-lg border border-pink-200 shadow-sm">
                                                    <div className="flex items-center gap-3">
                                                        <span className="text-pink-600">{selections.websiteType.icon}</span>
                                                        <span className="font-medium text-slate-800">{selections.websiteType.title}</span>
                                                    </div>
                                                    <button onClick={() => removeSelection('websiteType')} className="text-slate-400 hover:text-red-500 transition-colors">
                                                        <FaTrash />
                                                    </button>
                                                </div>
                                            ) : (
                                                <div className="text-slate-400 text-sm italic py-2 flex items-center justify-center border-2 border-dashed border-slate-300 rounded-lg bg-white">
                                                    Drag a Website Type here
                                                </div>
                                            )}
                                        </div>

                                        {/* Dropped Pages */}
                                        <div className="bg-slate-50 rounded-xl p-4 border border-slate-200">
                                            <div className="text-xs text-slate-400 mb-2 capitalize font-bold tracking-wider">Pages</div>
                                            {selections.pages ? (
                                                <div className="flex justify-between items-center bg-white p-3 rounded-lg border border-pink-200 shadow-sm">
                                                    <span className="font-medium text-slate-800">{selections.pages.title}</span>
                                                    <button onClick={() => removeSelection('pages')} className="text-slate-400 hover:text-red-500 transition-colors">
                                                        <FaTrash />
                                                    </button>
                                                </div>
                                            ) : (
                                                <div className="text-slate-400 text-sm italic py-2 flex items-center justify-center border-2 border-dashed border-slate-300 rounded-lg bg-white">
                                                    Drag Pages count here
                                                </div>
                                            )}
                                        </div>

                                        {/* Dropped Design */}
                                        <div className="bg-slate-50 rounded-xl p-4 border border-slate-200">
                                            <div className="text-xs text-slate-400 mb-2 capitalize font-bold tracking-wider">Design Level</div>
                                            {selections.design ? (
                                                <div className="flex justify-between items-center bg-white p-3 rounded-lg border border-pink-200 shadow-sm">
                                                    <span className="font-medium text-slate-800">{selections.design.title}</span>
                                                    <button onClick={() => removeSelection('design')} className="text-slate-400 hover:text-red-500 transition-colors">
                                                        <FaTrash />
                                                    </button>
                                                </div>
                                            ) : (
                                                <div className="text-slate-400 text-sm italic py-2 flex items-center justify-center border-2 border-dashed border-slate-300 rounded-lg bg-white">
                                                    Drag a Design level here
                                                </div>
                                            )}
                                        </div>

                                        {/* Dropped Features */}
                                        <div className="bg-slate-50 rounded-xl p-4 border border-slate-200 flex-1">
                                            <div className="text-xs text-slate-400 mb-2 capitalize font-bold tracking-wider">Extra Features</div>
                                            {selections.features.length > 0 ? (
                                                <div className="space-y-2">
                                                    {selections.features.map(f => (
                                                        <div key={f.id} className="flex justify-between items-center bg-white p-3 rounded-lg border border-pink-200 shadow-sm">
                                                            <div className="flex items-center gap-3">
                                                                <span className="text-pink-600">{f.icon}</span>
                                                                <span className="font-medium text-sm text-slate-800">{f.title}</span>
                                                            </div>
                                                            <button onClick={() => removeSelection('features', f.id)} className="text-slate-400 hover:text-red-500 transition-colors">
                                                                <FaTrash />
                                                            </button>
                                                        </div>
                                                    ))}
                                                </div>
                                            ) : (
                                                <div className="text-slate-400 text-sm italic py-4 flex flex-col items-center justify-center border-2 border-dashed border-slate-300 rounded-lg h-full bg-white">
                                                    <span>Drag Additional Features here</span>
                                                    <span className="text-xs mt-1">(Optional)</span>
                                                </div>
                                            )}
                                        </div>
                                    </div>

                                    <button
                                        onClick={handleSubmit}
                                        className="mt-8 w-full flex justify-center items-center gap-2 py-4 rounded-xl font-bold text-white bg-gradient-to-r from-pink-600 to-orange-500 hover:shadow-lg hover:shadow-pink-600/20 transition-all text-lg"
                                    >
                                        Complete My Package <FaCheckCircle />
                                    </button>
                                </div>
                            ) : (
                                <div className="bg-white rounded-3xl p-8 shadow-xl border border-slate-200 min-h-[600px] flex flex-col animate-[fadeIn_0.4s_ease-out]">
                                    <div className="mb-8 border-b border-slate-100 pb-6 flex justify-between items-start">
                                        <div>
                                            <h2 className="text-2xl font-bold font-heading text-slate-900">Finalize Request</h2>
                                            <p className="text-sm text-slate-500 mt-1">Please provide your details.</p>
                                        </div>
                                        <button
                                            onClick={() => setShowForm(false)}
                                            className="text-sm text-pink-600 hover:text-pink-500 font-medium transition-colors"
                                        >
                                            &larr; Edit Package
                                        </button>
                                    </div>

                                    <form onSubmit={handleFinalSubmit} className="flex-1 space-y-5">
                                        <div>
                                            <label className="block text-sm font-medium text-slate-600 mb-1">Full Name</label>
                                            <input
                                                type="text"
                                                required
                                                className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-slate-900 focus:outline-none focus:border-pink-500 focus:ring-1 focus:ring-pink-500 transition-colors"
                                                placeholder="John Doe"
                                                value={contactInfo.name}
                                                onChange={e => setContactInfo({ ...contactInfo, name: e.target.value })}
                                            />
                                        </div>
                                        <div>
                                            <label className="block text-sm font-medium text-slate-600 mb-1">Email Address</label>
                                            <input
                                                type="email"
                                                required
                                                className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-slate-900 focus:outline-none focus:border-pink-500 focus:ring-1 focus:ring-pink-500 transition-colors"
                                                placeholder="john@example.com"
                                                value={contactInfo.email}
                                                onChange={e => setContactInfo({ ...contactInfo, email: e.target.value })}
                                            />
                                        </div>
                                        <div>
                                            <label className="block text-sm font-medium text-slate-600 mb-1">Phone Number</label>
                                            <input
                                                type="tel"
                                                className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-slate-900 focus:outline-none focus:border-pink-500 focus:ring-1 focus:ring-pink-500 transition-colors"
                                                placeholder="+1 (555) 000-0000"
                                                value={contactInfo.phone}
                                                onChange={e => setContactInfo({ ...contactInfo, phone: e.target.value })}
                                            />
                                        </div>
                                        <div>
                                            <label className="block text-sm font-medium text-slate-600 mb-1">Additional Notes</label>
                                            <textarea
                                                rows="4"
                                                className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-slate-900 focus:outline-none focus:border-pink-500 focus:ring-1 focus:ring-pink-500 transition-colors resize-none"
                                                placeholder="Any specific requests or details?"
                                                value={contactInfo.message}
                                                onChange={e => setContactInfo({ ...contactInfo, message: e.target.value })}
                                            ></textarea>
                                        </div>

                                        <button
                                            type="submit"
                                            className="w-full flex justify-center items-center gap-2 py-4 rounded-xl font-bold text-white bg-gradient-to-r from-pink-600 to-orange-500 hover:shadow-lg hover:shadow-pink-600/20 transition-all text-lg mt-6"
                                        >
                                            Submit Package Request <FaCheckCircle />
                                        </button>
                                    </form>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
