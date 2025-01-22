import React, { lazy, Suspense } from 'react'
import Navbar from './components/Navbar'
const Hero = lazy(() => import('./components/Hero'))
const Intro = lazy(() => import('./components/Intro'))
const Projects = lazy(() => import('./components/Projects'))
const Contact = lazy(() => import('./components/Contact'))
const ParticlesComponent = lazy(() => import('./components/ParticlesComponent'))

function App() {
  return (
    <div id="app">
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
        <section id="portfolio">
          <Suspense fallback={<div className="skeleton-loader" />}>
            <Projects />
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