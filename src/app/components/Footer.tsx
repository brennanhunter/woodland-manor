'use client';
import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Logo/Title Section */}
          <div>
            <h3 className="text-2xl font-bold mb-4">
              <span style={{ fontFamily: 'Bebas Neue, cursive' }}>
                WOODLAND MANOR
              </span>
            </h3>
            <p className="text-gray-400 leading-relaxed">
              Your premier community in the heart of DeLand, Florida. Where neighbors become family.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <nav className="space-y-2">
              <Link href="/" className="block text-gray-400 hover:text-white transition-colors">
                Home
              </Link>
              <Link href="/about" className="block text-gray-400 hover:text-white transition-colors">
                About
              </Link>
              <Link href="/board" className="block text-gray-400 hover:text-white transition-colors">
                Board
              </Link>
              <Link href="/faq" className="block text-gray-400 hover:text-white transition-colors">
                FAQ
              </Link>
              <Link href="/downloads" className="block text-gray-400 hover:text-white transition-colors">
                Downloads
              </Link>
              <Link href="/calendar" className="block text-gray-400 hover:text-white transition-colors">
                Calendar
              </Link>
              <Link href="/contact" className="block text-gray-400 hover:text-white transition-colors">
                Contact
              </Link>
            </nav>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact</h4>
            <div className="space-y-3 text-gray-400 text-sm">
              <div>
                <p className="font-medium text-white mb-1">President - Lisa Cummings</p>
                <p>
                  <a href="tel:802-324-8027" className="text-blue-400 hover:text-blue-300 transition-colors">
                    802-324-8027
                  </a>
                </p>
                <p>
                  <a href="mailto:lmurray39@gmail.com" className="text-blue-400 hover:text-blue-300 transition-colors">
                    lmurray39@gmail.com
                  </a>
                </p>
              </div>
              
              <div>
                <p className="font-medium text-white mb-1">Vice President - Joanne Pinheiro</p>
                <p>
                  <a href="tel:401-465-0528" className="text-blue-400 hover:text-blue-300 transition-colors">
                    401-465-0528
                  </a>
                </p>
                <p>
                  <a href="tel:386-507-5995" className="text-blue-400 hover:text-blue-300 transition-colors">
                    386-507-5995
                  </a>
                </p>
              </div>

              <div>
                <p className="font-medium text-white mb-1">Treasurer - Mary Hatmaker</p>
                <p>
                  <a href="tel:386-450-8718" className="text-blue-400 hover:text-blue-300 transition-colors">
                    386-450-8718
                  </a>
                </p>
              </div>

              <div className="pt-2 border-t border-gray-700">
                <p className="text-xs text-gray-500">Mailing Address:</p>
                <p>4119 Woodland Circle<br />DeLand, FL 32724</p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section with Signature */}
        <div className="border-t border-gray-800 pt-8 mt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-400 text-sm">
              © {new Date().getFullYear()} Woodland Manor HOA. All rights reserved.
            </p>
            
            {/* Your Signature */}
            <div className="space-y-1 text-gray-400 text-center md:text-right">
              <p className="text-xs">
                <a
                  href="https://xtremery.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block bg-gradient-to-r from-purple-500 via-pink-500 to-blue-500 bg-clip-text text-transparent animate-pulse hover:animate-shimmer"
                >
                  Deland designed an pixel-polished by Xtremery · Deland, FL
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;