import React from 'react';
import '../Reports.scss';

export default function CustomerInsights({ period, setPeriod, year, setYear }) {
  const topCustomers = [
    { name: 'Rose Garden Shop', orders: 45, spent: 18250, growth: 15.2 },
    { name: 'Lotus Flower Co.', orders: 38, spent: 15600, growth: 22.8 },
    { name: 'Marigold Nursery', orders: 32, spent: 13400, growth: -5.3 },
    { name: 'Jasmine Blooms', orders: 28, spent: 11800, growth: 8.7 },
    { name: 'Tulip Gardens', orders: 25, spent: 10200, growth: 12.4 }
  ];

  const customerSegments = [
    { segment: 'Premium', count: 45, revenue: 285000, percentage: 38 },
    { segment: 'Regular', count: 128, revenue: 320000, percentage: 42 },
    { segment: 'Occasional', count: 89, revenue: 150000, percentage: 20 }
  ];

  return (
    <div className="analytics-container">
      {/* Filters */}
      <div className="filters-row">
        <div className="filter-group">
          <label>Period</label>
          <select value={period} onChange={(e) => setPeriod(e.target.value)}>
            <option>Monthly</option>
            <option>Quarterly</option>
            <option>Yearly</option>
          </select>
        </div>
        <div className="filter-group">
          <label>Year</label>
          <select value={year} onChange={(e) => setYear(e.target.value)}>
            <option>2024</option>
            <option>2023</option>
            <option>2022</option>
          </select>
        </div>
        <div className="filter-actions">
          <button className="btn-export">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor">
              <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" strokeWidth="2"/>
              <polyline points="7 10 12 15 17 10" strokeWidth="2"/>
              <line x1="12" y1="15" x2="12" y2="3" strokeWidth="2"/>
            </svg>
            Export
          </button>
          <button className="btn-refresh">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor">
              <polyline points="23 4 23 10 17 10" strokeWidth="2"/>
              <polyline points="1 20 1 14 7 14" strokeWidth="2"/>
              <path d="M3.51 9a9 9 0 0 1 14.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0 0 20.49 15" strokeWidth="2"/>
            </svg>
            Refresh
          </button>
        </div>
      </div>

      {/* Metrics Cards */}
      <div className="metrics-grid">
        <div className="metric-card">
          <div className="metric-icon" style={{ background: '#dbeafe', color: '#2563eb' }}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor">
              <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" strokeWidth="2"/>
              <circle cx="9" cy="7" r="4" strokeWidth="2"/>
              <path d="M23 21v-2a4 4 0 0 0-3-3.87" strokeWidth="2"/>
              <path d="M16 3.13a4 4 0 0 1 0 7.75" strokeWidth="2"/>
            </svg>
          </div>
          <div className="metric-content">
            <div className="metric-change positive">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <polyline points="23 6 13.5 15.5 8.5 10.5 1 18" strokeWidth="2"/>
              </svg>
              +5.7%
            </div>
            <div className="metric-value">262</div>
            <div className="metric-label">Total Customers</div>
            <div className="metric-sublabel">Active customer base</div>
          </div>
        </div>

        <div className="metric-card">
          <div className="metric-icon" style={{ background: '#dcfce7', color: '#16a34a' }}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor">
              <path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" strokeWidth="2"/>
              <circle cx="8.5" cy="7" r="4" strokeWidth="2"/>
              <line x1="20" y1="8" x2="20" y2="14" strokeWidth="2"/>
              <line x1="23" y1="11" x2="17" y2="11" strokeWidth="2"/>
            </svg>
          </div>
          <div className="metric-content">
            <div className="metric-change positive">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <polyline points="23 6 13.5 15.5 8.5 10.5 1 18" strokeWidth="2"/>
              </svg>
              +18 new
            </div>
            <div className="metric-value">34</div>
            <div className="metric-label">New Customers</div>
            <div className="metric-sublabel">This month</div>
          </div>
        </div>

        <div className="metric-card">
          <div className="metric-icon" style={{ background: '#fae8ff', color: '#9333ea' }}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor">
              <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" strokeWidth="2"/>
            </svg>
          </div>
          <div className="metric-content">
            <div className="metric-change positive">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <polyline points="23 6 13.5 15.5 8.5 10.5 1 18" strokeWidth="2"/>
              </svg>
              +2.3%
            </div>
            <div className="metric-value">78.5%</div>
            <div className="metric-label">Retention Rate</div>
            <div className="metric-sublabel">Returning customers</div>
          </div>
        </div>

        <div className="metric-card">
          <div className="metric-icon" style={{ background: '#fef3c7', color: '#d97706' }}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor">
              <line x1="12" y1="1" x2="12" y2="23" strokeWidth="2"/>
              <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" strokeWidth="2"/>
            </svg>
          </div>
          <div className="metric-content">
            <div className="metric-change positive">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <polyline points="23 6 13.5 15.5 8.5 10.5 1 18" strokeWidth="2"/>
              </svg>
              +8.9%
            </div>
            <div className="metric-value">$2,885</div>
            <div className="metric-label">Avg Customer Value</div>
            <div className="metric-sublabel">Lifetime value</div>
          </div>
        </div>
      </div>

      {/* Charts Row */}
      <div className="charts-row">
        {/* Top Customers Table */}
        <div className="chart-card table-card">
          <div className="chart-header">
            <h3>Top Customers</h3>
          </div>
          <div className="chart-body">
            <div className="customer-table">
              <table>
                <thead>
                  <tr>
                    <th>Customer Name</th>
                    <th>Orders</th>
                    <th>Total Spent</th>
                    <th>Growth</th>
                  </tr>
                </thead>
                <tbody>
                  {topCustomers.map((customer, index) => (
                    <tr key={index}>
                      <td>
                        <div className="customer-cell">
                          <div className="customer-avatar">{customer.name.charAt(0)}</div>
                          <strong>{customer.name}</strong>
                        </div>
                      </td>
                      <td>{customer.orders} orders</td>
                      <td>${customer.spent.toLocaleString()}</td>
                      <td>
                        <span className={`growth-badge ${customer.growth > 0 ? 'positive' : 'negative'}`}>
                          {customer.growth > 0 ? '↑' : '↓'} {Math.abs(customer.growth)}%
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>

        {/* Customer Segments */}
        <div className="chart-card">
          <div className="chart-header">
            <h3>Customer Segments</h3>
          </div>
          <div className="chart-body">
            <div className="segment-chart">
              {customerSegments.map((segment, index) => (
                <div key={index} className="segment-bar-container">
                  <div className="segment-info">
                    <span className="segment-name">{segment.segment}</span>
                    <span className="segment-count">{segment.count} customers</span>
                  </div>
                  <div className="segment-bar-wrapper">
                    <div 
                      className={`segment-bar segment-${segment.segment.toLowerCase()}`}
                      style={{ width: `${segment.percentage}%` }}
                    >
                      <span className="segment-percentage">{segment.percentage}%</span>
                    </div>
                  </div>
                  <div className="segment-revenue">${(segment.revenue / 1000).toFixed(0)}K</div>
                </div>
              ))}
            </div>
            <div className="segment-summary">
              <div className="summary-item">
                <span>Premium Customers</span>
                <strong>Generate 38% of revenue</strong>
              </div>
              <div className="summary-item">
                <span>Average Orders/Customer</span>
                <strong>7.2 orders</strong>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Additional Insights */}
      <div className="charts-row">
        {/* Purchase Frequency */}
        <div className="chart-card">
          <div className="chart-header">
            <h3>Purchase Frequency</h3>
          </div>
          <div className="chart-body">
            <div className="frequency-grid">
              <div className="frequency-item">
                <div className="frequency-value">45</div>
                <div className="frequency-label">Weekly</div>
                <div className="frequency-bar" style={{ width: '75%', background: '#2d5016' }}></div>
              </div>
              <div className="frequency-item">
                <div className="frequency-value">128</div>
                <div className="frequency-label">Monthly</div>
                <div className="frequency-bar" style={{ width: '100%', background: '#4a7c2c' }}></div>
              </div>
              <div className="frequency-item">
                <div className="frequency-value">89</div>
                <div className="frequency-label">Quarterly</div>
                <div className="frequency-bar" style={{ width: '60%', background: '#6b9944' }}></div>
              </div>
            </div>
          </div>
        </div>

        {/* Customer Satisfaction */}
        <div className="chart-card">
          <div className="chart-header">
            <h3>Customer Satisfaction</h3>
          </div>
          <div className="chart-body">
            <div className="satisfaction-display">
              <div className="satisfaction-score">
                <div className="score-circle">
                  <svg viewBox="0 0 100 100" className="score-svg">
                    <circle cx="50" cy="50" r="45" fill="none" stroke="#e5e7eb" strokeWidth="8"/>
                    <circle 
                      cx="50" cy="50" r="45" fill="none" 
                      stroke="#2d5016" strokeWidth="8"
                      strokeDasharray="282.74"
                      strokeDashoffset="56.55"
                      transform="rotate(-90 50 50)"
                    />
                  </svg>
                  <div className="score-value">4.8</div>
                </div>
                <div className="score-label">Average Rating</div>
              </div>
              <div className="rating-breakdown">
                <div className="rating-row">
                  <span>5 stars</span>
                  <div className="rating-bar">
                    <div style={{ width: '85%', background: '#16a34a' }}></div>
                  </div>
                  <span>85%</span>
                </div>
                <div className="rating-row">
                  <span>4 stars</span>
                  <div className="rating-bar">
                    <div style={{ width: '12%', background: '#84cc16' }}></div>
                  </div>
                  <span>12%</span>
                </div>
                <div className="rating-row">
                  <span>3 stars</span>
                  <div className="rating-bar">
                    <div style={{ width: '2%', background: '#eab308' }}></div>
                  </div>
                  <span>2%</span>
                </div>
                <div className="rating-row">
                  <span>1-2 stars</span>
                  <div className="rating-bar">
                    <div style={{ width: '1%', background: '#dc2626' }}></div>
                  </div>
                  <span>1%</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Sidebar */}
      <div className="sidebar-cards">
        <div className="sidebar-card">
          <div className="sidebar-header">
            <h3>Customer Insights</h3>
          </div>
          <div className="insight-list">
            <div className="insight-item">
              <div className="insight-icon">📊</div>
              <div className="insight-content">
                <div className="insight-title">Strong Retention</div>
                <div className="insight-text">
                  78.5% retention rate indicates high customer satisfaction and loyalty.
                </div>
              </div>
            </div>
            <div className="insight-item">
              <div className="insight-icon">💎</div>
              <div className="insight-content">
                <div className="insight-title">Premium Growth</div>
                <div className="insight-text">
                  Premium segment growing fastest. Focus on high-value offerings.
                </div>
              </div>
            </div>
            <div className="insight-item">
              <div className="insight-icon">🎯</div>
              <div className="insight-content">
                <div className="insight-title">Opportunity</div>
                <div className="insight-text">
                  Convert occasional buyers to regular customers with loyalty programs.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}