import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import TypewriterText from '../components/TypewriterText';
import LinkButton from '../components/LinkButton';
import { CUSTOM_LINKS } from '../data/links';

export default function Home() {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsVisible(true);
        }, 2000); // reduced from 4000 to 2000 for better UX
        return () => clearTimeout(timer);
    }, []);

    return (
        <main className="min-h-screen bg-slate-900 text-slate-100 flex flex-col items-center justify-center p-6 selection:bg-purple-500 selection:text-white">
            <div className="w-full max-w-2xl flex flex-col items-center text-center space-y-8 animate-fade-in-up">

                <TypewriterText text="Hello, I'm John Ivan Loristo" speed={100} />

                <div className={`transition-all duration-1000 ease-in-out transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                    <p className="text-lg md:text-xl text-slate-400 mb-8 max-w-lg mx-auto">
                        Backend Developer. Welcome to my personal space and link hub!
                    </p>

                    <div className="flex flex-col items-center w-full mb-12">
                        {CUSTOM_LINKS.map((link, index) => (
                            <LinkButton key={index} {...link} />
                        ))}
                    </div>

                    <div className="pt-8 border-t border-slate-800 w-full flex flex-col items-center">
                        <h3 className="text-sm uppercase tracking-widest text-slate-500 mb-4">Special Links</h3>
                        <div className="flex flex-wrap justify-center gap-4">
                            <Link to="/LilSmth" className="px-6 py-2 rounded-full border border-pink-500/30 text-pink-400 hover:bg-pink-500/10 hover:border-pink-500 transition-all text-sm font-medium">
                                A lil something
                            </Link>
                            <Link to="/theAsk" className="px-6 py-2 rounded-full border border-purple-500/30 text-purple-400 hover:bg-purple-500/10 hover:border-purple-500 transition-all text-sm font-medium">
                                What are we doing?
                            </Link>
                        </div>
                    </div>
                </div>

            </div>
        </main>
    );
}
