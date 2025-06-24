// --- FILENAME: src/components/Testimonials.js ---
import React from 'react';
import { ICONS } from '../icons';

export const Testimonials = ({ subtitle, description, items }) => {
    return (
      <div id="testimonials" className="py-24 bg-base-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-4xl font-bold tracking-tight text-base-content sm:text-5xl">{subtitle}</h2>
            <p className="mt-4 max-w-2xl mx-auto text-lg text-base-content/70">{description}</p>
          </div>
          <div className="mt-16 grid grid-cols-1 lg:grid-cols-2 gap-8">
            {items.map((testimonial, index) => (
              <div key={index} className="card bg-base-100 shadow-xl">
                <div className="card-body">
                  <div className="flex items-center mb-4">
                    {[...Array(5)].map((_, i) => (
                      <ICONS.Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-base-content/80 italic">"{testimonial.quote}"</p>
                  <div className="mt-6 flex items-center">
                    <div className="avatar">
                      <div className="w-12 rounded-full">
                        <img src={testimonial.avatar} alt={`Avatar of ${testimonial.author}`} onError={(e) => { e.target.onerror = null; e.target.src='https://placehold.co/100x100/2dd4bf/ffffff?text=??'; }} />
                      </div>
                    </div>
                    <div className="ml-4">
                      <p className="font-semibold text-base-content">{testimonial.author}</p>
                      <p className="text-sm text-base-content/70">{testimonial.role}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  };
