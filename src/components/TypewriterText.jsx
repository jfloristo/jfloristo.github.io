import React, { useState, useEffect } from 'react';

export default function TypewriterText({ text, speed = 100 }) {
    const [displayedText, setDisplayedText] = useState('');
    const [index, setIndex] = useState(0);

    useEffect(() => {
        if (index < text.length) {
            const timer = setTimeout(() => {
                setDisplayedText((prev) => prev + text.charAt(index));
                setIndex(index + 1);
            }, speed);
            return () => clearTimeout(timer);
        }
    }, [index, text, speed]);

    return (
        <div className="relative inline-block mt-12 mb-4">
            <span className="text-4xl md:text-5xl font-bold text-[#3c3333] tracking-tight">
                {displayedText}
            </span>
            <span className="animate-pulse text-4xl md:text-5xl font-light text-[#f66c72] ml-1">|</span>
        </div>
    );
}
