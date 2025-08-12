'use client';
import React, { useState } from 'react';
import Image from 'next/image';
import { Mail, Phone, MapPin, Send, User, MessageSquare } from 'lucide-react';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Formspree integration will be added later
    console.log('Form submitted:', formData);
    alert('Thank you for your message! We will get back to you soon.');
    setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
  };

  return (
    <section className="relative min-h-screen bg-woodland-cream">
      {/* Hero Background Image */}
      <div className="absolute inset-0 z-0">
        <Image 
          src="/images/woodland-plants.webp" 
          alt="Woodland Plants" 
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-woodland-cream/80 via-woodland-cream/40 to-transparent"></div>
      </div>

      <div className="relative z-10 container mx-auto px-4 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          
          {/* Left Side - Contact Information */}
          <div className="space-y-8 lg:mt-16">

            {/* Contact Cards */}
            <div className="space-y-6">
              {/* President Contact */}
              <div className="woodland-glass-card p-6">
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
                      <a href="mailto:lmurray39@gmail.com" className="flex items-center text-woodland-secondary hover:text-woodland-primary transition-colors">
                        <Mail className="w-4 h-4 mr-2" />
                        lmurray39@gmail.com
                      </a>
                    </div>
                    <p className="text-sm text-gray-600 mt-2">
                      Contact for violations or governing documents
                    </p>
                  </div>
                </div>
              </div>

              {/* Vice President */}
              <div className="woodland-glass-card p-6">
                <div className="flex items-start space-x-4">
                  <div className="bg-woodland-accent text-white p-3 rounded-full">
                    <User className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-woodland-primary mb-2">Vice President</h3>
                    <p className="font-semibold text-gray-800 mb-1">Joanne Pinheiro</p>
                    <a href="tel:401-465-0528" className="flex items-center text-woodland-secondary hover:text-woodland-primary transition-colors">
                      <Phone className="w-4 h-4 mr-2" />
                      (401) 465-0528
                    </a>
                    <p className="text-sm text-gray-600 mt-2">
                      Contact for general board matters or assistance
                    </p>
                    <p className="text-sm text-gray-600 mt-1">
                      For deliveries requiring signatures, please deliver to Joanne Pinero, 4149 Woodland Cir, DeLand, FL 32724.
                    </p>
                  </div>
                </div>
              </div>

              {/* Community Address */}
              <div className="woodland-glass-card p-6">
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

          {/* Right Side - Contact Form */}
          <div className="lg:mt-16">
            <div className="woodland-glass-card p-8 max-w-lg ml-auto">
              <div className="text-center mb-6">
                <h2 className="text-2xl font-bold text-woodland-primary mb-2">Send Us a Message</h2>
                <p className="text-gray-600">We&apos;ll get back to you within 24-48 hours</p>
              </div>

              <form onSubmit={handleSubmit} action="https://formspree.io/f/tbd" method="POST" className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-woodland-primary focus:border-transparent transition-colors bg-white/90"
                      placeholder="Your Name"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-woodland-primary focus:border-transparent transition-colors bg-white/90"
                      placeholder="(123) 456-7890"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-woodland-primary focus:border-transparent transition-colors bg-white/90"
                    placeholder="your.email@example.com"
                  />
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                    Subject *
                  </label>
                  <select
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-woodland-primary focus:border-transparent transition-colors bg-white/90"
                  >
                    <option value="">Select a topic</option>
                    <option value="general">General Inquiry</option>
                    <option value="violations">HOA Violations</option>
                    <option value="volunteer">Volunteer Opportunities</option>
                    <option value="meetings">Board Meetings</option>
                    <option value="maintenance">Maintenance Request</option>
                    <option value="documents">Governing Documents</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={5}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-woodland-primary focus:border-transparent transition-colors bg-white/90 resize-none"
                    placeholder="Please describe your inquiry or concern in detail..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-woodland-primary hover:bg-woodland-secondary text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-200 flex items-center justify-center space-x-2"
                >
                  <Send className="w-5 h-5" />
                  <span>Send Message</span>
                </button>

                <p className="text-xs text-gray-500 text-center">
                  By submitting this form, you agree to be contacted regarding your inquiry.
                </p>
              </form>
            </div>
          </div>
        </div>

        {/* Quick Contact Bar */}
        <div className="mt-16 woodland-glass-card p-6">
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
              href="mailto:lmurray39@gmail.com" 
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
