import React, { useState } from 'react';
import Hero from './components/Hero';
import Intro from './components/Intro';
import Navbar from './components/Navbar';
import Projects from './components/Projects';
import Contact from './components/Contact';

function App() {
  const [isNavbarOpen, setIsNavbarOpen] = useState(false);

  const handleNavbarToggle = (isOpen) => {
    setIsNavbarOpen(isOpen);
  };

  return (
    <div id="app">
      <Navbar onToggle={handleNavbarToggle} isOpen={isNavbarOpen} />
      <main className={`${isNavbarOpen ? 'content-shifted-open' : 'content-shifted'} pt-8`}>
        <div className="two-column-container">
          <Hero />
          <Intro />
        </div>
        <section id="portfolio">
          <Projects />
        </section>
        <section id="contact">
          <Contact />
        </section>
      </main>
    </div>
  );
}

export default App;