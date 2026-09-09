import React from 'react';
import { GlassCard } from './GlassCard';
import { educationData } from '../data/education';

export const Education: React.FC = () => {
  return (
    <div>
      <div className="section-eyebrow">ACADEMIC JOURNEY</div>
      <h2 className="section-title">Education.</h2>
      {educationData.map((item, idx) => (
        <GlassCard key={idx} className="edu-card" style={{ marginTop: '24px' }}>
          <div className="edu-icon-box">
            <i className="fa-solid fa-graduation-cap"></i>
          </div>
          <div>
            <h3
              style={{
                fontFamily: 'var(--font-display)',
                fontSize: '20px',
                color: 'var(--text-title)',
              }}
            >
              {item.degree}
            </h3>
            <span
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '13px',
                color: 'var(--accent-cyan)',
              }}
            >
              {item.institution} · {item.location}
            </span>
            <p style={{ color: 'var(--text-muted)', marginTop: '10px', fontSize: '14px' }}>
              {item.description}
            </p>
          </div>
        </GlassCard>
      ))}
    </div>
  );
};
