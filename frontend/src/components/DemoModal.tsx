import React from 'react';

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
      <div className="modal-box">
        <button className="modal-close" onClick={onClose} aria-label="Close Demo Modal">
          &times;
        </button>
        <div className="section-eyebrow">PORTFOLIO DEMO REEL</div>
        <h3
          style={{
            fontFamily: 'var(--font-display)',
            fontSize: '26px',
            color: 'var(--text-title)',
            marginBottom: '16px',
          }}
        >
          Rejishanth — Software Engineering Showcase
        </h3>
        <div className="modal-video-placeholder">
          <div className="play-circle" style={{ width: '70px', height: '70px', fontSize: '24px' }}>
            <i className="fa-solid fa-play"></i>
          </div>
          <span
            style={{
              fontFamily: 'var(--font-mono)',
              fontSize: '13px',
              color: 'var(--accent-cyan)',
              letterSpacing: '0.15em',
            }}
          >
            FEATURED PROJECT SHOWCASE (RECRUITSPHERE AI &amp; FINDMYMEDS)
          </span>
        </div>
        <div style={{ marginTop: '20px', display: 'flex', justifyContent: 'flex-end', gap: '14px' }}>
          <a href="#projects" className="btn-primary" onClick={onClose}>
            EXPLORE ALL PROJECTS
          </a>
        </div>
      </div>
    </div>
  );
};
