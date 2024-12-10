import React from 'react';
import { Menu, X, Github, Linkedin, Mail } from 'lucide-react';

export function Navbar() {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <nav className="fixed w-full bg-gray-900/90 backdrop-blur-sm z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <span className="text-xl font-bold">Max Jacobsson</span>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <a href="#about" className="hover:text-blue-600">About</a>
            <a href="#skills" className="hover:text-blue-600">Skills</a>
            <a href="#portfolio" className="hover:text-blue-600">Portfolio</a>
            <a href="#references" className="hover:text-blue-600">References</a>
            <a href="#contact" className="hover:text-blue-600">Contact</a>
          </div>

          <div className="hidden md:flex items-center space-x-4">
            <a href="https://github.com" className="text-gray-600 hover:text-blue-600">
              <Github className="h-5 w-5" />
            </a>
            <a href="https://linkedin.com" className="text-gray-600 hover:text-blue-600">
              <Linkedin className="h-5 w-5" />
            </a>
            <a href="mailto:max.jacobsson1999@hotmail.com" className="text-gray-600 hover:text-blue-600">
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

      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <a href="#about" className="block px-3 py-2 hover:bg-gray-50">About</a>
            <a href="#skills" className="block px-3 py-2 hover:bg-gray-50">Skills</a>
            <a href="#portfolio" className="block px-3 py-2 hover:bg-gray-50">Portfolio</a>
            <a href="#references" className="block px-3 py-2 hover:bg-gray-50">References</a>
            <a href="#contact" className="block px-3 py-2 hover:bg-gray-50">Contact</a>
          </div>
        </div>
      )}
    </nav>
  );
}