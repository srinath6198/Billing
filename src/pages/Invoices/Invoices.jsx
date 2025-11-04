import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Invoices.css';

export default function Invoices() {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState('');
  const [filterStatus, setFilterStatus] = useState('all');
  const [invoices, setInvoices] = useState([
    {
      id: 1,
      invoiceNumber: 'INV-2024-001',
      customerName: 'Rose Garden Florist',
      date: '2024-01-15',
      dueDate: '2024-01-30',
      amount: 1250.50,
      status: 'paid',
      items: 5
    },
    {
      id: 2,
      invoiceNumber: 'INV-2024-002',
      customerName: 'Bloom Boutique',
      date: '2024-01-18',
      dueDate: '2024-02-02',
      amount: 890.75,
      status: 'pending',
      items: 3
    },
    {
      id: 3,
      invoiceNumber: 'INV-2024-003',
      customerName: 'Petals & Stems',
      date: '2024-01-20',
      dueDate: '2024-02-04',
      amount: 720.00,
      status: 'overdue',
      items: 4
    },
    {
      id: 4,
      invoiceNumber: 'INV-2024-004',
      customerName: 'Garden Party Events',
      date: '2024-01-22',
      dueDate: '2024-02-06',
      amount: 450.25,
      status: 'paid',
      items: 2
    },
    {
      id: 5,
      invoiceNumber: 'INV-2024-005',
      customerName: 'Rose Garden Florist',
      date: '2024-01-25',
      dueDate: '2024-02-09',
      amount: 1560.00,
      status: 'pending',
      items: 6
    }
  ]);

  const filteredInvoices = invoices.filter(invoice => {
    const matchesSearch = invoice.invoiceNumber.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         invoice.customerName.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesStatus = filterStatus === 'all' || invoice.status === filterStatus;
    return matchesSearch && matchesStatus;
  });

  const totalRevenue = invoices.filter(i => i.status === 'paid').reduce((sum, i) => sum + i.amount, 0);
  const pendingAmount = invoices.filter(i => i.status === 'pending').reduce((sum, i) => sum + i.amount, 0);
  const overdueAmount = invoices.filter(i => i.status === 'overdue').reduce((sum, i) => sum + i.amount, 0);

  const handleDeleteInvoice = (id) => {
    if (window.confirm('Are you sure you want to delete this invoice?')) {
      setInvoices(invoices.filter(i => i.id !== id));
    }
  };

  const handleViewInvoice = (id) => {
    console.log('View invoice:', id);
    // Navigate to invoice detail page
  };

  return (
    <div className="invoices-page">
      <div className="page-header">
        <div>
          <h1 className="page-title">Invoice Management</h1>
          <p className="page-subtitle">Manage and track all your invoices</p>
        </div>
        <button className="btn-primary" onClick={() => navigate('/create-invoice')}>
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor">
            <line x1="12" y1="5" x2="12" y2="19" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <line x1="5" y1="12" x2="19" y2="12" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
          Create Invoice
        </button>
      </div>

      <div className="page-content">
        <div className="invoices-stats">
          <div className="stat-card">
            <div className="stat-icon">📊</div>
            <div className="stat-info">
              <div className="stat-value">{invoices.length}</div>
              <div className="stat-label">Total Invoices</div>
            </div>
          </div>
          <div className="stat-card">
            <div className="stat-icon">💰</div>
            <div className="stat-info">
              <div className="stat-value">${totalRevenue.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</div>
              <div className="stat-label">Paid Revenue</div>
            </div>
          </div>
          <div className="stat-card">
            <div className="stat-icon">⏳</div>
            <div className="stat-info">
              <div className="stat-value">${pendingAmount.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</div>
              <div className="stat-label">Pending Amount</div>
            </div>
          </div>
          <div className="stat-card">
            <div className="stat-icon">⚠️</div>
            <div className="stat-info">
              <div className="stat-value">${overdueAmount.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</div>
              <div className="stat-label">Overdue Amount</div>
            </div>
          </div>
        </div>

        <div className="invoices-filters">
          <div className="search-bar">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor">
              <circle cx="11" cy="11" r="8" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="m21 21-4.35-4.35" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            <input
              type="text"
              placeholder="Search invoices by number or customer..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="search-input"
            />
          </div>
          <div className="status-filter">
            <label>Status:</label>
            <select value={filterStatus} onChange={(e) => setFilterStatus(e.target.value)}>
              <option value="all">All Status</option>
              <option value="paid">Paid</option>
              <option value="pending">Pending</option>
              <option value="overdue">Overdue</option>
            </select>
          </div>
        </div>

        <div className="invoices-table-container">
          <table className="invoices-table">
            <thead>
              <tr>
                <th>Invoice Number</th>
                <th>Customer</th>
                <th>Date</th>
                <th>Due Date</th>
                <th>Items</th>
                <th>Amount</th>
                <th>Status</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {filteredInvoices.map(invoice => (
                <tr key={invoice.id}>
                  <td>
                    <div className="invoice-number">{invoice.invoiceNumber}</div>
                  </td>
                  <td>
                    <div className="customer-cell">{invoice.customerName}</div>
                  </td>
                  <td>
                    <div className="date-cell">{new Date(invoice.date).toLocaleDateString()}</div>
                  </td>
                  <td>
                    <div className="date-cell">{new Date(invoice.dueDate).toLocaleDateString()}</div>
                  </td>
                  <td>
                    <div className="items-badge">{invoice.items}</div>
                  </td>
                  <td>
                    <div className="amount-cell">${invoice.amount.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</div>
                  </td>
                  <td>
                    <span className={`status-badge status-${invoice.status}`}>
                      {invoice.status}
                    </span>
                  </td>
                  <td>
                    <div className="action-buttons">
                      <button className="btn-icon" onClick={() => handleViewInvoice(invoice.id)} title="View">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                          <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                          <circle cx="12" cy="12" r="3" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                      </button>
                      <button className="btn-icon" title="Download">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                          <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                          <polyline points="7 10 12 15 17 10" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                          <line x1="12" y1="15" x2="12" y2="3" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                      </button>
                      <button className="btn-icon btn-danger" onClick={() => handleDeleteInvoice(invoice.id)} title="Delete">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                          <path d="M3 6h18" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                          <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

