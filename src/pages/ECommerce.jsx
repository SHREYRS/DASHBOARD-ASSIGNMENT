import React from 'react';
import { motion } from 'framer-motion';
import Card from '../components/ui/Card';
import StatCard from '../components/ui/StatCard';
import BarChart from '../components/charts/BarChart';
import LineChart from '../components/charts/LineChart';
import DonutChart from '../components/charts/DonutChart';
import WorldMap from '../components/charts/WorldMap';
import Avatar from '../components/ui/Avatar';
import {
  ecommerceStats,
  projectionsData,
  revenueData,
  revenueByLocation,
  topSellingProducts,
  totalSalesData,
  notifications,
  activities,
  contacts,
} from '../data/mockData';
import './ECommerce.css';

const ECommerce = () => {
  return (
    <div className="ecommerce-page">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
      >
        <h1 className="page-title">eCommerce</h1>
      </motion.div>

      <div className="ecommerce-grid">
        {/* Left Column */}
        <div className="ecommerce-main">
          {/* Stats Cards */}
          <motion.div
            className="stats-grid"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: 0.1 }}
          >
            <StatCard
              title="Customers"
              value={ecommerceStats.customers.value}
              change={ecommerceStats.customers.change}
              isPositive={ecommerceStats.customers.isPositive}
            />
            <StatCard
              title="Orders"
              value={ecommerceStats.orders.value}
              change={ecommerceStats.orders.change}
              isPositive={ecommerceStats.orders.isPositive}
            />
            <StatCard
              title="Revenue"
              value={ecommerceStats.revenue.value}
              change={ecommerceStats.revenue.change}
              isPositive={ecommerceStats.revenue.isPositive}
            />
            <StatCard
              title="Growth"
              value={ecommerceStats.growth.value}
              change={ecommerceStats.growth.change}
              isPositive={ecommerceStats.growth.isPositive}
            />
          </motion.div>

          {/* Charts Row */}
          <div className="charts-row">
            {/* Projections vs Actuals */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.2 }}
              className="chart-card-wrapper"
            >
              <Card>
                <h3 className="card-title">Projections vs Actuals</h3>
                <BarChart data={projectionsData} height={250} />
              </Card>
            </motion.div>

            {/* Revenue by Location */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.25 }}
              className="chart-card-wrapper"
            >
              <Card>
                <h3 className="card-title">Revenue by Location</h3>
                <WorldMap locations={revenueByLocation} />
              </Card>
            </motion.div>
          </div>

          {/* Revenue Chart */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: 0.3 }}
          >
            <Card>
              <h3 className="card-title">Revenue</h3>
              <LineChart data={revenueData} height={300} />
            </Card>
          </motion.div>

          {/* Bottom Row */}
          <div className="bottom-row">
            {/* Top Selling Products */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.35 }}
              className="products-card-wrapper"
            >
              <Card>
                <h3 className="card-title">Top Selling Products</h3>
                <div className="products-table">
                  <div className="products-header">
                    <span>Name</span>
                    <span>Price</span>
                    <span>Quantity</span>
                    <span>Amount</span>
                  </div>
                  {topSellingProducts.map((product, index) => (
                    <div key={index} className="product-row">
                      <span className="product-name">{product.name}</span>
                      <span className="product-price">{product.price}</span>
                      <span className="product-quantity">{product.quantity}</span>
                      <span className="product-amount">{product.amount}</span>
                    </div>
                  ))}
                </div>
              </Card>
            </motion.div>

            {/* Total Sales */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.4 }}
              className="sales-card-wrapper"
            >
              <Card>
                <h3 className="card-title">Total Sales</h3>
                <DonutChart data={totalSalesData} height={280} />
              </Card>
            </motion.div>
          </div>
        </div>

        {/* Right Sidebar */}
        <motion.div
          className="ecommerce-sidebar"
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.3, delay: 0.2 }}
        >
          {/* Notifications */}
          <Card>
            <h3 className="card-title">Notifications</h3>
            <div className="notifications-list">
              {notifications.map((notification) => (
                <div key={notification.id} className="notification-item">
                  <div className="notification-icon">🐛</div>
                  <div className="notification-content">
                    <p className="notification-title">{notification.title}</p>
                    <span className="notification-time">{notification.time}</span>
                  </div>
                </div>
              ))}
            </div>
          </Card>

          {/* Activities */}
          <Card>
            <h3 className="card-title">Activities</h3>
            <div className="activities-list">
              {activities.map((activity) => (
                <div key={activity.id} className="activity-item">
                  <Avatar src={activity.user.avatar} alt={activity.user.name} size="sm" />
                  <div className="activity-content">
                    <p className="activity-action">{activity.action}</p>
                    <span className="activity-time">{activity.time}</span>
                  </div>
                </div>
              ))}
            </div>
          </Card>

          {/* Contacts */}
          <Card>
            <h3 className="card-title">Contacts</h3>
            <div className="contacts-list">
              {contacts.map((contact) => (
                <div key={contact.id} className="contact-item">
                  <Avatar src={contact.avatar} alt={contact.name} size="sm" />
                  <span className="contact-name">{contact.name}</span>
                </div>
              ))}
            </div>
          </Card>
        </motion.div>
      </div>
    </div>
  );
};

export default ECommerce;

