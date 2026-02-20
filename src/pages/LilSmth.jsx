import React from 'react';
import glist from '../imgs/letter.png';
import { Link } from 'react-router-dom';

export default function LilSmth() {
    return (
        <main className="min-h-screen bg-rose-50 flex flex-col items-center justify-center p-6 pb-20 relative">
            <div className="w-full max-w-2xl bg-white shadow-2xl rounded-2xl overflow-hidden animate-fade-in-up border border-rose-100">
                <div className="p-4 bg-rose-100/50 flex justify-center border-b border-rose-100">
                    <h1 className="text-xl font-medium text-rose-500 tracking-wide">A lil something for you</h1>
                </div>
                <div className="p-6 md:p-10 flex justify-center">
                    <img
                        className="max-w-full h-auto rounded-md shadow-sm"
                        src={glist}
                        alt="Letter"
                    />
                </div>
            </div>

            <div className="fixed bottom-8 left-0 w-full flex justify-center">
                <Link to="/">
                    <button type="button" className="px-8 py-3 bg-rose-500 hover:bg-rose-600 text-white font-medium rounded-full shadow-lg transition-all hover:-translate-y-1">
                        Back to Home
                    </button>
                </Link>
            </div>
        </main>
    );
}
