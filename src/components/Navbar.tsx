import React from 'react';
import { Menu, X, Github, Linkedin, Mail } from 'lucide-react';

export function Navbar() {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <nav className="fixed w-full bg-gray-900/90 backdrop-blur-sm z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <span className="text-xl font-bold text-white">Max Jacobsson</span>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <a href="#about" className= "text-white hover:text-gray-400">About</a>
            <a href="#skills" className="text-white hover:text-">Skills</a>
            <a href="#portfolio" className="text-white hover:text-blue-600">Portfolio</a>
            <a href="#references" className="text-white hover:text-blue-600">References</a>
            <a href="#contact" className="text-white hover:text-blue-600">Contact</a>
          </div>

          <div className="hidden md:flex items-center space-x-4">
            <a href="https://github.com/elmaxco" className="text-gray-400 hover:text-white">
              <Github className="h-5 w-5" />
            </a>
            <a href="https://www.linkedin.com/in/max-jacobsson-62236313b/" className="text-gray-400 hover:text-white">
              <Linkedin className="h-5 w-5" />
            </a>
            <a href="mailto:max.jacobsson1999@hotmail.com" className="text-gray-400 hover:text-white">
              <Mail className="h-5 w-5" />
            </a>
          </div>

          <div className="md:hidden flex items-center">
            <button onClick={() => setIsOpen(!isOpen)} className="text-gray-600">
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>    
    
    </nav>
  );
}