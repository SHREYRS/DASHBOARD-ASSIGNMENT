import React from 'react';
import { motion } from 'framer-motion';
import './Table.css';

const Table = ({ children, className = '' }) => {
  return (
    <div className="table-container">
      <table className={`table ${className}`}>{children}</table>
    </div>
  );
};

const TableHeader = ({ children }) => {
  return <thead className="table-header">{children}</thead>;
};

const TableBody = ({ children }) => {
  return <tbody className="table-body">{children}</tbody>;
};

const TableRow = ({ children, onClick, className = '', showActions = false }) => {
  const [isHovered, setIsHovered] = React.useState(false);

  const rowVariants = {
    initial: { opacity: 0, x: -20 },
    animate: { opacity: 1, x: 0 },
    hover: {
      backgroundColor: 'var(--bg-hover)',
      boxShadow: '0 2px 8px rgba(0, 0, 0, 0.04)',
    },
  };

  return (
    <motion.tr
      className={`table-row ${onClick ? 'table-row-clickable' : ''} ${className}`}
      onClick={onClick}
      variants={rowVariants}
      initial="initial"
      animate="animate"
      whileHover="hover"
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      transition={{ duration: 0.2, ease: 'easeOut' }}
    >
      {React.Children.map(children, (child) => {
        if (child?.props?.className?.includes('table-cell-actions')) {
          return React.cloneElement(child, { isHovered });
        }
        return child;
      })}
    </motion.tr>
  );
};

const TableHead = ({ children, className = '' }) => {
  return <th className={`table-head ${className}`}>{children}</th>;
};

const TableCell = ({ children, className = '', isHovered }) => {
  // If this is an actions cell, animate the children
  if (className?.includes('table-cell-actions')) {
    return (
      <td className={`table-cell ${className}`}>
        <motion.div
          className="table-actions-wrapper"
          initial={{ opacity: 0, x: 10 }}
          animate={{
            opacity: isHovered ? 1 : 0,
            x: isHovered ? 0 : 10,
          }}
          transition={{ duration: 0.2 }}
        >
          {children}
        </motion.div>
      </td>
    );
  }

  return <td className={`table-cell ${className}`}>{children}</td>;
};

Table.Header = TableHeader;
Table.Body = TableBody;
Table.Row = TableRow;
Table.Head = TableHead;
Table.Cell = TableCell;

export default Table;

