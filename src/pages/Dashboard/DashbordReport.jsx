import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Reports.scss';

import SeasonalTrends from './SeasonalTrends/SeasonalTrends';
import SalesAnalytics from './SalesAnalytics/SalesAnalytics';
import InventoryPerformance from './InventoryPerformance/InventoryPerformance';
import CustomerInsights from './CustomerInsights/CustomerInsights';

export default function DashboardReport() {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('sales');
  const [period, setPeriod] = useState('Monthly');
  const [year, setYear] = useState('2024');

  const handleGenerateReport = () => {
    console.log('Generating report...', { activeTab, period, year });
    alert('Report generated successfully!');
  };

  const handleScheduleDelivery = () => {
    console.log('Schedule delivery clicked');
    alert('Schedule delivery feature coming soon!');
  };

  const handleExportData = () => {
    console.log('Exporting data...');
    alert('Data exported successfully!');
  };

  const handlePrintReport = () => {
    window.print();
  };

  const handleCustomizeReports = () => {
    navigate('/reports/customize');
  };

  return (
    <div className="reports-page">
      {/* Header */}
      <div className="reports-header">
        <div className="header-left">
          <h1 className="page-title">Reports & Analytics</h1>
          <p className="page-subtitle">
            Comprehensive business intelligence and performance insights for your flower farm operations
          </p>
        </div>
        <div className="header-right">
          <button className="btn-customize" onClick={handleCustomizeReports}>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor">
              <circle cx="12" cy="12" r="3" strokeWidth="2"/>
              <path d="M12 1v6m0 6v6m8.66-9l-5.2 3M8.54 14l-5.2 3m13.32 0l-5.2-3M8.54 10l-5.2-3" strokeWidth="2"/>
            </svg>
            Customize Reports
          </button>
          <div className="last-updated">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor">
              <circle cx="12" cy="12" r="10" strokeWidth="2"/>
              <polyline points="12 6 12 12 16 14" strokeWidth="2"/>
            </svg>
            <span>Last updated: 11/4/2025, 9:18:03 PM</span>
          </div>
        </div>
      </div>

      {/* Action Bar */}
      <div className="action-bar">
        <div className="action-left">
          <button className="btn-primary" onClick={handleGenerateReport}>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor">
              <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" strokeWidth="2"/>
              <polyline points="14 2 14 8 20 8" strokeWidth="2"/>
            </svg>
            Generate Report
          </button>
          <button className="btn-secondary" onClick={handleScheduleDelivery}>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor">
              <circle cx="12" cy="12" r="10" strokeWidth="2"/>
              <polyline points="12 6 12 12 16 14" strokeWidth="2"/>
            </svg>
            Schedule Delivery
          </button>
        </div>
        <div className="action-right">
          <button className="btn-icon">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor">
              <circle cx="11" cy="11" r="8" strokeWidth="2"/>
              <path d="m21 21-4.35-4.35" strokeWidth="2"/>
            </svg>
            Search
          </button>
          <button className="btn-icon" onClick={handleExportData}>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor">
              <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" strokeWidth="2"/>
              <polyline points="7 10 12 15 17 10" strokeWidth="2"/>
              <line x1="12" y1="15" x2="12" y2="3" strokeWidth="2"/>
            </svg>
            Export Data
          </button>
          <button className="btn-icon" onClick={handlePrintReport}>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor">
              <polyline points="6 9 6 2 18 2 18 9" strokeWidth="2"/>
              <path d="M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2" strokeWidth="2"/>
              <rect x="6" y="14" width="12" height="8" strokeWidth="2"/>
            </svg>
            Print Report
          </button>
        </div>
      </div>

      {/* Tabs */}
      <div className="reports-tabs">
        <button
          className={`tab-item ${activeTab === 'sales' ? 'active' : ''}`}
          onClick={() => setActiveTab('sales')}
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor">
            <line x1="18" y1="20" x2="18" y2="10" strokeWidth="2"/>
            <line x1="12" y1="20" x2="12" y2="4" strokeWidth="2"/>
            <line x1="6" y1="20" x2="6" y2="14" strokeWidth="2"/>
          </svg>
          Sales Analytics
        </button>
        <button
          className={`tab-item ${activeTab === 'inventory' ? 'active' : ''}`}
          onClick={() => setActiveTab('inventory')}
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor">
            <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" strokeWidth="2"/>
            <polyline points="3.27 6.96 12 12.01 20.73 6.96" strokeWidth="2"/>
            <line x1="12" y1="22.08" x2="12" y2="12" strokeWidth="2"/>
          </svg>
          Inventory Performance
        </button>
        <button
          className={`tab-item ${activeTab === 'customers' ? 'active' : ''}`}
          onClick={() => setActiveTab('customers')}
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor">
            <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" strokeWidth="2"/>
            <circle cx="9" cy="7" r="4" strokeWidth="2"/>
            <path d="M23 21v-2a4 4 0 0 0-3-3.87" strokeWidth="2"/>
            <path d="M16 3.13a4 4 0 0 1 0 7.75" strokeWidth="2"/>
          </svg>
          Customer Insights
        </button>
        <button
          className={`tab-item ${activeTab === 'seasonal' ? 'active' : ''}`}
          onClick={() => setActiveTab('seasonal')}
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor">
            <rect x="3" y="4" width="18" height="18" rx="2" ry="2" strokeWidth="2"/>
            <line x1="16" y1="2" x2="16" y2="6" strokeWidth="2"/>
            <line x1="8" y1="2" x2="8" y2="6" strokeWidth="2"/>
            <line x1="3" y1="10" x2="21" y2="10" strokeWidth="2"/>
          </svg>
          Seasonal Trends
        </button>
      </div>

      {/* Tab Content */}
      <div className="reports-content">
        {activeTab === 'sales' && (
          <SalesAnalytics period={period} setPeriod={setPeriod} year={year} setYear={setYear} />
        )}
        {activeTab === 'inventory' && (
          <InventoryPerformance period={period} setPeriod={setPeriod} year={year} setYear={setYear} />
        )}
        {activeTab === 'customers' && (
          <CustomerInsights period={period} setPeriod={setPeriod} year={year} setYear={setYear} />
        )}
        {activeTab === 'seasonal' && (
          <SeasonalTrends period={period} setPeriod={setPeriod} year={year} setYear={setYear} />
        )}
      </div>
    </div>
  );
}