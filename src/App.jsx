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

// 1. Create a map of component names (from JSON) to the actual imported components.
const COMPONENT_MAP = {
  Hero,
  Features,
  Testimonials,
  Plans,
  CTA,
};

export default function App() {
  // 2. Select which landing page profile to render.
  //    You can change "corporate" to "family", "saas", etc.
  const pageData = pageLayouts.corporate;

  return (
    // 3. Set the global theme from the JSON data.
    <div data-theme={pageData.globals.theme} className="bg-base-100">
      
      <Header appName={pageData.globals.appName} {...pageData.header} />
      
      <main>
        {/* 4. Render the page body by iterating over the `layout` array. */}
        {pageData.layout.map((section, index) => {
          const Component = COMPONENT_MAP[section.component];
          return Component ? <Component key={index} {...section.data} /> : null;
        })}
      </main>

      <Footer {...pageData.footer} />
    </div>
  );
}