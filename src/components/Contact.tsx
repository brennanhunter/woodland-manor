'use client';
import React from 'react';
import Image from 'next/image';
import { Mail, Phone, MapPin, User } from 'lucide-react';

const Contact: React.FC = () => {

  return (
    <section className="relative min-h-screen bg-woodland-cream">
      {/* Hero Background Image */}
      <div className="absolute inset-0 z-0">
        <Image 
          src="/images/WoodlandManorClubhouse.png" 
          alt="Woodland Manor Clubhouse" 
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-woodland-cream/80 via-woodland-cream/40 to-transparent"></div>
      </div>

      <div className="relative z-10 container mx-auto px-4 py-20">
        <div className="max-w-4xl mx-auto">
          
          {/* Contact Information */}
          <div className="space-y-8">

            {/* Contact Cards */}
            <div className="space-y-6">
              {/* President Contact */}
              <div className="bg-woodland-cream/20 backdrop-blur-sm border border-woodland-primary/20 rounded-xl shadow-lg p-6">
                <div className="flex items-start space-x-4">
                  <div className="bg-woodland-primary text-white p-3 rounded-full">
                    <User className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-woodland-primary mb-2">President</h3>
                    <p className="font-semibold text-gray-800 mb-1">Lisa Cummings</p>
                    <div className="space-y-1">
                      <a href="tel:802-324-8027" className="flex items-center text-woodland-secondary hover:text-woodland-primary transition-colors">
                        <Phone className="w-4 h-4 mr-2" />
                        (802) 324-8027
                      </a>
                      <a href="mailto:woodlandhoa1973@gmail.com" className="flex items-center text-woodland-secondary hover:text-woodland-primary transition-colors">
                        <Mail className="w-4 h-4 mr-2" />
                        woodlandhoa1973@gmail.com
                      </a>
                    </div>
                    <p className="text-sm text-gray-600 mt-2">
                      Contact for violations or governing documents
                    </p>
                  </div>
                </div>
              </div>

              {/* Vice President */}
              <div className="bg-woodland-cream/20 backdrop-blur-sm border border-woodland-primary/20 rounded-xl shadow-lg p-6">
                <div className="flex items-start space-x-4">
                  <div className="bg-woodland-accent text-white p-3 rounded-full">
                    <User className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-woodland-primary mb-2">Vice President</h3>
                    <p className="font-semibold text-gray-800 mb-1">Vacant</p>
                    <p className="text-sm text-gray-600 mt-2">
                      This position is currently vacant.
                    </p>
                  </div>
                </div>
              </div>

              {/* Community Address */}
              <div className="bg-woodland-cream/20 backdrop-blur-sm border border-woodland-primary/20 rounded-xl shadow-lg p-6">
                <div className="flex items-start space-x-4">
                  <div className="bg-woodland-forest text-white p-3 rounded-full">
                    <MapPin className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-woodland-primary mb-2">Clubhouse</h3>
                    <div className="text-gray-700">
                      <p>4119 Woodland Circle</p>
                      <p>DeLand, FL 32724</p>
                    </div>
                    <p className="text-sm text-gray-600 mt-2">
                      Monthly meetings: Second Monday at 6:30 PM
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Quick Contact Bar */}
        <div className="mt-16 bg-woodland-cream/20 backdrop-blur-sm border border-woodland-primary/20 rounded-xl shadow-lg p-6">
          <div className="text-center mb-4">
            <h3 className="text-xl font-bold text-woodland-primary mb-2">Quick Contact</h3>
            <p className="text-gray-600">Need immediate assistance? Reach out directly:</p>
          </div>
          
          <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-8">
            <a 
              href="tel:802-324-8027" 
              className="flex items-center space-x-2 bg-woodland-primary hover:bg-woodland-secondary text-white px-6 py-3 rounded-lg transition-colors duration-200"
            >
              <Phone className="w-5 h-5" />
              <span>Call President: (802) 324-8027</span>
            </a>
            
            <a 
              href="mailto:woodlandhoa1973@gmail.com" 
              className="flex items-center space-x-2 bg-woodland-accent hover:bg-woodland-primary text-white px-6 py-3 rounded-lg transition-colors duration-200"
            >
              <Mail className="w-5 h-5" />
              <span>Email President</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
