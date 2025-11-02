import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MainLayout from './components/layout/MainLayout';
import OrderList from './pages/OrderList';
import ECommerce from './pages/ECommerce';
import './App.css';

function App() {
  return (
    <Router>
      <MainLayout>
        <Routes>
          <Route path="/" element={<OrderList />} />
          <Route path="/ecommerce" element={<ECommerce />} />
          <Route path="/projects" element={<div>Projects (Coming Soon)</div>} />
          <Route path="/courses" element={<div>Online Courses (Coming Soon)</div>} />
        </Routes>
      </MainLayout>
    </Router>
  );
}

export default App;
