'use client';
import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';
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
    <>
      <style jsx>{`
        .faq-container {
          min-height: 100vh;
          background: linear-gradient(135deg, #f8fafc 0%, #e2e8f0 100%);
          position: relative;
          padding: 5rem 1rem;
        }

        .faq-container::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: 
            radial-gradient(circle at 20% 50%, rgba(34, 139, 34, 0.08) 0%, transparent 50%),
            radial-gradient(circle at 80% 20%, rgba(59, 130, 246, 0.08) 0%, transparent 50%),
            radial-gradient(circle at 40% 80%, rgba(16, 185, 129, 0.08) 0%, transparent 50%);
          pointer-events: none;
        }

        .content-wrapper {
          max-width: 4xl;
          margin: 0 auto;
          position: relative;
          z-index: 1;
        }

        .header-section {
          text-align: center;
          margin-bottom: 4rem;
        }

        .page-title {
          font-size: 3.5rem;
          font-weight: 700;
          color: #1e293b;
          margin-bottom: 1.5rem;
          background: linear-gradient(135deg, #1e293b 0%, #059669 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          line-height: 1.2;
          font-family: var(--font-bebas-neue), cursive;
          letter-spacing: 2px;
        }

        .header-subtitle {
          font-size: 1.25rem;
          color: #64748b;
          max-width: 600px;
          margin: 0 auto 2rem;
          line-height: 1.6;
        }

        .faq-image {
          margin-bottom: 2rem;
          filter: drop-shadow(0 4px 6px rgba(0, 0, 0, 0.1));
        }

        .faq-list {
          background: rgba(255, 255, 255, 0.9);
          backdrop-filter: blur(16px);
          border: 1px solid rgba(255, 255, 255, 0.3);
          border-radius: 24px;
          padding: 2rem;
          box-shadow: 
            0 4px 6px rgba(0, 0, 0, 0.05),
            0 10px 15px rgba(0, 0, 0, 0.1),
            0 20px 25px rgba(0, 0, 0, 0.1);
          margin-bottom: 3rem;
        }

        .faq-item {
          border: 1px solid rgba(255, 255, 255, 0.2);
          border-radius: 16px;
          margin-bottom: 1rem;
          overflow: hidden;
          background: rgba(255, 255, 255, 0.7);
          backdrop-filter: blur(8px);
          transition: all 0.3s ease;
        }

        .faq-item:hover {
          transform: translateY(-2px);
          box-shadow: 0 8px 25px rgba(0, 0, 0, 0.1);
          border-color: rgba(34, 139, 34, 0.3);
        }

        .faq-button {
          width: 100%;
          padding: 1.5rem;
          text-align: left;
          background: transparent;
          border: none;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: space-between;
          transition: all 0.3s ease;
        }

        .faq-button:hover {
          background: rgba(34, 139, 34, 0.05);
        }

        .faq-question {
          font-size: 1.25rem;
          font-weight: 600;
          color: #1e293b;
          margin-right: 1rem;
          line-height: 1.4;
        }

        .faq-icon {
          width: 1.5rem;
          height: 1.5rem;
          color: #059669;
          transition: transform 0.3s ease;
        }

        .faq-icon.open {
          transform: rotate(180deg);
        }

        .faq-answer {
          padding: 0 1.5rem 1.5rem;
          background: rgba(248, 250, 252, 0.8);
          border-top: 1px solid rgba(255, 255, 255, 0.3);
        }

        .faq-answer-text {
          color: #64748b;
          line-height: 1.7;
          font-size: 1.1rem;
        }

        .contact-section {
          background: linear-gradient(135deg, #059669 0%, #047857 100%);
          color: white;
          border-radius: 20px;
          padding: 3rem;
          text-align: center;
        }

        .contact-title {
          font-size: 2rem;
          font-weight: 700;
          margin-bottom: 1rem;
        }

        .contact-text {
          font-size: 1.2rem;
          margin-bottom: 2rem;
          opacity: 0.95;
        }

        .contact-buttons {
          display: flex;
          flex-direction: column;
          gap: 1rem;
          max-width: 400px;
          margin: 0 auto;
        }

        .contact-button {
          padding: 1rem 2rem;
          border-radius: 12px;
          font-weight: 600;
          text-decoration: none;
          transition: all 0.3s ease;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 0.5rem;
        }

        .contact-button.primary {
          background: rgba(255, 255, 255, 0.2);
          color: white;
          border: 1px solid rgba(255, 255, 255, 0.3);
        }

        .contact-button.primary:hover {
          background: rgba(255, 255, 255, 0.3);
          transform: translateY(-2px);
        }

        .contact-button.secondary {
          background: white;
          color: #059669;
          border: 1px solid white;
        }

        .contact-button.secondary:hover {
          background: #f8fafc;
          transform: translateY(-2px);
        }

        @media (max-width: 768px) {
          .faq-container {
            padding: 3rem 1rem;
          }

          .page-title {
            font-size: 2.5rem;
          }

          .header-subtitle {
            font-size: 1.1rem;
          }

          .faq-list {
            padding: 1.5rem;
          }

          .contact-section {
            padding: 2rem;
          }

          .contact-title {
            font-size: 1.75rem;
          }

          .contact-buttons {
            flex-direction: column;
          }
        }

        @media (min-width: 640px) {
          .contact-buttons {
            flex-direction: row;
          }
        }
      `}</style>

      <div className="faq-container">
        <div className="content-wrapper">
          {/* Header Section */}
          <div className="header-section">
            <h1 className="page-title">FREQUENTLY ASKED QUESTIONS</h1>
            <div className="faq-image">
              <Image 
                src="/images/FAQImage.png" 
                alt="FAQ Illustration"
                width={256}
                height={192}
                style={{ margin: '0 auto' }}
                priority
              />
            </div>
            <p className="header-subtitle">
              Find answers to the most commonly asked questions about our community, 
              policies, and services. If you don&apos;t find what you&apos;re looking for, 
              feel free to contact our office.
            </p>
          </div>

          {/* FAQ Items */}
          <div className="faq-list">
            {faqData.map((item) => (
              <div key={item.id} className="faq-item">
                <button
                  onClick={() => toggleItem(item.id)}
                  className="faq-button"
                >
                  <h3 className="faq-question">
                    {item.question}
                  </h3>
                  <div className={`faq-icon ${openItems.has(item.id) ? 'open' : ''}`}>
                    <ChevronDown />
                  </div>
                </button>
                
                {openItems.has(item.id) && (
                  <div className="faq-answer">
                    <p className="faq-answer-text">
                      {item.answer}
                    </p>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Contact Section */}
          <div className="contact-section">
            <h3 className="contact-title">Still have questions?</h3>
            <p className="contact-text">
              Our friendly staff is here to help! Contact us during office hours 
              or send us a message anytime.
            </p>
            <div className="contact-buttons">
              <a href="tel:555-123-4567" className="contact-button primary">
                Call Us: (555) 123-4567
              </a>
              <a href="mailto:info@woodlandmanor.com" className="contact-button secondary">
                Email Us
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FAQ;