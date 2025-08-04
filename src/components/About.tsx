'use client';
import React from 'react';
import Link from 'next/link';

export const About: React.FC = () => {
  return (
    <>
      <style jsx>{`
        .about-container {
          min-height: 100vh;
          background: linear-gradient(135deg, #ede5d1 0%, #d9cdb5 100%);
          position: relative;
          padding: 5rem 1rem;
        }

        .about-container::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: 
            radial-gradient(circle at 20% 50%, rgba(38, 98, 93, 0.08) 0%, transparent 50%),
            radial-gradient(circle at 80% 20%, rgba(59, 130, 246, 0.08) 0%, transparent 50%),
            radial-gradient(circle at 40% 80%, rgba(50, 151, 144, 0.08) 0%, transparent 50%);
          pointer-events: none;
        }

        .content-wrapper {
          max-width: 4xl;
          margin: 0 auto;
          position: relative;
          z-index: 1;
        }

        .hero-section {
          text-align: center;
          margin-bottom: 4rem;
        }

        .page-title {
          font-size: 3.5rem;
          font-weight: 700;
          color: #1e293b;
          margin-bottom: 1.5rem;
          background: linear-gradient(135deg, #1e293b 0%, #26625d 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          line-height: 1.2;
          font-family: var(--font-bebas-neue), cursive;
          letter-spacing: 2px;
        }

        .hero-subtitle {
          font-size: 1.5rem;
          color: #64748b;
          font-weight: 400;
          max-width: 600px;
          margin: 0 auto;
          line-height: 1.6;
        }

        .content-section {
          background: rgba(237, 229, 209, 0.9);
          backdrop-filter: blur(16px);
          border: 1px solid rgba(237, 229, 209, 0.3);
          border-radius: 24px;
          padding: 3rem;
          box-shadow: 
            0 4px 6px rgba(0, 0, 0, 0.05),
            0 10px 15px rgba(0, 0, 0, 0.1),
            0 20px 25px rgba(0, 0, 0, 0.1);
          margin-bottom: 3rem;
        }

        .section-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 2rem;
        }

        .mission-card {
          background: linear-gradient(135deg, rgba(38, 98, 93, 0.05) 0%, rgba(50, 151, 144, 0.05) 100%);
          border: 1px solid rgba(38, 98, 93, 0.1);
          border-radius: 16px;
          padding: 2rem;
          transition: all 0.3s ease;
        }

        .mission-card:hover {
          transform: translateY(-4px);
          box-shadow: 0 8px 25px rgba(38, 98, 93, 0.15);
          border-color: rgba(38, 98, 93, 0.2);
        }

        .card-icon {
          width: 3rem;
          height: 3rem;
          background: linear-gradient(135deg, #26625d 0%, #1e524e 100%);
          border-radius: 12px;
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 1.5rem;
          box-shadow: 0 4px 14px rgba(38, 98, 93, 0.3);
        }

        .card-title {
          font-size: 1.5rem;
          font-weight: 700;
          color: #1e293b;
          margin-bottom: 1rem;
        }

        .card-text {
          font-size: 1.1rem;
          color: #64748b;
          line-height: 1.7;
          margin-bottom: 1.5rem;
        }

        .values-section {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 2rem;
          margin-top: 3rem;
        }

        .value-card {
          background: rgba(237, 229, 209, 0.8);
          border: 1px solid rgba(237, 229, 209, 0.2);
          border-radius: 16px;
          padding: 2rem;
          text-align: center;
          transition: all 0.3s ease;
        }

        .value-card:hover {
          transform: translateY(-4px);
          background: rgba(237, 229, 209, 0.95);
          box-shadow: 0 8px 25px rgba(0, 0, 0, 0.1);
        }

        .value-icon {
          width: 4rem;
          height: 4rem;
          margin: 0 auto 1rem;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 1.5rem;
        }

        .community-icon {
          background: linear-gradient(135deg, #26625d 0%, #1e524e 100%);
          color: white;
        }

        .safety-icon {
          background: linear-gradient(135deg, #f59e0b 0%, #d97706 100%);
          color: white;
        }

        .engagement-icon {
          background: linear-gradient(135deg, #329790 0%, #26625d 100%);
          color: white;
        }

        .value-title {
          font-size: 1.25rem;
          font-weight: 600;
          color: #1e293b;
          margin-bottom: 0.75rem;
        }

        .value-text {
          font-size: 1rem;
          color: #64748b;
          line-height: 1.6;
        }

        .cta-section {
          text-align: center;
          background: linear-gradient(135deg, #26625d 0%, #1e524e 100%);
          color: white;
          border-radius: 20px;
          padding: 3rem;
          margin-top: 3rem;
        }

        .cta-title {
          font-size: 2rem;
          font-weight: 700;
          margin-bottom: 1rem;
        }

        .cta-text {
          font-size: 1.2rem;
          margin-bottom: 2rem;
          opacity: 0.95;
        }

        .home-link {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          background: rgba(255, 255, 255, 0.2);
          color: white;
          text-decoration: none;
          padding: 1rem 2rem;
          border-radius: 12px;
          font-weight: 600;
          transition: all 0.3s ease;
          border: 1px solid rgba(255, 255, 255, 0.3);
        }

        .home-link:hover {
          background: rgba(255, 255, 255, 0.3);
          transform: translateY(-2px);
          box-shadow: 0 8px 25px rgba(0, 0, 0, 0.2);
        }

        @media (max-width: 768px) {
          .about-container {
            padding: 3rem 1rem;
          }

          .page-title {
            font-size: 2.5rem;
          }

          .hero-subtitle {
            font-size: 1.2rem;
          }

          .content-section {
            padding: 2rem;
          }

          .values-section {
            grid-template-columns: 1fr;
          }

          .cta-section {
            padding: 2rem;
          }

          .cta-title {
            font-size: 1.75rem;
          }
        }
      `}</style>

      <div className="about-container">
        <div className="content-wrapper">
          {/* Hero Section */}
          <div className="hero-section">
            <h1 className="page-title">About Woodland Manor</h1>
            <p className="hero-subtitle">
              Building a vibrant community where neighbors become family
            </p>
          </div>

          {/* Main Content */}
          <div className="content-section">
            <div className="section-grid">
              <div className="mission-card">
                <div className="card-icon">
                  🏘️
                </div>
                <h2 className="card-title">Our Mission</h2>
                <p className="card-text">
                  Woodland Manor is a vibrant community dedicated to enhancing the quality of life for all residents. Our mission is to foster a welcoming environment where neighbors become friends and families thrive.
                </p>
              </div>
            </div>

            {/* Core Values */}
            <div className="values-section">
              <div className="value-card">
                <div className="value-icon community-icon">
                  🤝
                </div>
                <h3 className="value-title">Community Spirit</h3>
                <p className="value-text">
                  We believe in the power of community connection and fostering meaningful relationships among residents.
                </p>
              </div>

              <div className="value-card">
                <div className="value-icon safety-icon">
                  🛡️
                </div>
                <h3 className="value-title">Safety & Beauty</h3>
                <p className="value-text">
                  We are committed to maintaining the beauty and safety of our neighborhood through active participation.
                </p>
              </div>

              <div className="value-card">
                <div className="value-icon engagement-icon">
                  💬
                </div>
                <h3 className="value-title">Transparent Communication</h3>
                <p className="value-text">
                  Open dialogue and community engagement are the foundations of our decision-making process.
                </p>
              </div>
            </div>
          </div>

          {/* Call to Action */}
          <div className="cta-section">
            <h2 className="cta-title">Join Our Community</h2>
            <p className="cta-text">
              Together, we&apos;re making Woodland Manor a wonderful place to live, work, and play!
            </p>
            <Link href="/" className="home-link">
              ← Return to Home
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}