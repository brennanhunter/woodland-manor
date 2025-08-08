'use client';
import React, { useState, useRef } from 'react';

interface BoardMemberProps {
  name: string;
  title: string;
  phone: string;
  isOfficer?: boolean;
}

interface BoardMemberData {
  name: string;
  title?: string;
  phone: string;
}

const BoardMember: React.FC<BoardMemberProps> = ({ name, title, phone, isOfficer = false }) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState<boolean>(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>): void => {
    if (!cardRef.current) return;
    
    const card = cardRef.current;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const width = rect.width;
    const height = rect.height;
    
    const px = Math.max(0, Math.min(100, (100 / width) * x));
    const py = Math.max(0, Math.min(100, (100 / height) * y));
    
    const cx = width / 2;
    const cy = height / 2;
    const dx = x - cx;
    const dy = y - cy;
    
    let angle = 0;
    if (dx !== 0 || dy !== 0) {
      const angleRadians = Math.atan2(dy, dx);
      angle = angleRadians * (180 / Math.PI) + 90;
      if (angle < 0) angle += 360;
    }
    
    let kx = Infinity;
    let ky = Infinity;
    if (dx !== 0) kx = cx / Math.abs(dx);
    if (dy !== 0) ky = cy / Math.abs(dy);
    const edge = Math.max(0, Math.min(1, 1 / Math.min(kx, ky))) * 100;
    
    card.style.setProperty('--pointer-x', `${px.toFixed(3)}%`);
    card.style.setProperty('--pointer-y', `${py.toFixed(3)}%`);
    card.style.setProperty('--pointer-angle', `${angle.toFixed(3)}deg`);
    card.style.setProperty('--pointer-distance', `${edge.toFixed(3)}`);
  };

  const formatPhone = (phoneNumber: string): string => {
    // Format phone number as (XXX) XXX-XXXX
    const cleaned = phoneNumber.replace(/\D/g, '');
    if (cleaned.length === 10) {
      return `(${cleaned.slice(0, 3)}) ${cleaned.slice(3, 6)}-${cleaned.slice(6)}`;
    }
    return phoneNumber;
  };

  return (
    <div 
      ref={cardRef}
      className={`glowing-card ${isHovered ? 'hovered' : ''} ${isOfficer ? 'officer' : ''}`}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{
        '--glow-sens': '30',
        '--color-sens': '50',
        '--pointer-x': '50%',
        '--pointer-y': '50%',
        '--pointer-angle': '0deg',
        '--pointer-distance': '0',
      } as React.CSSProperties}
    >
      <span className="glow" />
      <div className="inner">
        <div className="member-content">
          <h3 className="member-name">{name}</h3>
          <p className="member-title">{title}</p>
          <a href={`tel:${phone}`} className="member-phone">
            {formatPhone(phone)}
          </a>
        </div>
      </div>
    </div>
  );
};

const Board: React.FC = () => {
  const officers: BoardMemberData[] = [
    { name: "LISA CUMMINGS", title: "PRESIDENT", phone: "802-324-8027" },
    { name: "JOANNE PINHEIRO", title: "VICE PRESIDENT", phone: "401-465-0528" },
    { name: "MARY HATMAKER", title: "TREASURER/SECRETARY", phone: "386-450-8718" }
  ];

  const directors: BoardMemberData[] = [
    { name: "MARK RICE", phone: "386-717-7110" },
    { name: "ALEX RIVEST", phone: "864-940-8381" },
    { name: "SANDI PASSANTE", phone: "610-563-4998" },
    { name: "PEGGY HOWARD", phone: "757-876-2140" },
    { name: "CHRIS RIEL", phone: "386-349-3626" },
    { name: "BUD CAROTHERS", phone: "386-748-8689" },
    { name: "CHESTER INMAN", phone: "606-549-7370" },
    { name: "TONY TERWILLIGER", phone: "802-557-1859" },
    { name: "RON WESTON", phone: "802-310-4104" }
  ];

  return (
    <>
      <style jsx global>{`
        .board-page {
          min-height: 100vh;
          font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
        }

        .board-hero {
          position: relative;
          height: 100vh;
          display: flex;
          align-items: center;
          justify-content: center;
          overflow: hidden;
          background-color: #fde74c;
        }

        .animated-background {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: linear-gradient(-45deg, #41d3bd, #329790, #b8d4d1, #1a4843, #fde74c, #f5d93a);
          background-size: 400% 400%;
          animation: gradientBG 15s ease infinite;
        }

        @keyframes gradientBG {
          0% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
          100% {
            background-position: 0% 50%;
          }
        }

        .hero-content {
          position: relative;
          z-index: 10;
          text-align: center;
          color: white;
          padding: 2rem;
        }

        /* Parallax Forest Layers */
        .parallax-layer {
          position: absolute;
          bottom: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background-repeat: repeat-x;
          background-position: 0 100%;
          z-index: 1;
        }

        .layer-1 {
          animation: parallax_fg linear 20s infinite both;
          background-image: url('https://s3-us-west-2.amazonaws.com/s.cdpn.io/24650/1.png');
          background-size: auto 136px;
          z-index: 6;
          filter: brightness(1.2) contrast(0.8) saturate(0.6) hue-rotate(45deg);
        }

        .layer-2 {
          animation: parallax_fg linear 30s infinite both;
          background-image: url('https://s3-us-west-2.amazonaws.com/s.cdpn.io/24650/2.png');
          background-size: auto 145px;
          z-index: 5;
          filter: brightness(1.1) contrast(0.8) saturate(0.5) hue-rotate(45deg);
        }

        .layer-3 {
          animation: parallax_fg linear 55s infinite both;
          background-image: url('https://s3-us-west-2.amazonaws.com/s.cdpn.io/24650/3.png');
          background-size: auto 158px;
          z-index: 4;
          filter: brightness(1.0) contrast(0.8) saturate(0.4) hue-rotate(45deg);
        }

        .layer-4 {
          animation: parallax_fg linear 75s infinite both;
          background-image: url('https://s3-us-west-2.amazonaws.com/s.cdpn.io/24650/4.png');
          background-size: auto 468px;
          z-index: 3;
          filter: brightness(0.9) contrast(0.8) saturate(0.3) hue-rotate(45deg);
        }

        .layer-5 {
          animation: parallax_fg linear 95s infinite both;
          background-image: url('https://s3-us-west-2.amazonaws.com/s.cdpn.io/24650/5.png');
          background-size: auto 311px;
          z-index: 2;
          filter: brightness(0.8) contrast(0.8) saturate(0.2) hue-rotate(45deg);
        }

        .layer-6 {
          animation: parallax_fg linear 120s infinite both;
          background-image: url('https://s3-us-west-2.amazonaws.com/s.cdpn.io/24650/6.png');
          background-size: auto 222px;
          z-index: 1;
          filter: brightness(0.7) contrast(0.8) saturate(0.1) hue-rotate(45deg);
        }

        .bike-1, .bike-2 {
          background-image: url('https://s3-us-west-2.amazonaws.com/s.cdpn.io/24650/bike.png');
          background-repeat: no-repeat;
          background-position: 0 100%;
          background-size: auto 75px;
          bottom: 100px;
          z-index: 7;
          animation: parallax_bike linear 10s infinite both;
          filter: brightness(1.0) contrast(0.9) saturate(0.7) hue-rotate(45deg);
        }

        .bike-2 {
          animation: parallax_bike linear 15s infinite both;
          filter: brightness(0.9) contrast(0.9) saturate(0.6) hue-rotate(45deg);
        }

        @keyframes parallax_fg {  
          0% { background-position: 2765px 100%; } 
          100% { background-position: 550px 100%; } 
        }

        @keyframes parallax_bike {  
          0% { background-position: -300px 100%; } 
          100% { background-position: 2000px 100%; } 
        }

        .hero-glass-card {
          backdrop-filter: blur(16px);
          background: rgba(253, 231, 76, 0.2);
          border: 1px solid rgba(65, 211, 189, 0.4);
          border-radius: 24px;
          padding: 3rem 2rem;
          box-shadow: 
            0 8px 32px rgba(65, 211, 189, 0.3),
            inset 0 1px 0 rgba(255, 255, 255, 0.4);
          max-width: 600px;
          margin: 0 auto;
          transform: translateY(0);
          transition: transform 0.3s ease;
        }

        .hero-glass-card:hover {
          transform: translateY(-5px);
        }

        .hero-title {
          font-size: 3.5rem;
          font-weight: 700;
          margin-bottom: 1rem;
          text-shadow: 0 4px 8px rgba(0, 0, 0, 0.3);
          font-family: var(--font-bebas-neue), cursive;
          letter-spacing: 2px;
        }

        .hero-subtitle {
          font-size: 1.5rem;
          font-weight: 300;
          opacity: 0.9;
          text-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
        }

        .board-content {
          background: linear-gradient(180deg, #fde74c, #f5d93a);
          padding: 4rem 2rem;
        }

        .officers-section,
        .directors-section {
          margin-bottom: 3rem;
        }

        .section-title {
          font-size: 1.5rem;
          font-weight: 600;
          color: #41d3bd;
          text-align: center;
          margin-bottom: 2rem;
          text-transform: uppercase;
          letter-spacing: 2px;
        }

        .officers-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 2rem;
          max-width: 1200px;
          margin: 0 auto;
        }

        .directors-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
          gap: 1.5rem;
          max-width: 1400px;
          margin: 0 auto;
        }

        .glowing-card {
          position: relative;
          border-radius: 1.2rem;
          border: 1px solid rgba(65, 211, 189, 0.2);
          background: linear-gradient(8deg, #fde74c 75%, #f5d93a 75.5%);
          padding: 1.5rem;
          transition: transform 0.2s ease;
          isolation: isolate;
          transform: translate3d(0, 0, 0.01px);
          box-shadow:
            rgba(65, 211, 189, 0.08) 0px 1px 2px,
            rgba(65, 211, 189, 0.08) 0px 2px 4px,
            rgba(65, 211, 189, 0.08) 0px 4px 8px,
            rgba(65, 211, 189, 0.08) 0px 8px 16px,
            rgba(65, 211, 189, 0.08) 0px 16px 32px;
        }

        .glowing-card.officer {
          background: linear-gradient(8deg, #b8d4d1 75%, #a3cac7 75.5%);
          border: 1px solid rgba(65, 211, 189, 0.4);
        }

        .glowing-card::before,
        .glowing-card::after,
        .glowing-card .glow {
          content: "";
          position: absolute;
          inset: 0;
          border-radius: inherit;
          transition: opacity 0.25s ease-out;
          z-index: -1;
          opacity: 0;
        }

        .glowing-card.hovered::before,
        .glowing-card.hovered::after,
        .glowing-card.hovered .glow {
          opacity: 1;
          transition: opacity 0.25s ease-out;
        }

        .glowing-card::before {
          border: 1px solid transparent;
          background:
            linear-gradient(#fde74c 0 100%) padding-box,
            linear-gradient(rgba(0, 0, 0, 0) 0% 100%) border-box,
            radial-gradient(at 80% 55%, hsla(175,65%,65%,1) 0px, transparent 50%) border-box,
            radial-gradient(at 69% 34%, hsla(175,55%,55%,1) 0px, transparent 50%) border-box,
            radial-gradient(at 8% 6%, hsla(184,48%,78%,1) 0px, transparent 50%) border-box,
            radial-gradient(at 41% 38%, hsla(175,65%,65%,1) 0px, transparent 50%) border-box,
            radial-gradient(at 86% 85%, hsla(184,38%,74%,1) 0px, transparent 50%) border-box,
            radial-gradient(at 82% 18%, hsla(55,85%,65%,1) 0px, transparent 50%) border-box,
            radial-gradient(at 51% 4%, hsla(175,55%,55%,1) 0px, transparent 50%) border-box,
            linear-gradient(#41d3bd 0 100%) border-box;
          opacity: calc((var(--pointer-distance) - var(--color-sens)) / (100 - var(--color-sens)));
          mask-image: conic-gradient(
            from var(--pointer-angle) at center, 
            black 25%, 
            transparent 40%, 
            transparent 60%, 
            black 75%
          );
        }

        .glowing-card::after {
          border: 1px solid transparent;
          background:
            radial-gradient(at 80% 55%, hsla(175,65%,65%,1) 0px, transparent 50%) padding-box,
            radial-gradient(at 69% 34%, hsla(175,55%,55%,1) 0px, transparent 50%) padding-box,
            radial-gradient(at 8% 6%, hsla(184,48%,78%,1) 0px, transparent 50%) padding-box,
            radial-gradient(at 41% 38%, hsla(175,65%,65%,1) 0px, transparent 50%) padding-box,
            radial-gradient(at 86% 85%, hsla(184,38%,74%,1) 0px, transparent 50%) padding-box,
            radial-gradient(at 82% 18%, hsla(55,85%,65%,1) 0px, transparent 50%) padding-box,
            radial-gradient(at 51% 4%, hsla(175,55%,55%,1) 0px, transparent 50%) padding-box,
            linear-gradient(#41d3bd 0 100%) padding-box;
          mask-image:
            linear-gradient(to bottom, black, black),
            radial-gradient(ellipse at 50% 50%, black 40%, transparent 65%),
            radial-gradient(ellipse at 66% 66%, black 5%, transparent 40%),
            radial-gradient(ellipse at 33% 33%, black 5%, transparent 40%),
            radial-gradient(ellipse at 66% 33%, black 5%, transparent 40%),
            radial-gradient(ellipse at 33% 66%, black 5%, transparent 40%),
            conic-gradient(from var(--pointer-angle) at center, transparent 5%, black 15%, black 85%, transparent 95%);
          mask-composite: subtract, add, add, add, add, add;
          opacity: calc((var(--pointer-distance) - var(--color-sens)) / (100 - var(--color-sens)));
          mix-blend-mode: multiply;
        }

        .glowing-card .glow {
          inset: -2rem;
          pointer-events: none;
          z-index: 1;
          mask-image: conic-gradient(
            from var(--pointer-angle) at center, 
            black 2.5%, 
            transparent 10%, 
            transparent 90%, 
            black 97.5%
          );
          opacity: calc((var(--pointer-distance) - var(--glow-sens)) / (100 - var(--glow-sens)));
          mix-blend-mode: overlay;
        }

        .glowing-card .glow::before {
          content: "";
          position: absolute;
          inset: 2rem;
          border-radius: inherit;
          box-shadow:
            inset 0 0 0 1px hsl(175deg 65% 55% / 60%),
            inset 0 0 2px 2px hsl(175deg 65% 55% / 50%),
            inset 0 0 5px 1px hsl(175deg 65% 55% / 40%),
            inset 0 0 8px 1px hsl(175deg 65% 55% / 30%),
            inset 0 0 15px 0 hsl(175deg 65% 55% / 25%),
            inset 0 0 25px 2px hsl(175deg 65% 55% / 15%),
            inset 0 0 50px 2px hsl(175deg 65% 55% / 5%),
            0 0 2px 2px hsl(175deg 65% 55% / 50%),
            0 0 5px 1px hsl(175deg 65% 55% / 40%),
            0 0 8px 1px hsl(175deg 65% 55% / 30%),
            0 0 15px 0 hsl(175deg 65% 55% / 25%),
            0 0 25px 2px hsl(175deg 65% 55% / 15%),
            0 0 50px 2px hsl(175deg 65% 55% / 5%);
        }

        .inner {
          position: relative;
          z-index: 2;
          height: 100%;
        }

        .member-content {
          text-align: center;
          color: #1f2937;
        }

        .member-name {
          font-size: 1.25rem;
          font-weight: 600;
          margin: 0 0 0.5rem 0;
          color: #1f2937;
          text-shadow: 0 1px 2px rgba(0,0,0,0.1);
        }

        .member-title {
          font-size: 0.9rem;
          font-weight: 500;
          margin: 0 0 1rem 0;
          color: #6b7280;
          text-transform: uppercase;
          letter-spacing: 1px;
        }

        .member-phone {
          display: inline-block;
          font-size: 1rem;
          color: #41d3bd;
          text-decoration: none;
          font-weight: 500;
          transition: color 0.2s ease;
          padding: 0.5rem 1rem;
          border: 1px solid rgba(65, 211, 189, 0.4);
          border-radius: 0.5rem;
          background: rgba(65, 211, 189, 0.1);
        }

        .member-phone:hover {
          color: #329790;
          background: rgba(65, 211, 189, 0.2);
          border-color: rgba(65, 211, 189, 0.6);
        }

        @media (max-width: 768px) {
          .board-content {
            padding: 2rem 1rem;
          }
          
          .hero-title {
            font-size: 2.5rem;
          }
          
          .hero-subtitle {
            font-size: 1.2rem;
          }
          
          .hero-glass-card {
            padding: 2rem 1.5rem;
          }
          
          .officers-grid,
          .directors-grid {
            grid-template-columns: 1fr;
            gap: 1rem;
          }
        }
      `}</style>

      <div className="board-page">
        {/* Hero Section with Animated Background */}
        <section className="board-hero">
          <div className="animated-background"></div>
          
          {/* Parallax Forest Layers */}
          <div className="parallax-layer layer-6"></div>
          <div className="parallax-layer layer-5"></div>
          <div className="parallax-layer layer-4"></div>
          <div className="parallax-layer bike-1"></div>
          <div className="parallax-layer bike-2"></div>
          <div className="parallax-layer layer-3"></div>
          <div className="parallax-layer layer-2"></div>
          <div className="parallax-layer layer-1"></div>
          
          <div className="hero-content">
            <div className="hero-glass-card">
              <h1 className="hero-title">WOODLAND MANOR</h1>
              <p className="hero-subtitle">Meet Your Board as of 4/1/25</p>
            </div>
          </div>
        </section>

        {/* Board Members Content */}
        <div className="board-content">
          <div className="officers-section">
            <h2 className="section-title">Officers</h2>
            <div className="officers-grid">
              {officers.map((officer, index) => (
                <BoardMember
                  key={`officer-${index}`}
                  name={officer.name}
                  title={officer.title || 'OFFICER'}
                  phone={officer.phone}
                  isOfficer={true}
                />
              ))}
            </div>
          </div>

          <div className="directors-section">
            <h2 className="section-title">Board of Directors</h2>
            <div className="directors-grid">
              {directors.map((director, index) => (
                <BoardMember
                  key={`director-${index}`}
                  name={director.name}
                  title="BOARD MEMBER"
                  phone={director.phone}
                  isOfficer={false}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Board;