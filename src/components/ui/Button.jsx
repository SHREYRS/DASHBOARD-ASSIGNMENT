import React, { useState } from 'react';
import { motion } from 'framer-motion';
import './Button.css';

const Button = ({
  children,
  variant = 'primary',
  size = 'md',
  icon,
  iconPosition = 'left',
  disabled = false,
  onClick,
  className = '',
  ...props
}) => {
  const [ripples, setRipples] = useState([]);
  const buttonClass = `btn btn-${variant} btn-${size} ${className}`;

  const createRipple = (event) => {
    const button = event.currentTarget;
    const rect = button.getBoundingClientRect();
    const size = Math.max(rect.width, rect.height);
    const x = event.clientX - rect.left - size / 2;
    const y = event.clientY - rect.top - size / 2;

    const newRipple = {
      x,
      y,
      size,
      id: Date.now(),
    };

    setRipples((prev) => [...prev, newRipple]);

    setTimeout(() => {
      setRipples((prev) => prev.filter((ripple) => ripple.id !== newRipple.id));
    }, 600);
  };

  const handleClick = (event) => {
    if (!disabled) {
      createRipple(event);
      onClick?.(event);
    }
  };

  return (
    <motion.button
      className={buttonClass}
      onClick={handleClick}
      disabled={disabled}
      whileHover={{ scale: disabled ? 1 : 1.05 }}
      whileTap={{ scale: disabled ? 1 : 0.95 }}
      transition={{ duration: 0.2, type: 'spring', stiffness: 400 }}
      {...props}
    >
      {icon && iconPosition === 'left' && (
        <motion.span
          className="btn-icon"
          whileHover={{ rotate: 15 }}
          transition={{ duration: 0.2 }}
        >
          {icon}
        </motion.span>
      )}
      {children}
      {icon && iconPosition === 'right' && (
        <motion.span
          className="btn-icon"
          whileHover={{ rotate: -15 }}
          transition={{ duration: 0.2 }}
        >
          {icon}
        </motion.span>
      )}

      {/* Ripple effects */}
      {ripples.map((ripple) => (
        <span
          key={ripple.id}
          className="btn-ripple"
          style={{
            left: ripple.x,
            top: ripple.y,
            width: ripple.size,
            height: ripple.size,
          }}
        />
      ))}
    </motion.button>
  );
};

export default Button;

