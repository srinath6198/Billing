import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import Icon from '../AppIcon';
import Button from './Button';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isUserMenuOpen, setIsUserMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const navigationItems = [
    { label: 'Dashboard', path: '/', icon: 'LayoutDashboard' },
    { label: 'Customers', path: '/customer-management', icon: 'Users' },
    { label: 'Products', path: '/product-catalog', icon: 'Package' },
    { label: 'Invoices', path: '/invoice-creation', icon: 'FileText' },
    { label: 'Reports', path: '/reports-analytics', icon: 'BarChart3' },
  ];

  const secondaryItems = [
    { label: 'Settings', path: '/settings', icon: 'Settings' },
  ];

  const handleNavigation = (path) => {
    navigate(path);
    setIsMenuOpen(false);
  };

  const handleLogout = () => {
    navigate('/login');
    setIsUserMenuOpen(false);
  };

  const isActivePath = (path) => {
    if (path === '/') {
      return location?.pathname === '/';
    }
    return location?.pathname?.startsWith(path);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-navigation bg-background border-b border-border">
      <div className="flex items-center justify-between h-16 px-6">
        {/* Logo */}
        <div className="flex items-center space-x-3">
          <div className="flex items-center justify-center w-10 h-10 bg-primary rounded-lg">
            <Icon name="Flower" size={24} color="var(--color-primary-foreground)" />
          </div>
          <div className="flex flex-col">
            <h1 className="text-lg font-heading font-semibold text-foreground">FlowerFarm</h1>
            <span className="text-xs font-caption text-muted-foreground">Billing System</span>
          </div>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center space-x-1">
          {navigationItems?.map((item) => (
            <Button
              key={item?.path}
              variant={isActivePath(item?.path) ? "default" : "ghost"}
              onClick={() => handleNavigation(item?.path)}
              iconName={item?.icon}
              iconPosition="left"
              iconSize={18}
              className="px-4 py-2 text-sm font-body font-medium"
            >
              {item?.label}
            </Button>
          ))}
          
          {/* More Menu */}
          <div className="relative">
            <Button
              variant="ghost"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              iconName="MoreHorizontal"
              iconSize={18}
              className="px-3 py-2"
            >
              More
            </Button>
            
            {isMenuOpen && (
              <div className="absolute right-0 top-full mt-2 w-48 bg-popover border border-border rounded-md shadow-modal z-dropdown animate-fade-in">
                <div className="py-2">
                  {secondaryItems?.map((item) => (
                    <button
                      key={item?.path}
                      onClick={() => handleNavigation(item?.path)}
                      className={`w-full flex items-center px-4 py-2 text-sm font-body hover:bg-muted transition-colors ${
                        isActivePath(item?.path) ? 'bg-muted text-primary' : 'text-foreground'
                      }`}
                    >
                      <Icon name={item?.icon} size={16} className="mr-3" />
                      {item?.label}
                    </button>
                  ))}
                </div>
              </div>
            )}
          </div>
        </nav>

        {/* User Account & Mobile Menu */}
        <div className="flex items-center space-x-3">
          {/* User Account Dropdown */}
          <div className="relative">
            <Button
              variant="ghost"
              onClick={() => setIsUserMenuOpen(!isUserMenuOpen)}
              className="flex items-center space-x-2 px-3 py-2"
            >
              <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center">
                <Icon name="User" size={16} color="var(--color-primary-foreground)" />
              </div>
              <span className="hidden md:block text-sm font-body font-medium text-foreground">
                Farm Admin
              </span>
              <Icon name="ChevronDown" size={16} className="text-muted-foreground" />
            </Button>

            {isUserMenuOpen && (
              <div className="absolute right-0 top-full mt-2 w-48 bg-popover border border-border rounded-md shadow-modal z-dropdown animate-fade-in">
                <div className="py-2">
                  <div className="px-4 py-2 border-b border-border">
                    <p className="text-sm font-body font-medium text-foreground">Farm Admin</p>
                    <p className="text-xs font-caption text-muted-foreground">admin@flowerfarm.com</p>
                  </div>
                  <button
                    onClick={() => {
                      handleNavigation('/settings');
                      setIsUserMenuOpen(false);
                    }}
                    className="w-full flex items-center px-4 py-2 text-sm font-body text-foreground hover:bg-muted transition-colors"
                  >
                    <Icon name="Settings" size={16} className="mr-3" />
                    Settings
                  </button>
                  <button
                    onClick={handleLogout}
                    className="w-full flex items-center px-4 py-2 text-sm font-body text-destructive hover:bg-muted transition-colors"
                  >
                    <Icon name="LogOut" size={16} className="mr-3" />
                    Logout
                  </button>
                </div>
              </div>
            )}
          </div>

          {/* Mobile Menu Toggle */}
          <Button
            variant="ghost"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            iconName="Menu"
            iconSize={20}
            className="lg:hidden px-2 py-2"
          />
        </div>
      </div>
      {/* Mobile Navigation Menu */}
      {isMenuOpen && (
        <div className="lg:hidden bg-background border-t border-border animate-slide-in">
          <nav className="px-6 py-4 space-y-2">
            {navigationItems?.map((item) => (
              <button
                key={item?.path}
                onClick={() => handleNavigation(item?.path)}
                className={`w-full flex items-center px-4 py-3 rounded-md text-sm font-body font-medium transition-colors ${
                  isActivePath(item?.path)
                    ? 'bg-primary text-primary-foreground'
                    : 'text-foreground hover:bg-muted'
                }`}
              >
                <Icon name={item?.icon} size={18} className="mr-3" />
                {item?.label}
              </button>
            ))}
            
            <div className="border-t border-border pt-2 mt-4">
              {secondaryItems?.map((item) => (
                <button
                  key={item?.path}
                  onClick={() => handleNavigation(item?.path)}
                  className={`w-full flex items-center px-4 py-3 rounded-md text-sm font-body font-medium transition-colors ${
                    isActivePath(item?.path)
                      ? 'bg-primary text-primary-foreground'
                      : 'text-foreground hover:bg-muted'
                  }`}
                >
                  <Icon name={item?.icon} size={18} className="mr-3" />
                  {item?.label}
                </button>
              ))}
            </div>
          </nav>
        </div>
      )}
      {/* Overlay for mobile menu */}
      {(isMenuOpen || isUserMenuOpen) && (
        <div
          className="fixed inset-0 bg-black/20 z-overlay lg:hidden"
          onClick={() => {
            setIsMenuOpen(false);
            setIsUserMenuOpen(false);
          }}
        />
      )}
    </header>
  );
};

export default Header;