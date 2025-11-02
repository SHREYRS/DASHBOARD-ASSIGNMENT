import React from 'react';
import './Input.css';

const Input = ({
  type = 'text',
  placeholder,
  value,
  onChange,
  icon,
  iconPosition = 'left',
  className = '',
  ...props
}) => {
  return (
    <div className={`input-wrapper ${className}`}>
      {icon && iconPosition === 'left' && <span className="input-icon input-icon-left">{icon}</span>}
      <input
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className={`input ${icon ? `input-with-icon-${iconPosition}` : ''}`}
        {...props}
      />
      {icon && iconPosition === 'right' && <span className="input-icon input-icon-right">{icon}</span>}
    </div>
  );
};

export default Input;

