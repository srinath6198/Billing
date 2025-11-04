import React, { createContext, useContext, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const AuthContext = createContext();

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

const users = {
  'admin@flowerfarm.com': {
    password: 'FlowerFarm2024!',
    role: 'admin',
    name: 'Farm Admin',
    email: 'admin@flowerfarm.com'
  },
  'manager@flowerfarm.com': {
    password: 'Manager123!',
    role: 'manager',
    name: 'Farm Manager',
    email: 'manager@flowerfarm.com'
  },
  'staff@flowerfarm.com': {
    password: 'Staff456!',
    role: 'staff',
    name: 'Farm Staff',
    email: 'staff@flowerfarm.com'
  }
};

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const storedUser = localStorage.getItem('flowerfarm_user');
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
    setLoading(false);
  }, []);

  const login = (email, password) => {
    const userData = users[email];
    if (userData && userData.password === password) {
      const userInfo = {
        name: userData.name,
        email: userData.email,
        role: userData.role
      };
      setUser(userInfo);
      localStorage.setItem('flowerfarm_user', JSON.stringify(userInfo));
      return { success: true, user: userInfo };
    }
    return { success: false, error: 'Invalid email or password' };
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem('flowerfarm_user');
  };

  const value = {
    user,
    login,
    logout,
    loading
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

