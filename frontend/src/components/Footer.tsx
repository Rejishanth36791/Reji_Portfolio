import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer>
      <div className="container footer-wrap">
        <span style={{ fontFamily: 'var(--font-mono)', fontSize: '12px', color: 'var(--text-dim)' }}>
          © 2026 REJISHANTH. ALL RIGHTS RESERVED.
        </span>
        <div className="nav-socials">
          <a
            href="https://www.linkedin.com/in/rejishanth-pushpenthira-095047376/"
            target="_blank"
            rel="noopener noreferrer"
            className="social-icon"
            aria-label="LinkedIn"
          >
            <i className="fa-brands fa-linkedin-in"></i>
          </a>
          <a
            href="https://github.com/Rejishanth36791"
            target="_blank"
            rel="noopener noreferrer"
            className="social-icon"
            aria-label="GitHub"
          >
            <i className="fa-brands fa-github"></i>
          </a>
          <a href="mailto:rejishanth422@gmail.com" className="social-icon" aria-label="Email">
            <i className="fa-regular fa-envelope"></i>
          </a>
        </div>
      </div>
    </footer>
  );
};
