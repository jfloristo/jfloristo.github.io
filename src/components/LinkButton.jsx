import React from 'react';

export default function LinkButton({ title, url, icon: Icon, color }) {
    return (
        <a
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center w-full max-w-md p-4 mb-4 transition-all duration-300 bg-slate-800 border border-slate-700 rounded-xl hover:scale-[1.02] hover:bg-slate-700 shadow-lg group"
        >
            <div className={`flex items-center justify-center w-10 h-10 rounded-full bg-slate-900 group-${color} transition-colors duration-300 mr-4`}>
                {Icon && <Icon className="text-xl text-slate-300 group-hover:text-white" />}
            </div>
            <span className="text-lg font-medium text-slate-200 group-hover:text-white">{title}</span>
        </a>
    );
}
