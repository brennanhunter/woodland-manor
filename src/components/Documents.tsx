'use client';
import React from 'react';
import { FileText, Eye } from 'lucide-react';

const Downloads: React.FC = () => {
  const handleViewPDF = () => {
    // Open PDF in new tab
    window.open('/documents/Rules.pdf', '_blank');
  };

  return (
    <div className="downloads-container">
      <style jsx>{`
        .downloads-container {
          min-height: 100vh;
          background: linear-gradient(135deg, #ede5d1 0%, #d9cdb5 100%);
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          padding: 2rem;
          font-family: "Nunito", -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
          position: relative;
        }

        .downloads-container::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: 
            radial-gradient(circle at 20% 50%, rgba(38, 98, 93, 0.1) 0%, transparent 50%),
            radial-gradient(circle at 80% 20%, rgba(50, 151, 144, 0.1) 0%, transparent 50%),
            radial-gradient(circle at 40% 80%, rgba(184, 212, 209, 0.1) 0%, transparent 50%);
          pointer-events: none;
        }

        .page-header {
          text-align: center;
          margin-bottom: 4rem;
          position: relative;
          z-index: 1;
        }

        .page-title {
          color: #1e293b;
          font-size: 3rem;
          font-weight: 700;
          margin-bottom: 1rem;
          background: linear-gradient(135deg, #26625d 0%, #329790 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          text-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
          font-family: var(--font-bebas-neue), cursive;
          letter-spacing: 2px;
        }

        .page-subtitle {
          color: #64748b;
          font-size: 1.25rem;
          font-weight: 400;
          max-width: 600px;
          margin: 0 auto;
          line-height: 1.6;
        }

        .downloads-grid {
          display: flex;
          justify-content: center;
          flex-wrap: wrap;
          gap: 2rem;
          max-width: 1200px;
          width: 100%;
          position: relative;
          z-index: 1;
        }

        .download-card {
          position: relative;
          max-width: 24rem;
          min-height: 20rem;
          width: 100%;
          display: grid;
          place-content: center;
          place-items: center;
          text-align: center;
          background: rgba(237, 229, 209, 0.9);
          backdrop-filter: blur(16px);
          border: 1px solid rgba(237, 229, 209, 0.3);
          border-radius: 24px;
          cursor: pointer;
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
          box-shadow: 
            0 4px 6px rgba(0, 0, 0, 0.05),
            0 10px 15px rgba(0, 0, 0, 0.1),
            0 20px 25px rgba(0, 0, 0, 0.1);
          overflow: hidden;
        }

        .download-card::before {
          position: absolute;
          content: "";
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: linear-gradient(
            135deg,
            rgba(38, 98, 93, 0.1) 0%,
            rgba(50, 151, 144, 0.1) 50%,
            rgba(184, 212, 209, 0.1) 100%
          );
          opacity: 0;
          transition: opacity 0.3s ease;
          border-radius: 24px;
          z-index: -1;
        }

        .download-card:hover::before {
          opacity: 1;
        }

        .download-card:hover {
          transform: translateY(-8px) scale(1.02);
          box-shadow: 
            0 8px 25px rgba(0, 0, 0, 0.1),
            0 16px 35px rgba(0, 0, 0, 0.15),
            0 32px 45px rgba(0, 0, 0, 0.1);
          border-color: rgba(38, 98, 93, 0.3);
        }

        .card-content {
          padding: 2.5rem;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 1.5rem;
          position: relative;
          z-index: 2;
        }

        .file-icon {
          width: 5rem;
          height: 5rem;
          color: #26625d;
          margin-bottom: 1rem;
          filter: drop-shadow(0 4px 6px rgba(38, 98, 93, 0.2));
          transition: all 0.3s ease;
        }

        .download-card:hover .file-icon {
          color: #1e524e;
          transform: scale(1.1);
        }

        .card-title {
          color: #1e293b;
          font-size: 1.75rem;
          font-weight: 700;
          margin-bottom: 0.5rem;
          text-transform: capitalize;
          line-height: 1.3;
        }

        .card-description {
          color: #64748b;
          font-size: 1.1rem;
          letter-spacing: 0.025rem;
          margin-bottom: 1.5rem;
          line-height: 1.5;
          max-width: 280px;
        }

        .view-button {
          background: linear-gradient(135deg, #26625d 0%, #1e524e 100%);
          color: #fff;
          border: none;
          border-radius: 12px;
          padding: 1rem 2rem;
          font-size: 1rem;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
          display: flex;
          align-items: center;
          gap: 0.75rem;
          box-shadow: 0 4px 14px rgba(38, 98, 93, 0.3);
          position: relative;
          overflow: hidden;
        }

        .view-button::before {
          content: '';
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.2), transparent);
          transition: left 0.5s ease;
        }

        .view-button:hover::before {
          left: 100%;
        }

        .view-button:hover {
          background: linear-gradient(135deg, #1e524e 0%, #1a4843 100%);
          transform: translateY(-2px);
          box-shadow: 0 6px 20px rgba(38, 98, 93, 0.4);
        }

        .view-icon {
          width: 1.3rem;
          height: 1.3rem;
          transition: transform 0.3s ease;
        }

        .view-button:hover .view-icon {
          transform: scale(1.1);
        }

        @media (max-width: 768px) {
          .page-title {
            font-size: 2.5rem;
          }
          
          .page-subtitle {
            font-size: 1.1rem;
            padding: 0 1rem;
          }
          
          .download-card {
            max-width: 100%;
            min-height: 18rem;
          }
          
          .downloads-container {
            padding: 1.5rem;
          }
          
          .page-header {
            margin-bottom: 3rem;
          }
          
          .card-content {
            padding: 2rem;
          }
          
          .file-icon {
            width: 4rem;
            height: 4rem;
          }
          
          .card-title {
            font-size: 1.5rem;
          }
          
          .view-button {
            padding: 0.875rem 1.75rem;
          }
        }
      `}</style>

      <div className="page-header">
        <h1 className="page-title">Downloads</h1>
        <p className="page-subtitle">Access important community documents</p>
      </div>

      <div className="downloads-grid">
        <div className="download-card" onClick={handleViewPDF}>
          <div className="card-content">
            <FileText className="file-icon" />
            <h3 className="card-title">Rules and Regulations</h3>
            <p className="card-description">Community guidelines and policies</p>
            <button className="view-button" onClick={(e) => {
              e.stopPropagation();
              handleViewPDF();
            }}>
              <Eye className="view-icon" />
              View PDF
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Downloads;