import React from 'react';

export const EKGPulse: React.FC = () => {
  return (
    <svg className="pulse-line-svg" viewBox="0 0 500 40" aria-hidden="true">
      <path
        className="pulse-path"
        d="M0,20 L180,20 L195,5 L210,35 L225,10 L240,28 L255,20 L500,20"
      />
    </svg>
  );
};
