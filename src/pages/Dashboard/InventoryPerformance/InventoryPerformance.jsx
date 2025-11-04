import React from 'react';
import '../Reports.scss';

export default function InventoryPerformance({ period, setPeriod, year, setYear }) {
  const inventoryData = [
    { product: 'Red Roses', stock: 450, sold: 145, status: 'healthy', turnover: 32 },
    { product: 'White Tulips', stock: 45, sold: 98, status: 'low', turnover: 68 },
    { product: 'Lilies', stock: 320, sold: 87, status: 'healthy', turnover: 27 },
    { product: 'Sunflowers', stock: 280, sold: 76, status: 'healthy', turnover: 25 },
    { product: 'Carnations', stock: 520, sold: 64, status: 'overstocked', turnover: 12 },
    { product: 'Orchids', stock: 180, sold: 52, status: 'healthy', turnover: 29 },
    { product: 'Daisies', stock: 65, sold: 41, status: 'low', turnover: 63 },
    { product: 'Peonies', stock: 95, sold: 38, status: 'medium', turnover: 40 }
  ];

  const stockLevels = [
    { month: 'Jan', level: 85 },
    { month: 'Feb', level: 78 },
    { month: 'Mar', level: 92 },
    { month: 'Apr', level: 88 },
    { month: 'May', level: 65 },
    { month: 'Jun', level: 82 },
    { month: 'Jul', level: 75 },
    { month: 'Aug', level: 88 },
    { month: 'Sep', level: 90 },
    { month: 'Oct', level: 86 },
    { month: 'Nov', level: 83 }
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
              <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" strokeWidth="2"/>
            </svg>
          </div>
          <div className="metric-content">
            <div className="metric-change positive">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <polyline points="23 6 13.5 15.5 8.5 10.5 1 18" strokeWidth="2"/>
              </svg>
              +5.3%
            </div>
            <div className="metric-value">2,455</div>
            <div className="metric-label">Total SKUs</div>
            <div className="metric-sublabel">Active products</div>
          </div>
        </div>

        <div className="metric-card">
          <div className="metric-icon" style={{ background: '#dcfce7', color: '#16a34a' }}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor">
              <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" strokeWidth="2"/>
            </svg>
          </div>
          <div className="metric-content">
            <div className="metric-change positive">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <polyline points="23 6 13.5 15.5 8.5 10.5 1 18" strokeWidth="2"/>
              </svg>
              +12.8%
            </div>
            <div className="metric-value">32.5</div>
            <div className="metric-label">Avg Turnover Rate</div>
            <div className="metric-sublabel">Days to sell</div>
          </div>
        </div>

        <div className="metric-card">
          <div className="metric-icon" style={{ background: '#fef3c7', color: '#d97706' }}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor">
              <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z" strokeWidth="2"/>
              <line x1="12" y1="9" x2="12" y2="13" strokeWidth="2"/>
              <line x1="12" y1="17" x2="12.01" y2="17" strokeWidth="2"/>
            </svg>
          </div>
          <div className="metric-content">
            <div className="metric-change negative">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <polyline points="23 18 13.5 8.5 8.5 13.5 1 6" strokeWidth="2"/>
              </svg>
              4 Items
            </div>
            <div className="metric-value">1.6%</div>
            <div className="metric-label">Low Stock Items</div>
            <div className="metric-sublabel">Below threshold</div>
          </div>
        </div>

        <div className="metric-card">
          <div className="metric-icon" style={{ background: '#fee2e2', color: '#dc2626' }}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor">
              <circle cx="12" cy="12" r="10" strokeWidth="2"/>
              <line x1="12" y1="8" x2="12" y2="12" strokeWidth="2"/>
              <line x1="12" y1="16" x2="12.01" y2="16" strokeWidth="2"/>
            </svg>
          </div>
          <div className="metric-content">
            <div className="metric-change negative">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <polyline points="23 18 13.5 8.5 8.5 13.5 1 6" strokeWidth="2"/>
              </svg>
              -8.2%
            </div>
            <div className="metric-value">$18,450</div>
            <div className="metric-label">Stock Value</div>
            <div className="metric-sublabel">Total inventory worth</div>
          </div>
        </div>
      </div>

      {/* Inventory Table and Chart */}
      <div className="charts-row">
        {/* Inventory Status Table */}
        <div className="chart-card table-card">
          <div className="chart-header">
            <h3>Inventory Status</h3>
            <div className="table-actions">
              <input type="text" placeholder="Search products..." className="search-input" />
            </div>
          </div>
          <div className="chart-body">
            <div className="inventory-table">
              <table>
                <thead>
                  <tr>
                    <th>Product</th>
                    <th>In Stock</th>
                    <th>Sold (MTD)</th>
                    <th>Status</th>
                    <th>Turnover</th>
                  </tr>
                </thead>
                <tbody>
                  {inventoryData.map((item, index) => (
                    <tr key={index}>
                      <td className="product-cell">
                        <div className="product-name">{item.product}</div>
                      </td>
                      <td>{item.stock} units</td>
                      <td>{item.sold} units</td>
                      <td>
                        <span className={`status-badge status-${item.status}`}>
                          {item.status === 'healthy' && '✓ Healthy'}
                          {item.status === 'low' && '⚠ Low Stock'}
                          {item.status === 'medium' && '○ Medium'}
                          {item.status === 'overstocked' && '↑ Overstocked'}
                        </span>
                      </td>
                      <td>{item.turnover} days</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>

        {/* Stock Levels Chart */}
        <div className="chart-card">
          <div className="chart-header">
            <h3>Stock Level Trends</h3>
          </div>
          <div className="chart-body">
            <div className="line-chart">
              <svg viewBox="0 0 400 200" className="line-chart-svg">
                {/* Grid lines */}
                <line x1="40" y1="20" x2="40" y2="160" stroke="#e5e7eb" strokeWidth="1"/>
                <line x1="40" y1="160" x2="380" y2="160" stroke="#e5e7eb" strokeWidth="1"/>
                
                {/* Y-axis labels */}
                <text x="25" y="25" fontSize="10" fill="#6b7280">100</text>
                <text x="30" y="90" fontSize="10" fill="#6b7280">50</text>
                <text x="35" y="165" fontSize="10" fill="#6b7280">0</text>
                
                {/* Line path */}
                <path
                  d={`M 40,${160 - stockLevels[0].level * 1.4} ${stockLevels.map((d, i) => 
                    `L ${40 + (i + 1) * 30},${160 - d.level * 1.4}`
                  ).join(' ')}`}
                  fill="none"
                  stroke="#2d5016"
                  strokeWidth="3"
                  strokeLinecap="round"
                />
                
                {/* Data points */}
                {stockLevels.map((d, i) => (
                  <circle
                    key={i}
                    cx={40 + (i + 1) * 30}
                    cy={160 - d.level * 1.4}
                    r="4"
                    fill="#2d5016"
                  />
                ))}
                
                {/* X-axis labels */}
                {stockLevels.map((d, i) => (
                  <text
                    key={i}
                    x={40 + (i + 1) * 30}
                    y="180"
                    fontSize="10"
                    fill="#6b7280"
                    textAnchor="middle"
                  >
                    {d.month}
                  </text>
                ))}
              </svg>
            </div>
            <div className="chart-info">
              <p>Average stock level: <strong>83%</strong></p>
              <p>Optimal range: 70-90%</p>
            </div>
          </div>
        </div>
      </div>

      {/* Sidebar */}
      <div className="sidebar-cards">
        <div className="sidebar-card">
          <div className="sidebar-header">
            <h3>Inventory Alerts</h3>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor">
              <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9" strokeWidth="2"/>
              <path d="M13.73 21a2 2 0 0 1-3.46 0" strokeWidth="2"/>
            </svg>
          </div>
          <div className="alert-list">
            <div className="alert-item warning">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z" strokeWidth="2"/>
              </svg>
              <div>
                <strong>White Tulips</strong>
                <p>Only 45 units left. Reorder recommended.</p>
              </div>
            </div>
            <div className="alert-item warning">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z" strokeWidth="2"/>
              </svg>
              <div>
                <strong>Daisies</strong>
                <p>Stock running low. 65 units remaining.</p>
              </div>
            </div>
            <div className="alert-item info">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <circle cx="12" cy="12" r="10" strokeWidth="2"/>
                <line x1="12" y1="16" x2="12" y2="12" strokeWidth="2"/>
                <line x1="12" y1="8" x2="12.01" y2="8" strokeWidth="2"/>
              </svg>
              <div>
                <strong>Carnations</strong>
                <p>Overstocked. Consider promotional pricing.</p>
              </div>
            </div>
          </div>
        </div>

        <div className="sidebar-card">
          <h3>Reorder Recommendations</h3>
          <div className="reorder-list">
            <div className="reorder-item">
              <div className="reorder-product">
                <strong>White Tulips</strong>
                <span className="reorder-priority high">High Priority</span>
              </div>
              <p>Suggested order: 200 units</p>
              <button className="btn-reorder">Create Order</button>
            </div>
            <div className="reorder-item">
              <div className="reorder-product">
                <strong>Daisies</strong>
                <span className="reorder-priority medium">Medium Priority</span>
              </div>
              <p>Suggested order: 150 units</p>
              <button className="btn-reorder">Create Order</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}