import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  Search,
  Sun,
  Moon,
  Star,
  Clock,
  Bell,
  Menu,
  Sidebar as SidebarIcon,
} from 'lucide-react';
import { useTheme } from '../../context/ThemeContext';
import Button from '../ui/Button';
import Input from '../ui/Input';
import './TopBar.css';

const TopBar = ({ onToggleSidebar, breadcrumbs = [] }) => {
  const { theme, toggleTheme } = useTheme();
  const [showNotifications, setShowNotifications] = useState(false);

  return (
    <header className="topbar">
      <div className="topbar-left">
        <Button
          variant="ghost"
          size="md"
          icon={<SidebarIcon size={20} />}
          onClick={onToggleSidebar}
          className="btn-icon-only topbar-menu-btn"
        />
        
        {/* Breadcrumbs */}
        <div className="breadcrumbs">
          <Star size={16} className="breadcrumb-icon" />
          <span className="breadcrumb-divider">/</span>
          <span className="breadcrumb-text">Dashboards</span>
          <span className="breadcrumb-divider">/</span>
          <span className="breadcrumb-text breadcrumb-active">Default</span>
        </div>
      </div>

      <div className="topbar-center">
        <Input
          type="text"
          placeholder="Search"
          icon={<Search size={18} />}
          iconPosition="left"
          className="topbar-search"
        />
        <span className="topbar-search-shortcut">⌘/</span>
      </div>

      <div className="topbar-right">
        {/* Theme Toggle */}
        <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
          <Button
            variant="ghost"
            size="md"
            icon={theme === 'light' ? <Sun size={20} /> : <Moon size={20} />}
            onClick={toggleTheme}
            className="btn-icon-only"
          />
        </motion.div>

        {/* History */}
        <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
          <Button
            variant="ghost"
            size="md"
            icon={<Clock size={20} />}
            className="btn-icon-only"
          />
        </motion.div>

        {/* Notifications */}
        <div className="topbar-notifications">
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Button
              variant="ghost"
              size="md"
              icon={<Bell size={20} />}
              onClick={() => setShowNotifications(!showNotifications)}
              className="btn-icon-only"
            />
          </motion.div>
          <span className="notification-badge">3</span>
        </div>

        {/* Sidebar Toggle */}
        <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
          <Button
            variant="ghost"
            size="md"
            icon={<Menu size={20} />}
            className="btn-icon-only"
          />
        </motion.div>
      </div>
    </header>
  );
};

export default TopBar;

