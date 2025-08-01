'use client';
import Link from 'next/link';

const Header = () => {
  return (
    <>
      <header className="sticky top-0 z-50 bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-32">
            {/* Logo/Title */}
            <div className="flex-shrink-0 -ml-32">
              <Link href="/" className="text-4xl md:text-4xl font-bold text-gray-800 hover:text-gray-600 transition-colors font-bebas">
                WOODLAND MANOR
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
                className="text-gray-700 hover:text-gray-900 focus:outline-none focus:text-gray-900"
                aria-label="Toggle menu"
              >
                <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;