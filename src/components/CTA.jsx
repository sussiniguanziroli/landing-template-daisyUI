// --- FILENAME: src/components/CTA.js ---
import React from 'react';

export const CTA = ({ title, subtitle, button }) => {
    return (
        <div className="bg-base-200">
            <div className="max-w-4xl mx-auto py-16 px-4 sm:px-6 lg:px-8 text-center">
                <h2 className="text-4xl font-bold tracking-tight text-base-content">{title}</h2>
                <p className="mt-4 text-lg text-base-content/70">{subtitle}</p>
                <div className="mt-8">
                    <a href={button.href} className="btn btn-primary btn-lg shadow-lg">{button.text}</a>
                </div>
            </div>
        </div>
    );
};
