import React from 'react';
import { NavLink, useNavigate } from 'react-router-dom';

const navItems = [
  { id: 'home', label: 'Dashboard', icon: '🏠' },
  { id: 'approve', label: 'Approve Subs', icon: '✅' },
  { id: 'user-plans', label: 'User Plans', icon: '👥' },
  { id: 'users', label: 'Manage Users', icon: '🧑‍💼' },
  { id: 'stats', label: 'Site Stats', icon: '📊' },
  { id: 'notifications', label: 'Notifications', icon: '🔔' },
  { id: 'plans', label: 'Plans', icon: '📦' },
  { id: 'contacts', label: 'Contacts', icon: '📬' },
  { id: 'newsletter', label: 'Newsletter Subs', icon: '📧' },
  { id: 'renewal-requests', label: 'Renewal Requests', icon: '🔄' },
  { id: 'team', label: 'Team', icon: '👨‍💼' },
  { id: 'features', label: 'Features', icon: '✨' },
  { id: 'services', label: 'Services', icon: '🛠️' },
  { id: 'payments', label: 'Payments', icon: '💳' },
  { id: 'help', label: 'Help', icon: '🆘' },
  { id: 'coupons', label: 'Coupons', icon: '🏷️' },
];

const AdminBottomNav = () => {
  const navigate = useNavigate();
  const handleLogout = () => {
    localStorage.removeItem('token');
    navigate('/login');
  };
  return (
    <nav className="admin-bottom-nav">
      {navItems.map(item => (
        <NavLink
          key={item.to}
          to={item.to}
          className={({ isActive }) =>
            'admin-bottom-nav-link' + (isActive ? ' active' : '')
          }
        >
          <span className="icon">{item.icon}</span>
          <span className="label">{item.label}</span>
        </NavLink>
      ))}
      <button className="admin-bottom-nav-link logout" onClick={handleLogout}>
        <span className="icon">🚪</span>
        <span className="label">Logout</span>
      </button>
      <style>{`
        .admin-bottom-nav {
          display: none;
        }
        @media (max-width: 600px) {
          .admin-bottom-nav {
            display: flex;
            position: fixed;
            bottom: 0;
            left: 0;
            right: 0;
            height: 60px;
            background: #23272F;
            border-top: 1px solid #2ECC71;
            z-index: 1200;
            justify-content: space-around;
            align-items: center;
            box-shadow: 0 -2px 12px rgba(0,0,0,0.13);
          }
          .admin-bottom-nav-link {
            background: none;
            border: none;
            color: #E5E7EB;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            font-size: 1.1rem;
            font-weight: 600;
            padding: 0.2rem 0.5rem;
            border-radius: 0.7rem;
            transition: background 0.18s, color 0.18s;
            text-decoration: none;
            min-width: 48px;
          }
          .admin-bottom-nav-link .icon {
            font-size: 1.3rem;
            margin-bottom: 2px;
          }
          .admin-bottom-nav-link .label {
            font-size: 0.7rem;
          }
          .admin-bottom-nav-link.active, .admin-bottom-nav-link:active, .admin-bottom-nav-link:focus {
            color: #2ECC71;
            background: rgba(46,204,113,0.10);
          }
          .admin-bottom-nav-link.logout {
            color: #FF6B35;
          }
        }
      `}</style>
    </nav>
  );
};

export default AdminBottomNav; 