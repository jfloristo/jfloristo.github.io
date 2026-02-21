import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import TypewriterText from '../components/TypewriterText';
import LinkButton from '../components/LinkButton';
import BadgeLink from '../components/BadgeLink';
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
        <main className="min-h-screen text-[#3c3333] flex flex-col items-center justify-center p-6 selection:bg-purple-500 selection:text-white">
            <div className="w-full max-w-2xl flex flex-col items-center text-center space-y-8 animate-fade-in-up">

                <TypewriterText text="Hi, Tintin!" speed={100} />

                <div className={`transition-all duration-1000 ease-in-out transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                    <p className="text-lg md:text-xl text-[#3c3333]/80 mb-8 max-w-lg mx-auto">
                        If you are reading this, then you've found my secret page for you! Unfortunately, the anding page is for my developer portfolio, but I hope you don't mind.
                    </p>

                    <div className="pt-8 border-t border-[#3c3333]/10 w-full flex flex-col items-center">
                        <h3 className="text-sm uppercase tracking-widest text-[#3c3333]/60 mb-5">Special Links</h3>
                        <div className="flex flex-wrap justify-center gap-4">
                            <BadgeLink to="/LilSmth" color="pink">
                                A lil something
                            </BadgeLink>
                            <BadgeLink to="/theAsk" color="purple">
                                What are we doing?
                            </BadgeLink>
                        </div>
                    </div>
                </div>

            </div>
        </main>
    );
}
