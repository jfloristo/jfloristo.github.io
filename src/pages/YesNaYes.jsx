import React from 'react';
import { Link } from 'react-router-dom';
import glist from '../imgs/glist.png';

export default function YesNaYes() {
    return (
        <main className="min-h-screen bg-slate-50 py-12 px-4 sm:px-6 lg:px-8 flex flex-col items-center font-sans">

            <div className="text-center mb-12 animate-fade-in-down">
                <h1 className="text-4xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-purple-600 mb-4">
                    Yahoo! Here's our itinerary for February 14:
                </h1>
            </div>

            <div className="flex flex-col lg:flex-row justify-center items-stretch gap-8 w-full max-w-6xl">

                {/* Sidequest Card */}
                <div className="flex-1 bg-white rounded-3xl shadow-xl overflow-hidden border border-pink-100 hover:shadow-2xl transition-shadow duration-300 transform hover:-translate-y-1">
                    <div className="p-8">
                        <h2 className="text-2xl font-bold text-pink-600 mb-6 border-b border-pink-100 pb-2">A lil sidequest:</h2>
                        <div className="space-y-3 mb-6 text-slate-700">
                            <p><span className="font-semibold text-pink-500">WHAT:</span> Grocery Run</p>
                            <p><span className="font-semibold text-pink-500">WHEN:</span> February 14, 2026, earlier than 8:00 PM</p>
                            <p><span className="font-semibold text-pink-500">WHERE:</span> Any grocery with you</p>
                        </div>
                        <h3 className="text-lg font-semibold text-slate-800 mb-4">Here's our shopping list!</h3>
                        <div className="bg-pink-50 p-4 rounded-xl flex justify-center">
                            <img className="max-w-full h-auto rounded shadow-sm max-h-96 object-contain" src={glist} alt="Shopping list" />
                        </div>
                    </div>
                </div>

                {/* Main Event Card */}
                <div className="flex-1 bg-white rounded-3xl shadow-xl overflow-hidden border border-purple-100 hover:shadow-2xl transition-shadow duration-300 transform hover:-translate-y-1">
                    <div className="p-8">
                        <h2 className="text-2xl font-bold text-purple-600 mb-6 border-b border-purple-100 pb-2">Our main event:</h2>
                        <div className="space-y-3 mb-6 text-slate-700">
                            <p><span className="font-semibold text-purple-500">WHAT:</span> About Us But Not About Us</p>
                            <p><span className="font-semibold text-purple-500">WHEN:</span> February 14, 2026 8:00 PM</p>
                            <p><span className="font-semibold text-purple-500">WHERE:</span> Power Mac Center Spotlight Blackbox Theater, Ayala Malls Circuit</p>
                        </div>
                        <div className="bg-purple-50 rounded-xl overflow-hidden flex justify-center items-center p-4">
                            <img
                                className="max-w-full h-auto rounded shadow-sm max-h-96 object-cover"
                                src="https://m.media-amazon.com/images/S/pv-target-images/1699a4bda36d5011923cb38db43b05c1291265fe3b667e7c6bdff234f96ad978.jpg"
                                alt="Main Event Poster"
                            />
                        </div>
                    </div>
                </div>

            </div>

            <div className="mt-16">
                <Link to="/">
                    <button type="button" className="px-8 py-3 bg-slate-800 hover:bg-slate-700 text-white font-medium rounded-full shadow-lg transition-all hover:scale-105">
                        Back to Home
                    </button>
                </Link>
            </div>

        </main>
    );
}
