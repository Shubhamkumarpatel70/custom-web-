import React, { useState } from 'react';
import { Outlet, useNavigate, Routes, Route } from 'react-router-dom';
import AdminSidebar from '../components/AdminSidebar';
import AdminBottomNav from '../components/AdminBottomNav';
import AdminHelp from './AdminHelp';
import AdminHome from './AdminHome';
import AdminApprove from './AdminApprove';
import AdminUserPlans from './AdminUserPlans';
import AdminUsers from './AdminUsers';
import AdminStats from './AdminStats';
import AdminNotifications from './AdminNotifications';
import AdminPlans from './AdminPlans';
import AdminContacts from './AdminContacts';
import AdminRenewalRequests from './AdminRenewalRequests';
import AdminNewsletter from './AdminNewsletter';
import AdminCoupons from './AdminCoupons';

const AdminDashboard = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [activeTab, setActiveTab] = useState('home');
  const navigate = useNavigate();
  const handleLogout = () => {
    localStorage.removeItem('token');
    navigate('/login');
  };

  const renderContent = () => {
    switch (activeTab) {
      case 'home':
        return <AdminHome />;
      case 'approve':
        return <AdminApprove />;
      case 'user-plans':
        return <AdminUserPlans />;
      case 'users':
        return <AdminUsers />;
      case 'stats':
        return <AdminStats />;
      case 'notifications':
        return <AdminNotifications />;
      case 'plans':
        return <AdminPlans />;
      case 'contacts':
        return <AdminContacts />;
      case 'newsletter':
        return <AdminNewsletter />;
      case 'renewal-requests':
        return <AdminRenewalRequests />;
      case 'coupons':
        return <AdminCoupons />;
      case 'help':
        return <AdminHelp />;
      default:
        return <AdminHome />;
    }
  };

  return (
    <div style={{ background: '#181A20', minHeight: '100vh', display: 'flex', flexDirection: 'row', position: 'relative' }}>
      {/* Mobile menu button */}
      <button
        onClick={() => setSidebarOpen(o => !o)}
        style={{
          position: 'fixed',
          top: 18,
          left: 18,
          zIndex: 1001,
          background: '#2ECC71',
          color: '#181A20',
          border: 'none',
          borderRadius: '0.7rem',
          padding: '0.7rem 1.2rem',
          fontWeight: 700,
          fontSize: '1.2rem',
          display: 'none',
        }}
        className="dashboard-mobile-menu-btn"
        aria-label="Open sidebar"
      >☰</button>
      {/* Sidebar */}
      <div
        style={{
          transition: 'left 0.3s',
          position: 'fixed',
          left: sidebarOpen ? 0 : -270,
          top: 0,
          height: '100vh',
          zIndex: 1000,
          background: '#23272F',
          boxShadow: sidebarOpen ? '0 4px 24px rgba(0,0,0,0.13)' : 'none',
          width: 250,
          minWidth: 250,
          maxWidth: 250,
          display: 'block',
        }}
        className="dashboard-sidebar-mobile"
      >
        <AdminSidebar onLogout={handleLogout} activeTab={activeTab} setActiveTab={setActiveTab} />
      </div>
      {/* Desktop Sidebar */}
      <div
        style={{
          display: 'block',
          minWidth: 250,
          maxWidth: 250,
        }}
        className="dashboard-sidebar-desktop"
      >
        <AdminSidebar onLogout={handleLogout} activeTab={activeTab} setActiveTab={setActiveTab} />
      </div>
      {/* Main content */}
      <main style={{ marginLeft: 250, flex: 1, padding: '2.5rem 2rem', minHeight: '100vh', background: '#181A20', width: '100%' }}>
        {renderContent()}
      </main>
      <AdminBottomNav />
      <style>{`
        @media (max-width: 900px) {
          .dashboard-sidebar-desktop { display: none !important; }
          .dashboard-mobile-menu-btn { display: block !important; }
          .dashboard-sidebar-mobile {
            display: block !important;
            left: ${sidebarOpen ? '0' : '-270px'} !important;
            top: 0;
            height: 100vh;
            z-index: 1000;
          }
          main {
            margin-left: 0 !important;
            padding: 1.2rem 0.5rem !important;
          }
        }
        @media (max-width: 600px) {
          main {
            padding: 0.5rem 0.2rem !important;
          }
        }
      `}</style>
    </div>
  );
};

export default AdminDashboard;
