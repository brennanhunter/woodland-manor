'use client';
import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

interface FAQItem {
  id: number;
  question: string;
  answer: string;
}

const FAQ: React.FC = () => {
  const [openItems, setOpenItems] = useState<Set<number>>(new Set());

  const toggleItem = (id: number): void => {
    const newOpenItems = new Set(openItems);
    if (newOpenItems.has(id)) {
      newOpenItems.delete(id);
    } else {
      newOpenItems.add(id);
    }
    setOpenItems(newOpenItems);
  };

  const faqData: FAQItem[] = [
    {
      id: 1,
      question: "What are the annual community fees?",
  answer: "The annual HOA fee is $75 per year, due on January 1st. Late fees may be incurred if payment is not received on time. This fee covers clubhouse maintenance, street lights, clubhouse utilities, lawyers fees, and mailings."
    },
    {
      id: 2,
      question: "What are the community rules and regulations?",
      answer: "You can view our complete community rules and regulations in the governing documents."
    },
    {
      id: 3,
      question: "How do I pay my annual fees?",
      answer: "You can pay by mailing a check (payable to Woodland Mobile Home Association Inc.) to 4119 Woodland Circle, DeLand, FL 32724, or contact Treasurer Mary Hatmaker at (386) 450-8718 to arrange payment directly."
    },
    {
      id: 6,
      question: "What is the guest and visitor policy?",
      answer: "Guests and visitors must follow the governing documents. Please refer to our community governing documents for detailed guest and visitor policies."
    },
    {
      id: 7,
      question: "Are pets allowed in the community?",
      answer: "Yes, pets are allowed in the community. Please refer to the governing documents for any specific pet regulations and requirements."
    },
    {
      id: 8,
      question: "How do I sign up to volunteer in our community?",
      answer: "We welcome volunteers! Whether you have a few hours to spare or want to take on a larger role, there are many ways to contribute to our community. Your involvement helps make Woodland Manor the wonderful place we all call home. Contact our President, Lisa Cummings, or our Volunteer Coordinator, Sandi Passante (610-563-4998) to learn about current opportunities."
    },
    {
      id: 10,
      question: "As an owner, who do I contact to use the clubhouse?",
      answer: "To use the clubhouse, contact Lisa Cummings, the President, at (802) 324-8027, or Mark Rice at (386) 717-7110."
    },
    {
      id: 9,
      question: "What should I do in case of an emergency?",
      answer: "Emergency contact information"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-woodland-cream to-yellow-300 relative py-20 px-4">
      {/* Background overlay */}
      <div className="absolute inset-0 woodland-nature-orbs opacity-60"></div>

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Header Section */}
        <div className="text-center mb-16">
          <h1 className="text-woodland-primary text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 woodland-title">
            FREQUENTLY ASKED QUESTIONS
          </h1>
          <div className="mb-8">
            <Image 
              src="/images/FAQImage.png" 
              alt="FAQ Illustration"
              width={256}
              height={192}
              className="mx-auto drop-shadow-lg"
              priority
            />
          </div>
          <p className="text-gray-700 text-xl max-w-2xl mx-auto mb-8 leading-relaxed">
            Find answers to the most commonly asked questions about our community, 
            policies, and services. If you don&apos;t find what you&apos;re looking for, 
            feel free to contact our office.
          </p>
        </div>

        {/* FAQ Items */}
        <div className="woodland-glass-card p-8 mb-12">
          {faqData.map((item) => (
            <div 
              key={item.id} 
              className="border border-white/20 rounded-2xl mb-4 overflow-hidden bg-white/70 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:border-woodland-primary/30"
            >
              <button
                onClick={() => toggleItem(item.id)}
                className="w-full p-6 text-left bg-transparent border-none cursor-pointer flex items-center justify-between transition-all duration-300 hover:bg-woodland-primary/5"
              >
                <h3 className="text-xl font-semibold text-slate-800 mr-4 leading-relaxed">
                  {item.question}
                </h3>
                <div className={`w-6 h-6 text-woodland-primary transition-transform duration-300 ${openItems.has(item.id) ? 'rotate-180' : ''}`}>
                  <ChevronDown />
                </div>
              </button>
              
              {openItems.has(item.id) && (
                <div className="px-6 pb-6 bg-stone-50/80 border-t border-white/30">
                  {item.id === 9 ? (
                    <div className="text-gray-600 leading-relaxed text-lg">
                      <p className="mb-4">For immediate life-threatening emergencies, call <strong>911</strong>.</p>
                      <p className="mb-4">For non-emergency situations, contact the appropriate local authorities:</p>
                      
                      <div className="space-y-4">
                        <div>
                          <h4 className="font-semibold text-gray-800 mb-2">🚓 Law Enforcement:</h4>
                          <ul className="ml-4 space-y-1">
                            <li>• DeLand Police Department (Non-Emergency): (386) 943-8276</li>
                            <li>• Volusia County Sheriff&apos;s Office - West Volusia: (386) 943-8276</li>
                          </ul>
                        </div>
                        
                        <div>
                          <h4 className="font-semibold text-gray-800 mb-2">🚒 Fire & Rescue:</h4>
                          <ul className="ml-4 space-y-1">
                            <li>• DeLand Fire Department (Non-Emergency): (386) 943-8276</li>
                          </ul>
                        </div>
                        
                        <div>
                          <h4 className="font-semibold text-gray-800 mb-2">🚑 Medical & Health Services:</h4>
                          <ul className="ml-4 space-y-1">
                            <li>• Florida Department of Health in Volusia County: (386) 822-6215</li>
                            <li>• Special Needs Shelter Registration: (866) 345-0345</li>
                          </ul>
                        </div>
                        
                        <div>
                          <h4 className="font-semibold text-gray-800 mb-2">🛣️ Road & Debris Management:</h4>
                          <ul className="ml-4 space-y-1">
                            <li>• DeLand Public Works: (386) 626-7190 (Mon-Fri, 8 AM-5 PM), After hours: (386) 626-7251</li>
                            <li>• Volusia County Road & Bridge: (386) 822-6422</li>
                            <li>• Florida Department of Transportation: (386) 740-3400</li>
                          </ul>
                        </div>
                        
                        <div>
                          <h4 className="font-semibold text-gray-800 mb-2">🏠 Shelter & Evacuation:</h4>
                          <ul className="ml-4 space-y-1">
                            <li>• Votran Transportation: West Volusia (386) 943-7050</li>
                            <li>• Volusia County School Board: West Volusia (386) 734-7190</li>
                          </ul>
                        </div>
                        
                        <div>
                          <h4 className="font-semibold text-gray-800 mb-2">🐾 Animal Services:</h4>
                          <ul className="ml-4 space-y-1">
                            <li>• Volusia County Animal Control: (386) 740-5241</li>
                          </ul>
                        </div>
                        
                        <div>
                          <h4 className="font-semibold text-gray-800 mb-2">🌪️ Disaster & Emergency Management:</h4>
                          <ul className="ml-4 space-y-1">
                            <li>• Volusia County Emergency Management: (386) 736-2700</li>
                            <li>• Emergency Operations Center: (386) 258-4088</li>
                            <li>• Citizens Information Center: (866) 345-0345</li>
                          </ul>
                        </div>
                        
                        <div>
                          <h4 className="font-semibold text-gray-800 mb-2">📱 Emergency Alerts:</h4>
                          <ul className="ml-4 space-y-1">
                            <li>• AlertVolusia: Sign up at volusia.org/alerts or call (386) 258-4088</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  ) : item.id === 2 ? (
                    <div className="text-gray-600 leading-relaxed text-lg">
                      <p className="mb-4">{item.answer}</p>
                      <div className="flex flex-wrap gap-4">
                        <Link 
                          href="/documents/Covenants-merged.pdf" 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="inline-flex items-center px-4 py-2 bg-woodland-primary text-white rounded-lg font-semibold transition-all duration-300 hover:bg-woodland-primary/80 hover:-translate-y-1"
                        >
                          📄 View Governing Documents
                        </Link>
                        <Link 
                          href="/documents/Rules.pdf" 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="inline-flex items-center px-4 py-2 bg-white text-woodland-primary border border-woodland-primary/40 rounded-lg font-semibold transition-all duration-300 hover:bg-stone-100 hover:-translate-y-1"
                        >
                          📘 View Rules & Regulations
                        </Link>
                      </div>
                    </div>
                  ) : (
                    <p className="text-gray-600 leading-relaxed text-lg">
                      {item.answer}
                    </p>
                  )}
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Contact Section */}
        <div className="woodland-gradient-primary text-white rounded-3xl p-8 lg:p-12 text-center">
          <h3 className="text-3xl font-bold mb-4">Still have questions?</h3>
          <p className="text-xl mb-8 opacity-95 leading-relaxed">
            Our friendly staff is here to help! Contact our President during the day or send a message anytime.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <a 
              href="tel:802-324-8027" 
              className="flex-1 px-6 py-4 rounded-xl font-semibold text-white bg-white/20 border border-white/30 transition-all duration-300 hover:bg-white/30 hover:-translate-y-1 text-center"
            >
              Call Us: (802) 324-8027
            </a>
            <a 
              href="mailto:woodlandhoa1973@gmail.com" 
              className="flex-1 px-6 py-4 rounded-xl font-semibold text-woodland-primary bg-white border border-white transition-all duration-300 hover:bg-stone-50 hover:-translate-y-1 text-center"
            >
              Email Us
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQ;