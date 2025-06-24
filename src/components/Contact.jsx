// --- FILENAME: src/components/Contact.jsx ---
import React from 'react';
import { ICONS } from '../icons';

export const Contact = ({ id, title, subtitle, description, socials }) => {
  // Filter out any social links that are not provided in the JSON
  const availableSocials = Object.keys(socials || {})
    .filter(key => socials[key] && ICONS[key])
    .map(key => ({
      name: key,
      href: socials[key],
      Icon: ICONS[key],
    }));

  return (
    <div id={id} className="py-24 bg-base-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-base font-semibold text-primary tracking-wide uppercase">{title}</h2>
          <p className="mt-2 text-4xl font-bold tracking-tight text-base-content sm:text-5xl">{subtitle}</p>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-base-content/70">{description}</p>
        </div>
        <div className="mt-16 max-w-3xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 text-center">
          {availableSocials.map((social) => (
            <a
              key={social.name}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              className="card bg-base-100 shadow-lg hover:shadow-2xl transition-shadow duration-300"
            >
              <div className="card-body items-center justify-center">
                <social.Icon className="h-10 w-10 text-primary" />
                <p className="mt-2 text-lg font-semibold text-base-content capitalize">{social.name}</p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};
