import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Dashboard.css';

export default function Dashboard() {
  const navigate = useNavigate();
  return (
    <div className="dashboard-page">

      <div className="dashboard-container">
        {/* Page Header */}
        <div className="dashboard-header">
          <div>
            <h1 className="dashboard-title">Dashboard</h1>
            <p className="dashboard-subtitle">Welcome back! Here's what's happening with your farm today.</p>
          </div>
          <button className="btn-primary" onClick={() => navigate('/create-invoice')}>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor">
              <line x1="12" y1="5" x2="12" y2="19" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <line x1="5" y1="12" x2="19" y2="12" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            Create Invoice
          </button>
        </div>

        {/* Stats Cards */}
        <div className="stats-grid">
          <div className="stat-card">
            <div className="stat-header">
              <div className="stat-icon" style={{ background: '#dcfce7' }}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#16a34a">
                  <line x1="12" y1="1" x2="12" y2="23" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <span className="stat-change positive">+12.5%</span>
            </div>
            <div className="stat-content">
              <div className="stat-value">$124,580</div>
              <div className="stat-label">Total Revenue</div>
            </div>
          </div>

          <div className="stat-card">
            <div className="stat-header">
              <div className="stat-icon" style={{ background: '#dbeafe' }}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#2563eb">
                  <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <polyline points="14 2 14 8 20 8" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <span className="stat-change positive">+8.2%</span>
            </div>
            <div className="stat-content">
              <div className="stat-value">342</div>
              <div className="stat-label">Total Invoices</div>
            </div>
          </div>

          <div className="stat-card">
            <div className="stat-header">
              <div className="stat-icon" style={{ background: '#fef3c7' }}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#d97706">
                  <circle cx="9" cy="21" r="1" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <circle cx="20" cy="21" r="1" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <span className="stat-change negative">-3.1%</span>
            </div>
            <div className="stat-content">
              <div className="stat-value">245</div>
              <div className="stat-label">Products in Stock</div>
            </div>
          </div>

          <div className="stat-card">
            <div className="stat-header">
              <div className="stat-icon" style={{ background: '#fae8ff' }}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#9333ea">
                  <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <circle cx="9" cy="7" r="4" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M23 21v-2a4 4 0 0 0-3-3.87" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M16 3.13a4 4 0 0 1 0 7.75" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <span className="stat-change positive">+5.7%</span>
            </div>
            <div className="stat-content">
              <div className="stat-value">128</div>
              <div className="stat-label">Active Customers</div>
            </div>
          </div>
        </div>

        {/* Main Content Grid */}
        <div className="content-grid">
          {/* Recent Invoices */}
          <div className="content-card">
            <div className="card-header">
              <h2 className="card-title">Recent Invoices</h2>
              <a href="/invoices" className="card-link">View All</a>
            </div>
            <div className="card-body">
              <div className="invoice-list">
                <div className="invoice-item">
                  <div className="invoice-info">
                    <div className="invoice-id">INV-2024-001</div>
                    <div className="invoice-customer">Rose Garden Shop</div>
                  </div>
                  <div className="invoice-details">
                    <div className="invoice-amount">$8,450</div>
                    <span className="badge badge-success">Paid</span>
                  </div>
                </div>

                <div className="invoice-item">
                  <div className="invoice-info">
                    <div className="invoice-id">INV-2024-002</div>
                    <div className="invoice-customer">Lotus Flower Co.</div>
                  </div>
                  <div className="invoice-details">
                    <div className="invoice-amount">$12,350</div>
                    <span className="badge badge-warning">Pending</span>
                  </div>
                </div>

                <div className="invoice-item">
                  <div className="invoice-info">
                    <div className="invoice-id">INV-2024-003</div>
                    <div className="invoice-customer">Marigold Nursery</div>
                  </div>
                  <div className="invoice-details">
                    <div className="invoice-amount">$5,200</div>
                    <span className="badge badge-success">Paid</span>
                  </div>
                </div>

                <div className="invoice-item">
                  <div className="invoice-info">
                    <div className="invoice-id">INV-2024-004</div>
                    <div className="invoice-customer">Jasmine Blooms</div>
                  </div>
                  <div className="invoice-details">
                    <div className="invoice-amount">$9,800</div>
                    <span className="badge badge-danger">Overdue</span>
                  </div>
                </div>

                <div className="invoice-item">
                  <div className="invoice-info">
                    <div className="invoice-id">INV-2024-005</div>
                    <div className="invoice-customer">Tulip Gardens</div>
                  </div>
                  <div className="invoice-details">
                    <div className="invoice-amount">$15,600</div>
                    <span className="badge badge-success">Paid</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Top Products */}
          <div className="content-card">
            <div className="card-header">
              <h2 className="card-title">Top Products</h2>
              <a href="/products" className="card-link">View All</a>
            </div>
            <div className="card-body">
              <div className="product-list">
                <div className="product-item">
                  <div className="product-info">
                    <div className="product-icon">🌹</div>
                    <div>
                      <div className="product-name">Red Roses</div>
                      <div className="product-sales">145 sold</div>
                    </div>
                  </div>
                  <div className="product-revenue">$18,250</div>
                </div>

                <div className="product-item">
                  <div className="product-info">
                    <div className="product-icon">🌸</div>
                    <div>
                      <div className="product-name">Cherry Blossoms</div>
                      <div className="product-sales">98 sold</div>
                    </div>
                  </div>
                  <div className="product-revenue">$12,740</div>
                </div>

                <div className="product-item">
                  <div className="product-info">
                    <div className="product-icon">🌻</div>
                    <div>
                      <div className="product-name">Sunflowers</div>
                      <div className="product-sales">87 sold</div>
                    </div>
                  </div>
                  <div className="product-revenue">$10,440</div>
                </div>

                <div className="product-item">
                  <div className="product-info">
                    <div className="product-icon">🌺</div>
                    <div>
                      <div className="product-name">Hibiscus</div>
                      <div className="product-sales">76 sold</div>
                    </div>
                  </div>
                  <div className="product-revenue">$9,120</div>
                </div>

                <div className="product-item">
                  <div className="product-info">
                    <div className="product-icon">🌷</div>
                    <div>
                      <div className="product-name">Tulips</div>
                      <div className="product-sales">64 sold</div>
                    </div>
                  </div>
                  <div className="product-revenue">$8,960</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Activity & Quick Actions */}
        <div className="bottom-grid">
          <div className="content-card">
            <div className="card-header">
              <h2 className="card-title">Recent Activity</h2>
            </div>
            <div className="card-body">
              <div className="activity-list">
                <div className="activity-item">
                  <div className="activity-icon" style={{ background: '#dcfce7', color: '#16a34a' }}>
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                      <polyline points="20 6 9 17 4 12" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                  <div className="activity-content">
                    <div className="activity-text">Invoice <strong>INV-2024-001</strong> was paid</div>
                    <div className="activity-time">2 hours ago</div>
                  </div>
                </div>

                <div className="activity-item">
                  <div className="activity-icon" style={{ background: '#dbeafe', color: '#2563eb' }}>
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                      <line x1="12" y1="5" x2="12" y2="19" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      <line x1="5" y1="12" x2="19" y2="12" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                  <div className="activity-content">
                    <div className="activity-text">New customer <strong>Lotus Flower Co.</strong> added</div>
                    <div className="activity-time">5 hours ago</div>
                  </div>
                </div>

                <div className="activity-item">
                  <div className="activity-icon" style={{ background: '#fef3c7', color: '#d97706' }}>
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                      <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      <line x1="12" y1="9" x2="12" y2="13" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      <line x1="12" y1="17" x2="12.01" y2="17" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                  <div className="activity-content">
                    <div className="activity-text">Low stock alert for <strong>Red Roses</strong></div>
                    <div className="activity-time">1 day ago</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="content-card">
            <div className="card-header">
              <h2 className="card-title">Quick Actions</h2>
            </div>
            <div className="card-body">
              <div className="quick-actions">
                <button className="action-btn">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <polyline points="14 2 14 8 20 8" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  <span>New Invoice</span>
                </button>

                <button className="action-btn">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                    <path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <circle cx="8.5" cy="7" r="4" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <line x1="20" y1="8" x2="20" y2="14" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <line x1="23" y1="11" x2="17" y2="11" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  <span>Add Customer</span>
                </button>

                <button className="action-btn">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                    <line x1="12" y1="5" x2="12" y2="19" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <line x1="5" y1="12" x2="19" y2="12" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  <span>Add Product</span>
                </button>

                <button className="action-btn">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                    <line x1="18" y1="20" x2="18" y2="10" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <line x1="12" y1="20" x2="12" y2="4" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <line x1="6" y1="20" x2="6" y2="14" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  <span>View Reports</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}