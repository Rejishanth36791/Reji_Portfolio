import React from 'react';
import { GlassCard } from './GlassCard';
import { experienceData } from '../data/experience';

export const Experience: React.FC = () => {
  return (
    <div>
      <div className="section-eyebrow">WORK HISTORY</div>
      <h2 className="section-title">Experience.</h2>
      <div className="timeline" style={{ marginTop: '24px' }}>
        {experienceData.map((item, idx) => (
          <div key={idx} className="timeline-item">
            <div className="timeline-dot"></div>
            <GlassCard>
              <h3
                style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: '18px',
                  color: 'var(--text-title)',
                }}
              >
                {item.role}
              </h3>
              <span
                style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: '12px',
                  color: 'var(--accent-cyan)',
                }}
              >
                {item.company} · {item.type}
              </span>
              <p style={{ color: 'var(--text-muted)', marginTop: '8px', fontSize: '14px' }}>
                {item.description}
              </p>
            </GlassCard>
          </div>
        ))}
      </div>
    </div>
  );
};
