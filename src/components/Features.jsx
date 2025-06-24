// --- FILENAME: src/components/Features.js ---
import React from 'react';
import { ICONS } from '../icons';

export const Features = ({ title, subtitle, description, items }) => {
    return (
        <div id="features" className="py-24 bg-base-100">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center">
                    <h2 className="text-base font-semibold text-primary tracking-wide uppercase">{title}</h2>
                    <p className="mt-2 text-4xl font-bold tracking-tight text-base-content sm:text-5xl">{subtitle}</p>
                    <p className="mt-4 max-w-2xl mx-auto text-lg text-base-content/70">{description}</p>
                </div>
                <div className="mt-16">
                    <div className="grid grid-cols-1 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 gap-x-8">
                        {items.map((feature) => {
                            const Icon = ICONS[feature.icon];
                            return (
                                <div key={feature.name} className="flex flex-col items-center text-center p-4">
                                    <div className="flex items-center justify-center h-12 w-12 rounded-full bg-primary text-primary-content">
                                        {Icon && <Icon className="h-6 w-6" aria-hidden="true" />}
                                    </div>
                                    <div className="mt-5">
                                        <h3 className="text-lg leading-6 font-medium text-base-content">{feature.name}</h3>
                                        <p className="mt-2 text-base text-base-content/70">{feature.description}</p>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </div>
    );
};
