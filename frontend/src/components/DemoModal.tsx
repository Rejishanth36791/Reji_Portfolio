import React from 'react';
import { DemoVideoPlayer } from './DemoVideoPlayer';

interface DemoModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const DemoModal: React.FC<DemoModalProps> = ({ isOpen, onClose }) => {
  const handleBackdropClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <div
      className={`modal-backdrop ${isOpen ? 'active' : ''}`}
      onClick={handleBackdropClick}
      id="demoModal"
    >
      <div className="modal-box demo-modal-box">
        <button className="modal-close" onClick={onClose} aria-label="Close Demo Modal">
          &times;
        </button>
        <div className="section-eyebrow">30-SECOND PORTFOLIO DEMO REEL</div>
        <h3
          style={{
            fontFamily: 'var(--font-display)',
            fontSize: '24px',
            color: 'var(--text-title)',
            marginBottom: '16px',
          }}
        >
          Rejishanth — Services &amp; Projects Showcase
        </h3>

        {/* 30-Second Demo Video Player */}
        <DemoVideoPlayer />

        <div style={{ marginTop: '20px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <span style={{ fontFamily: 'var(--font-mono)', fontSize: '12px', color: 'var(--text-muted)' }}>
            <i className="fa-solid fa-sparkles" style={{ color: 'var(--accent-cyan)', marginRight: '6px' }}></i>
            30 Sec High-Definition Demo Reel
          </span>
          <a href="#projects" className="btn-primary" onClick={onClose}>
            EXPLORE ALL PROJECTS
          </a>
        </div>
      </div>
    </div>
  );
};
