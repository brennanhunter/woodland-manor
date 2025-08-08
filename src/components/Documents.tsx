'use client';
import React from 'react';
import { FileText, Eye } from 'lucide-react';

const Downloads: React.FC = () => {
  const handleViewPDF = (filename: string) => {
    // Open PDF in new tab
    window.open(`/documents/${filename}`, '_blank');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-woodland-cream to-yellow-300 flex flex-col items-center justify-center p-8 relative">
      {/* Background overlay */}
      <div className="absolute inset-0 woodland-nature-orbs opacity-60"></div>

      <div className="text-center mb-16 relative z-10">
        <h1 className="text-woodland-primary text-4xl sm:text-5xl lg:text-6xl font-bold mb-4 woodland-title">
          Downloads
        </h1>
        <p className="text-gray-700 text-xl font-medium max-w-2xl mx-auto leading-relaxed">
          Access important community documents
        </p>
      </div>

      <div className="flex justify-center flex-wrap gap-8 max-w-6xl w-full relative z-10">
        <div 
          className="woodland-glass-card max-w-sm w-full min-h-80 grid place-content-center place-items-center text-center cursor-pointer transition-all duration-300 hover:-translate-y-2 hover:scale-105 hover:shadow-xl hover:shadow-woodland-primary/20 hover:border-woodland-primary/30 p-10"
          onClick={() => handleViewPDF('Rules.pdf')}
        >
          <FileText className="w-20 h-20 text-woodland-primary mb-6 drop-shadow-lg transition-all duration-300 hover:text-woodland-secondary hover:scale-110" />
          <h3 className="text-slate-800 text-2xl font-bold mb-3 capitalize leading-tight">
            Rules and Regulations
          </h3>
          <p className="text-gray-600 text-lg mb-6 leading-relaxed max-w-70">
            Community guidelines and policies
          </p>
          <button 
            className="woodland-btn-primary flex items-center gap-3 text-white hover:shadow-lg hover:-translate-y-1"
            onClick={(e) => {
              e.stopPropagation();
              handleViewPDF('Rules.pdf');
            }}
          >
            <Eye className="w-5 h-5 transition-transform duration-300 hover:scale-110" />
            View PDF
          </button>
        </div>
        
        <div 
          className="woodland-glass-card max-w-sm w-full min-h-80 grid place-content-center place-items-center text-center cursor-pointer transition-all duration-300 hover:-translate-y-2 hover:scale-105 hover:shadow-xl hover:shadow-woodland-primary/20 hover:border-woodland-primary/30 p-10"
          onClick={() => handleViewPDF('GoverningDocuments.pdf')}
        >
          <FileText className="w-20 h-20 text-woodland-primary mb-6 drop-shadow-lg transition-all duration-300 hover:text-woodland-secondary hover:scale-110" />
          <h3 className="text-slate-800 text-2xl font-bold mb-3 capitalize leading-tight">
            Governing Documents
          </h3>
          <p className="text-gray-600 text-lg mb-6 leading-relaxed max-w-70">
            Official community governing documents and bylaws
          </p>
          <button 
            className="woodland-btn-primary flex items-center gap-3 text-white hover:shadow-lg hover:-translate-y-1"
            onClick={(e) => {
              e.stopPropagation();
              handleViewPDF('GoverningDocuments.pdf');
            }}
          >
            <Eye className="w-5 h-5 transition-transform duration-300 hover:scale-110" />
            View PDF
          </button>
        </div>
      </div>
    </div>
  );
};

export default Downloads;