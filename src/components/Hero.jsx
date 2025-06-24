// --- FILENAME: src/components/Hero.js ---
import React from 'react';
import { ICONS } from '../icons';

export const Hero = ({ title, highlightedText, subtitle, buttons }) => {
    return (
        <div className="hero min-h-screen bg-base-200" style={{paddingTop: '4rem'}}>
            <div className="hero-content text-center">
                <div className="max-w-2xl">
                    <h1 className="text-5xl md:text-7xl font-bold tracking-tight">
                        {title} <span className="text-primary">{highlightedText}</span>
                    </h1>
                    <p className="py-6 text-lg text-base-content/80">{subtitle}</p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <a href={buttons.primary.href} className="btn btn-primary btn-wide shadow-lg">{buttons.primary.text}</a>
                        <a href={buttons.secondary.href} className="btn btn-ghost btn-wide">
                            {buttons.secondary.text} <ICONS.ArrowRight className="h-4 w-4 ml-2" />
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};
