'use client';
import Link from 'next/link';
import { useState } from 'react';
import Image from 'next/image';

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      <header className="sticky top-0 z-50 bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-32">
            {/* Logo/Title */}
            <div className="flex-shrink-0">
              <Link href="/" className="flex items-center">
                <div className="relative w-32 h-32 mr-3">
                  <Image
                    src="/images/logo.png"
                    alt="Woodland Manor Logo"
                    fill
                    style={{ objectFit: 'contain' }}
                    priority
                    quality={90}
                  />
                </div>
                <span className="text-2xl md:text-3xl font-bold text-gray-800 hover:text-gray-600 transition-colors font-bebas">
                  WOODLAND MANOR
                </span>
              </Link>
            </div>

            {/* Navigation */}
            <nav className="hidden md:flex space-x-8">
              <Link href="/" className="text-gray-700 hover:text-gray-900 px-3 py-2 text-lg font-medium transition-colors">
                Home
              </Link>
              <Link href="/about" className="text-gray-700 hover:text-gray-900 px-3 py-2 text-lg font-medium transition-colors">
                About
              </Link>
              <Link href="/board" className="text-gray-700 hover:text-gray-900 px-3 py-2 text-lg font-medium transition-colors">
                Board
              </Link>
              <Link href="/faq" className="text-gray-700 hover:text-gray-900 px-3 py-2 text-lg font-medium transition-colors">
                FAQ
              </Link>
              <Link href="/downloads" className="text-gray-700 hover:text-gray-900 px-3 py-2 text-lg font-medium transition-colors">
                Downloads
              </Link>
              <Link href="/calendar" className="text-gray-700 hover:text-gray-900 px-3 py-2 text-lg font-medium transition-colors">
                Calendar
              </Link>
              <Link href="/contact" className="text-gray-700 hover:text-gray-900 px-3 py-2 text-lg font-medium transition-colors">
                Contact
              </Link>
            </nav>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                type="button"
                onClick={toggleMobileMenu}
                className="text-gray-700 hover:text-gray-900 focus:outline-none focus:text-gray-900 transition-colors"
                aria-label="Toggle menu"
                aria-expanded={isMobileMenuOpen}
              >
                {isMobileMenuOpen ? (
                  <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                ) : (
                  <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                  </svg>
                )}
              </button>
            </div>
          </div>

          {/* Mobile Navigation Menu */}
          {isMobileMenuOpen && (
            <div className="md:hidden absolute top-full left-0 right-0 bg-white shadow-lg border-t border-gray-200 z-50">
              <nav className="py-2">
                <Link 
                  href="/" 
                  onClick={closeMobileMenu}
                  className="block px-4 py-3 text-gray-700 hover:text-gray-900 hover:bg-gray-50 transition-colors font-medium"
                >
                  Home
                </Link>
                <Link 
                  href="/about" 
                  onClick={closeMobileMenu}
                  className="block px-4 py-3 text-gray-700 hover:text-gray-900 hover:bg-gray-50 transition-colors font-medium"
                >
                  About
                </Link>
                <Link 
                  href="/board" 
                  onClick={closeMobileMenu}
                  className="block px-4 py-3 text-gray-700 hover:text-gray-900 hover:bg-gray-50 transition-colors font-medium"
                >
                  Board
                </Link>
                <Link 
                  href="/faq" 
                  onClick={closeMobileMenu}
                  className="block px-4 py-3 text-gray-700 hover:text-gray-900 hover:bg-gray-50 transition-colors font-medium"
                >
                  FAQ
                </Link>
                <Link 
                  href="/downloads" 
                  onClick={closeMobileMenu}
                  className="block px-4 py-3 text-gray-700 hover:text-gray-900 hover:bg-gray-50 transition-colors font-medium"
                >
                  Downloads
                </Link>
                <Link 
                  href="/calendar" 
                  onClick={closeMobileMenu}
                  className="block px-4 py-3 text-gray-700 hover:text-gray-900 hover:bg-gray-50 transition-colors font-medium"
                >
                  Calendar
                </Link>
                <Link 
                  href="/contact" 
                  onClick={closeMobileMenu}
                  className="block px-4 py-3 text-gray-700 hover:text-gray-900 hover:bg-gray-50 transition-colors font-medium"
                >
                  Contact
                </Link>
              </nav>
            </div>
          )}
        </div>
      </header>
    </>
  );
};

export default Header;