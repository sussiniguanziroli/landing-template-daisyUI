// --- FILENAME: src/App.jsx ---
import React from 'react';

// Import the data from your JSON file
import pageLayouts from './assets/landingPageData.json';

// Import all the section components
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Features } from './components/Features';
import { Testimonials } from './components/Testimonials';
import { Plans } from './components/Plans';
import { CTA } from './components/CTA';
import { Footer } from './components/Footer';
import { Contact } from './components/Contact'; // <-- 1. IMPORT a new component

// Create a map of component names (from JSON) to the actual imported components.
const COMPONENT_MAP = {
  Hero,
  Features,
  Testimonials,
  Plans,
  CTA,
  Contact, // <-- 2. ADD the new component to the map
};

export default function App() {
  const profileToLoad = 'vitrina';
  const pageData = pageLayouts[profileToLoad];

  if (!pageData) {
    return (
      <div data-theme="light" className="flex items-center justify-center min-h-screen bg-base-100 p-4">
        <div className="text-center card bg-base-200 p-8 shadow-xl">
          <h1 className="text-2xl font-bold text-error">Error: Page Profile Not Found</h1>
          <p className="mt-2">The profile "<strong>{profileToLoad}</strong>" does not exist in your <code>landingPageData.json</code> file.</p>
          <p className="mt-4 text-sm text-base-content/70">Please make sure the key exists in your JSON data and that the file is correctly loaded.</p>
        </div>
      </div>
    );
  }

  return (
    <div data-theme={pageData.globals.theme} className="bg-base-100">
      <Header appName={pageData.globals.appName} {...pageData.header} />
      <main>
        {pageData.layout.map((section, index) => {
          const Component = COMPONENT_MAP[section.component];
          return Component ? <Component key={index} {...section.data} /> : null;
        })}
      </main>
      <Footer {...pageData.footer} />
    </div>
  );
}