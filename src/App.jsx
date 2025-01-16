import React from 'react';
import Hero from './components/Hero';
import Intro from './components/Intro';
import Navbar from './components/Navbar';
import Projects from './components/Projects';
import Contact from './components/Contact';
import ParticlesComponent from './components/ParticlesComponent';

function App() {
  return (
    <div id="app">
      <ParticlesComponent />
      <Navbar />
      <main>
        <section id="hero" className="two-column-container">
          <Hero />
          <Intro />
        </section>
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