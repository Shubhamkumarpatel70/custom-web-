import React from 'react';

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
  { id: 'help', label: 'Help', icon: '🆘' },
  { id: 'coupons', label: 'Coupons', icon: '🏷️' },
];

const AdminSidebar = ({ onLogout, activeTab, setActiveTab }) => {
  const navStyle = (isActive) => ({
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
    border: 'none',
    cursor: 'pointer',
    width: '100%',
    textAlign: 'left',
  });

  return (
    <div className="sidebar-root" style={{
      width: 250,
      background: '#23272F',
      minHeight: '90vh',
      margin: '2vh 1vw',
      borderRadius: '1.2rem',
      boxShadow: '0 4px 24px rgba(0,0,0,0.13)',
      color: '#E5E7EB',
      position: 'sticky',
      top: 20,
      overflowY: 'auto',
      maxHeight: '96vh',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      padding: '2rem 1rem 1rem 1rem',
      zIndex: 1100,
    }}>
      {/* Mobile close button */}
      <button
        onClick={() => {
          if (window.innerWidth < 900) {
            document.querySelector('.dashboard-mobile-menu-btn')?.click();
          }
        }}
        style={{
          display: 'none',
          position: 'absolute',
          top: 18,
          right: 18,
          background: '#FF6B35',
          color: '#fff',
          border: 'none',
          borderRadius: '0.7rem',
          padding: '0.5rem 1rem',
          fontWeight: 700,
          fontSize: '1.2rem',
          zIndex: 1200,
        }}
        className="sidebar-close-btn"
        aria-label="Close sidebar"
      >✕</button>
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginBottom: '2rem' }}>
        <div style={{ width: 64, height: 64, borderRadius: '50%', background: '#2ECC71', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 32, fontWeight: 700, color: '#181A20', marginBottom: 10 }}>
          <span role="img" aria-label="admin">🛡️</span>
        </div>
        <div style={{ fontWeight: 700, fontSize: '1.3rem', color: '#2ECC71', letterSpacing: '1px' }}>Admin Panel</div>
      </div>
      <nav style={{ width: '100%', display: 'flex', flexDirection: 'column', gap: '0.2rem', marginBottom: '2rem' }}>
        {navItems.map(item => (
          <button
            key={item.id}
            onClick={() => setActiveTab(item.id)}
            style={navStyle(activeTab === item.id)}
          >
            <span style={{ fontSize: '1.3rem' }}>{item.icon}</span> {item.label}
          </button>
        ))}
      </nav>
      <button 
        onClick={onLogout}
        style={{ 
          ...navStyle(false), 
          background: '#FF6B35', 
          color: '#fff', 
          marginTop: 'auto', 
          width: '100%', 
          justifyContent: 'center' 
        }}
      >
        <span style={{ fontSize: '1.2rem' }}>🚪</span> Logout
      </button>
      <style>{`
        @media (max-width: 900px) {
          .sidebar-root {
            width: 100vw !important;
            min-width: 100vw !important;
            max-width: 100vw !important;
            border-radius: 0 !important;
            margin: 0 !important;
            top: 0 !important;
            left: 0 !important;
            position: fixed !important;
            flex-direction: row !important;
            align-items: flex-start !important;
            padding: 1.2rem 0.5rem 1.2rem 0.5rem !important;
          }
          .sidebar-close-btn {
            display: block !important;
          }
          nav {
            flex-direction: row !important;
            gap: 1.2rem !important;
            width: 100vw !important;
            justify-content: center !important;
          }
        }
      `}</style>
    </div>
  );
};

export default AdminSidebar;
export { navItems }; 