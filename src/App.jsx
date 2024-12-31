import React from 'react';
import Hero from './components/Hero';
import Intro from './components/Intro';
import Navbar from './components/Navbar';
import Projects from './components/Projects';
import Contact from './components/Contact';

function App() {
  return (
    <>
      <Navbar />
      <div className="two-column-container">
        <Hero />
        <Intro />
      </div>
      {/* Keep the rest of your main content outside the two-column layout */}
      <main>
        <section id="portfolio"><Projects /></section>
        <section id="contact"><Contact /></section>
      </main>
    </>
  );
}

export default App;