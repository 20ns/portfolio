import React from 'react';
import Hero from './components/Hero';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Navbar from './components/Navbar';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;