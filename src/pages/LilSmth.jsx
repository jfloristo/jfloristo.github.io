import React from 'react';
import glist from '../imgs/letter.png';
import { Link } from 'react-router-dom';

export default function LilSmth() {
    return (
        <main className="min-h-screen text-[#3c3333] flex flex-col items-center justify-center p-6 pb-20 relative">
            <div className="w-full max-w-2xl bg-white border border-[#3c3333]/20 overflow-hidden animate-fade-in-up">
                <div className="p-4 bg-[#fcf6f0] flex justify-center border-b border-[#3c3333]/20">
                    <h1 className="text-xl font-medium text-[#f66c72] tracking-wide">To the love of my life</h1>
                </div>
                <div className="p-6 md:p-10 flex justify-center">
                    <img
                        className="max-w-full h-auto border border-[#3c3333]/10"
                        src={glist}
                        alt="Letter"
                    />
                </div>
            </div>

            <div className="fixed bottom-8 left-0 w-full flex justify-center">
                <Link to="/">
                    <button type="button" className="px-8 py-3 bg-white border border-[#3c3333]/20 text-[#3c3333] font-medium transition-colors hover:border-[#f66c72] hover:text-[#f66c72]">
                        Back to Home
                    </button>
                </Link>
            </div>
        </main>
    );
}
