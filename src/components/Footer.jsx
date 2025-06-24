// --- FILENAME: src/components/Footer.jsx ---
import React from 'react';

export const Footer = ({ company, linkGroups }) => {
    return (
        <footer className="footer p-10 bg-neutral text-neutral-content">
            <div>
                <svg width="50" height="50" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fillRule="evenodd" clipRule="evenodd" className="fill-current"><path d="M22.672 15.226l-2.432.811.841 2.515c.33 1.019-.209 2.127-1.23 2.456-1.15.325-2.148-.321-2.463-1.226l-.84-2.518-5.013 1.677.84 2.517c.391 1.203-.434 2.542-1.831 2.542-.88 0-1.601-.564-1.86-1.314l-.842-2.516-2.431.809c-1.135.328-2.145-.317-2.463-1.229-.329-1.018.211-2.127 1.231-2.456l2.432-.809-1.621-4.823-2.432.808c-1.135.328-2.145-.317-2.463-1.229-.329-1.018.21-2.126 1.23-2.456l2.433-.809-.842-2.515c-.33-1.02.211-2.127 1.23-2.456.931-.26 1.945.299 2.463 1.229l.842 2.515 5.011-1.677-.839-2.517c-.403-1.238.484-2.553 1.843-2.553.819 0 1.585.574 1.86 1.315l.842 2.516 2.431-.81c1.02-.33 2.127.21 2.456 1.23.328 1.135-.317 2.145-1.229 2.463l-2.432.809 1.622 4.823 2.432-.809c1.02-.329 2.127.21 2.456 1.23.329 1.135-.317 2.145-1.229 2.463z"></path></svg>
                <p>{company.name}<br/>{company.description}</p>
            </div> 
            {linkGroups.map(group => (
                <div key={group.title}>
                    <span className="footer-title">{group.title}</span> 
                    {group.links.map(link => (
                        <a key={link.name} href={link.href} className="link link-hover">{link.name}</a> 
                    ))}
                </div> 
            ))}
        </footer>
    );
};
