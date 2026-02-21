import React from 'react';
import { Link } from 'react-router-dom';

export default function BadgeLink({ to, color = 'pink', children }) {
    const colorClasses = {
        pink: "border-[#f66c72] text-[#f66c72] hover:bg-[#f66c72] hover:text-white",
        purple: "border-purple-600 text-purple-600 hover:bg-purple-600 hover:text-white"
    };

    return (
        <Link
            to={to}
            className={`px-5 py-1.5 border transition-colors duration-200 text-sm font-medium ${colorClasses[color]}`}
        >
            {children}
        </Link>
    );
}
