import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  LayoutDashboard,
  ShoppingCart,
  FolderKanban,
  GraduationCap,
  User,
  Users,
  Newspaper,
  Radio,
  ChevronDown,
} from 'lucide-react';
import './Sidebar.css';

const Sidebar = ({ isCollapsed }) => {
  const location = useLocation();
  const [expandedSections, setExpandedSections] = useState({
    dashboards: true,
    pages: false,
  });

  const toggleSection = (section) => {
    setExpandedSections((prev) => ({
      ...prev,
      [section]: !prev[section],
    }));
  };

  const menuItems = {
    favorites: [
      { name: 'Overview', path: '/', icon: LayoutDashboard },
      { name: 'Projects', path: '/projects', icon: FolderKanban },
    ],
    dashboards: [
      { name: 'Default', path: '/', icon: LayoutDashboard },
      { name: 'eCommerce', path: '/ecommerce', icon: ShoppingCart },
      { name: 'Projects', path: '/projects', icon: FolderKanban },
      { name: 'Online Courses', path: '/courses', icon: GraduationCap },
    ],
    pages: [
      { name: 'User Profile', path: '/profile', icon: User, hasSubmenu: true },
      { name: 'Account', path: '/account', icon: User },
      { name: 'Corporate', path: '/corporate', icon: Users },
      { name: 'Blog', path: '/blog', icon: Newspaper },
      { name: 'Social', path: '/social', icon: Radio },
    ],
  };

  const isActive = (path) => location.pathname === path;

  return (
    <motion.aside
      className={`sidebar ${isCollapsed ? 'sidebar-collapsed' : ''}`}
      initial={{ x: -240 }}
      animate={{ x: 0 }}
      transition={{ duration: 0.3 }}
    >
      {/* Logo */}
      <div className="sidebar-logo">
        <div className="logo-icon">
          <div className="logo-circle"></div>
        </div>
        {!isCollapsed && <span className="logo-text">ByeWind</span>}
      </div>

      {/* Navigation */}
      <nav className="sidebar-nav">
        {/* Favorites */}
        <div className="sidebar-section">
          <div className="sidebar-section-header">
            {!isCollapsed && <span className="sidebar-section-title">Favorites</span>}
            {!isCollapsed && <span className="sidebar-section-subtitle">Recently</span>}
          </div>
          <ul className="sidebar-menu">
            {menuItems.favorites.map((item) => (
              <li key={item.path}>
                <Link
                  to={item.path}
                  className={`sidebar-menu-item ${isActive(item.path) ? 'active' : ''}`}
                >
                  <item.icon size={20} />
                  {!isCollapsed && <span>{item.name}</span>}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Dashboards */}
        <div className="sidebar-section">
          <div
            className="sidebar-section-header clickable"
            onClick={() => toggleSection('dashboards')}
          >
            {!isCollapsed && <span className="sidebar-section-title">Dashboards</span>}
            {!isCollapsed && (
              <ChevronDown
                size={16}
                className={`section-chevron ${expandedSections.dashboards ? 'expanded' : ''}`}
              />
            )}
          </div>
          {expandedSections.dashboards && (
            <motion.ul
              className="sidebar-menu"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
            >
              {menuItems.dashboards.map((item) => (
                <li key={item.path}>
                  <Link
                    to={item.path}
                    className={`sidebar-menu-item ${isActive(item.path) ? 'active' : ''}`}
                  >
                    <item.icon size={20} />
                    {!isCollapsed && <span>{item.name}</span>}
                  </Link>
                </li>
              ))}
            </motion.ul>
          )}
        </div>

        {/* Pages */}
        <div className="sidebar-section">
          <div
            className="sidebar-section-header clickable"
            onClick={() => toggleSection('pages')}
          >
            {!isCollapsed && <span className="sidebar-section-title">Pages</span>}
            {!isCollapsed && (
              <ChevronDown
                size={16}
                className={`section-chevron ${expandedSections.pages ? 'expanded' : ''}`}
              />
            )}
          </div>
          {expandedSections.pages && (
            <motion.ul
              className="sidebar-menu"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
            >
              {menuItems.pages.map((item) => (
                <li key={item.path}>
                  <Link
                    to={item.path}
                    className={`sidebar-menu-item ${isActive(item.path) ? 'active' : ''}`}
                  >
                    <item.icon size={20} />
                    {!isCollapsed && (
                      <span className="flex items-center justify-between w-full">
                        {item.name}
                        {item.hasSubmenu && <ChevronDown size={14} />}
                      </span>
                    )}
                  </Link>
                </li>
              ))}
            </motion.ul>
          )}
        </div>
      </nav>
    </motion.aside>
  );
};

export default Sidebar;

