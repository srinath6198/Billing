import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';
import './Login.css'; 

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);
  const [error, setError] = useState('');
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleSignIn = (e) => {
    e.preventDefault();
    setError('');
    
    if (!email || !password) {
      setError('Please enter both email and password');
      return;
    }

    const result = login(email, password);
    if (result.success) {
      navigate('/dashboard');
    } else {
      setError(result.error || 'Invalid email or password');
    }
  };

  const currentTime = new Date().toLocaleTimeString('en-US', { 
    hour: '2-digit', 
    minute: '2-digit',
    second: '2-digit',
    hour12: true 
  });

  const currentDate = new Date().toLocaleDateString('en-US', { 
    weekday: 'long',
    month: 'long',
    day: 'numeric',
    year: 'numeric'
  });

  return (
    <div className="login-container">
      {/* LEFT PANEL */}
      <div className="left-panel">
        <div className="login-card">
          <div className="logo-container">
            <div className="logo-icon">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path d="M12 2L2 7L12 12L22 7L12 2Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M2 17L12 22L22 17" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M2 12L12 17L22 12" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
          </div>

          <h1 className="welcome-title">Welcome Back</h1>
          <p className="welcome-subtitle">Sign in to your FlowerFarm billing account</p>

          <form className="login-form" onSubmit={handleSignIn}>
            {error && <div className="error-message">{error}</div>}
            <div className="form-group">
              <label>Email Address *</label>
              <input
                type="email"
                placeholder="Enter your email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>

            <div className="form-group">
              <label>Password *</label>
              <input
                type="password"
                placeholder="Enter your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>

            <div className="form-options">
              <label className="checkbox-label">
                <input
                  type="checkbox"
                  checked={rememberMe}
                  onChange={(e) => setRememberMe(e.target.checked)}
                />
                <span>Remember me</span>
              </label>
              <a href="#" className="forgot-password">Forgot password?</a>
            </div>

            <button type="submit" className="sign-in-btn">
              🔒 Sign In
            </button>
          </form>

          <div className="demo-box">
            <p className="demo-label">Demo Credentials:</p>
            <p>Admin: <span className="demo-bold">admin@flowerfarm.com</span></p>
            <p>Pass: <span className="demo-bold">FlowerFarm2024!</span></p>
          </div>

          <div className="trust-section">
            <h3 className="trust-title">Trusted & Secure</h3>

            <div className="trust-item">
              <div className="trust-icon">🔒</div>
              <div>
                <h4>SSL Encrypted</h4>
                <p>Your data is protected with 256-bit SSL encryption</p>
              </div>
            </div>

            <div className="trust-item">
              <div className="trust-icon">🔐</div>
              <div>
                <h4>Secure Login</h4>
                <p>Multi-factor authentication available</p>
              </div>
            </div>

            <div className="trust-item">
              <div className="trust-icon">✓</div>
              <div>
                <h4>Certified</h4>
                <p>Agricultural business compliance certified</p>
              </div>
            </div>
          </div>

          <div className="footer">
            <span>🌐 SBI-Farmers</span>
            <span>•</span>
            <span>⏰ 09:18+ Update</span>
          </div>
        </div>
      </div>

      {/* RIGHT PANEL */}
      <div className="right-panel">
        <div className="hero-content">
          <h2 className="hero-title">FlowerFarm Billing</h2>
        </div>
         <p className="hero-subtitle">
            Streamline your flower farm operations with our comprehensive billing and inventory management system.
          </p>

        <div className="status-card">
          <div className="status-header">
            <h3>System Status</h3>
            <a href="#" className="all-systems">⚡ All Systems Operational</a>
          </div>

          <div className="status-items">
            {['Billing System','Payment Gateway','Database','Backup System'].map((system, i) => (
              <div className="status-row" key={i}>
                <span className="status-dot"></span>
                <span className="status-name">{system}</span>
                <span className="status-badge">Operational</span>
              </div>
            ))}
          </div>

          <div className="time-section">
            <div className="time">{currentTime}</div>
            <div className="date">{currentDate}</div>
          </div>
        </div>

        <div className="help-section">
          <h4>Need Help?</h4>
          <div>📧 Reach us: <a href="mailto:info@flowerfarm.com" className="help-link">info@flowerfarm.com</a></div>
          <div>📝 <a href="#" className="help-link">help@flowerfarm.com</a></div>
          <div>📞 24/7 Support Available</div>
        </div>
      </div>
    </div>
  );
}