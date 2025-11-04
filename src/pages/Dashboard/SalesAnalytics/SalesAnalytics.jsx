import React from 'react';
import '../Reports.scss';

export default function SalesAnalytics({ period, setPeriod, year, setYear }) {
  const revenueData = [
    { month: 'Jan', revenue: 42000 },
    { month: 'Feb', revenue: 52000 },
    { month: 'Mar', revenue: 68000 },
    { month: 'Apr', revenue: 78000 },
    { month: 'May', revenue: 95000 },
    { month: 'Jun', revenue: 88000 },
    { month: 'Jul', revenue: 82000 },
    { month: 'Aug', revenue: 75000 },
    { month: 'Sep', revenue: 70000 },
    { month: 'Oct', revenue: 65000 },
    { month: 'Nov', revenue: 60000 }
  ];

  const maxRevenue = Math.max(...revenueData.map(d => d.revenue));

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
          <div className="metric-icon" style={{ background: '#dcfce7', color: '#16a34a' }}>
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
              +12.5%
            </div>
            <div className="metric-value">$756,000</div>
            <div className="metric-label">Total Revenue</div>
            <div className="metric-sublabel">Year to date revenue</div>
          </div>
        </div>

        <div className="metric-card">
          <div className="metric-icon" style={{ background: '#dbeafe', color: '#2563eb' }}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor">
              <circle cx="9" cy="21" r="1" strokeWidth="2"/>
              <circle cx="20" cy="21" r="1" strokeWidth="2"/>
              <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6" strokeWidth="2"/>
            </svg>
          </div>
          <div className="metric-content">
            <div className="metric-change positive">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <polyline points="23 6 13.5 15.5 8.5 10.5 1 18" strokeWidth="2"/>
              </svg>
              +8.3%
            </div>
            <div className="metric-value">1,890</div>
            <div className="metric-label">Total Orders</div>
            <div className="metric-sublabel">Orders processed</div>
          </div>
        </div>

        <div className="metric-card">
          <div className="metric-icon" style={{ background: '#dcfce7', color: '#16a34a' }}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor">
              <polyline points="23 6 13.5 15.5 8.5 10.5 1 18" strokeWidth="2"/>
              <polyline points="23 6 18 6 13.5 10.5" strokeWidth="2"/>
            </svg>
          </div>
          <div className="metric-content">
            <div className="metric-change positive">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <polyline points="23 6 13.5 15.5 8.5 10.5 1 18" strokeWidth="2"/>
              </svg>
              +5.2%
            </div>
            <div className="metric-value">$400</div>
            <div className="metric-label">Average Order Value</div>
            <div className="metric-sublabel">Per order average</div>
          </div>
        </div>

        <div className="metric-card">
          <div className="metric-icon" style={{ background: '#fef3c7', color: '#d97706' }}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor">
              <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" strokeWidth="2"/>
              <circle cx="9" cy="7" r="4" strokeWidth="2"/>
            </svg>
          </div>
          <div className="metric-content">
            <div className="metric-change negative">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <polyline points="23 18 13.5 8.5 8.5 13.5 1 6" strokeWidth="2"/>
              </svg>
              -2.1%
            </div>
            <div className="metric-value">78%</div>
            <div className="metric-label">Customer Retention</div>
            <div className="metric-sublabel">Returning customers</div>
          </div>
        </div>
      </div>

      {/* Charts Row */}
      <div className="charts-row">
        {/* Revenue Trend Chart */}
        <div className="chart-card">
          <div className="chart-header">
            <h3>Revenue Trend</h3>
            <div className="chart-legend">
              <span className="legend-item">
                <span className="legend-dot" style={{ background: '#2d5016' }}></span>
                Revenue
              </span>
              <span className="legend-item">
                <span className="legend-dot" style={{ background: '#f97316' }}></span>
                Orders
              </span>
            </div>
          </div>
          <div className="chart-body">
            <div className="bar-chart">
              {revenueData.map((item, index) => (
                <div key={index} className="bar-container">
                  <div 
                    className="bar" 
                    style={{ height: `${(item.revenue / maxRevenue) * 100}%` }}
                  >
                    <div className="bar-tooltip">${(item.revenue / 1000).toFixed(0)}K</div>
                  </div>
                  <div className="bar-label">{item.month}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Top Selling Products */}
        <div className="chart-card">
          <div className="chart-header">
            <h3>Top Selling Products</h3>
          </div>
          <div className="chart-body">
            <div className="donut-chart-container">
              <svg viewBox="0 0 200 200" className="donut-chart">
                <circle cx="100" cy="100" r="80" fill="none" stroke="#ef4444" strokeWidth="40" 
                  strokeDasharray="175.93 351.86" transform="rotate(-90 100 100)" />
                <circle cx="100" cy="100" r="80" fill="none" stroke="#f97316" strokeWidth="40" 
                  strokeDasharray="131.95 351.86" strokeDashoffset="-175.93" transform="rotate(-90 100 100)" />
                <circle cx="100" cy="100" r="80" fill="none" stroke="#2d5016" strokeWidth="40" 
                  strokeDasharray="105.56 351.86" strokeDashoffset="-307.88" transform="rotate(-90 100 100)" />
                <circle cx="100" cy="100" r="80" fill="none" stroke="#92400e" strokeWidth="40" 
                  strokeDasharray="63.34 351.86" strokeDashoffset="-413.44" transform="rotate(-90 100 100)" />
                <circle cx="100" cy="100" r="80" fill="none" stroke="#6b7280" strokeWidth="40" 
                  strokeDasharray="42.22 351.86" strokeDashoffset="-476.78" transform="rotate(-90 100 100)" />
              </svg>
            </div>
            <div className="product-legend">
              <div className="product-item">
                <span className="product-color" style={{ background: '#ef4444' }}></span>
                <span className="product-name">Roses</span>
                <span className="product-percentage">35%</span>
              </div>
              <div className="product-item">
                <span className="product-color" style={{ background: '#f97316' }}></span>
                <span className="product-name">Tulips</span>
                <span className="product-percentage">25%</span>
              </div>
              <div className="product-item">
                <span className="product-color" style={{ background: '#2d5016' }}></span>
                <span className="product-name">Lilies</span>
                <span className="product-percentage">20%</span>
              </div>
              <div className="product-item">
                <span className="product-color" style={{ background: '#92400e' }}></span>
                <span className="product-name">Carnations</span>
                <span className="product-percentage">12%</span>
              </div>
              <div className="product-item">
                <span className="product-color" style={{ background: '#6b7280' }}></span>
                <span className="product-name">Others</span>
                <span className="product-percentage">8%</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Sidebar */}
      <div className="sidebar-cards">
        <div className="sidebar-card">
          <div className="sidebar-header">
            <h3>Key Insights</h3>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor">
              <path d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 1 1 7.072 0l-.548.547A3.374 3.374 0 0 0 14 18.469V19a2 2 0 1 1-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" strokeWidth="2"/>
            </svg>
          </div>
          <div className="insight-list">
            <div className="insight-item">
              <div className="insight-icon">📈</div>
              <div className="insight-content">
                <div className="insight-title">Sales Growth</div>
                <div className="insight-text">
                  Revenue increased by 12.5% compared to last month, driven by strong Mother's Day sales.
                </div>
              </div>
            </div>
            <div className="insight-item">
              <div className="insight-icon">⚠️</div>
              <div className="insight-content">
                <div className="insight-title">Inventory Alert</div>
                <div className="insight-text">
                  White tulip stock is running low. Consider reordering to meet upcoming demand.
                </div>
              </div>
            </div>
            <div className="insight-item">
              <div className="insight-icon">👥</div>
              <div className="insight-content">
                <div className="insight-title">Customer Retention</div>
                <div className="insight-text">
                  78.5% retention rate shows strong customer loyalty. Focus on premium segment growth.
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="sidebar-card">
          <h3>Quick Stats</h3>
          <div className="quick-stat">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#16a34a">
              <line x1="12" y1="1" x2="12" y2="23" strokeWidth="2"/>
              <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" strokeWidth="2"/>
            </svg>
            <span>Today's Sales</span>
            <strong>$3,240</strong>
          </div>
          <div className="quick-stat">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#2563eb">
              <circle cx="9" cy="21" r="1" strokeWidth="2"/>
              <circle cx="20" cy="21" r="1" strokeWidth="2"/>
              <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6" strokeWidth="2"/>
            </svg>
            <span>Orders Today</span>
            <strong>18</strong>
          </div>
          <div className="quick-stat">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#d97706">
              <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" strokeWidth="2"/>
            </svg>
            <span>Low Stock Items</span>
            <strong>4</strong>
          </div>
          <div className="quick-stat">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#9333ea">
              <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" strokeWidth="2"/>
              <circle cx="9" cy="7" r="4" strokeWidth="2"/>
            </svg>
            <span>New Customers</span>
            <strong>7</strong>
          </div>
        </div>
      </div>
    </div>
  );
}