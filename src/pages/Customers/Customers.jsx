import React, { useState } from 'react';
import './Customers.css';
import { useCustomers } from '../../hooks/customerQuery';

export default function Customers() {
  const {
  customersQuery,
  createCustomerMutation,
  updateCustomerMutation,
  deleteCustomerMutation
} = useCustomers();
  const [searchTerm, setSearchTerm] = useState('');
  const [showAddModal, setShowAddModal] = useState(false);
const customers = customersQuery.data?.data || [];
 console.log(customers,'customers')

  const [newCustomer, setNewCustomer] = useState({
    name: '',
    email: '',
    phone: '',
    address: '',
    createAmount: 0,
    advanceAmount: 0
  });

  const [editingCustomer, setEditingCustomer] = useState(null);

  const filteredCustomers = customers?.filter(customer =>
    customer?.name?.toLowerCase()?.includes(searchTerm?.toLowerCase()) ||
    customer?.email?.toLowerCase()?.includes(searchTerm?.toLowerCase()) ||
    customer?.phone?.includes(searchTerm)
  );

  const handleAddCustomer = async (e) => {
  e.preventDefault();
  createCustomerMutation.mutate(newCustomer, {
    onSuccess: () => {
      setShowAddModal(false);
      setNewCustomer({
        name: '',
        email: '',
        phone: '',
        address: '',
        createAmount: 0,
        advanceAmount: 0,
      });
    },
  });
};


  const handleEditCustomer = (customer) => {
    setEditingCustomer({ ...customer });
  };
  const handleUpdateCustomer = async (e) => {
  e.preventDefault();
  updateCustomerMutation.mutate(editingCustomer, {
    onSuccess: () => setEditingCustomer(null),
  });
};




const handleDeleteCustomer = async (id) => {
  if (window.confirm("Are you sure you want to delete this customer?")) {
    deleteCustomerMutation.mutate(id);
  }
};
if (customersQuery.isLoading) return <p>Loading customers...</p>;
if (customersQuery.isError) return <p>Error loading customers.</p>;


  return (
    <div className="customers-page">
      <div className="page-header">
        <div>
          <h1 className="page-title">Customer Management</h1>
          <p className="page-subtitle">Manage your flower farm customers</p>
        </div>
        <button className="btn-primary" onClick={() => setShowAddModal(true)}>
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor">
            <line x1="12" y1="5" x2="12" y2="19" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <line x1="5" y1="12" x2="19" y2="12" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
          Add Customer
        </button>
      </div>

      <div className="page-content">
        <div className="search-bar">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor">
            <circle cx="11" cy="11" r="8" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="m21 21-4.35-4.35" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
          <input
            type="text"
            placeholder="Search customers by name, email, or phone..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="search-input"
          />
        </div>

        <div className="customers-stats">
          <div className="stat-card">
            <div className="stat-icon">👥</div>
            <div className="stat-info">
              <div className="stat-value">{customers.length}</div>
              <div className="stat-label">Total Customers</div>
            </div>
          </div>
          <div className="stat-card">
            <div className="stat-icon">✅</div>
            <div className="stat-info">
              <div className="stat-value">{customers.filter(c => c.status === 'active').length}</div>
              <div className="stat-label">Active Customers</div>
            </div>
          </div>
          <div className="stat-card">
            <div className="stat-icon">💰</div>
            <div className="stat-info">
              <div className="stat-value">${customers.reduce((sum, c) => sum + c.totalSpent, 0).toLocaleString()}</div>
              <div className="stat-label">Total Revenue</div>
            </div>
          </div>
        </div>

        <div className="customers-table-container">
          <table className="customers-table">
            <thead>
              <tr>
                <th>Customer Name</th>
                <th>Contact Info</th>
                <th>Address</th>
                <th>Orders</th>
                <th>Total Sale</th>
                <th>Advance</th>
                <th>Remaining</th>
                <th>Status</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {filteredCustomers.map(customer => (
                <tr key={customer.customerId}>
                  <td>
                    <div className="customer-name-cell">
                      <div className="customer-avatar">{customer.name.charAt(0)}</div>
                      <div>
                        <div className="customer-name">{customer.name}</div>
                        <div className="customer-id">ID: {customer.customerId}</div>
                      </div>
                    </div>
                  </td>
                  <td>
                    <div className="contact-info">
                      <div>{customer.email}</div>
                      <div className="contact-phone">{customer.phone}</div>
                    </div>
                  </td>
                  <td>
                    <div className="address-cell">{customer.address?.country}</div>
                  </td>
                  <td>
                    <div className="orders-badge">{customer?.ordersCount}</div>
                  </td>
                  <td>
                    <div className="amount-cell">${(customer.createAmount || 0).toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</div>
                  </td>
                  <td>
                    <div className="amount-cell">${(customer.advanceAmount || 0).toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</div>
                  </td>
                  <td>
                    <div className={`amount-cell ${((customer.createAmount || 0) - (customer.advanceAmount || 0)) > 0 ? 'remaining-balance' : ''}`}>
                      ${((customer.createAmount || 0) - (customer.advanceAmount || 0)).toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
                    </div>
                  </td>
                  <td>
                    <span className={`status-badge status-${customer.status}`}>
                      {customer.status}
                    </span>
                  </td>
                  <td>
                    <div className="action-buttons">
                      <button className="btn-icon" onClick={() => handleEditCustomer(customer)} title="Edit">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                          <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                          <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                      </button>
                      <button className="btn-icon btn-danger" onClick={() => handleDeleteCustomer(customer.id)} title="Delete">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                          <path d="M3 6h18" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                          <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {showAddModal && (
        <div className="modal-overlay" onClick={() => setShowAddModal(false)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <div className="modal-header">
              <h2>Add New Customer</h2>
              <button className="modal-close" onClick={() => setShowAddModal(false)}>×</button>
            </div>
            <form onSubmit={handleAddCustomer}>
              <div className="form-group">
                <label>Customer Name *</label>
                <input
                  type="text"
                  value={newCustomer.name}
                  onChange={(e) => setNewCustomer({ ...newCustomer, name: e.target.value })}
                  required
                />
              </div>
              <div className="form-group">
                <label>Email Address *</label>
                <input
                  type="email"
                  value={newCustomer.email}
                  onChange={(e) => setNewCustomer({ ...newCustomer, email: e.target.value })}
                  required
                />
              </div>
              <div className="form-group">
                <label>Phone Number *</label>
                <input
                  type="tel"
                  value={newCustomer.phone}
                  onChange={(e) => setNewCustomer({ ...newCustomer, phone: e.target.value })}
                  required
                />
              </div>
              <div className="form-group">
                <label>Address</label>
                <textarea
                  value={newCustomer.address}
                  onChange={(e) => setNewCustomer({ ...newCustomer, address: e.target.value })}
                  rows="3"
                />
              </div>
              <div className="form-row">
                <div className="form-group">
                  <label>Create Amount (Total Sale) *</label>
                  <input
                    type="number"
                    step="0.01"
                    min="0"
                    value={newCustomer.createAmount}
                    onChange={(e) => setNewCustomer({ ...newCustomer, createAmount: e.target.value })}
                    required
                  />
                </div>
                <div className="form-group">
                  <label>Advance Amount</label>
                  <input
                    type="number"
                    step="0.01"
                    min="0"
                    value={newCustomer.advanceAmount}
                    onChange={(e) => setNewCustomer({ ...newCustomer, advanceAmount: e.target.value })}
                  />
                </div>
              </div>
              <div className="modal-actions">
                <button type="button" className="btn-secondary" onClick={() => setShowAddModal(false)}>Cancel</button>
                <button type="submit" className="btn-primary">Add Customer</button>
              </div>
            </form>
          </div>
        </div>
      )}

      {editingCustomer && (
        <div className="modal-overlay" onClick={() => setEditingCustomer(null)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <div className="modal-header">
              <h2>Edit Customer</h2>
              <button className="modal-close" onClick={() => setEditingCustomer(null)}>×</button>
            </div>
            <form onSubmit={handleUpdateCustomer}>
              <div className="form-group">
                <label>Customer Name *</label>
                <input
                  type="text"
                  value={editingCustomer.name}
                  onChange={(e) => setEditingCustomer({ ...editingCustomer, name: e.target.value })}
                  required
                />
              </div>
              <div className="form-group">
                <label>Email Address *</label>
                <input
                  type="email"
                  value={editingCustomer.email}
                  onChange={(e) => setEditingCustomer({ ...editingCustomer, email: e.target.value })}
                  required
                />
              </div>
              <div className="form-group">
                <label>Phone Number *</label>
                <input
                  type="tel"
                  value={editingCustomer.phone}
                  onChange={(e) => setEditingCustomer({ ...editingCustomer, phone: e.target.value })}
                  required
                />
              </div>
              {/* <div className="form-group">
                <label>Address</label>
                <textarea
                  value={editingCustomer.address}
                  onChange={(e) => setEditingCustomer({ ...editingCustomer, address: e.target.value })}
                  rows="3"
                />
              </div> */}
              <div className="form-row">
                <div className="form-group">
                  <label>Create Amount (Total Sale) *</label>
                  <input
                    type="number"
                    step="0.01"
                    min="0"
                    value={editingCustomer.createAmount}
                    onChange={(e) => setEditingCustomer({ ...editingCustomer, createAmount: e.target.value })}
                    required
                  />
                </div>
                <div className="form-group">
                  <label>Advance Amount</label>
                  <input
                    type="number"
                    step="0.01"
                    min="0"
                    value={editingCustomer.advanceAmount}
                    onChange={(e) => setEditingCustomer({ ...editingCustomer, advanceAmount: e.target.value })}
                  />
                </div>
              </div>
              <div className="modal-actions">
                <button type="button" className="btn-secondary" onClick={() => setEditingCustomer(null)}>Cancel</button>
                <button type="submit" className="btn-primary">Update Customer</button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}

