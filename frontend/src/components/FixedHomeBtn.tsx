import React from 'react';

export const FixedHomeBtn: React.FC = () => {
  return (
    <a
      href="#home"
      className="fixed-home-btn"
      id="fixedHomeBtn"
      aria-label="Go to Home"
      title="Go to Home"
    >
      <i className="fa-solid fa-house"></i>
    </a>
  );
};
