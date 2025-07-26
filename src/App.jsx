import React, { useState, useEffect } from 'react';
import './styles.css';

const Header = ({ darkMode, toggleDarkMode, showName }) => (
  <header className="header">
    <nav>
      <div className="container">
        <div className="nav-brand">
          <h3 className={`nav-name ${showName ? 'visible' : 'hidden'}`}>Navpreet Singh</h3>
        </div>
        
        <div className="nav-links">
          <a href="mailto:ns.2004@outlook.com" className="nav-contact" title="Email">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
              <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.89 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
            </svg>
          </a>
          <a href="https://linkedin.com/in/navpreet" className="nav-contact" target="_blank" title="LinkedIn">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
            </svg>
          </a>
          <a href="https://github.com/navpreet" className="nav-contact" target="_blank" title="GitHub">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
            </svg>
          </a>
          <a href="/resume.pdf" className="nav-contact" target="_blank" title="Resume">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
              <path d="M14,2H6A2,2 0 0,0 4,4V20A2,2 0 0,0 6,22H18A2,2 0 0,0 20,20V8L14,2M18,20H6V4H13V9H18V20Z"/>
            </svg>
          </a>
          <button onClick={toggleDarkMode} className="dark-mode-toggle">
            {darkMode ? '☀️' : '🌙'}
          </button>
        </div>
      </div>
    </nav>
  </header>
);

const Hero = () => (
  <div className="hero">
    <div className="container">
      <h1>Navpreet Singh</h1>
      <p>Final-year BSc Computer Science • Graduating June 2026</p>
      <p className="hero-specialization">High-Performance AI & Real-Time Systems • Birmingham, UK</p>
    </div>
  </div>
);

const TimelineItem = ({ date, title, subtitle, details, type, metrics, githubUrl }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  
  const getTypeColor = (type) => {
    switch(type) {
      case 'project': return '#2563eb';
      case 'education': return '#10b981';
      case 'cert': return '#8b5cf6';
      case 'contribution': return '#f59e0b';
      default: return '#6b7280';
    }
  };

  const handleContentClick = (e) => {
    // Don't expand if clicking on GitHub link
    if (e.target.closest('.github-link')) return;
    setIsExpanded(!isExpanded);
  };

  return (
    <div className="timeline-item">
      <div 
        className="timeline-content"
        onClick={handleContentClick}
        style={{ cursor: 'pointer', borderLeft: `4px solid ${getTypeColor(type)}` }}
      >
        <div className="timeline-header">
          <div>
            <div className="timeline-title-row">
              <h3>{title}</h3>
              {githubUrl && (
                <a 
                  href={githubUrl} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="github-link"
                  title="View on GitHub"
                  onClick={(e) => e.stopPropagation()}
                >
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                  </svg>
                </a>
              )}
            </div>
            <p className="timeline-subtitle">{subtitle}</p>
            {metrics && <p className="timeline-metrics">{metrics}</p>}
          </div>
          <span className="timeline-date">{date}</span>
        </div>
        
        {isExpanded && (
          <div className="timeline-details">
            {details.map((detail, index) => {
              // Don't show the GitHub line in details since we have the icon
              if (detail.includes('GitHub: https://github.com')) return null;
              return <p key={index} className="timeline-detail">• {detail}</p>
            })}
          </div>
        )}
        
        <p className="timeline-expand-hint">
          {isExpanded ? '↗ Click to collapse' : '→ Click for details'}
        </p>
      </div>
    </div>
  );
};

const Timeline = () => {
  const timelineData = [
    {
      date: 'Ongoing',
      title: 'LangChain AI Framework - Core Contributor',
      subtitle: 'Architectural Enhancement (50,000+ GitHub stars)',
      type: 'contribution',
      metrics: 'PR #32175 • Framework-level fix • Thousands of developers impacted',
      githubUrl: 'https://github.com/langchain-ai/langchain/pull/32175',
      details: [
        'Identified and resolved critical architectural limitation preventing structured output + tool binding combination in LangChain framework',
        'Traced complex issue through multiple modules: RunnableSequence class lacking bind_tools() method for structured output chains',
        'Engineered backward-compatible solution with intelligent pattern detection, enabling previously impossible AI application workflows',
        'Implemented comprehensive unit tests covering edge cases, maintained full backward compatibility while unlocking new functionality',
        'Impact: Enabled critical AI patterns like ChatGPT-style apps requiring both JSON response formatting and external function calling',
        'PR merged into production codebase, resolving issue affecting thousands of developers building modern AI applications'
      ]
    },
    {
      date: 'Oct 2024-Present',
      title: 'MovieRec - AI-Powered Content Discovery Platform',
      subtitle: 'Production-Grade Serverless Architecture • Live at movierec.net',
      type: 'project',
      metrics: '35,237+ lines • Sub-450ms ML • 92 Lighthouse • 99.9% uptime',
      githubUrl: 'https://github.com/20ns/movierec',
      details: [
        'Engineered sophisticated 6-factor AI scoring algorithm processing 80 content candidates in <450ms, delivering 95% accuracy improvement over generic recommendations',
        'Built custom semantic similarity engine (407 lines) with HuggingFace transformers, cosine similarity calculations, and intelligent fallback systems',
        'Architected enterprise-grade serverless infrastructure: 10 Lambda functions, 5 DynamoDB tables, 35,237+ lines across 144 files with 529+ commits',
        'Achieved exceptional performance: 92 Lighthouse score, 60% reduction in re-renders, 45% bundle size reduction, 35% faster page loads',
        'Developed advanced mobile touch engine (368 lines) with haptic feedback and comprehensive error boundary system (234 lines)',
        'Production deployment with 99.9% uptime, 60% user engagement increase, and 60% reduction in external API costs through intelligent caching'
      ]
    },
    {
      date: 'Jan 2024-Jun 2025',
      title: 'LifeBridge - Medical-Grade AI Communication Platform',
      subtitle: 'First-of-its-kind Medical Sign Language AI • HIPAA-Compliant',
      type: 'project',
      metrics: '95%+ accuracy • 26+ FPS • 6,250x cost reduction • $0 operational cost',
      githubUrl: 'https://github.com/20ns/LifeBridge',
      details: [
        'Pioneered first medical sign language AI translation system achieving 95%+ accuracy for 7 critical emergency gestures with real-time 26+ FPS processing',
        'Engineered HIPAA-compliant serverless architecture integrating 15+ AWS services with 98%+ PHI detection rate and 7-year audit retention',
        'Built production-ready multilingual platform supporting 40+ languages, processing 250K+ monthly requests while maintaining 100% AWS Free Tier compliance',
        'Reduced emergency response time by 95% (50 minutes → 1 minute) and per-incident costs by 6,250x ($400 → $0.08)',
        'Category-defining healthcare innovation addressing communication barriers for 466M+ people globally with $999K-2.5M annual savings potential per hospital'
      ]
    },
    {
      date: 'May 2025',
      title: 'NVIDIA Transformer Certification',
      subtitle: 'Building Transformer-Based Natural Language Applications',
      type: 'cert',
      details: [
        'Advanced certification in transformer architectures and NLP applications',
        'Hands-on experience with state-of-the-art language models'
      ]
    },
    {
      date: 'Dec 2024',
      title: 'NVIDIA Jetson Nano Workshop',
      subtitle: 'Getting Started with AI on Jetson Nano',
      type: 'cert',
      details: [
        'Specialized training in edge AI computing and embedded systems',
        'Practical experience with NVIDIA hardware acceleration'
      ]
    },
    {
      date: 'Sep 2024-Mar 2025',
      title: 'Peri Palace - Team Lead',
      subtitle: 'Led team of 9 engineers',
      type: 'project',
      metrics: '20,000 TPS • 95% sprint completion rate',
      details: [
        'Led agile team of 9 engineers using Scrum, achieving 95% sprint completion rate',
        'Engineered backend sustaining 20,000 TPS using Java Spring Boot and optimized MySQL'
      ]
    },
    {
      date: 'Sep 2023-Jun 2026',
      title: 'Aston University - BSc Computer Science',
      subtitle: 'Degree Average: 73%',
      type: 'education',
      details: [
        'Key Modules: Software Engineering, OOP, Data Structures & Algorithms, ML, AI',
        'Strong academic performance with consistent high grades',
        'Active participation in computer science societies and hackathons'
      ]
    },
    {
      date: 'Oct 2023-Mar 2024',
      title: 'CryptoPulse - Advanced ML Cryptocurrency Prediction System',
      subtitle: 'Ensemble AI Trading Platform • 7,816+ lines • 5.21M parameters',
      type: 'project',
      metrics: '88% synthetic accuracy • 53.3% live market • ROCm GPU optimization • Bayesian uncertainty',
      githubUrl: 'https://github.com/20ns/stockmlproject',
      details: [
        'Engineered sophisticated ensemble ML system combining Transformer, BiLSTM, and CNN architectures with 5.21M total parameters for cryptocurrency price prediction',
        'Achieved exceptional performance: 88% accuracy on synthetic data and 53.3% on live market conditions using advanced Bayesian uncertainty quantification',
        'Built comprehensive 7,816+ line codebase with advanced technical indicators (RSI, MACD, Bollinger Bands), real-time data processing, and GPU acceleration via ROCm/AMD',
        'Implemented cutting-edge ensemble methodology with intelligent model weighting, uncertainty estimation, and robust backtesting framework for risk management',
        'Developed production-ready trading infrastructure with real-time market data integration, automated signal generation, and comprehensive performance analytics',
        'Advanced features: Multi-timeframe analysis, volatility prediction, market regime detection, and sophisticated risk-adjusted portfolio optimization algorithms'
      ]
    },
    {
      date: 'Sep 2021-Jun 2023',
      title: 'A Levels - Biology, Chemistry, Computer Science',
      subtitle: 'Grades: AAB',
      type: 'education',
      details: [
        'Biology (A): Advanced study of molecular biology, genetics, and human physiology',
        'Chemistry (A): Comprehensive organic, inorganic, and physical chemistry principles',
        'Computer Science (B): Programming fundamentals, algorithms, and computational thinking',
        'Strong foundation in STEM subjects preparing for university-level computer science'
      ]
    }
  ];

  return (
    <section className="section">
      <div className="container">
        <h2 className="text-center mb-8">Journey & Achievements</h2>
        <div className="timeline">
          {timelineData.map((item, index) => (
            <TimelineItem key={index} {...item} />
          ))}
        </div>
      </div>
    </section>
  );
};

const App = () => {
  const [darkMode, setDarkMode] = useState(() => {
    const saved = localStorage.getItem('darkMode');
    return saved ? JSON.parse(saved) : false;
  });

  const [showName, setShowName] = useState(false);

  useEffect(() => {
    localStorage.setItem('darkMode', JSON.stringify(darkMode));
    document.documentElement.setAttribute('data-theme', darkMode ? 'dark' : 'light');
  }, [darkMode]);

  useEffect(() => {
    const handleScroll = () => {
      const heroSection = document.querySelector('.hero');
      if (heroSection) {
        const heroBottom = heroSection.offsetTop + heroSection.offsetHeight;
        const scrolled = window.scrollY > heroBottom - 100;
        setShowName(scrolled);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div>
      <Header darkMode={darkMode} toggleDarkMode={toggleDarkMode} showName={showName} />
      <Hero />
      <Timeline />
    </div>
  );
};

export default App;