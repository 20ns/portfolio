import React, { lazy, Suspense, useState, useEffect } from 'react'
import Navbar from './components/Navbar'
const Hero = lazy(() => import('./components/Hero'))
const Intro = lazy(() => import('./components/Intro'))
const Skills = lazy(() => import('./components/Skills'))
const Projects = lazy(() => import('./components/Projects'))
const Certificates = lazy(() => import('./components/Certificates'))
const Resume = lazy(() => import('./components/Resume'))
const Contact = lazy(() => import('./components/Contact'))
const ParticlesComponent = lazy(() => import('./components/ParticlesComponent'))

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading time and then remove loading screen
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div id="app">
      {/* Loading Screen */}
      <div 
        className={`fixed inset-0 z-[9999] flex items-center justify-center bg-gray-900 transition-opacity duration-500 ${
          isLoading ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
      >
        <div className="text-center">
          <div className="mb-4 text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 to-purple-500">
            Navpreet Singh
          </div>
          <div className="w-16 h-16 border-t-4 border-r-4 border-electric-cyan rounded-full animate-spin mx-auto"></div>
        </div>
      </div>
      
      <Suspense fallback={null}>
        <ParticlesComponent />
      </Suspense>
      <Navbar />
      <main>
        <section id="hero" className="two-column-container">
          <Suspense fallback={<div className="skeleton-loader" />}>
            <Hero />
            <Intro />
          </Suspense>
        </section>
        <section id="skills">
          <Suspense fallback={<div className="skeleton-loader" />}>
            <Skills />
          </Suspense>
        </section>        <section id="portfolio">
          <Suspense fallback={<div className="skeleton-loader" />}>
            <Projects />
          </Suspense>
        </section>
        <section id="certificates">
          <Suspense fallback={<div className="skeleton-loader" />}>
            <Certificates />
          </Suspense>
        </section>
        <section id="resume">
          <Suspense fallback={<div className="skeleton-loader" />}>
            <Resume />
          </Suspense>
        </section>
        <section id="contact">
          <Suspense fallback={<div className="skeleton-loader" />}>
            <Contact />
          </Suspense>
        </section>
      </main>
    </div>
  )
}

export default React.memo(App)