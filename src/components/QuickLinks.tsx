'use client';
import Link from 'next/link';
import { FileText, Users, HelpCircle, Calendar } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';

const QuickLinks = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    const currentRef = sectionRef.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, []);

  const links = [
    {
      title: 'Documents',
      href: '/downloads',
      icon: FileText,
      description: 'Access community forms, bylaws, and important documents'
    },
    {
      title: 'Board',
      href: '/board',
      icon: Users,
      description: 'Meet your HOA board members and leadership team'
    },
    {
      title: 'FAQ&apos;s',
      href: '/faq',
      icon: HelpCircle,
      description: 'Find answers to common community questions'
    },
    {
      title: 'Calendar',
      href: '/calendar',
      icon: Calendar,
      description: 'View upcoming events and important dates'
    }
  ];

  return (
    <section ref={sectionRef} className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            <span style={{ fontFamily: 'Bebas Neue, cursive' }}>
              Quick Links
            </span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Access important community resources and information
          </p>
        </div>

        <div 
          className={`grid grid-cols-2 gap-6 sm:gap-8 lg:gap-12 transition-all duration-1000 ${
            isVisible 
              ? 'opacity-100 translate-y-0' 
              : 'opacity-0 translate-y-10'
          }`}
        >
          {links.map((link) => (
            <Link
              key={link.title}
              href={link.href}
              className="group block bg-white rounded-xl p-6 sm:p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100"
            >
              <div className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gray-100 rounded-full mb-4 group-hover:bg-gray-800 transition-colors duration-300">
                  <link.icon className="w-8 h-8 text-gray-600 group-hover:text-white transition-colors duration-300" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-gray-700 transition-colors">
                  {link.title}
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  {link.description}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default QuickLinks;