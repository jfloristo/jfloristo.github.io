import React from 'react';

export default function LinkButton({ title, url, icon: Icon, color }) {
    return (
        <a
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center w-full max-w-md p-4 mb-3 transition-colors duration-200 bg-white border border-[#3c3333]/20 hover:border-[#f66c72] group"
        >
            <div className="flex items-center justify-center w-8 h-8 mr-4 text-[#3c3333]/60 group-hover:text-[#f66c72] transition-colors duration-200">
                {Icon && <Icon className="text-2xl" />}
            </div>
            <span className="text-lg font-medium text-[#3c3333] group-hover:text-[#f66c72] transition-colors duration-200">
                {title}
            </span>
        </a>
    );
}
