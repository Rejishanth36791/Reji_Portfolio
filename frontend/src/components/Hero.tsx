import React from 'react';
import { EKGPulse } from './EKGPulse';
import profileImg from '../assets/profile.jpeg';

interface HeroProps {
  onOpenDemoModal: () => void;
  activeSection: string;
}

export const Hero: React.FC<HeroProps> = ({ onOpenDemoModal, activeSection }) => {
  const sections = ['home', 'about', 'skills', 'projects', 'experience'];
  const activeIndex = Math.max(0, sections.indexOf(activeSection));

  return (
    <section className="hero-stage" id="home">
      {/* Left Hero Typography & Actions */}
      <div className="hero-left">
        <div className="hero-eyebrow">
          <span>FULL-STACK SOFTWARE ENGINEER</span>
        </div>

        <div className="title-container">
          <h1 className="hero-title-main">
            <span className="title-name-group">
              <span className="title-logo-box">R</span>
              <span className="title-name-text">REJISHANTH</span>
            </span>
            <span className="hero-title-sub">S.E.</span>
          </h1>
        </div>

        {/* Animated Glowing Cyan EKG Pulse Line */}
        <EKGPulse />

        {/* Character Tagline Bullet List */}
        <ul className="character-taglines">
          <li className="highlight">Innovative. Analytical. Unconventional.</li>
          <li>He doesn't just write code.</li>
          <li>He gets to the solution.</li>
        </ul>

        {/* CTA Buttons */}
        <div className="hero-cta">
          <a
            href="/Rejishanth_CV.pdf"
            download="Rejishanth_CV.pdf"
            className="cv-download-btn"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fa-solid fa-file-arrow-down"></i>
            <span>DOWNLOAD CV</span>
          </a>
          <button className="watch-trailer-btn" onClick={onOpenDemoModal} type="button">
            <div className="play-circle">
              <i className="fa-solid fa-play"></i>
            </div>
            <span>WATCH DEMO</span>
          </button>
          <a href="#projects" className="secondary-btn">
            VIEW PROJECTS
          </a>
        </div>
      </div>

      {/* Right Hero - Portrait Photo & Watermark */}
      <div className="hero-right">
        {/* Watermark Background Letter */}
        <div className="watermark-letter">R</div>

        {/* Rejishanth's Portrait Photo with Vignette */}
        <div className="portrait-stage">
          <img
            src={profileImg}
            alt="Rejishanth - Software Engineer"
            className="portrait-img"
          />
          <div className="portrait-overlay"></div>
          <div className="portrait-glow-ring"></div>
        </div>
      </div>

      {/* Far Right Vertical Pagination Dots */}
      <div className="hero-indicator">
        <span className="indicator-num">01</span>
        <div className="indicator-dots">
          {sections.map((sec, idx) => (
            <div
              key={sec}
              className={`dot-item ${idx === activeIndex ? 'active' : ''}`}
            ></div>
          ))}
        </div>
      </div>
    </section>
  );
};
