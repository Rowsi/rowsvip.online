import React from 'react';
import { Code2, Terminal, Menu, X } from 'lucide-react';
import { FaInstagram, FaYoutube, FaDiscord } from 'react-icons/fa';

export function Navbar() {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <nav className="fixed w-full bg-black/90 backdrop-blur-sm z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <img src="/path/to/logo.png" alt="Logo" className="h-8 w-8" />
            <span className="ml-2 text-white font-bold text-xl">ROWSVIP</span>
          </div>
          
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <a href="#services" className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors">Services</a>
              <a href="#tools" className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors">Tools</a>
              <a href="#contact" className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors">Contact</a>
              <a href="https://discord.com/users/607525313961787423" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors">Discord Profile</a>
            </div>
          </div>
          
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <a href="https://www.instagram.com/melwh.dev/" target="_blank" rel="noopener noreferrer">
                <FaInstagram className="w-6 h-6 text-white hover:text-gray-400" />
              </a>
              <a href="https://www.youtube.com/@rows0131" target="_blank" rel="noopener noreferrer">
                <FaYoutube className="w-6 h-6 text-white hover:text-gray-400" />
              </a>
              <a href="https://discord.gg/dcshop" target="_blank" rel="noopener noreferrer">
                <FaDiscord className="w-6 h-6 text-white hover:text-gray-400" />
              </a>
            </div>
          </div>

          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-400 hover:text-white focus:outline-none"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <a href="#services" className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium">Services</a>
            <a href="#tools" className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium">Tools</a>
            <a href="#contact" className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium">Contact</a>
            <a href="https://discord.com/users/607525313961787423" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium">Discord Profile</a>
            <a href="https://www.instagram.com/melwh.dev/" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium">
              <FaInstagram className="w-6 h-6 text-white hover:text-gray-400" />
            </a>
            <a href="https://www.youtube.com/@rows0131" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium">
              <FaYoutube className="w-6 h-6 text-white hover:text-gray-400" />
            </a>
            <a href="https://discord.gg/dcshop" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium">
              <FaDiscord className="w-6 h-6 text-white hover:text-gray-400" />
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}