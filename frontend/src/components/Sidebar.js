import React from 'react';
import { NavLink } from 'react-router-dom';
import './Sidebar.css';

const navItems = [
  { to: '/dashboard', label: 'Dashboard', icon: '🏠' },
  { to: '/dashboard/support', label: 'Help & Support', icon: '💬' },
  { to: '/dashboard/subscription', label: 'Subscription', icon: '📦' },
  { to: '/dashboard/purchases', label: 'My Purchases', icon: '🛒' },
  { to: '/dashboard/notifications', label: 'Notifications', icon: '🔔' },
];

const Sidebar = ({ onLogout, isPlanExpired }) => (
  <>
    <div className="modern-sidebar">
      {/* Sidebar Header */}
      <div className="sidebar-header">
        <div className="user-avatar">
          <span>👤</span>
        </div>
        <div className="sidebar-title">
          <h2>User Panel</h2>
          <p>Welcome back!</p>
        </div>
      </div>

      {/* Navigation */}
      <nav className="sidebar-nav">
        {navItems.map(item => (
          <NavLink key={item.to} to={item.to} className="nav-item" tabIndex={0}>
            <span className="nav-icon">{item.icon}</span>
            <span className="nav-label">{item.label}</span>
            <span className="nav-indicator"></span>
          </NavLink>
        ))}
        {isPlanExpired && (
          <NavLink to="/dashboard/expired" className="nav-item expired" tabIndex={0}>
            <span className="nav-icon">⏰</span>
            <span className="nav-label">Plan Expired</span>
            <span className="nav-indicator"></span>
          </NavLink>
        )}
      </nav>

      {/* Logout Button */}
      <button onClick={onLogout} className="logout-btn" tabIndex={0}>
        <span className="logout-icon">🚪</span>
        <span>Logout</span>
      </button>
    </div>

    {/* Mobile Bottom Nav */}
    <nav className="mobile-bottom-nav">
      {navItems.map(item => (
        <NavLink key={item.to} to={item.to} className="bottom-nav-item" tabIndex={0}>
          <span className="bottom-nav-icon">{item.icon}</span>
          <span className="bottom-nav-label">{item.label}</span>
        </NavLink>
      ))}
      <button className="bottom-nav-item logout" onClick={onLogout} tabIndex={0}>
        <span className="bottom-nav-icon">🚪</span>
        <span className="bottom-nav-label">Logout</span>
      </button>
    </nav>
  </>
);

export default Sidebar; 