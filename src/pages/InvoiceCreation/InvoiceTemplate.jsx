import React from 'react';
import './InvoiceTemplate.css';

export default function InvoiceTemplate({ invoiceData, customer, onClose }) {
  if (!invoiceData || !customer) return null;

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    });
  };

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="invoice-template-overlay" onClick={onClose}>
      <div className="invoice-template-container" onClick={(e) => e.stopPropagation()}>
        <div className="invoice-template-actions">
          <button className="btn-close" onClick={onClose}>✕</button>
          <button className="btn-print" onClick={handlePrint}>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor">
              <path d="M6 9V2h12v7" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M6 14h12v8H6z" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            Print Invoice
          </button>
        </div>

        <div className="invoice-template">
          {/* Invoice Header */}
          <div className="invoice-header">
            <div className="invoice-header-left">
              <div className="company-logo">
                <div className="logo-icon-large">🌺</div>
              </div>
              <div className="company-info">
                <h1 className="company-name">FlowerFarm Billing</h1>
                <p className="company-tagline">Fresh Flowers, Beautiful Moments</p>
              </div>
            </div>
            <div className="invoice-header-right">
              <div className="invoice-title">INVOICE</div>
              <div className="invoice-number-badge">#{invoiceData.invoiceNumber}</div>
            </div>
          </div>

          {/* Invoice Details Section */}
          <div className="invoice-details-section">
            <div className="invoice-details-left">
              <div className="detail-group">
                <label>Bill To:</label>
                <div className="customer-details">
                  <div className="customer-name">{customer.name}</div>
                  <div className="customer-email">{customer.email}</div>
                </div>
              </div>
            </div>
            <div className="invoice-details-right">
              <div className="detail-row">
                <span className="detail-label">Invoice Date:</span>
                <span className="detail-value">{formatDate(invoiceData.date)}</span>
              </div>
              <div className="detail-row">
                <span className="detail-label">Payment Method:</span>
                <span className="detail-value">{invoiceData.paymentMethod?.toUpperCase() || 'CASH'}</span>
              </div>
              <div className="detail-row">
                <span className="detail-label">Status:</span>
                <span className={`status-value status-${invoiceData.status || 'paid'}`}>
                  {invoiceData.status?.toUpperCase() || 'PAID'}
                </span>
              </div>
            </div>
          </div>

          {/* Items Table */}
          <div className="invoice-items-section">
            <table className="invoice-items-table">
              <thead>
                <tr>
                  <th className="col-sno">#</th>
                  <th className="col-item">Item Description</th>
                  <th className="col-qty">Quantity</th>
                  <th className="col-unit">Unit Price</th>
                  <th className="col-total">Total</th>
                </tr>
              </thead>
              <tbody>
                {invoiceData.items?.map((item, index) => (
                  <tr key={item.id || index}>
                    <td className="col-sno">{index + 1}</td>
                    <td className="col-item">
                      <div className="item-description">
                        <span className="item-icon">{item.image || '🌹'}</span>
                        <div className="item-details">
                          <div className="item-name">{item.productName}</div>
                          <div className="item-unit">{item.unit || 'unit'}</div>
                        </div>
                      </div>
                    </td>
                    <td className="col-qty">{item.quantity}</td>
                    <td className="col-unit">${item.unitPrice?.toFixed(2) || '0.00'}</td>
                    <td className="col-total">${item.total?.toFixed(2) || '0.00'}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Totals Section */}
          <div className="invoice-totals-section">
            <div className="totals-right">
              <div className="total-row">
                <span className="total-label">Subtotal:</span>
                <span className="total-value">${invoiceData.subtotal?.toFixed(2) || '0.00'}</span>
              </div>
              {invoiceData.discount > 0 && (
                <div className="total-row discount-row">
                  <span className="total-label">Discount ({invoiceData.discount}%):</span>
                  <span className="total-value discount-value">-${invoiceData.discountAmount?.toFixed(2) || '0.00'}</span>
                </div>
              )}
              <div className="total-row total-row-final">
                <span className="total-label-final">Grand Total:</span>
                <span className="total-value-final">${invoiceData.total?.toFixed(2) || '0.00'}</span>
              </div>
            </div>
          </div>

          {/* Payment Info */}
          <div className="invoice-payment-section">
            <div className="payment-info">
              <div className="payment-method">
                <strong>Payment Method:</strong> {invoiceData.paymentMethod?.toUpperCase() || 'CASH'}
              </div>
              <div className="payment-status">
                <strong>Status:</strong> 
                <span className={`payment-status-badge status-${invoiceData.status || 'paid'}`}>
                  {invoiceData.status?.toUpperCase() || 'PAID'}
                </span>
              </div>
            </div>
          </div>

          {/* Footer */}
          <div className="invoice-footer">
            <div className="footer-content">
              <div className="footer-section">
                <h4>Thank You for Your Business!</h4>
                <p>We appreciate your trust in FlowerFarm for your floral needs.</p>
              </div>
              <div className="footer-section">
                <h4>Contact Information</h4>
                <p>Email: info@flowerfarm.com</p>
                <p>Phone: +1 (555) 123-4567</p>
                <p>Address: 123 Farm Road, Flower City, FC 12345</p>
              </div>
              <div className="footer-section">
                <h4>Terms & Conditions</h4>
                <p>Payment due within 30 days of invoice date.</p>
                <p>All sales are final. Returns accepted within 7 days.</p>
              </div>
            </div>
            <div className="footer-bottom">
              <p>This is a computer-generated invoice. No signature required.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

