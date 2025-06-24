// --- FILENAME: src/icons.jsx ---
import React from 'react';
import { CheckCircle, Star, Menu, X, ArrowRight, Mail, Facebook, Instagram, Linkedin } from 'lucide-react';

// Custom WhatsApp icon to match the style of Lucide icons
const WhatsAppIcon = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path>
  </svg>
);

export const ICONS = {
  // Existing Icons
  CheckCircle: (props) => <CheckCircle {...props} />,
  Star: (props) => <Star {...props} />,
  Menu: (props) => <Menu {...props} />,
  X: (props) => <X {...props} />,
  ArrowRight: (props) => <ArrowRight {...props} />,
  
  // New Contact Icons
  Gmail: (props) => <Mail {...props} />,
  Facebook: (props) => <Facebook {...props} />,
  Instagram: (props) => <Instagram {...props} />,
  WhatsApp: (props) => <WhatsAppIcon {...props} />,
  Linkedin: (props) => <Linkedin {...props} />,
};
