import React, { useState, useEffect } from 'react';
import { Menu, X, Phone } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Services', href: '#services' },
    { name: 'Why Us', href: '#why-us' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-brand-dark shadow-lg py-0' : 'bg-brand-dark/95 py-2'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex-shrink-0 flex items-center">
            <a href="#home" className="text-xl sm:text-2xl font-bold tracking-tight text-white">
              Rajesh <span className="text-brand-accent">Lowanshi</span>
              <span className="block text-[10px] sm:text-xs font-normal text-gray-300 uppercase tracking-widest">Construction</span>
            </a>
          </div>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-gray-300 hover:text-brand-accent transition-colors duration-200 font-medium text-sm lg:text-base"
              >
                {link.name}
              </a>
            ))}
            <a
              href="#contact"
              className="bg-brand-accent hover:bg-orange-600 text-white px-5 py-2.5 rounded-md font-semibold transition-colors duration-200 flex items-center gap-2"
            >
              <Phone size={18} />
              Get Quote
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-300 hover:text-white focus:outline-none p-2"
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`md:hidden absolute w-full bg-brand-dark border-t border-gray-800 transition-all duration-300 ease-in-out origin-top ${isOpen ? 'scale-y-100 opacity-100' : 'scale-y-0 opacity-0 h-0'}`}>
        <div className="px-4 pt-2 pb-6 space-y-2 shadow-xl">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="block px-4 py-3 rounded-md text-base font-medium text-gray-300 hover:text-brand-accent hover:bg-gray-800 active:bg-gray-700 transition-colors"
            >
              {link.name}
            </a>
          ))}
          <a
            href="#contact"
            onClick={() => setIsOpen(false)}
            className="mt-4 w-full bg-brand-accent text-white px-4 py-3 rounded-md font-semibold flex items-center justify-center gap-2 active:bg-orange-600 transition-colors"
          >
            <Phone size={18} />
            Get Free Quote Now
          </a>
        </div>
      </div>
    </nav>
  );
}
