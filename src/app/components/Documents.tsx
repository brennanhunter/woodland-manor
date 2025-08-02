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
          background: #232228;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          padding: 2rem;
          font-family: "Nunito", -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
        }

        .page-header {
          text-align: center;
          margin-bottom: 3rem;
        }

        .page-title {
          color: #fff;
          font-size: 2.5rem;
          font-weight: 600;
          margin-bottom: 0.5rem;
        }

        .page-subtitle {
          color: #ddd;
          font-size: 1.1rem;
          font-weight: 400;
        }

        .downloads-grid {
          display: flex;
          justify-content: center;
          flex-wrap: wrap;
          gap: 2rem;
          max-width: 1200px;
          width: 100%;
        }

        .download-card {
          position: relative;
          max-width: 20rem;
          min-height: 16rem;
          width: 100%;
          display: grid;
          place-content: center;
          place-items: center;
          text-align: center;
          box-shadow: 0.063em 0.75em 1.563em rgba(0, 0, 0, 0.78);
          border-radius: 2.25rem;
          background: radial-gradient(
            ellipse at right top,
            #107667ed 0%,
            #151419 47%,
            #151419 100%
          );
          cursor: pointer;
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }

        .download-card::before {
          position: absolute;
          content: "";
          top: 0;
          width: 100%;
          height: 100%;
          border-radius: 2.25rem;
          z-index: -1;
          border: 0.155rem solid transparent;
          background: linear-gradient(
            45deg,
            #232228,
            #232228,
            #232228,
            #232228,
            #01c3a8
          ) border-box;
          -webkit-mask: linear-gradient(#fff 0 0) padding-box,
            linear-gradient(#fff 0 0);
          -webkit-mask-composite: xor;
          mask-composite: exclude;
        }

        .download-card:hover {
          transform: translateY(-4px);
          box-shadow: 0.125em 1em 2em rgba(0, 0, 0, 0.9);
        }

        .card-content {
          padding: 2rem;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 1.5rem;
        }

        .file-icon {
          width: 4rem;
          height: 4rem;
          color: #01c3a8;
          margin-bottom: 1rem;
        }

        .card-title {
          color: #fff;
          font-size: 1.5rem;
          font-weight: 600;
          margin-bottom: 0.5rem;
          text-transform: capitalize;
        }

        .card-description {
          color: #ddd;
          font-size: 1rem;
          letter-spacing: 0.031rem;
          margin-bottom: 1.5rem;
        }

        .view-button {
          background: #01c3a8;
          color: #fff;
          border: none;
          border-radius: 2rem;
          padding: 0.75rem 1.5rem;
          font-size: 1rem;
          font-weight: 500;
          cursor: pointer;
          transition: background 0.3s ease;
          display: flex;
          align-items: center;
          gap: 0.5rem;
        }

        .view-button:hover {
          background: #018b75;
        }

        .view-icon {
          width: 1.2rem;
          height: 1.2rem;
        }

        @media (max-width: 768px) {
          .page-title {
            font-size: 2rem;
          }
          
          .download-card {
            max-width: 100%;
            min-height: 14rem;
          }
          
          .downloads-container {
            padding: 1rem;
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