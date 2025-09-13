'use client';

import { useState } from 'react';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleSearch = () => {
    setIsSearchOpen(!isSearchOpen);
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <nav className="bg-[#F5F3F0] px-4 sm:px-6 lg:px-8 py-4">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center justify-between">
          {/* Logo with Comb Icon */}
          <div className="flex-shrink-0 flex items-center space-x-3">
            <div className="w-10 h-10 bg-[#E9499B] rounded-full flex items-center justify-center">
              <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M3 4h18v2H3V4zm0 4h18v2H3V8zm0 4h18v2H3v-2zm0 4h18v2H3v-2z"/>
              </svg>
            </div>
            <h1 className="text-2xl font-bold text-black tracking-wide">
              <span className="text-[#E9499B]">Book</span> Ur <span className="italic">Look</span>
            </h1>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8 flex-1 justify-center">
            {/* Search Bar - Expandable */}
            <div className={`relative transition-all duration-300 ${isSearchOpen ? 'flex-1 max-w-md' : 'w-0 overflow-hidden'}`}>
              <input
                type="text"
                placeholder="Search Your City/Service"
                className="w-full px-4 py-3 bg-white border border-gray-200 rounded-lg outline-none text-black placeholder-gray-500 shadow-sm"
              />
            </div>
          </div>

          {/* Desktop Menu Items */}
          <div className="hidden md:flex items-center space-x-6">
            <button onClick={toggleSearch} className="text-black hover:text-gray-700 transition-colors">
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </button>
            <button className="text-black hover:text-gray-700 transition-colors">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                <path d="M3 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 16a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" />
              </svg>
            </button>
          </div>

          {/* Mobile Navigation */}
          <div className="md:hidden flex items-center space-x-4">
            {/* Mobile Search Button */}
            <button onClick={toggleSearch} className="text-black hover:text-gray-700 transition-colors">
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </button>
            
            {/* Mobile menu button */}
            <button
              onClick={toggleMenu}
              className="text-black hover:text-gray-700 focus:outline-none focus:text-gray-700"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {isMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Search Input */}
        {isSearchOpen && (
          <div className="md:hidden mt-4">
            <div className="relative">
              <input
                type="text"
                placeholder="Search Your City/Service"
                className="w-full px-4 py-3 bg-white border border-gray-200 rounded-lg outline-none text-black placeholder-gray-500 shadow-sm"
              />
            </div>
          </div>
        )}

        {/* Mobile Navigation Menu Overlay */}
        {isMenuOpen && (
          <div className="md:hidden fixed inset-0 z-50 bg-[#F5F3F0]">
            {/* Close Button */}
            <div className="flex justify-end p-6">
              <button
                onClick={toggleMenu}
                className="text-black hover:text-gray-700 focus:outline-none"
              >
                <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            {/* Menu Items */}
            <div className="flex flex-col items-center justify-center h-full px-6">
              <nav className="space-y-6 w-full max-w-sm">
                <button
                  className="block text-center text-black font-medium text-lg hover:text-gray-700 transition-colors w-full"
                  onClick={() => scrollToSection('hero')}
                >
                  Home
                </button>
                <div className="w-20 h-px bg-gray-400 mx-auto"></div>
                
                <button
                  className="block text-center text-black font-medium text-lg hover:text-gray-700 transition-colors w-full"
                  onClick={() => scrollToSection('service-images')}
                >
                  Welcome
                </button>
                <div className="w-20 h-px bg-gray-400 mx-auto"></div>
                
                <button
                  className="block text-center text-black font-medium text-lg hover:text-gray-700 transition-colors w-full"
                  onClick={() => scrollToSection('artists')}
                >
                  Featured Artists
                </button>
                <div className="w-20 h-px bg-gray-400 mx-auto"></div>
                
                <button
                  className="block text-center text-black font-medium text-lg hover:text-gray-700 transition-colors w-full"
                  onClick={() => scrollToSection('our-story')}
                >
                  About Us
                </button>
                <div className="w-20 h-px bg-gray-400 mx-auto"></div>
                
                <button
                  className="block text-center text-black font-medium text-lg hover:text-gray-700 transition-colors w-full"
                  onClick={() => scrollToSection('services')}
                >
                  Services
                </button>
                <div className="w-20 h-px bg-gray-400 mx-auto"></div>
                
                <button
                  className="block text-center text-black font-medium text-lg hover:text-gray-700 transition-colors w-full"
                  onClick={() => scrollToSection('hero')}
                >
                  Book Online
                </button>
                <div className="w-20 h-px bg-gray-400 mx-auto"></div>
                
                <button
                  className="block text-center text-black font-medium text-lg hover:text-gray-700 transition-colors w-full"
                  onClick={() => scrollToSection('services')}
                >
                  Search Results
                </button>
                <div className="w-20 h-px bg-gray-400 mx-auto"></div>
                
                <button
                  className="block text-center text-black font-medium text-lg hover:text-gray-700 transition-colors w-full"
                  onClick={() => scrollToSection('footer')}
                >
                  Contact
                </button>
              </nav>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
