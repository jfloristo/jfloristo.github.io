import React, { useState, useEffect } from 'react';

export default function Name( {isVisible} ) {
    const fullText = 'Hi! My name is John Ivan.';
    const [text, setText] = useState('');
    const [index, setIndex] = useState(0);

    useEffect(() => {
        const intervalId = setInterval(() => {
            setText((prevText) => prevText + fullText.charAt(index));
            setIndex((prevIndex) => prevIndex + 1);
            if (index >= fullText.length) {
                clearInterval(intervalId);
            }
        }, 150); // adjust the speed of typing here
        return () => clearInterval(intervalId);
    }, [index]);

    return (
        <div className={!isVisible ? 'primary center' : 'primary center move'}>
            <h1>{text}<span className="cursor"></span></h1>
        </div>
    );
}