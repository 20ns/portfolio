import React, { useState, useEffect, useRef } from 'react';
import { Mail, Linkedin, Github } from 'lucide-react';
import GradientHeading from '../components/extra/GradientHeading';

const ContactLink = ({ href, icon: Icon, label, delay }) => {
  const [isHovered, setIsHovered] = useState(false);
  const elementRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1 }
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <a
      ref={elementRef}
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`group relative flex items-center justify-between w-full p-6 rounded-xl bg-white/5 backdrop-blur-md border border-white/10
                hover:bg-white/10 hover:border-white/20 transition-all duration-300 ease-in-out overflow-hidden opacity-0
                ${isVisible ? 'animate-slide-in-card-right' : ''}`}
      style={{ animationDelay: `${delay}ms` }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10 opacity-0
                    group-hover:opacity-100 transition-opacity duration-500 ease-in-out" />
      <div className="flex items-center gap-4 z-10">
        <div className={`transform transition-all duration-300 ease-in-out ${isHovered ? 'scale-110 rotate-12' : ''}`}>
          <Icon className="w-6 h-6 text-white/80 group-hover:text-white transition-colors duration-300" />
        </div>
        <span className="text-xl text-white/80 font-medium tracking-wide group-hover:text-white transition-colors duration-300">
          {label}
        </span>
      </div>
      <div className="z-10">
        <div className="flex items-center gap-2 text-white/50">
          <span className="text-sm">Visit</span>
          <div className="w-6 h-[1px] bg-white/50 transform transition-all duration-300 ease-in-out
                        group-hover:w-12 group-hover:bg-white" />
        </div>
      </div>
    </a>
  );
};

const Contact = () => {
  const headerRef = useRef(null);
  const [isHeaderVisible, setIsHeaderVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsHeaderVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1 }
    );

    if (headerRef.current) {
      observer.observe(headerRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div className="container mx-auto px-4 py--0" id="contact">
      <div className="max-w-4xl mx-auto">
        <div 
          ref={headerRef}
          className={`text-center mb-20 opacity-0 ${isHeaderVisible ? 'animate-fade-up' : ''}`}
        >
          <GradientHeading visibleSection={isHeaderVisible}>
              Let's Connect
          </GradientHeading>
          <p className="text-xl text-white/60 font-light">
            Reach out to me via email or social media. I'd love to hear from you!
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <ContactLink
            href="https://www.linkedin.com/in/navpreetsinghcs"
            icon={Linkedin}
            label="LinkedIn"
            delay={200}
          />
          <ContactLink
            href="https://github.com/20ns"
            icon={Github}
            label="GitHub"
            delay={400}
          />
          <ContactLink
            href="mailto:ns.2004@outlook.com"
            icon={Mail}
            label="Email"
            delay={600}
          />
        </div>
        
        <div className={`mt-24 text-center opacity-0 ${isHeaderVisible ? 'animate-fade-up' : ''}`}
            style={{ animationDelay: '800ms' }}>
          <p className="text-white/30 text-sm py-5">
            © 2025 Navpreet Singh
          </p>
        </div>
      </div>
    </div>
  );
};

export default Contact;