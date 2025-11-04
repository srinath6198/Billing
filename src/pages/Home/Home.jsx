import React, { useState } from 'react';
import './Home.scss';

export default function Home() {
  const [showLoginModal, setShowLoginModal] = useState(false);
  const [showSignupModal, setShowSignupModal] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);

  const handleLogin = async () => {
    if (!email || !password) {
      alert("Please enter both email and password.");
      return;
    }

    try {
      const response = await fetch("/api/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password, rememberMe }),
      });

      const data = await response.json();

      if (response.ok) {
        alert('Login successful! Redirecting to dashboard...');
        setShowLoginModal(false);
        setEmail('');
        setPassword('');
        // Redirect to dashboard
      } else {
        alert(data.message || "Login failed. Please try again.");
      }
    } catch (error) {
      console.error("Login error:", error);
      alert("Something went wrong. Please try again later.");
    }
  };

  const handleSignup = async () => {
    if (!email || !password || !confirmPassword) {
      alert("Please fill in all fields.");
      return;
    }

    if (password !== confirmPassword) {
      alert("Passwords do not match.");
      return;
    }

    try {
      const response = await fetch("/api/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();

      if (response.ok) {
        alert("Account created successfully! You can now log in.");
        setShowSignupModal(false);
        setShowLoginModal(true);
        setEmail("");
        setPassword("");
        setConfirmPassword("");
      } else {
        alert(data.message || "Signup failed. Please try again.");
      }
    } catch (error) {
      console.error("Signup error:", error);
      alert("Something went wrong. Please try again later.");
    }
  };

  return (
    <div className="home-container">
      {/* Navigation */}
      <nav className="navbar">
        <div className="nav-content">
          <div className="logo">
            <div className="logo-icon">
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none">
                <path d="M12 2L2 7L12 12L22 7L12 2Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M2 17L12 22L22 17" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M2 12L12 17L22 12" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
            <span className="logo-text">FlowerFarm Billing</span>
          </div>
          <div className="nav-links">
            <a href="#home" className="nav-link">Home</a>
            <a href="#features" className="nav-link">Features</a>
            <a href="#pricing" className="nav-link">Pricing</a>
            <a href="#contact" className="nav-link">Contact</a>
            <button onClick={() => setShowLoginModal(true)} className="login-btn">
              Login
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <div className="hero-left">
            <h1 className="hero-title">
              Streamline Your <span className="highlight">Flower Farm</span> Business
            </h1>
            <p className="hero-subtitle">
              Complete billing solution for flower farms. Manage inventory, create invoices, track customers, and grow your business with our comprehensive management system.
            </p>
            <div className="hero-cta">
              <button onClick={() => setShowSignupModal(true)} className="primary-btn">
                Get Started Free
              </button>
              <button className="secondary-btn">
                Watch Demo
              </button>
            </div>
            <div className="stats">
              <div className="stat-item">
                <div className="stat-number">500+</div>
                <div className="stat-label">Active Farms</div>
              </div>
              <div className="stat-item">
                <div className="stat-number">50K+</div>
                <div className="stat-label">Invoices Generated</div>
              </div>
              <div className="stat-item">
                <div className="stat-number">99.9%</div>
                <div className="stat-label">Uptime</div>
              </div>
            </div>
          </div>
          <div className="hero-right">
            <div className="dashboard-preview">
              <div className="preview-header">
                <div className="preview-dot"></div>
                <div className="preview-dot"></div>
                <div className="preview-dot"></div>
              </div>
              <div className="preview-content">
                <div className="preview-card">
                  <div className="preview-icon">📊</div>
                  <div>
                    <div className="preview-title">Total Sales</div>
                    <div className="preview-value">₹24,580</div>
                  </div>
                </div>
                <div className="preview-card">
                  <div className="preview-icon">🌸</div>
                  <div>
                    <div className="preview-title">Products</div>
                    <div className="preview-value">145 Items</div>
                  </div>
                </div>
                <div className="preview-card">
                  <div className="preview-icon">👥</div>
                  <div>
                    <div className="preview-title">Customers</div>
                    <div className="preview-value">89 Active</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="features">
        <div className="section-content">
          <h2 className="section-title">Everything You Need to Run Your Farm</h2>
          <p className="section-subtitle">Powerful features designed specifically for flower farm businesses</p>

          <div className="feature-grid">
            <div className="feature-card">
              <div className="feature-icon">📝</div>
              <h3 className="feature-title">Invoice Management</h3>
              <p className="feature-text">Create professional invoices in seconds. Track payments, send reminders, and manage billing effortlessly.</p>
            </div>

            <div className="feature-card">
              <div className="feature-icon">📦</div>
              <h3 className="feature-title">Inventory Control</h3>
              <p className="feature-text">Real-time inventory tracking for all your flowers, plants, and supplies. Get low-stock alerts automatically.</p>
            </div>

            <div className="feature-card">
              <div className="feature-icon">👤</div>
              <h3 className="feature-title">Customer Database</h3>
              <p className="feature-text">Maintain detailed customer records, purchase history, and preferences in one centralized location.</p>
            </div>

            <div className="feature-card">
              <div className="feature-icon">📈</div>
              <h3 className="feature-title">Analytics & Reports</h3>
              <p className="feature-text">Gain insights with detailed sales reports, profit margins, and business analytics dashboards.</p>
            </div>

            <div className="feature-card">
              <div className="feature-icon">💳</div>
              <h3 className="feature-title">Payment Processing</h3>
              <p className="feature-text">Accept multiple payment methods. Integrated with major payment gateways for seamless transactions.</p>
            </div>

            <div className="feature-card">
              <div className="feature-icon">🔒</div>
              <h3 className="feature-title">Secure & Reliable</h3>
              <p className="feature-text">Bank-level encryption and daily backups ensure your business data is always safe and accessible.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="pricing">
        <div className="section-content">
          <h2 className="section-title">Simple, Transparent Pricing</h2>
          <p className="section-subtitle">Choose the plan that fits your farm size</p>

          <div className="pricing-grid">
            <div className="pricing-card">
              <h3 className="plan-name">Starter</h3>
              <div className="plan-price">
                <span className="currency">$</span>
                <span className="amount">29</span>
                <span className="period">/month</span>
              </div>
              <ul className="plan-features">
                <li className="plan-feature">✓ Up to 50 invoices/month</li>
                <li className="plan-feature">✓ 100 products</li>
                <li className="plan-feature">✓ 50 customers</li>
                <li className="plan-feature">✓ Basic reports</li>
                <li className="plan-feature">✓ Email support</li>
              </ul>
              <button onClick={() => setShowSignupModal(true)} className="plan-btn">Get Started</button>
            </div>

            <div className="pricing-card popular">
              <div className="popular-badge">MOST POPULAR</div>
              <h3 className="plan-name">Professional</h3>
              <div className="plan-price">
                <span className="currency">$</span>
                <span className="amount">79</span>
                <span className="period">/month</span>
              </div>
              <ul className="plan-features">
                <li className="plan-feature">✓ Unlimited invoices</li>
                <li className="plan-feature">✓ Unlimited products</li>
                <li className="plan-feature">✓ Unlimited customers</li>
                <li className="plan-feature">✓ Advanced analytics</li>
                <li className="plan-feature">✓ Priority support</li>
                <li className="plan-feature">✓ Multi-user access</li>
              </ul>
              <button onClick={() => setShowSignupModal(true)} className="plan-btn-primary">Get Started</button>
            </div>

            <div className="pricing-card">
              <h3 className="plan-name">Enterprise</h3>
              <div className="plan-price">
                <span className="amount">Custom</span>
              </div>
              <ul className="plan-features">
                <li className="plan-feature">✓ Everything in Pro</li>
                <li className="plan-feature">✓ Custom integrations</li>
                <li className="plan-feature">✓ Dedicated account manager</li>
                <li className="plan-feature">✓ Custom training</li>
                <li className="plan-feature">✓ 24/7 phone support</li>
                <li className="plan-feature">✓ SLA guarantee</li>
              </ul>
              <button className="plan-btn">Contact Sales</button>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="contact">
        <div className="contact-content">
          <h2 className="contact-title">Ready to Grow Your Business?</h2>
          <p className="contact-text">Join hundreds of flower farms using our platform</p>
          <button onClick={() => setShowSignupModal(true)} className="contact-btn">
            Start Your Free Trial
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="footer-content">
          <div className="footer-section">
            <h4 className="footer-title">FlowerFarm Billing</h4>
            <p className="footer-text">Professional billing solution for flower farms</p>
          </div>
          <div className="footer-section">
            <h4 className="footer-title">Product</h4>
            <a href="#" className="footer-link">Features</a>
            <a href="#" className="footer-link">Pricing</a>
            <a href="#" className="footer-link">Demo</a>
          </div>
          <div className="footer-section">
            <h4 className="footer-title">Support</h4>
            <a href="#" className="footer-link">Help Center</a>
            <a href="#" className="footer-link">Contact Us</a>
            <a href="#" className="footer-link">Status</a>
          </div>
          <div className="footer-section">
            <h4 className="footer-title">Company</h4>
            <a href="#" className="footer-link">About</a>
            <a href="#" className="footer-link">Blog</a>
            <a href="#" className="footer-link">Careers</a>
          </div>
        </div>
        <div className="footer-bottom">
          <p className="copyright">© 2025 FlowerFarm Billing. All rights reserved.</p>
        </div>
      </footer>

      {/* Login Modal */}
      {showLoginModal && (
        <div className="modal-overlay" onClick={() => setShowLoginModal(false)}>
          <div className="modal" onClick={(e) => e.stopPropagation()}>
            <button className="close-btn" onClick={() => setShowLoginModal(false)}>×</button>

            <div className="modal-header">
              <div className="modal-logo-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <path d="M12 2L2 7L12 12L22 7L12 2Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M2 17L12 22L22 17" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M2 12L12 17L22 12" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
              <h2 className="modal-title">Welcome Back</h2>
              <p className="modal-subtitle">Sign in to your account</p>
            </div>

            <div className="modal-body">
              <div className="form-group">
                <label className="label">Email Address</label>
                <input
                  type="email"
                  className="input"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>

              <div className="form-group">
                <label className="label">Password</label>
                <input
                  type="password"
                  className="input"
                  placeholder="Enter your password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>

              <div className="form-options">
                <label className="checkbox-label">
                  <input
                    type="checkbox"
                    className="checkbox"
                    checked={rememberMe}
                    onChange={(e) => setRememberMe(e.target.checked)}
                  />
                  <span>Remember me</span>
                </label>
                <a href="#" className="forgot-link">Forgot password?</a>
              </div>

              <button onClick={handleLogin} className="modal-login-btn">
                Sign In
              </button>

              <div className="modal-footer">
                <p className="signup-text">
                  Don't have an account?{" "}
                  <a
                    href="#"
                    className="signup-link"
                    onClick={(e) => {
                      e.preventDefault();
                      setShowLoginModal(false);
                      setShowSignupModal(true);
                    }}
                  >
                    Sign up
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Signup Modal */}
      {showSignupModal && (
        <div className="modal-overlay" onClick={() => setShowSignupModal(false)}>
          <div className="modal" onClick={(e) => e.stopPropagation()}>
            <button className="close-btn" onClick={() => setShowSignupModal(false)}>×</button>

            <div className="modal-header">
              <div className="modal-logo-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <path d="M12 2L2 7L12 12L22 7L12 2Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M2 17L12 22L22 17" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M2 12L12 17L22 12" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
              <h2 className="modal-title">Create Account</h2>
              <p className="modal-subtitle">Start your free trial today</p>
            </div>

            <div className="modal-body">
              <div className="form-group">
                <label className="label">Email Address</label>
                <input
                  type="email"
                  className="input"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>

              <div className="form-group">
                <label className="label">Password</label>
                <input
                  type="password"
                  className="input"
                  placeholder="Create a password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>

              <div className="form-group">
                <label className="label">Confirm Password</label>
                <input
                  type="password"
                  className="input"
                  placeholder="Confirm your password"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                />
              </div>

              <button onClick={handleSignup} className="modal-login-btn">
                Create Account
              </button>

              <div className="modal-footer">
                <p className="signup-text">
                  Already have an account?{" "}
                  <a
                    href="#"
                    className="signup-link"
                    onClick={(e) => {
                      e.preventDefault();
                      setShowSignupModal(false);
                      setShowLoginModal(true);
                    }}
                  >
                    Sign in
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}