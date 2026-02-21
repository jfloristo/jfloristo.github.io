import React from 'react';
import { Link } from 'react-router-dom';
import glist from '../imgs/glist.png';

export default function YesNaYes() {
    return (
        <main className="min-h-screen text-[#3c3333] py-12 px-4 sm:px-6 lg:px-8 flex flex-col items-center font-sans">

            <div className="text-center mb-12 animate-fade-in-down">
                <h1 className="text-4xl md:text-5xl font-bold text-[#3c3333] tracking-tight mb-4">
                    Yahoo! Here's our itinerary for February 14:
                </h1>
            </div>

            <div className="flex flex-col lg:flex-row justify-center items-stretch gap-8 w-full max-w-6xl">

                {/* Sidequest Card */}
                <div className="flex-1 bg-white border border-[#3c3333]/20 transition-colors duration-200 hover:border-[#f66c72]">
                    <div className="p-8">
                        <h2 className="text-2xl font-bold text-[#f66c72] mb-6 border-b border-[#3c3333]/10 pb-4">A lil sidequest:</h2>
                        <div className="space-y-3 mb-6 text-[#3c3333]/80">
                            <p><span className="font-semibold text-[#f66c72]">WHAT:</span> Grocery Run</p>
                            <p><span className="font-semibold text-[#f66c72]">WHEN:</span> February 14, 2026, earlier than 8:00 PM</p>
                            <p><span className="font-semibold text-[#f66c72]">WHERE:</span> Any grocery with you</p>
                        </div>
                        <h3 className="text-lg font-semibold text-[#3c3333] mb-4">Here's our shopping list!</h3>
                        <div className="bg-[#fcf6f0]/50 p-4 border border-[#3c3333]/10 flex justify-center">
                            <img className="max-w-full h-auto border border-[#3c3333]/10 max-h-96 object-contain" src={glist} alt="Shopping list" />
                        </div>
                    </div>
                </div>

                {/* Main Event Card */}
                <div className="flex-1 bg-white border border-[#3c3333]/20 transition-colors duration-200 hover:border-[#f66c72]">
                    <div className="p-8">
                        <h2 className="text-2xl font-bold text-[#f66c72] mb-6 border-b border-[#3c3333]/10 pb-4">Our main event:</h2>
                        <div className="space-y-3 mb-6 text-[#3c3333]/80">
                            <p><span className="font-semibold text-[#f66c72]">WHAT:</span> About Us But Not About Us</p>
                            <p><span className="font-semibold text-[#f66c72]">WHEN:</span> February 14, 2026 8:00 PM</p>
                            <p><span className="font-semibold text-[#f66c72]">WHERE:</span> Power Mac Center Spotlight Blackbox Theater, Ayala Malls Circuit</p>
                        </div>
                        <div className="bg-[#fcf6f0]/50 border border-[#3c3333]/10 overflow-hidden flex justify-center items-center p-4">
                            <img
                                className="max-w-full h-auto border border-[#3c3333]/10 max-h-96 object-cover"
                                src="https://m.media-amazon.com/images/S/pv-target-images/1699a4bda36d5011923cb38db43b05c1291265fe3b667e7c6bdff234f96ad978.jpg"
                                alt="Main Event Poster"
                            />
                        </div>
                    </div>
                </div>

            </div>

            <div className="mt-16">
                <Link to="/">
                    <button type="button" className="px-8 py-3 bg-white border border-[#3c3333]/20 text-[#3c3333] font-medium transition-colors hover:border-[#f66c72] hover:text-[#f66c72]">
                        Back to Home
                    </button>
                </Link>
            </div>

        </main>
    );
}
