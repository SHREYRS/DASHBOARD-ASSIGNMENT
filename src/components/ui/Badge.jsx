import React from 'react';
import './Badge.css';

const Badge = ({ children, variant = 'default', className = '' }) => {
  return (
    <span className={`badge badge-${variant} ${className}`}>
      <span className="badge-dot"></span>
      {children}
    </span>
  );
};

export default Badge;

