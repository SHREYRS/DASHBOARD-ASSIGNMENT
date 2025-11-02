import React from 'react';
import './Avatar.css';

const Avatar = ({ src, alt, size = 'md', className = '' }) => {
  const sizeClass = `avatar-${size}`;
  
  return (
    <div className={`avatar ${sizeClass} ${className}`}>
      <img src={src} alt={alt} />
    </div>
  );
};

export default Avatar;

