// --- FILENAME: src/App.jsx ---
// The main component that brings everything together.
import React from 'react';

// 1. Import the data from your JSON file
import landingPageData from './assets/landingPageData.json';

// 2. Import all the section components
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Features } from './components/Features';
import { Testimonials } from './components/Testimonials';
import { Pricing } from './components/Pricing';
import { CTA } from './components/CTA';
import { Footer } from './components/Footer';

// The main App component
export default function App() {
  // Use the imported data
  const data = landingPageData;

  return (
    // The theme is now driven by the data from your JSON file
    <div data-theme={data.theme} className="bg-base-100">
      
      {/* 3. Render each component, passing the relevant part of the data as props.
           The spread operator (...) is a shortcut to pass all key-value pairs 
           from an object as props. For example, {...data.hero} is the same as
           writing title={data.hero.title} highlightedText={data.hero.highlightedText} etc.
      */}
      <Header appName={data.appName} navigation={data.header.navigation} ctaButton={data.header.ctaButton} />
      
      <main>
        <Hero {...data.hero} />
        <Features {...data.features} />
        <Testimonials {...data.testimonials} />
        <Pricing {...data.pricing} />
        <CTA {...data.cta} />
      </main>

      <Footer {...data.footer} />
    </div>
  );
}
