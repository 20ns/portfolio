import React, { useEffect, useRef, useState, useMemo } from 'react';
import { Award, Calendar, ShieldCheck, ExternalLink, BrainCircuit, Code, Users, TrendingUp, Briefcase } from 'lucide-react';
import GradientHeading from './extra/GradientHeading';

// Placeholder for actual logo components or image paths
const NvidiaLogo = () => (
  <svg width="48" height="48" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-green-400">
    <path d="M14.287 3.094L5.168 9.534V15.57L14.287 22.01L23.405 15.57V9.534L14.287 3.094ZM14.287 4.82L20.611 9.534L14.287 14.248L7.962 9.534L14.287 4.82ZM7.03 10.638L13.354 15.352V20.28L7.03 15.566V10.638ZM15.219 20.28V15.352L21.543 10.638V15.566L15.219 20.28Z" fill="currentColor"/>
  </svg>
);
const CanvasLogo = () => <span className="font-bold text-blue-400">Canvas Credentials</span>;

const certificatesData = [
  {
    title: 'Building Transformer-Based Natural Language Processing Applications',
    issuer: 'NVIDIA',
    issueDate: 'May 2025',
    credentialId: 'pF329a7-SwSyOeTLS-WONQ',
    credentialUrl: '#', // Placeholder URL
    skills: ['Artificial Intelligence (AI)', 'Python (Programming Language)'],
    logo: <NvidiaLogo />,
    icon: <BrainCircuit size={24} className="text-green-400" />,
  },
  {
    title: 'Getting Started with AI on Jetson Nano Workshop',
    issuer: 'NVIDIA',
    issueDate: 'Mar 2025',
    credentialId: 'Tz0cBezIQ6W9_xQRzBU0DQ',
    credentialUrl: '#', // Placeholder URL
    skills: ['Artificial Intelligence (AI)'],
    logo: <NvidiaLogo />,
    icon: <BrainCircuit size={24} className="text-green-400" />,
  },
  {
    title: 'Computer Science Industry Club Official Member 2024/25',
    issuer: 'Canvas Credentials (Badgr)',
    issueDate: 'Sep 2024',
    expiryDate: 'Aug 2027',
    credentialId: '672a2cb6f9ab3c5ee92b9e8a',
    credentialUrl: '#', // Placeholder URL
    skills: ['Algorithms', 'Shell Scripting', 'Problem Solving', 'Coding Experience'],
    logo: <CanvasLogo />,
    icon: <Users size={24} className="text-blue-400" />,
  },
];

const CertificateCard = React.memo(({ certificate, index }) => {
  const cardRef = useRef(null);
  const observerRef = useRef(null);

  useEffect(() => {
    const handleIntersection = (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add(
            index % 2 === 0 ? 'animate-slide-in-card-left' : 'animate-slide-in-card-right'
          );
          observerRef.current?.unobserve(entry.target);
        }
      });
    };

    observerRef.current = new IntersectionObserver(handleIntersection, { threshold: 0.1 });
    const currentCard = cardRef.current;

    if (currentCard) observerRef.current.observe(currentCard);
    return () => currentCard && observerRef.current?.unobserve(currentCard);
  }, [index]);

  const skillItems = useMemo(() =>
    certificate.skills.map((skill, i) => (
      <span
        key={skill}
        className="px-3 py-1.5 text-xs font-medium rounded-full bg-sky-500/10
                   text-sky-400 border border-sky-500/30 hover:bg-sky-500/20
                   transition-all duration-300 transform hover:scale-105 animate-tech-tag-pop"
        style={{ transitionDelay: `${i * 50}ms`, animationDelay: `${i * 50}ms` }}
      >
        {skill}
      </span>
    ))
  , [certificate.skills]);

  return (
    <div
      ref={cardRef}
      className="group relative overflow-hidden bg-gradient-to-br from-gray-900/90 to-gray-800/90
        backdrop-blur-lg rounded-xl shadow-lg transition-all duration-500 hover:shadow-2xl
        hover:shadow-sky-500/20 border border-gray-700/50 hover:border-sky-500/50
        transform hover:-translate-y-1 opacity-0 flex flex-col h-full"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-sky-500/10 to-indigo-500/10 opacity-0
        group-hover:opacity-100 transition-opacity duration-500" />

      <div className="p-6 flex-grow flex flex-col">
        <div className="flex items-start justify-between mb-4">
          <div className="flex items-center gap-3">
            {certificate.icon || <Award size={32} className="text-sky-400" />}
            <div>
              <h3 className="text-xl font-bold text-white group-hover:text-sky-300 transition-colors duration-300">
                {certificate.title}
              </h3>
              <div className="text-sm text-gray-400 flex items-center gap-2">
                {certificate.logo}
                <span>• Issued by {certificate.issuer}</span>
              </div>
            </div>
          </div>
        </div>

        <div className="space-y-3 text-sm text-gray-300 group-hover:text-gray-200 transition-colors duration-300 mb-4 flex-grow">
          <div className="flex items-center gap-2">
            <Calendar size={16} className="text-sky-400" />
            <span>Issued: {certificate.issueDate}</span>
            {certificate.expiryDate && <span>• Expires: {certificate.expiryDate}</span>}
          </div>
          <div className="flex items-center gap-2">
            <ShieldCheck size={16} className="text-sky-400" />
            <span>Credential ID: {certificate.credentialId}</span>
          </div>
        </div>

        {certificate.skills && certificate.skills.length > 0 && (
          <div className="mb-6">
            <h4 className="text-sm font-medium text-gray-400 uppercase tracking-wider mb-2">
              Skills
            </h4>
            <div className="flex flex-wrap gap-2">
              {skillItems}
            </div>
          </div>
        )}

        {certificate.credentialUrl && certificate.credentialUrl !== '#' && (
          <div className="mt-auto pt-4">
            <a
              href={certificate.credentialUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full px-4 py-3 flex items-center justify-center gap-2
                bg-gradient-to-r from-sky-600 to-sky-500 hover:from-sky-500 hover:to-sky-400
                text-white rounded-lg transition-all duration-300
                transform hover:scale-[1.02] hover:shadow-lg hover:shadow-sky-500/25
                focus:ring-2 focus:ring-sky-500 focus:ring-offset-2 focus:ring-offset-gray-900 animate-fade-up"
              style={{ animationDelay: '100ms' }}
            >
              <ExternalLink size={18} />
              Show Credential
            </a>
          </div>
        )}
      </div>
    </div>
  );
});

const Certificates = () => {
  const [isHeaderVisible, setIsHeaderVisible] = useState(false);
  const headerRef = useRef(null);

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

    return () => {
      if (headerRef.current) {
        observer.unobserve(headerRef.current);
      }
    };
  }, []);

  const certificateCards = useMemo(() =>
    certificatesData.map((cert, index) => (
      <CertificateCard
        key={cert.credentialId || index}
        certificate={cert}
        index={index}
      />
    ))
  , []);

  return (
    <section
      className="certificates-section px-4 py-20 bg-transparent relative"
      id="certificates"
    >
      <div ref={headerRef}>
        <GradientHeading visibleSection={isHeaderVisible}>
          Licenses & Certifications
        </GradientHeading>
      </div>

      <div className={`max-w-3xl mx-auto text-center mb-12 transition-all duration-700 ${
        isHeaderVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      }`}>
        <p className="text-lg text-gray-300">
          A collection of my professional licenses and certifications, highlighting my commitment to continuous learning and skill development.
        </p>
      </div>

      {certificateCards.length === 0 ? (
        <div className="text-center py-20 text-gray-400">
          <Award size={48} className="mx-auto mb-4 opacity-40" />
          <p>No certifications to display at the moment.</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {certificateCards}
        </div>
      )}
    </section>
  );
};

export default React.memo(Certificates);