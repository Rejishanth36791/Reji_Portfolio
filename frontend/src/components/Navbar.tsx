import React, { useState, useEffect } from 'react';

interface NavbarProps {
  theme: 'dark' | 'light';
  onToggleTheme: () => void;
  activeSection: string;
}

export const Navbar: React.FC<NavbarProps> = ({ theme, onToggleTheme, activeSection }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: 'HOME', href: '#home', id: 'home' },
    { name: 'ABOUT', href: '#about', id: 'about' },
    { name: 'SKILLS', href: '#skills', id: 'skills' },
    { name: 'PROJECTS', href: '#projects', id: 'projects' },
    { name: 'EXPERIENCE', href: '#experience', id: 'experience' },
    { name: 'CONTACT', href: '#contact', id: 'contact' },
  ];

  const toggleMobileMenu = (e: React.MouseEvent) => {
    e.stopPropagation();
    setIsMobileMenuOpen((prev) => !prev);
  };

  const handleLinkClick = () => {
    setIsMobileMenuOpen(false);
  };

  useEffect(() => {
    const handleOutsideClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (isMobileMenuOpen && !target.closest('.nav-container')) {
        setIsMobileMenuOpen(false);
      }
    };
    document.addEventListener('click', handleOutsideClick);
    return () => document.removeEventListener('click', handleOutsideClick);
  }, [isMobileMenuOpen]);

  return (
    <header className="nav-header">
      <div className="nav-container">
        <a href="#home" className="brand-logo" onClick={handleLinkClick}>
          <div className="logo-box">R</div>
          <span>REJISHANTH</span>
        </a>

        <nav className={`nav-menu ${isMobileMenuOpen ? 'active' : ''}`}>
          {navLinks.map((link) => (
            <a
              key={link.id}
              href={link.href}
              className={activeSection === link.id ? 'active' : ''}
              onClick={handleLinkClick}
            >
              {link.name}
            </a>
          ))}
        </nav>

        <div className="nav-socials">
          <a
            href="/Rejishanth_CV.pdf"
            download="Rejishanth_CV.pdf"
            className="nav-cv-btn"
            target="_blank"
            rel="noopener noreferrer"
            title="Download CV"
          >
            <i className="fa-solid fa-download"></i>
            <span>CV</span>
          </a>
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
          <a href="mailto:rejishanth422@example.com" className="social-icon" aria-label="Email">
            <i className="fa-regular fa-envelope"></i>
          </a>

          <button
            className="theme-btn"
            onClick={onToggleTheme}
            aria-label="Toggle Theme"
            title="Toggle Theme"
          >
            <i className={`fa-solid ${theme === 'dark' ? 'fa-moon' : 'fa-sun'}`}></i>
          </button>

          <button
            className="mobile-toggle-btn"
            onClick={toggleMobileMenu}
            aria-label="Toggle Navigation Menu"
            aria-expanded={isMobileMenuOpen}
          >
            <i className={`fa-solid ${isMobileMenuOpen ? 'fa-xmark' : 'fa-bars'}`}></i>
          </button>
        </div>
      </div>
    </header>
  );
};
