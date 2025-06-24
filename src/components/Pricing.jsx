// --- FILENAME: src/components/Pricing.js ---
import React from 'react';
import { ICONS } from '../icons';

export const Pricing = ({ title, description, plans }) => {
    return (
        <div id="pricing" className="py-24 bg-base-100">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center">
                    <h2 className="text-4xl font-bold tracking-tight text-base-content sm:text-5xl">{title}</h2>
                    <p className="mt-4 max-w-2xl mx-auto text-lg text-base-content/70">{description}</p>
                </div>
                <div className="mt-16 grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {plans.map((plan) => (
                        <div key={plan.name} className={`card bg-base-100 shadow-xl ${plan.isPopular ? 'border-2 border-primary' : 'border border-base-300'}`}>
                            {plan.isPopular && <div className="badge badge-primary absolute -top-3 right-4">POPULAR</div>}
                            <div className="card-body">
                                <h3 className="card-title text-2xl">{plan.name}</h3>
                                <p className="text-base-content/70 h-12">{plan.description}</p>
                                <div className="my-4">
                                    <span className="text-5xl font-bold">{plan.price}</span>
                                    {plan.period && <span className="text-base-content/70">{plan.period}</span>}
                                </div>
                                <ul className="space-y-2 text-left mb-6">
                                    {plan.features.map((feature, i) => (
                                        <li key={i} className="flex items-center">
                                            <ICONS.CheckCircle className="w-5 h-5 text-success mr-2 flex-shrink-0" />
                                            <span>{feature}</span>
                                        </li>
                                    ))}
                                </ul>
                                <div className="card-actions justify-end">
                                    <button className={`btn w-full ${plan.isPopular ? 'btn-primary' : 'btn-outline btn-primary'}`}>
                                        {plan.ctaText}
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};
