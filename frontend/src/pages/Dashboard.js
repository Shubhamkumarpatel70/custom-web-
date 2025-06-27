import React, { useEffect, useState } from 'react';
import { useNavigate, Outlet } from 'react-router-dom';
import axios from '../axios';
import Sidebar from '../components/Sidebar';

function Dashboard() {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (!token) {
      navigate('/login');
      return;
    }
    axios.get('/api/dashboard', {
      headers: { Authorization: `Bearer ${token}` }
    })
      .then(res => {
        setUser(res.data.user);
        setLoading(false);
      })
      .catch(() => {
        localStorage.removeItem('token');
        navigate('/login');
      });
  }, [navigate]);

  const handleLogout = () => {
    localStorage.removeItem('token');
    navigate('/login');
  };

  if (loading) {
    return (
      <div className="dashboard-loading">
        <div className="loading-spinner"></div>
        <p>Loading dashboard...</p>
      </div>
    );
  }

  return (
    <div className="dashboard-container">
      {/* Mobile Overlay */}
      {sidebarOpen && <div className="sidebar-overlay" onClick={() => setSidebarOpen(false)}></div>}
      
      {/* Mobile Menu Button */}
      <button
        onClick={() => setSidebarOpen(!sidebarOpen)}
        className="mobile-menu-btn"
        aria-label="Toggle sidebar"
      >
        <span className={`hamburger ${sidebarOpen ? 'active' : ''}`}>
          <span></span>
          <span></span>
          <span></span>
        </span>
      </button>

      {/* Sidebar */}
      <aside className={`dashboard-sidebar ${sidebarOpen ? 'open' : ''}`}>
        <Sidebar onLogout={handleLogout} />
      </aside>

      {/* Main Content */}
      <main className="dashboard-main">
        <div className="dashboard-content">
          <Outlet context={{ user }} />
        </div>
      </main>

      {/* Modern Styles */}
      <style jsx>{`
        .dashboard-container {
          display: flex;
          min-height: 100vh;
          background: #181A20;
          position: relative;
        }

        .dashboard-loading {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          min-height: 100vh;
          background: #181A20;
          color: #E5E7EB;
        }

        .loading-spinner {
          width: 40px;
          height: 40px;
          border: 3px solid rgba(46, 204, 113, 0.3);
          border-top: 3px solid #2ECC71;
          border-radius: 50%;
          animation: spin 1s linear infinite;
          margin-bottom: 1rem;
        }

        @keyframes spin {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }

        .sidebar-overlay {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: rgba(0, 0, 0, 0.5);
          z-index: 999;
          display: none;
        }

        .mobile-menu-btn {
          position: fixed;
          top: 1rem;
          right: 1rem;
          z-index: 1001;
          background: #2ECC71;
          border: none;
          border-radius: 0.5rem;
          padding: 0.75rem;
          cursor: pointer;
          box-shadow: 0 2px 8px rgba(46, 204, 113, 0.3);
          transition: all 0.3s ease;
          display: none;
        }

        .mobile-menu-btn:hover {
          background: #FF6B35;
          transform: scale(1.05);
        }

        .hamburger {
          display: flex;
          flex-direction: column;
          width: 20px;
          height: 16px;
          position: relative;
        }

        .hamburger span {
          display: block;
          height: 2px;
          width: 100%;
          background: white;
          border-radius: 1px;
          transition: all 0.3s ease;
          position: absolute;
        }

        .hamburger span:nth-child(1) {
          top: 0;
        }

        .hamburger span:nth-child(2) {
          top: 50%;
          transform: translateY(-50%);
        }

        .hamburger span:nth-child(3) {
          bottom: 0;
        }

        .hamburger.active span:nth-child(1) {
          transform: rotate(45deg);
          top: 50%;
        }

        .hamburger.active span:nth-child(2) {
          opacity: 0;
        }

        .hamburger.active span:nth-child(3) {
          transform: rotate(-45deg);
          bottom: 50%;
        }

        .dashboard-sidebar {
          width: 280px;
          min-width: 280px;
          background: #23272F;
          border-right: 1px solid rgba(255, 255, 255, 0.1);
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
          position: relative;
          z-index: 1000;
        }

        .dashboard-main {
          flex: 1;
          display: flex;
          flex-direction: column;
          min-height: 100vh;
          overflow-x: hidden;
        }

        .dashboard-content {
          flex: 1;
          padding: clamp(1rem, 4vw, 2rem);
          max-width: 100%;
        }

        /* Responsive Design */
        @media (max-width: 1024px) {
          .dashboard-sidebar {
            width: 260px;
            min-width: 260px;
          }
        }

        @media (max-width: 900px) {
          .mobile-menu-btn {
            display: block;
          }

          .sidebar-overlay {
            display: block;
          }

          .dashboard-sidebar {
            position: fixed;
            top: 0;
            right: 0;
            left: auto;
            height: 100vh;
            transform: translateX(100%);
            box-shadow: -4px 0 20px rgba(0, 0, 0, 0.3);
          }

          .dashboard-sidebar.open {
            transform: translateX(0);
          }

          .dashboard-main {
            width: 100%;
            margin-left: 0;
          }

          .dashboard-content {
            padding: clamp(1rem, 3vw, 1.5rem);
            margin-top: 4rem;
          }
        }

        @media (max-width: 600px) {
          .dashboard-sidebar {
            width: 100vw;
            min-width: 100vw;
          }

          .dashboard-content {
            padding: 1rem 0.5rem;
          }
        }

        @media (max-width: 480px) {
          .dashboard-content {
            padding: 0.75rem 0.25rem;
          }
        }
      `}</style>
    </div>
  );
}

export default Dashboard; 