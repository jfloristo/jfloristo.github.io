import React from 'react';
import { Link } from 'react-router-dom';

export default function TheAsk() {
    return (
        <main className="min-h-screen text-[#3c3333] flex flex-col items-center justify-center p-6 text-center">
            <div className="max-w-md w-full bg-white p-8 border border-[#3c3333]/20 flex flex-col items-center animate-fade-in-up">

                <h1 className="text-3xl font-bold text-[#f66c72] mb-6 tracking-tight">
                    I just have one question for you,
                </h1>

                <img
                    className="w-full max-w-xs mb-8 border border-[#3c3333]/10"
                    src="https://eventstodayz.com/wp-content/uploads/2022/01/be-my-valentine-gif-image.gif"
                    alt="Be my Valentine"
                />

                <div className="flex flex-wrap justify-center gap-4 w-full">
                    <Link to="/YesNaYes" className="flex-1 min-w-[120px]">
                        <button type="button" className="w-full py-3 px-4 bg-white border border-[#3c3333]/20 text-[#3c3333] font-medium transition-colors hover:border-[#f66c72] hover:text-[#f66c72]">
                            Yes
                        </button>
                    </Link>
                    <Link to="/YesNaYes" className="flex-1 min-w-[120px]">
                        <button type="button" className="w-full py-3 px-4 bg-[#f66c72] border border-[#f66c72] text-white font-medium transition-colors hover:bg-white hover:text-[#f66c72]">
                            Yes na yes!
                        </button>
                    </Link>
                    <button type="button" className="flex-1 min-w-[120px] py-3 px-4 bg-gray-100 border border-gray-200 text-gray-400 font-medium cursor-not-allowed">
                        No
                    </button>
                </div>

                <div className="mt-8">
                    <Link to="/" className="text-[#3c3333]/60 hover:text-[#f66c72] text-sm font-medium transition-colors">
                        Back to Home
                    </Link>
                </div>
            </div>
        </main>
    );
}
