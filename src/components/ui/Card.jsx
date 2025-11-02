import React from 'react';
import { motion } from 'framer-motion';
import './Card.css';

const Card = ({ children, className = '', hover = false, ...props }) => {
  const cardVariants = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    hover: hover ? { y: -4, boxShadow: 'var(--shadow-lg)' } : {},
  };

  return (
    <motion.div
      className={`card ${className}`}
      variants={cardVariants}
      initial="initial"
      animate="animate"
      whileHover="hover"
      transition={{ duration: 0.2 }}
      {...props}
    >
      {children}
    </motion.div>
  );
};

export default Card;

