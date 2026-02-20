import React from 'react';
import { Link } from 'react-router-dom';

export default function TheAsk() {
    return (
        <main className="min-h-screen bg-pink-50 flex flex-col items-center justify-center p-6 text-center">
            <div className="max-w-md w-full bg-white p-8 rounded-3xl shadow-xl border border-pink-100 flex flex-col items-center animate-fade-in-up">

                <h1 className="text-3xl font-bold text-pink-600 mb-6 drop-shadow-sm">
                    I just have one question for you,
                </h1>

                <img
                    className="w-full max-w-xs rounded-lg mb-8 shadow-sm"
                    src="https://eventstodayz.com/wp-content/uploads/2022/01/be-my-valentine-gif-image.gif"
                    alt="Be my Valentine"
                />

                <div className="flex flex-wrap justify-center gap-4 w-full">
                    <Link to="/YesNaYes" className="flex-1 min-w-[120px]">
                        <button type="button" className="w-full py-3 px-4 bg-pink-500 hover:bg-pink-600 text-white font-bold rounded-xl transition-transform hover:scale-105 shadow-md">
                            Yes
                        </button>
                    </Link>
                    <Link to="/YesNaYes" className="flex-1 min-w-[120px]">
                        <button type="button" className="w-full py-3 px-4 bg-purple-500 hover:bg-purple-600 text-white font-bold rounded-xl transition-transform hover:scale-105 shadow-md">
                            Yes na yes!
                        </button>
                    </Link>
                    <button type="button" className="flex-1 min-w-[120px] py-3 px-4 bg-gray-200 text-gray-400 font-bold rounded-xl cursor-not-allowed">
                        No
                    </button>
                </div>

                <div className="mt-8">
                    <Link to="/" className="text-pink-400 hover:text-pink-600 text-sm font-medium underline underline-offset-4">
                        Back to Home
                    </Link>
                </div>
            </div>
        </main>
    );
}
