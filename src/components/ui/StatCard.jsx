import React from 'react';
import { motion } from 'framer-motion';
import { TrendingUp, TrendingDown } from 'lucide-react';
import Card from './Card';
import './StatCard.css';

const StatCard = ({ title, value, change, isPositive, icon }) => {
  return (
    <Card hover className="stat-card">
      <div className="stat-card-header">
        <span className="stat-card-title">{title}</span>
        {icon && <span className="stat-card-icon">{icon}</span>}
      </div>
      <div className="stat-card-body">
        <h3 className="stat-card-value">{value}</h3>
        {change && (
          <motion.div
            className={`stat-card-change ${isPositive ? 'positive' : 'negative'}`}
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
          >
            {isPositive ? <TrendingUp size={16} /> : <TrendingDown size={16} />}
            <span>{change}</span>
          </motion.div>
        )}
      </div>
    </Card>
  );
};

export default StatCard;

