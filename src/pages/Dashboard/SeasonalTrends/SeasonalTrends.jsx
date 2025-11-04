import React from 'react';
import '../Reports.scss';

export default function SeasonalTrends({ period, setPeriod, year, setYear }) {
  const seasonalData = [
    { month: 'Jan', sales: 52000, trend: 'low' },
    { month: 'Feb', sales: 78000, trend: 'high' }, // Valentine's
    { month: 'Mar', sales: 65000, trend: 'medium' },
    { month: 'Apr', sales: 72000, trend: 'medium' },
    { month: 'May', sales: 95000, trend: 'high' }, // Mother's Day
    { month: 'Jun', sales: 68000, trend: 'medium' },
    { month: 'Jul', sales: 58000, trend: 'low' },
    { month: 'Aug', sales: 55000, trend: 'low' },
    { month: 'Sep', sales: 62000, trend: 'medium' },
    { month: 'Oct', sales: 70000, trend: 'medium' },
    { month: 'Nov', sales: 68000, trend: 'medium' },
    { month: 'Dec', sales: 88000, trend: 'high' } // Christmas
  ];

  const peakSeasons = [
    { 
      name: 'Valentine\'s Day', 
      period: 'February', 
      impact: 85, 
      growth: 12.5,
      topProduct: 'Red Roses'
    },
    { 
      name: 'Mother\'s Day', 
      period: 'May', 
      impact: 95, 
      growth: 18.3,
      topProduct: 'Mixed Bouquets'
    },
    { 
      name: 'Christmas', 
      period: 'December', 
      impact: 88, 
      growth: 15.7,
      topProduct: 'Poinsettias'
    }
  ];

  const maxSales = Math.max(...seasonalData.map(d => d.sales));

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
              <polyline points="23 6 13.5 15.5 8.5 10.5 1 18" strokeWidth="2"/>
              <polyline points="23 6 18 6 13.5 10.5" strokeWidth="2"/>
            </svg>
          </div>
          <div className="metric-content">
            <div className="metric-change positive">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <polyline points="23 6 13.5 15.5 8.5 10.5 1 18" strokeWidth="2"/>
              </svg>
              Peak: May
            </div>
            <div className="metric-value">$95,000</div>
            <div className="metric-label">Highest Sales Month</div>
            <div className="metric-sublabel">Mother's Day season</div>
          </div>
        </div>

        <div className="metric-card">
          <div className="metric-icon" style={{ background: '#fee2e2', color: '#dc2626' }}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor">
              <polyline points="23 18 13.5 8.5 8.5 13.5 1 6" strokeWidth="2"/>
              <polyline points="23 18 18 18 13.5 13.5" strokeWidth="2"/>
            </svg>
          </div>
          <div className="metric-content">
            <div className="metric-change negative">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <polyline points="23 18 13.5 8.5 8.5 13.5 1 6" strokeWidth="2"/>
              </svg>
              Low: Aug
            </div>
            <div className="metric-value">$55,000</div>
            <div className="metric-label">Lowest Sales Month</div>
            <div className="metric-sublabel">Summer slowdown</div>
          </div>
        </div>

        <div className="metric-card">
          <div className="metric-icon" style={{ background: '#dbeafe', color: '#2563eb' }}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor">
              <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" strokeWidth="2"/>
            </svg>
          </div>
          <div className="metric-content">
            <div className="metric-change positive">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <polyline points="23 6 13.5 15.5 8.5 10.5 1 18" strokeWidth="2"/>
              </svg>
              42% variance
            </div>
            <div className="metric-value">73%</div>
            <div className="metric-label">Seasonality Index</div>
            <div className="metric-sublabel">Business fluctuation</div>
          </div>
        </div>

        <div className="metric-card">
          <div className="metric-icon" style={{ background: '#fef3c7', color: '#d97706' }}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor">
              <path d="M12 2v20M2 12h20" strokeWidth="2"/>
              <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" strokeWidth="2"/>
            </svg>
          </div>
          <div className="metric-content">
            <div className="metric-change positive">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <polyline points="23 6 13.5 15.5 8.5 10.5 1 18" strokeWidth="2"/>
              </svg>
              3 major
            </div>
            <div className="metric-value">$261K</div>
            <div className="metric-label">Peak Season Revenue</div>
            <div className="metric-sublabel">Top 3 months combined</div>
          </div>
        </div>
      </div>

      {/* Seasonal Chart */}
      <div className="charts-row single-chart">
        <div className="chart-card full-width">
          <div className="chart-header">
            <h3>Monthly Sales Trend</h3>
            <div className="chart-legend">
              <span className="legend-item">
                <span className="legend-dot high"></span>
                Peak Season
              </span>
              <span className="legend-item">
                <span className="legend-dot medium"></span>
                Medium Season
              </span>
              <span className="legend-item">
                <span className="legend-dot low"></span>
                Low Season
              </span>
            </div>
          </div>
          <div className="chart-body">
            <div className="seasonal-chart">
              {seasonalData.map((item, index) => (
                <div key={index} className="seasonal-bar-container">
                  <div 
                    className={`seasonal-bar trend-${item.trend}`}
                    style={{ height: `${(item.sales / maxSales) * 100}%` }}
                  >
                    <div className="bar-tooltip">${(item.sales / 1000).toFixed(0)}K</div>
                  </div>
                  <div className="bar-label">{item.month}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Peak Seasons Analysis */}
      <div className="charts-row">
        <div className="chart-card table-card full-width">
          <div className="chart-header">
            <h3>Peak Season Analysis</h3>
          </div>
          <div className="chart-body">
            <div className="peak-seasons-grid">
              {peakSeasons.map((season, index) => (
                <div key={index} className="peak-season-card">
                  <div className="peak-season-header">
                    <h4>{season.name}</h4>
                    <span className="peak-badge">Peak</span>
                  </div>
                  <div className="peak-season-content">
                    <div className="peak-stat">
                      <span className="peak-label">Period</span>
                      <span className="peak-value">{season.period}</span>
                    </div>
                    <div className="peak-stat">
                      <span className="peak-label">Sales Impact</span>
                      <span className="peak-value">{season.impact}%</span>
                    </div>
                    <div className="peak-stat">
                      <span className="peak-label">YoY Growth</span>
                      <span className="peak-value growth-positive">+{season.growth}%</span>
                    </div>
                    <div className="peak-stat">
                      <span className="peak-label">Top Product</span>
                      <span className="peak-value">{season.topProduct}</span>
                    </div>
                  </div>
                  <div className="peak-progress">
                    <div className="progress-bar" style={{ width: `${season.impact}%` }}></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Seasonal Recommendations */}
      <div className="charts-row">
        <div className="chart-card">
          <div className="chart-header">
            <h3>Upcoming Events</h3>
          </div>
          <div className="chart-body">
            <div className="events-list">
              <div className="event-item">
                <div className="event-date">
                  <div className="date-day">14</div>
                  <div className="date-month">Feb</div>
                </div>
                <div className="event-details">
                  <h4>Valentine's Day</h4>
                  <p>Expected sales: $78,000</p>
                  <span className="event-status upcoming">Prepare inventory</span>
                </div>
              </div>
              <div className="event-item">
                <div className="event-date">
                  <div className="date-day">12</div>
                  <div className="date-month">May</div>
                </div>
                <div className="event-details">
                  <h4>Mother's Day</h4>
                  <p>Expected sales: $95,000</p>
                  <span className="event-status upcoming">Plan ahead</span>
                </div>
              </div>
              <div className="event-item">
                <div className="event-date">
                  <div className="date-day">25</div>
                  <div className="date-month">Dec</div>
                </div>
                <div className="event-details">
                  <h4>Christmas</h4>
                  <p>Expected sales: $88,000</p>
                  <span className="event-status future">Future planning</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="chart-card">
          <div className="chart-header">
            <h3>Seasonal Recommendations</h3>
          </div>
          <div className="chart-body">
            <div className="recommendations-list">
              <div className="recommendation-item">
                <div className="recommendation-icon">📦</div>
                <div className="recommendation-content">
                  <h4>Stock Up for Valentine's</h4>
                  <p>Increase red rose inventory by 150% in January. Historical data shows 85% sell-through rate.</p>
                </div>
              </div>
              <div className="recommendation-item">
                <div className="recommendation-icon">💐</div>
                <div className="recommendation-content">
                  <h4>Mother's Day Prep</h4>
                  <p>Prepare mixed bouquet options early April. Consider pre-order campaigns for peak demand.</p>
                </div>
              </div>
              <div className="recommendation-item">
                <div className="recommendation-icon">🎯</div>
                <div className="recommendation-content">
                  <h4>Summer Strategy</h4>
                  <p>Focus on weddings and events during low season. Implement promotional pricing for bulk orders.</p>
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
            <h3>Seasonal Insights</h3>
          </div>
          <div className="insight-list">
            <div className="insight-item">
              <div className="insight-icon">📈</div>
              <div className="insight-content">
                <div className="insight-title">Peak Preparation</div>
                <div className="insight-text">
                  Valentine's Day approaches. Ensure 150% stock increase for red roses.
                </div>
              </div>
            </div>
            <div className="insight-item">
              <div className="insight-icon">🌞</div>
              <div className="insight-content">
                <div className="insight-title">Summer Opportunity</div>
                <div className="insight-text">
                  Target wedding market during low season to maintain steady revenue.
                </div>
              </div>
            </div>
            <div className="insight-item">
              <div className="insight-icon">🎄</div>
              <div className="insight-content">
                <div className="insight-title">Holiday Planning</div>
                <div className="insight-text">
                  Start Christmas inventory planning by October for optimal preparation.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}