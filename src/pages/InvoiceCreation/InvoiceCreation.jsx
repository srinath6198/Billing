import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import InvoiceTemplate from './InvoiceTemplate';
import './InvoiceCreation.css';

export default function InvoiceCreation() {
  const navigate = useNavigate();
  const [currentTime, setCurrentTime] = useState(new Date());
  const [selectedCategory, setSelectedCategory] = useState('Roses');
  const [selectedSubCategory, setSelectedSubCategory] = useState('General');
  const [cartItems, setCartItems] = useState([]);
  const [selectedCustomer, setSelectedCustomer] = useState('');
  const [paymentMethod, setPaymentMethod] = useState('');
  const [discount, setDiscount] = useState(0);
  const [searchTerm, setSearchTerm] = useState('');
  const [showInvoiceTemplate, setShowInvoiceTemplate] = useState(false);
  const [invoiceData, setInvoiceData] = useState(null);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const customers = [
    { id: 1, name: 'Rose Garden Florist', email: 'contact@rosegarden.com' },
    { id: 2, name: 'Bloom Boutique', email: 'hello@bloomboutique.com' },
    { id: 3, name: 'Petals & Stems', email: 'info@petalsstems.com' },
    { id: 4, name: 'Garden Party Events', email: 'events@gardenparty.com' }
  ];

  const categories = ['Roses', 'Lilies', 'Seasonal', 'Bulbs', 'Exotic', 'Carnations', 'Favorites'];
  const subCategories = ['General', 'Premium', 'Standard', 'Bulk'];

  const allProducts = [
    { id: 1, name: 'Red Roses', category: 'Roses', price: 25.99, unit: 'dozen', stock: 150, image: '🌹', subCategory: 'General' },
    { id: 2, name: 'White Lilies', category: 'Lilies', price: 18.50, unit: 'bunch', stock: 85, image: '🤍', subCategory: 'General' },
    { id: 3, name: 'Sunflowers', category: 'Seasonal', price: 15.99, unit: 'bunch', stock: 200, image: '🌻', subCategory: 'General' },
    { id: 4, name: 'Tulips Mix', category: 'Bulbs', price: 12.99, unit: 'bunch', stock: 120, image: '🌷', subCategory: 'General' },
    { id: 5, name: 'Orchids', category: 'Exotic', price: 45.00, unit: 'plant', stock: 30, image: '🌸', subCategory: 'Premium' },
    { id: 6, name: 'Carnations', category: 'Carnations', price: 8.99, unit: 'bunch', stock: 250, image: '💐', subCategory: 'Standard' },
    { id: 7, name: 'Pink Roses', category: 'Roses', price: 27.99, unit: 'dozen', stock: 100, image: '🌹', subCategory: 'Premium' },
    { id: 8, name: 'Yellow Lilies', category: 'Lilies', price: 20.50, unit: 'bunch', stock: 75, image: '🤍', subCategory: 'General' },
    { id: 9, name: 'Daisies', category: 'Seasonal', price: 10.99, unit: 'bunch', stock: 180, image: '🌼', subCategory: 'Standard' },
    { id: 10, name: 'Cherry Blossoms', category: 'Seasonal', price: 32.99, unit: 'bunch', stock: 60, image: '🌸', subCategory: 'Premium' }
  ];

  const filteredProducts = allProducts.filter(product => {
    const matchesCategory = product.category === selectedCategory;
    const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const handleAddToCart = (product) => {
    const existingItem = cartItems.find(item => item.productId === product.id);
    if (existingItem) {
      setCartItems(cartItems.map(item =>
        item.productId === product.id
          ? { ...item, quantity: item.quantity + 1, total: (item.quantity + 1) * item.unitPrice }
          : item
      ));
    } else {
      setCartItems([...cartItems, {
        id: Date.now(),
        productId: product.id,
        productName: product.name,
        unitPrice: product.price,
        quantity: 1,
        unit: product.unit,
        total: product.price,
        image: product.image
      }]);
    }
  };

  const handleUpdateQuantity = (itemId, newQuantity) => {
    if (newQuantity <= 0) {
      handleRemoveItem(itemId);
      return;
    }
    setCartItems(cartItems.map(item =>
      item.id === itemId
        ? { ...item, quantity: newQuantity, total: newQuantity * item.unitPrice }
        : item
    ));
  };

  const handleRemoveItem = (itemId) => {
    setCartItems(cartItems.filter(item => item.id !== itemId));
  };

  const calculateSubtotal = () => {
    return cartItems.reduce((sum, item) => sum + item.total, 0);
  };

  const calculateDiscountAmount = () => {
    return (calculateSubtotal() * discount) / 100;
  };

  const calculateNetAmount = () => {
    return calculateSubtotal() - calculateDiscountAmount();
  };

  const totalQuantity = cartItems.reduce((sum, item) => sum + item.quantity, 0);
  const totalItems = cartItems.length;

  const handleCheckout = () => {
    if (!selectedCustomer) {
      alert('Please select a customer');
      return;
    }
    if (cartItems.length === 0) {
      alert('Please add items to cart');
      return;
    }
    if (!paymentMethod) {
      alert('Please select a payment method');
      return;
    }

    const invoice = {
      invoiceNumber: `INV-${Date.now()}`,
      customerId: selectedCustomer,
      date: new Date().toISOString().split('T')[0],
      items: cartItems,
      subtotal: calculateSubtotal(),
      discount: discount,
      discountAmount: calculateDiscountAmount(),
      total: calculateNetAmount(),
      paymentMethod: paymentMethod,
      status: 'paid'
    };

    console.log('Invoice created:', invoice);
    
    // Store invoice data and show template
    setInvoiceData(invoice);
    setShowInvoiceTemplate(true);
  };

  const formatTime = (date) => {
    return date.toLocaleTimeString('en-US', { 
      hour: '2-digit', 
      minute: '2-digit', 
      second: '2-digit',
      hour12: true 
    });
  };

  const formatDate = (date) => {
    return date.toLocaleDateString('en-US', { 
      day: 'numeric', 
      month: 'short', 
      year: 'numeric' 
    });
  };

  return (
    <div className="pos-invoice-page">
      {/* Top Header Bar */}
      <div className="pos-top-header">
        <div className="header-left">
          <button className="header-icon-btn" onClick={() => navigate('/dashboard')}>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor">
              <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <polyline points="9 22 9 12 15 12 15 22" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
          <span className="header-time">{formatTime(currentTime)}</span>
        </div>
        <div className="header-center">
          <div className="search-bar-header">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor">
              <circle cx="11" cy="11" r="8" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="m21 21-4.35-4.35" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            <input
              type="text"
              placeholder="Search (SHIFT + S)"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="search-input-header"
            />
          </div>
        </div>
        <div className="header-right">
          <span className="header-date">{formatDate(currentTime)}</span>
        </div>
      </div>

      {/* Second Header Bar */}
      <div className="pos-second-header">
        <div className="second-header-left">
  
      
          <button className="create-pay-btn" onClick={handleCheckout}>
            CREATE PAY
          </button>
        </div>
        <div className="second-header-center">
          <span className="sales-count">Sales Count: {totalItems}</span>
        </div>
        <div className="second-header-right">
          <span className="net-amount">Net Amt: ${calculateNetAmount().toFixed(2)}</span>
         
        </div>
      </div>

      {/* Main Content Area */}
      <div className="pos-main-content">
        {/* Left Panel - Product Selection */}
        <div className="pos-left-panel">
          {/* Product Categories */}
          <div className="product-categories">
            {categories.map((category, index) => (
              <button
                key={index}
                className={`category-btn ${selectedCategory === category ? 'active' : ''}`}
                onClick={() => setSelectedCategory(category)}
              >
                {category}
              </button>
            ))}
          </div>

        
          {/* Product Grid */}
          <div className="product-grid">
            {filteredProducts.map(product => (
              <div
                key={product.id}
                className="product-card"
                onClick={() => handleAddToCart(product)}
              >
                <div className="product-image">{product.image}</div>
                <div className="product-info-card">
                  <div className="product-name-card">{product.name}</div>
                  <div className="product-price-card">${product.price.toFixed(2)} ({product.unit})</div>
                </div>
                {product.stock < 50 && (
                  <div className="stock-badge">{product.stock}</div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Right Panel - Invoice/Cart */}
        <div className="pos-right-panel">
          {/* Invoice Table Header */}
          <div className="invoice-table-header">
            <div className="invoice-col">Sl.No</div>
            <div className="invoice-col">Item Name</div>
            <div className="invoice-col">MRP</div>
            <div className="invoice-col">Qty</div>
            <div className="invoice-col">Rt</div>
            <div className="invoice-col">Amt</div>
            <div className="invoice-col">🗑️</div>
          </div>

          {/* Invoice Table Body */}
          <div className="invoice-table-body">
            {cartItems.length === 0 ? (
              <div className="empty-cart">No items added</div>
            ) : (
              cartItems.map((item, index) => (
                <div key={item.id} className="invoice-row">
                  <div className="invoice-col">{index + 1}</div>
                  <div className="invoice-col item-name-col">
                    <span className="item-emoji">{item.image}</span>
                    <span className="item-name-text">{item.productName}</span>
                  </div>
                  <div className="invoice-col">${item.unitPrice.toFixed(2)}</div>
                  <div className="invoice-col">
                    <input
                      type="number"
                      min="1"
                      value={item.quantity}
                      onChange={(e) => handleUpdateQuantity(item.id, parseInt(e.target.value) || 1)}
                      className="quantity-input"
                    />
                  </div>
                  <div className="invoice-col">${item.unitPrice.toFixed(2)}</div>
                  <div className="invoice-col">${item.total.toFixed(2)}</div>
                  <div className="invoice-col">
                    <button
                      className="delete-btn"
                      onClick={() => handleRemoveItem(item.id)}
                    >
                      🗑️
                    </button>
                  </div>
                </div>
              ))
            )}
          </div>

          {/* Customer Selection */}
          <div className="customer-section">
            <select
              className="customer-select"
              value={selectedCustomer}
              onChange={(e) => setSelectedCustomer(e.target.value)}
            >
              <option value="">Select Customer</option>
              {customers.map(customer => (
                <option key={customer.id} value={customer.id}>{customer.name}</option>
              ))}
            </select>
            <button className="add-customer-btn">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <circle cx="8.5" cy="7" r="4" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <line x1="20" y1="8" x2="20" y2="14" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <line x1="23" y1="11" x2="17" y2="11" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
          </div>

          {/* Discount */}
          {/* <div className="discount-section">
            <div className="discount-control">
              <label>₹/%:</label>
              <input
                type="number"
                min="0"
                max="100"
                step="0.1"
                value={discount}
                onChange={(e) => setDiscount(parseFloat(e.target.value) || 0)}
                className="discount-input"
                placeholder="Discount %"
              />
            </div>
          </div> */}

          {/* Payment Options */}
          <div className="payment-section">
            <div className="payment-icons">
              <button className="payment-icon-btn">💵</button>
              <button className="payment-icon-btn">🔄</button>
            </div>
            <div className="payment-buttons">
              <button
                className={`payment-btn cash-btn ${paymentMethod === 'cash' ? 'active' : ''}`}
                onClick={() => setPaymentMethod('cash')}
              >
                Cash
              </button>
              <button
                className={`payment-btn upi-btn ${paymentMethod === 'upi' ? 'active' : ''}`}
                onClick={() => setPaymentMethod('upi')}
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                UPI
              </button>
            </div>
          </div>

          {/* Summary and Checkout */}
          <div className="summary-section">
            <div className="summary-info">
              <span>Items: {totalItems}</span>
              <span>Qty: {totalQuantity}</span>
            </div>
            <button className="checkout-btn" onClick={handleCheckout}>
              ${calculateNetAmount().toFixed(2)}
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <polyline points="9 18 15 12 9 6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Invoice Template Modal */}
      {showInvoiceTemplate && invoiceData && (
        <InvoiceTemplate
          invoiceData={invoiceData}
          customer={customers.find(c => c.id === parseInt(selectedCustomer))}
          onClose={() => {
            setShowInvoiceTemplate(false);
            // Reset form after closing
            setCartItems([]);
            setSelectedCustomer('');
            setPaymentMethod('');
            setDiscount(0);
            setInvoiceData(null);
            // Navigate to invoices page
            setTimeout(() => {
              navigate('/invoices');
            }, 300);
          }}
        />
      )}
    </div>
  );
}
