import React from 'react';
import Hero from './components/Hero';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Navbar from './components/Navbar';
// Import About and Skills components when you create them:
// import About from './components/About';
// import Skills from './components/Skills';

function App() {
  return (
    <>
      <Navbar />
      <main>
        <section id="hero"><Hero /></section>
        {/* Render About and Skills components when you create them: */}
        {/* <section id="about"><About /></section> */}
        {/* <section id="skills"><Skills /></section> */}
        <section id="portfolio"><Projects /></section>
        <section id="contact"><Contact /></section>
      </main>
    </>
  );
}

export default App;