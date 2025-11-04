import React, { useState } from 'react';
import './Reports.css';

export default function Reports() {
  const [activeTab, setActiveTab] = useState('overview');
  const [dateRange, setDateRange] = useState('month');

  const salesData = [
    { month: 'Jan', sales: 12500, orders: 45 },
    { month: 'Feb', sales: 15200, orders: 52 },
    { month: 'Mar', sales: 13800, orders: 48 },
    { month: 'Apr', sales: 16900, orders: 58 },
    { month: 'May', sales: 18200, orders: 62 },
    { month: 'Jun', sales: 19500, orders: 68 }
  ];

  const topProducts = [
    { name: 'Red Roses', sales: 12500, units: 450, revenue: 12500 },
    { name: 'White Lilies', sales: 8900, units: 320, revenue: 8900 },
    { name: 'Sunflowers', sales: 7200, units: 280, revenue: 7200 },
    { name: 'Tulips Mix', sales: 5600, units: 220, revenue: 5600 },
    { name: 'Orchids', sales: 4500, units: 95, revenue: 4500 }
  ];

  const topCustomers = [
    { name: 'Rose Garden Florist', orders: 45, total: 12500, status: 'active' },
    { name: 'Bloom Boutique', orders: 32, total: 8900, status: 'active' },
    { name: 'Petals & Stems', orders: 28, total: 7200, status: 'active' },
    { name: 'Garden Party Events', orders: 15, total: 4500, status: 'active' },
    { name: 'Floral Design Co', orders: 12, total: 3200, status: 'active' }
  ];

  // Customer Report Data (from customers with invoices)
  const customerReportData = [
    { name: 'Rose Garden Florist', totalPurchases: 12500, advanceAmount: 5000, remainingBalance: 7500 },
    { name: 'Bloom Boutique', totalPurchases: 8900, advanceAmount: 3500, remainingBalance: 5400 },
    { name: 'Petals & Stems', totalPurchases: 7200, advanceAmount: 2800, remainingBalance: 4400 },
    { name: 'Garden Party Events', totalPurchases: 4500, advanceAmount: 1500, remainingBalance: 3000 },
    { name: 'Floral Design Co', totalPurchases: 3200, advanceAmount: 1200, remainingBalance: 2000 }
  ];

  // Product Sales Flow Data
  const productSalesFlow = [
    { productName: 'Red Roses', quantitySold: 450, unitPrice: 25.99, totalSalesValue: 11695.50 },
    { productName: 'White Lilies', quantitySold: 320, unitPrice: 18.50, totalSalesValue: 5920.00 },
    { productName: 'Sunflowers', quantitySold: 280, unitPrice: 15.99, totalSalesValue: 4477.20 },
    { productName: 'Tulips Mix', quantitySold: 220, unitPrice: 12.99, totalSalesValue: 2857.80 },
    { productName: 'Orchids', quantitySold: 95, unitPrice: 45.00, totalSalesValue: 4275.00 },
    { productName: 'Carnations', quantitySold: 180, unitPrice: 8.99, totalSalesValue: 1618.20 }
  ];

  const totalRevenue = salesData.reduce((sum, d) => sum + d.sales, 0);
  const totalOrders = salesData.reduce((sum, d) => sum + d.orders, 0);
  const averageOrderValue = totalRevenue / totalOrders;

  return (
    <div className="reports-page">
      <div className="page-header">
        <div>
          <h1 className="page-title">Reports & Analytics</h1>
          <p className="page-subtitle">Comprehensive insights into your flower farm business</p>
        </div>
        <div className="report-filters">
          <select
            value={dateRange}
            onChange={(e) => setDateRange(e.target.value)}
            className="filter-select"
          >
            <option value="week">Last Week</option>
            <option value="month">Last Month</option>
            <option value="quarter">Last Quarter</option>
            <option value="year">Last Year</option>
          </select>
          <button className="btn-secondary">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor">
              <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <polyline points="7 10 12 15 17 10" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <line x1="12" y1="15" x2="12" y2="3" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            Export
          </button>
        </div>
      </div>

      <div className="page-content">
        <div className="reports-tabs">
          <button 
            className={`tab-btn ${activeTab === 'overview' ? 'active' : ''}`}
            onClick={() => setActiveTab('overview')}
          >
            Overview
          </button>
          <button 
            className={`tab-btn ${activeTab === 'customers' ? 'active' : ''}`}
            onClick={() => setActiveTab('customers')}
          >
            Customer Report
          </button>
          <button 
            className={`tab-btn ${activeTab === 'products' ? 'active' : ''}`}
            onClick={() => setActiveTab('products')}
          >
            Product Sales Flow
          </button>
        </div>

        {activeTab === 'overview' && (
          <>
        <div className="reports-summary">
          <div className="summary-card">
            <div className="summary-icon">💰</div>
            <div className="summary-info">
              <div className="summary-value">${totalRevenue.toLocaleString()}</div>
              <div className="summary-label">Total Revenue</div>
            </div>
          </div>
          <div className="summary-card">
            <div className="summary-icon">📊</div>
            <div className="summary-info">
              <div className="summary-value">{totalOrders}</div>
              <div className="summary-label">Total Orders</div>
            </div>
          </div>
          <div className="summary-card">
            <div className="summary-icon">📦</div>
            <div className="summary-info">
              <div className="summary-value">${averageOrderValue.toFixed(2)}</div>
              <div className="summary-label">Average Order Value</div>
            </div>
          </div>
          <div className="summary-card">
            <div className="summary-icon">📈</div>
            <div className="summary-info">
              <div className="summary-value">+15.2%</div>
              <div className="summary-label">Growth Rate</div>
            </div>
          </div>
        </div>

        <div className="reports-grid">
          <div className="report-card">
            <h2 className="report-title">Sales Trend</h2>
            <div className="chart-container">
              <div className="simple-chart">
                {salesData.map((data, index) => (
                  <div key={index} className="chart-bar-wrapper">
                    <div className="chart-bar-label">{data.month}</div>
                    <div className="chart-bar-container">
                      <div
                        className="chart-bar"
                        style={{
                          height: `${(data.sales / 20000) * 100}%`,
                          backgroundColor: '#4a7c59'
                        }}
                        title={`$${data.sales.toLocaleString()}`}
                      />
                    </div>
                    <div className="chart-bar-value">${data.sales.toLocaleString()}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="report-card">
            <h2 className="report-title">Top Products</h2>
            <div className="table-container">
              <table className="report-table">
                <thead>
                  <tr>
                    <th>Product</th>
                    <th>Units Sold</th>
                    <th>Revenue</th>
                  </tr>
                </thead>
                <tbody>
                  {topProducts.map((product, index) => (
                    <tr key={index}>
                      <td>{product.name}</td>
                      <td>{product.units}</td>
                      <td>${product.revenue.toLocaleString()}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          <div className="report-card">
            <h2 className="report-title">Top Customers</h2>
            <div className="table-container">
              <table className="report-table">
                <thead>
                  <tr>
                    <th>Customer</th>
                    <th>Orders</th>
                    <th>Total Spent</th>
                    <th>Status</th>
                  </tr>
                </thead>
                <tbody>
                  {topCustomers.map((customer, index) => (
                    <tr key={index}>
                      <td>{customer.name}</td>
                      <td>{customer.orders}</td>
                      <td>${customer.total.toLocaleString()}</td>
                      <td>
                        <span className="status-badge status-active">{customer.status}</span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          <div className="report-card">
            <h2 className="report-title">Monthly Orders</h2>
            <div className="chart-container">
              <div className="simple-chart orders-chart">
                {salesData.map((data, index) => (
                  <div key={index} className="chart-bar-wrapper">
                    <div className="chart-bar-label">{data.month}</div>
                    <div className="chart-bar-container">
                      <div
                        className="chart-bar"
                        style={{
                          height: `${(data.orders / 70) * 100}%`,
                          backgroundColor: '#5d9b6d'
                        }}
                        title={`${data.orders} orders`}
                      />
                    </div>
                    <div className="chart-bar-value">{data.orders}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
        </>
        )}

        {activeTab === 'customers' && (
          <div className="report-card-full">
            <h2 className="report-title">Customer Report List</h2>
            <div className="table-container">
              <table className="report-table">
                <thead>
                  <tr>
                    <th>Customer Name</th>
                    <th>Total Purchases (from invoices)</th>
                    <th>Advance Amount</th>
                    <th>Remaining Balance</th>
                  </tr>
                </thead>
                <tbody>
                  {customerReportData.map((customer, index) => (
                    <tr key={index}>
                      <td><strong>{customer.name}</strong></td>
                      <td>${customer.totalPurchases.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</td>
                      <td>${customer.advanceAmount.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</td>
                      <td>
                        <span className={`balance-amount ${customer.remainingBalance > 0 ? 'positive' : 'zero'}`}>
                          ${customer.remainingBalance.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
                <tfoot>
                  <tr>
                    <td><strong>Total</strong></td>
                    <td><strong>${customerReportData.reduce((sum, c) => sum + c.totalPurchases, 0).toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</strong></td>
                    <td><strong>${customerReportData.reduce((sum, c) => sum + c.advanceAmount, 0).toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</strong></td>
                    <td><strong>${customerReportData.reduce((sum, c) => sum + c.remainingBalance, 0).toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</strong></td>
                  </tr>
                </tfoot>
              </table>
            </div>
          </div>
        )}

        {activeTab === 'products' && (
          <div className="report-card-full">
            <h2 className="report-title">Product Sales Flow (Sales Report)</h2>
            <div className="table-container">
              <table className="report-table">
                <thead>
                  <tr>
                    <th>Product Name</th>
                    <th>Quantity Sold</th>
                    <th>Unit Price</th>
                    <th>Total Sales Value</th>
                  </tr>
                </thead>
                <tbody>
                  {productSalesFlow.map((product, index) => (
                    <tr key={index}>
                      <td><strong>{product.productName}</strong></td>
                      <td>{product.quantitySold} units</td>
                      <td>${product.unitPrice.toFixed(2)}</td>
                      <td><strong>${product.totalSalesValue.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</strong></td>
                    </tr>
                  ))}
                </tbody>
                <tfoot>
                  <tr>
                    <td><strong>Total</strong></td>
                    <td><strong>{productSalesFlow.reduce((sum, p) => sum + p.quantitySold, 0)} units</strong></td>
                    <td></td>
                    <td><strong>${productSalesFlow.reduce((sum, p) => sum + p.totalSalesValue, 0).toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</strong></td>
                  </tr>
                </tfoot>
              </table>
            </div>
            <div className="chart-container" style={{ marginTop: '32px' }}>
              <h3 className="chart-title">Product Sales Chart</h3>
              <div className="simple-chart">
                {productSalesFlow.map((product, index) => (
                  <div key={index} className="chart-bar-wrapper">
                    <div className="chart-bar-label">{product.productName}</div>
                    <div className="chart-bar-container">
                      <div
                        className="chart-bar"
                        style={{
                          height: `${(product.totalSalesValue / 12000) * 100}%`,
                          backgroundColor: '#4a7c59'
                        }}
                        title={`$${product.totalSalesValue.toLocaleString()}`}
                      />
                    </div>
                    <div className="chart-bar-value">${product.totalSalesValue.toLocaleString()}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

