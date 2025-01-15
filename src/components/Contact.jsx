import React, { useState } from 'react';
import { Mail, Linkedin, Github } from 'lucide-react';

const ContactLink = ({ href, icon: Icon, label }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="group relative flex items-center justify-between w-full p-6 rounded-xl bg-white/5 backdrop-blur-md border border-white/10 
                 hover:bg-white/10 hover:border-white/20 transition-all duration-300 ease-in-out overflow-hidden"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Hover background effect */}
      <div
        className={`absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10 opacity-0 
                    group-hover:opacity-100 transition-opacity duration-500 ease-in-out`}
      />

      <div className="flex items-center gap-4 z-10">
        <div className={`transform transition-all duration-300 ease-in-out ${isHovered ? 'scale-110 rotate-12' : ''}`}>
          <Icon className="w-6 h-6 text-white/80 group-hover:text-white transition-colors duration-300" />
        </div>
        <span className="text-xl text-white/80 font-medium tracking-wide group-hover:text-white transition-colors duration-300">
          {label}
        </span>
      </div>

      {/* Animated arrow */}
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
  return (
    <div className="container mx-auto px-4 py-32" id="contact">
      <div className="max-w-4xl mx-auto">
        {/* Header with gradient text */}
        <div className="text-center mb-20">
          <h2 className="text-6xl font-bold mb-4 tracking-tight">
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
              Let's Connect
            </span>
          </h2>
          <p className="text-xl text-white/60 font-light">
            Reach out to me via email or social media. I'd love to hear from you!
          </p>
        </div>

        {/* Contact links grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <ContactLink
            href="https://www.linkedin.com/in/navpreetsinghcs"
            icon={Linkedin}
            label="LinkedIn"
          />
          <ContactLink
            href="https://github.com/20ns"
            icon={Github}
            label="GitHub"
          />
          <ContactLink
            href="mailto:ns.2004@outlook.com"
            icon={Mail}
            label="Email"
          />
        </div>

        {/* Footer */}
        <div className="mt-24 text-center">
          <p className="text-white/30 text-sm">
            © 2025 Navpreet Singh
          </p>
        </div>
      </div>
    </div>
  );
};

export default Contact;