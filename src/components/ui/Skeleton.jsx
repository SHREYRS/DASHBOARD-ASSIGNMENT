import React from 'react';
import './Skeleton.css';

const Skeleton = ({ width = '100%', height = '20px', borderRadius = 'var(--radius-md)', className = '' }) => {
  return (
    <div
      className={`skeleton ${className}`}
      style={{
        width,
        height,
        borderRadius,
      }}
    />
  );
};

export default Skeleton;

