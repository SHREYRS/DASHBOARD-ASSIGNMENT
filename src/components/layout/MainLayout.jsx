import React, { useState } from 'react';
import Sidebar from './Sidebar';
import TopBar from './TopBar';
import './MainLayout.css';

const MainLayout = ({ children }) => {
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarCollapsed(!isSidebarCollapsed);
  };

  return (
    <div className="main-layout">
      <Sidebar isCollapsed={isSidebarCollapsed} />
      <div className={`main-content ${isSidebarCollapsed ? 'sidebar-collapsed' : ''}`}>
        <TopBar onToggleSidebar={toggleSidebar} />
        <main className="content-area">{children}</main>
      </div>
    </div>
  );
};

export default MainLayout;

