import React, { useState } from 'react';
import './Products.css';

export default function Products() {
  const [searchTerm, setSearchTerm] = useState('');
  const [filterCategory, setFilterCategory] = useState('all');
  const [showAddModal, setShowAddModal] = useState(false);
  const [products, setProducts] = useState([
    {
      id: 1,
      name: 'Red Roses',
      category: 'Roses',
      price: 25.99,
      stock: 150,
      unit: 'dozen',
      description: 'Premium red roses, perfect for special occasions',
      image: '🌹',
      status: 'active'
    },
    {
      id: 2,
      name: 'White Lilies',
      category: 'Lilies',
      price: 18.50,
      stock: 85,
      unit: 'bunch',
      description: 'Elegant white lilies, fresh and fragrant',
      image: '🤍',
      status: 'active'
    },
    {
      id: 3,
      name: 'Sunflowers',
      category: 'Seasonal',
      price: 15.99,
      stock: 200,
      unit: 'bunch',
      description: 'Bright and cheerful sunflowers',
      image: '🌻',
      status: 'active'
    },
    {
      id: 4,
      name: 'Tulips Mix',
      category: 'Bulbs',
      price: 12.99,
      stock: 120,
      unit: 'bunch',
      description: 'Mixed color tulips, spring favorite',
      image: '🌷',
      status: 'active'
    },
    {
      id: 5,
      name: 'Orchids',
      category: 'Exotic',
      price: 45.00,
      stock: 30,
      unit: 'plant',
      description: 'Exotic orchids, long-lasting blooms',
      image: '🌸',
      status: 'active'
    },
    {
      id: 6,
      name: 'Carnations',
      category: 'Carnations',
      price: 8.99,
      stock: 250,
      unit: 'bunch',
      description: 'Classic carnations, various colors',
      image: '💐',
      status: 'active'
    }
  ]);

  const [newProduct, setNewProduct] = useState({
    name: '',
    category: 'Roses',
    price: '',
    stock: '',
    unit: 'bunch',
    description: '',
    image: '🌹'
  });

  const categories = ['all', 'Roses', 'Lilies', 'Seasonal', 'Bulbs', 'Exotic', 'Carnations'];

  const filteredProducts = products.filter(product => {
    const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         product.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = filterCategory === 'all' || product.category === filterCategory;
    return matchesSearch && matchesCategory;
  });

  const handleAddProduct = (e) => {
    e.preventDefault();
    const product = {
      id: products.length + 1,
      ...newProduct,
      price: parseFloat(newProduct.price),
      stock: parseInt(newProduct.stock),
      status: 'active'
    };
    setProducts([...products, product]);
    setNewProduct({ name: '', category: 'Roses', price: '', stock: '', unit: 'bunch', description: '', image: '🌹' });
    setShowAddModal(false);
  };

  const handleDeleteProduct = (id) => {
    if (window.confirm('Are you sure you want to delete this product?')) {
      setProducts(products.filter(p => p.id !== id));
    }
  };

  const totalValue = products.reduce((sum, p) => sum + (p.price * p.stock), 0);

  return (
    <div className="products-page">
      <div className="page-header">
        <div>
          <h1 className="page-title">Product Catalog</h1>
          <p className="page-subtitle">Manage your flower farm inventory</p>
        </div>
        <button className="btn-primary" onClick={() => setShowAddModal(true)}>
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor">
            <line x1="12" y1="5" x2="12" y2="19" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <line x1="5" y1="12" x2="19" y2="12" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
          Add Product
        </button>
      </div>

      <div className="page-content">
        <div className="products-filters">
          <div className="search-bar">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor">
              <circle cx="11" cy="11" r="8" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="m21 21-4.35-4.35" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            <input
              type="text"
              placeholder="Search products..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="search-input"
            />
          </div>
          <div className="category-filter">
            <label>Category:</label>
            <select value={filterCategory} onChange={(e) => setFilterCategory(e.target.value)}>
              {categories.map(cat => (
                <option key={cat} value={cat}>{cat === 'all' ? 'All Categories' : cat}</option>
              ))}
            </select>
          </div>
        </div>

        <div className="products-stats">
          <div className="stat-card">
            <div className="stat-icon">📦</div>
            <div className="stat-info">
              <div className="stat-value">{products.length}</div>
              <div className="stat-label">Total Products</div>
            </div>
          </div>
          <div className="stat-card">
            <div className="stat-icon">📊</div>
            <div className="stat-info">
              <div className="stat-value">{products.reduce((sum, p) => sum + p.stock, 0)}</div>
              <div className="stat-label">Total Stock</div>
            </div>
          </div>
          <div className="stat-card">
            <div className="stat-icon">💰</div>
            <div className="stat-info">
              <div className="stat-value">${totalValue.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</div>
              <div className="stat-label">Inventory Value</div>
            </div>
          </div>
        </div>

        <div className="products-grid">
          {filteredProducts.map(product => (
            <div key={product.id} className="product-card">
              <div className="product-image">{product.image}</div>
              <div className="product-info">
                <h3 className="product-name">{product.name}</h3>
                <div className="product-category">{product.category}</div>
                <p className="product-description">{product.description}</p>
                <div className="product-details">
                  <div className="product-detail-item">
                    <span className="detail-label">Price:</span>
                    <span className="detail-value">${product.price.toFixed(2)} / {product.unit}</span>
                  </div>
                  <div className="product-detail-item">
                    <span className="detail-label">Stock:</span>
                    <span className={`detail-value ${product.stock < 50 ? 'low-stock' : ''}`}>
                      {product.stock} {product.unit}
                    </span>
                  </div>
                </div>
                <div className="product-actions">
                  <button className="btn-icon" title="Edit">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                      <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </button>
                  <button className="btn-icon btn-danger" onClick={() => handleDeleteProduct(product.id)} title="Delete">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                      <path d="M3 6h18" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {showAddModal && (
        <div className="modal-overlay" onClick={() => setShowAddModal(false)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <div className="modal-header">
              <h2>Add New Product</h2>
              <button className="modal-close" onClick={() => setShowAddModal(false)}>×</button>
            </div>
            <form onSubmit={handleAddProduct}>
              <div className="form-group">
                <label>Product Name *</label>
                <input
                  type="text"
                  value={newProduct.name}
                  onChange={(e) => setNewProduct({ ...newProduct, name: e.target.value })}
                  required
                />
              </div>
              <div className="form-group">
                <label>Category *</label>
                <select
                  value={newProduct.category}
                  onChange={(e) => setNewProduct({ ...newProduct, category: e.target.value })}
                  required
                >
                  {categories.filter(c => c !== 'all').map(cat => (
                    <option key={cat} value={cat}>{cat}</option>
                  ))}
                </select>
              </div>
              <div className="form-row">
                <div className="form-group">
                  <label>Price *</label>
                  <input
                    type="number"
                    step="0.01"
                    value={newProduct.price}
                    onChange={(e) => setNewProduct({ ...newProduct, price: e.target.value })}
                    required
                  />
                </div>
                <div className="form-group">
                  <label>Unit *</label>
                  <select
                    value={newProduct.unit}
                    onChange={(e) => setNewProduct({ ...newProduct, unit: e.target.value })}
                    required
                  >
                    <option value="bunch">Bunch</option>
                    <option value="dozen">Dozen</option>
                    <option value="plant">Plant</option>
                    <option value="box">Box</option>
                  </select>
                </div>
              </div>
              <div className="form-group">
                <label>Stock *</label>
                <input
                  type="number"
                  value={newProduct.stock}
                  onChange={(e) => setNewProduct({ ...newProduct, stock: e.target.value })}
                  required
                />
              </div>
              <div className="form-group">
                <label>Description</label>
                <textarea
                  value={newProduct.description}
                  onChange={(e) => setNewProduct({ ...newProduct, description: e.target.value })}
                  rows="3"
                />
              </div>
              <div className="modal-actions">
                <button type="button" className="btn-secondary" onClick={() => setShowAddModal(false)}>Cancel</button>
                <button type="submit" className="btn-primary">Add Product</button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}

