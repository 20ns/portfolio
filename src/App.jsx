import React from 'react';
import Hero from './components/Hero';
import Intro from './components/Intro';
import Navbar from './components/Navbar';
import Projects from './components/Projects';
import Contact from './components/Contact';

function App() {
  return (
    <div id="app">
      <Navbar />
      <main> {/* No changes needed here now */}
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