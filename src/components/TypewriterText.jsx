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
        <div className="relative inline-block">
            <span className="text-4xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">
                {displayedText}
            </span>
            <span className="animate-pulse text-4xl md:text-5xl font-extrabold text-blue-400">|</span>
        </div>
    );
}
