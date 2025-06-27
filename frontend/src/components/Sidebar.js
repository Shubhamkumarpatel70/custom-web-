import React from 'react';
import { NavLink } from 'react-router-dom';

const navItems = [
  { to: '/dashboard', label: 'Dashboard', icon: '🏠' },
  { to: '/dashboard/support', label: 'Help & Support', icon: '💬' },
  { to: '/dashboard/subscription', label: 'Subscription', icon: '📦' },
  { to: '/dashboard/purchases', label: 'My Purchases', icon: '🛒' },
  { to: '/dashboard/notifications', label: 'Notifications', icon: '🔔' },
];

const navStyle = ({ isActive }) => ({
  color: isActive ? '#2ECC71' : '#E5E7EB',
  fontWeight: 600,
  textDecoration: 'none',
  padding: '0.7rem 1rem',
  borderRadius: '0.7rem',
  background: isActive ? 'rgba(46,204,113,0.12)' : 'none',
  display: 'flex',
  alignItems: 'center',
  gap: '0.8rem',
  transition: 'background 0.2s, color 0.2s',
  marginBottom: '0.2rem',
  fontSize: '1.1rem',
});

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

    {/* Modern Styles */}
    <style jsx>{`
      .modern-sidebar {
        height: 100vh;
        background: #23272F;
        display: flex;
        flex-direction: column;
        padding: 1.2rem 0.5rem 1.2rem 0.7rem;
        border-right: 1.5px solid rgba(255, 255, 255, 0.13);
        position: relative;
        overflow-y: auto;
        box-shadow: 2px 0 12px rgba(0,0,0,0.08);
      }

      .sidebar-header {
        display: flex;
        flex-direction: column;
        align-items: center;
        margin-bottom: 1.5rem;
        padding-bottom: 1.5rem;
        border-bottom: 1.5px solid rgba(255, 255, 255, 0.13);
        background: linear-gradient(135deg, rgba(46,204,113,0.07), rgba(0,87,217,0.04));
        border-radius: 0.7rem;
        box-shadow: 0 2px 8px rgba(46,204,113,0.04);
      }

      .user-avatar {
        width: 64px;
        height: 64px;
        background: linear-gradient(135deg, #2ECC71, #0057D9 80%);
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 2rem;
        margin-bottom: 0.7rem;
        box-shadow: 0 2px 8px rgba(46,204,113,0.13), 0 1px 4px rgba(0,87,217,0.10);
        border: 2.5px solid #181A20;
      }

      .sidebar-title h2 {
        color: #E5E7EB;
        font-size: 1.18rem;
        font-weight: 800;
        margin: 0 0 0.18rem 0;
        text-align: center;
        letter-spacing: 0.5px;
      }

      .sidebar-title p {
        color: #A0AEC0;
        font-size: 0.85rem;
        margin: 0;
        text-align: center;
      }

      .sidebar-nav {
        flex: 1;
        display: flex;
        flex-direction: column;
        gap: 0.3rem;
      }

      .nav-item {
        display: flex;
        align-items: center;
        gap: 0.8rem;
        padding: 0.85rem 1rem 0.85rem 0.7rem;
        border-radius: 0.7rem;
        color: #A0AEC0;
        text-decoration: none;
        transition: background 0.18s, color 0.18s, box-shadow 0.18s;
        position: relative;
        overflow: hidden;
        font-weight: 600;
        cursor: pointer;
        outline: none;
        font-size: 1.08rem;
      }

      .nav-item:active {
        transform: scale(0.97);
        background: rgba(46,204,113,0.13);
      }

      .nav-item:focus {
        box-shadow: 0 0 0 2px #2ECC71;
      }

      .nav-item::before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        width: 0;
        height: 100%;
        background: linear-gradient(135deg, rgba(46, 204, 113, 0.13), rgba(0, 87, 217, 0.09));
        transition: width 0.3s ease;
        z-index: 0;
      }

      .nav-item:hover::before,
      .nav-item.active::before {
        width: 100%;
      }

      .nav-item:hover {
        color: #2ECC71;
        background: rgba(46,204,113,0.10);
        box-shadow: 0 2px 8px rgba(46,204,113,0.07);
      }

      .nav-item.active {
        color: #fff;
        background: linear-gradient(90deg, rgba(46,204,113,0.18), rgba(0,87,217,0.10));
        border-left: 3px solid #2ECC71;
        box-shadow: 0 2px 12px rgba(46,204,113,0.10);
      }

      .nav-item.expired {
        color: #FF6B35;
        background: rgba(255, 107, 53, 0.1);
        border-left: 3px solid #FF6B35;
      }

      .nav-icon {
        font-size: 1.35rem;
        width: 28px;
        text-align: center;
        z-index: 1;
        position: relative;
      }

      .nav-label {
        flex: 1;
        z-index: 1;
        position: relative;
      }

      .nav-indicator {
        width: 6px;
        height: 6px;
        border-radius: 50%;
        background: currentColor;
        opacity: 0;
        transition: opacity 0.3s ease;
        z-index: 1;
        position: relative;
      }

      .logout-btn {
        margin-top: 1.5rem;
        background: #FF6B35;
        color: #fff;
        border: none;
        border-radius: 0.7rem;
        padding: 0.9rem 1.2rem;
        font-weight: 700;
        font-size: 1.08rem;
        display: flex;
        align-items: center;
        gap: 0.7rem;
        cursor: pointer;
        transition: background 0.18s, transform 0.18s;
        outline: none;
        box-shadow: 0 2px 8px rgba(255,107,53,0.07);
      }

      .logout-btn:hover, .logout-btn:focus {
        background: #ff8a65;
        transform: scale(1.03);
      }

      .logout-btn:active {
        background: #e65100;
        transform: scale(0.97);
      }

      /* Mobile Bottom Nav */
      .mobile-bottom-nav {
        display: none;
      }

      @media (max-width: 600px) {
        .modern-sidebar {
          display: none;
        }
        .mobile-bottom-nav {
          display: flex;
          position: fixed;
          left: 0;
          right: 0;
          bottom: 0;
          height: 64px;
          background: #23272F;
          border-top: 1.5px solid rgba(255,255,255,0.13);
          z-index: 2000;
          justify-content: space-around;
          align-items: center;
          box-shadow: 0 -2px 16px rgba(0,0,0,0.13);
        }
        .bottom-nav-item {
          flex: 1;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          color: #A0AEC0;
          background: none;
          border: none;
          font-size: 1.18rem;
          font-weight: 700;
          text-decoration: none;
          cursor: pointer;
          transition: color 0.18s, background 0.18s, transform 0.13s;
          height: 100%;
          outline: none;
          border-radius: 0.7rem;
        }
        .bottom-nav-item:active {
          background: rgba(46,204,113,0.13);
          color: #2ECC71;
          transform: scale(0.97);
        }
        .bottom-nav-item.logout {
          color: #FF6B35;
        }
        .bottom-nav-icon {
          font-size: 1.55rem;
        }
        .bottom-nav-label {
          font-size: 0.78rem;
          margin-top: 2px;
        }
      }
    `}</style>
  </>
);

export default Sidebar; 