import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Plus, Filter, ArrowUpDown, MoreHorizontal, Calendar, ChevronLeft, ChevronRight } from 'lucide-react';
import Table from '../components/ui/Table';
import Badge from '../components/ui/Badge';
import Avatar from '../components/ui/Avatar';
import Button from '../components/ui/Button';
import Input from '../components/ui/Input';
import { orders } from '../data/mockData';
import './OrderList.css';

const OrderList = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;

  // Filter orders based on search
  const filteredOrders = orders.filter(
    (order) =>
      order.user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      order.project.toLowerCase().includes(searchTerm.toLowerCase()) ||
      order.id.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Pagination
  const totalPages = Math.ceil(filteredOrders.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const paginatedOrders = filteredOrders.slice(startIndex, startIndex + itemsPerPage);

  const getStatusVariant = (status) => {
    const statusMap = {
      'In Progress': 'in-progress',
      'Complete': 'complete',
      'Pending': 'pending',
      'Approved': 'approved',
      'Rejected': 'rejected',
    };
    return statusMap[status] || 'default';
  };

  return (
    <div className="order-list-page">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
      >
        <h1 className="page-title">Order List</h1>
      </motion.div>

      <motion.div
        className="order-list-container"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3, delay: 0.1 }}
      >
        {/* Toolbar */}
        <div className="order-list-toolbar">
          <div className="toolbar-left">
            <Button variant="primary" size="md" icon={<Plus size={18} />}>
              Add Order
            </Button>
            <Button variant="ghost" size="md" icon={<Filter size={18} />} className="btn-icon-only" />
            <Button variant="ghost" size="md" icon={<ArrowUpDown size={18} />} className="btn-icon-only" />
          </div>
          <div className="toolbar-right">
            <Input
              type="text"
              placeholder="Search"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="toolbar-search"
            />
          </div>
        </div>

        {/* Table */}
        <Table>
          <Table.Header>
            <Table.Row>
              <Table.Head>
                <input type="checkbox" className="table-checkbox" />
              </Table.Head>
              <Table.Head>Order ID</Table.Head>
              <Table.Head>User</Table.Head>
              <Table.Head>Project</Table.Head>
              <Table.Head>Address</Table.Head>
              <Table.Head>Date</Table.Head>
              <Table.Head>Status</Table.Head>
              <Table.Head></Table.Head>
            </Table.Row>
          </Table.Header>
          <Table.Body>
            {paginatedOrders.map((order, index) => (
              <Table.Row key={`${order.id}-${index}`}>
                <Table.Cell className="table-cell-checkbox">
                  <input type="checkbox" className="table-checkbox" />
                </Table.Cell>
                <Table.Cell>
                  <span className="order-id">{order.id}</span>
                </Table.Cell>
                <Table.Cell>
                  <div className="table-cell-user">
                    <Avatar src={order.user.avatar} alt={order.user.name} size="sm" />
                    <span className="table-cell-user-name">{order.user.name}</span>
                  </div>
                </Table.Cell>
                <Table.Cell>{order.project}</Table.Cell>
                <Table.Cell>{order.address}</Table.Cell>
                <Table.Cell>
                  <div className="table-cell-date">
                    <Calendar size={14} />
                    <span>{order.date}</span>
                  </div>
                </Table.Cell>
                <Table.Cell>
                  <Badge variant={getStatusVariant(order.status)}>{order.status}</Badge>
                </Table.Cell>
                <Table.Cell className="table-cell-actions">
                  <Button
                    variant="ghost"
                    size="sm"
                    icon={<MoreHorizontal size={18} />}
                    className="btn-icon-only"
                  />
                </Table.Cell>
              </Table.Row>
            ))}
          </Table.Body>
        </Table>

        {/* Pagination */}
        <div className="pagination">
          <Button
            variant="ghost"
            size="sm"
            icon={<ChevronLeft size={18} />}
            onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
            disabled={currentPage === 1}
          />
          {[...Array(totalPages)].map((_, index) => (
            <Button
              key={index}
              variant={currentPage === index + 1 ? 'primary' : 'ghost'}
              size="sm"
              onClick={() => setCurrentPage(index + 1)}
            >
              {index + 1}
            </Button>
          ))}
          <Button
            variant="ghost"
            size="sm"
            icon={<ChevronRight size={18} />}
            onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
            disabled={currentPage === totalPages}
          />
        </div>
      </motion.div>
    </div>
  );
};

export default OrderList;

