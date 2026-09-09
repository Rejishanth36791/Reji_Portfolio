import React from 'react';
import { GlassCard } from './GlassCard';

export const About: React.FC = () => {
  return (
    <section id="about" style={{ borderTop: '1px solid var(--border-line)' }}>
      <div className="container">
        <div className="about-grid">
          <div>
            <div className="section-eyebrow">ABOUT REJISHANTH</div>
            <h2 className="section-title">Turning coursework into shipped software.</h2>
            <p className="section-desc">
              BSc (Hons) Software Engineering undergraduate at NSBM Green University with a focus on modern web
              architecture and practical problem solving.
            </p>
            <div className="stat-box-grid">
              <div className="stat-box">
                <div className="stat-val">4+</div>
                <div className="stat-lbl">PROJECTS SHIPPED</div>
              </div>
              <div className="stat-box">
                <div className="stat-val">3rd</div>
                <div className="stat-lbl">YEAR UNDERGRAD</div>
              </div>
              <div className="stat-box">
                <div className="stat-val">10+</div>
                <div className="stat-lbl">TECH STACK</div>
              </div>
            </div>
          </div>

          <GlassCard>
            <h3
              style={{
                fontFamily: 'var(--font-display)',
                fontSize: '22px',
                color: 'var(--text-title)',
                marginBottom: '20px',
              }}
            >
              Core Engineering Focus
            </h3>
            <ul className="check-list">
              <li>
                <i className="fa-solid fa-circle-check"></i> Third-Year Software Engineering Student at NSBM Green University.
              </li>
              <li>
                <i className="fa-solid fa-circle-check"></i> Passionate about Full-Stack architecture — from React UIs to RESTful APIs.
              </li>
              <li>
                <i className="fa-solid fa-circle-check"></i> Experienced in Spring Boot, ASP.NET Core, TypeScript &amp; SQL Databases.
              </li>
              <li>
                <i className="fa-solid fa-circle-check"></i> Seeking a Software Engineering / Web Development internship opportunity.
              </li>
            </ul>
          </GlassCard>
        </div>
      </div>
    </section>
  );
};
