'use client';
import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import Image from 'next/image';

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
      question: "What are the community rules and regulations?",
      answer: "Our community has established guidelines to ensure a peaceful and enjoyable living environment for all residents. These include quiet hours from 10 PM to 8 AM, proper maintenance of your property, parking regulations, and pet policies. A complete copy of our community rules is available at the office and online."
    },
    {
      id: 2,
      question: "How do I pay my monthly fees?",
      answer: "Monthly fees can be paid through several convenient methods: online through our resident portal, by mail with a check, automatic bank draft, or in person at the community office during business hours. We also accept major credit cards for online payments."
    },
    {
      id: 3,
      question: "What amenities are included in the community?",
      answer: "Woodland Manor offers a variety of amenities including a community clubhouse, swimming pool, fitness center, walking trails, playground area, and community gardens. We also have regular social events and activities organized by our resident committee."
    },
    {
      id: 4,
      question: "How do I report maintenance issues?",
      answer: "Maintenance requests can be submitted online through our resident portal, by calling our maintenance hotline, or by visiting the office in person. For emergency repairs, please call our 24-hour emergency line. Non-emergency requests are typically addressed within 24-48 hours."
    },
    {
      id: 5,
      question: "What is the guest and visitor policy?",
      answer: "Guests are welcome in our community. Visitors staying longer than 14 days must be registered with the office. All guests must follow community rules and residents are responsible for their guests' conduct. Temporary parking passes are available for guest vehicles."
    },
    {
      id: 6,
      question: "Are pets allowed in the community?",
      answer: "Yes, we are a pet-friendly community. We allow up to 2 pets per household with some breed restrictions. All pets must be registered, vaccinated, and leashed when outside. There is a one-time pet registration fee and monthly pet rent. Please see the office for our complete pet policy."
    },
    {
      id: 7,
      question: "How can I get involved in community activities?",
      answer: "We encourage resident participation! You can join our resident committee, volunteer for community events, participate in our social activities, or start your own interest group. Check our community bulletin board and newsletter for upcoming events and volunteer opportunities."
    },
    {
      id: 8,
      question: "What should I do in case of an emergency?",
      answer: "For life-threatening emergencies, always call 911 first. For community-related emergencies like water leaks, electrical issues, or security concerns, call our 24-hour emergency line. We also have emergency procedures posted in the clubhouse and available online."
    }
  ];

  return (
    <div className="min-h-screen bg-white py-12 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Header Section with Image */}
        <div className="text-center mb-12">
          <div className="mb-8">
            <Image 
              src="/images/FAQImage.png" 
              alt="FAQ Illustration"
              width={256}
              height={192}
              className="mx-auto"
              priority
            />
          </div>
          
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Find answers to the most commonly asked questions about our community, 
            policies, and services. If you don't find what you're looking for, 
            feel free to contact our office.
          </p>
        </div>

        {/* FAQ Items */}
        <div className="space-y-4">
          {faqData.map((item) => (
            <div 
              key={item.id} 
              className="border border-gray-200 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-200"
            >
              <button
                onClick={() => toggleItem(item.id)}
                className="w-full px-6 py-4 text-left bg-white hover:bg-gray-50 transition-colors duration-200 flex items-center justify-between"
              >
                <h3 className="text-lg font-semibold text-black pr-4">
                  {item.question}
                </h3>
                <div className="flex-shrink-0">
                  {openItems.has(item.id) ? (
                    <ChevronUp className="w-5 h-5 text-gray-500" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-gray-500" />
                  )}
                </div>
              </button>
              
              {openItems.has(item.id) && (
                <div className="px-6 py-4 bg-gray-50 border-t border-gray-200">
                  <p className="text-black leading-relaxed">
                    {item.answer}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Contact Section */}
        <div className="mt-12 text-center p-8 bg-gray-50 rounded-lg">
          <h3 className="text-xl font-semibold text-black mb-4">
            Still have questions?
          </h3>
          <p className="text-gray-600 mb-6">
            Our friendly staff is here to help! Contact us during office hours 
            or send us a message anytime.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="tel:555-123-4567" 
              className="inline-flex items-center justify-center px-6 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors duration-200"
            >
              Call Us: (555) 123-4567
            </a>
            <a 
              href="mailto:info@woodlandmanor.com" 
              className="inline-flex items-center justify-center px-6 py-3 bg-white text-blue-600 font-medium rounded-lg border border-blue-600 hover:bg-blue-50 transition-colors duration-200"
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