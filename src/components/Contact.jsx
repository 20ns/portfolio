import React from 'react';

const Contact = () => {
  return (
    <div className="container mx-auto px-4 py-20" id="contact">
      <h2 className="text-3xl font-bold mb-8">Contact</h2>
      <div className="flex justify-center space-x-6">
        <a
          href="https://www.linkedin.com/in/navpreetsinghcs" 
          target="_blank"
          rel="noopener noreferrer"
          className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 px-6 rounded-full transition duration-300"
        >
          LinkedIn
        </a>
        <a
          href="https://github.com/20ns"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-gray-800 hover:bg-gray-900 text-white font-bold py-3 px-6 rounded-full transition duration-300"
        >
          GitHub
        </a>
        <a
          href="mailto:ns.2004@outlook.com"
          className="bg-green-500 hover:bg-green-600 text-white font-bold py-3 px-6 rounded-full transition duration-300"
        >
          Email
        </a>
      </div>
    </div>
  );
};

export default Contact;