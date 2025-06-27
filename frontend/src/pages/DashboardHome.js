import React, { useEffect, useState } from 'react';
import { useOutletContext, Link } from 'react-router-dom';
import axios from '../axios';

const planDisplayNames = {
  starter: 'Starter',
  premium: 'Premium',
  pro: 'Pro',
};

const DashboardHome = () => {
  const { user } = useOutletContext();
  const [subs, setSubs] = useState([]);
  const [subsLoading, setSubsLoading] = useState(true);
  const [subsError, setSubsError] = useState('');
  const [notifications, setNotifications] = useState([]);
  const [notifLoading, setNotifLoading] = useState(true);
  const [notifError, setNotifError] = useState('');
  const [complaints, setComplaints] = useState([]);
  const [complaintsLoading, setComplaintsLoading] = useState(true);
  const [complaintsError, setComplaintsError] = useState('');

  useEffect(() => {
    // Fetch subscriptions
    const fetchSubs = async () => {
      setSubsLoading(true);
      setSubsError('');
      try {
        const token = localStorage.getItem('token');
        const res = await axios.get('/api/auth/user-subscriptions', {
          headers: { Authorization: `Bearer ${token}` }
        });
        setSubs(res.data.subscriptions || []);
      } catch (err) {
        setSubsError('Could not fetch subscription info.');
      }
      setSubsLoading(false);
    };
    // Fetch notifications
    const fetchNotifs = async () => {
      setNotifLoading(true);
      setNotifError('');
      try {
        const token = localStorage.getItem('token');
        const res = await axios.get('/api/auth/user-notifications', {
          headers: { Authorization: `Bearer ${token}` }
        });
        setNotifications(res.data.notifications || []);
      } catch (err) {
        setNotifError('Could not fetch notifications.');
      }
      setNotifLoading(false);
    };
    // Fetch complaints
    const fetchComplaints = async () => {
      setComplaintsLoading(true);
      setComplaintsError('');
      try {
        const token = localStorage.getItem('token');
        const res = await axios.get('/api/auth/complaints', {
          headers: { Authorization: `Bearer ${token}` }
        });
        setComplaints(res.data.complaints || []);
      } catch (err) {
        setComplaintsError('Could not fetch complaints.');
      }
      setComplaintsLoading(false);
    };
    fetchSubs();
    fetchNotifs();
    fetchComplaints();
  }, []);

  // Current subscription logic
  let current = null;
  if (subs.length > 0) {
    current = subs.find(s => s.status === 'active' || s.status === 'pending') || subs[0];
  }
  const daysLeft = current && current.expiresAt ? Math.ceil((new Date(current.expiresAt) - Date.now()) / (1000 * 60 * 60 * 24)) : null;
  const isExpired = current && current.expiresAt && new Date(current.expiresAt) < new Date();

  return (
    <div className="dashboard-home">
      {/* Welcome Header */}
      <div className="welcome-header">
        <h1 className="welcome-title">
          Welcome back, <span className="user-name">{user?.name || 'User'}</span>!
        </h1>
        <p className="welcome-subtitle">
          Here's an overview of your account and recent activity
        </p>
      </div>

      {/* User Info Cards */}
      <div className="user-info-grid">
        <div className="info-card">
          <div className="info-icon">👤</div>
          <div className="info-content">
            <h3>Your Role</h3>
            <p>{user?.role || 'User'}</p>
          </div>
        </div>
        <div className="info-card">
          <div className="info-icon">📧</div>
          <div className="info-content">
            <h3>Email</h3>
            <p>{user?.email || 'N/A'}</p>
          </div>
        </div>
        <div className="info-card">
          <div className="info-icon">📅</div>
          <div className="info-content">
            <h3>Member Since</h3>
            <p>{user?.createdAt ? new Date(user.createdAt).toLocaleDateString() : 'N/A'}</p>
          </div>
        </div>
      </div>

      {/* Main Widgets */}
      <div className="widgets-grid">
        {/* Subscription Widget */}
        <div className="widget subscription-widget">
          <div className="widget-header">
            <h2>Current Plan</h2>
            <div className="widget-icon">💳</div>
          </div>
          <div className="widget-content">
            {subsLoading ? (
              <div className="loading-state">
                <div className="loading-spinner"></div>
                <p>Loading subscription...</p>
              </div>
            ) : subsError ? (
              <div className="error-state">
                <p>{subsError}</p>
              </div>
            ) : !current ? (
              <div className="empty-state">
                <p>No active plan</p>
                <Link to="/plans" className="btn btn-primary">
                  Choose a Plan
                </Link>
              </div>
            ) : (
              <div className="subscription-details">
                <div className="plan-info">
                  <div className="plan-name">{planDisplayNames[current.plan]}</div>
                  <div className={`plan-status ${current.status}`}>
                    {current.status}
                  </div>
                </div>
                <div className="plan-details">
                  <div className="detail-item">
                    <span className="detail-label">Expires:</span>
                    <span className="detail-value">
                      {current.expiresAt ? new Date(current.expiresAt).toLocaleDateString() : 'N/A'}
                    </span>
                  </div>
                  {daysLeft !== null && !isExpired && (
                    <div className="detail-item">
                      <span className="detail-label">Days left:</span>
                      <span className="detail-value days-left">{daysLeft}</span>
                    </div>
                  )}
                  {isExpired && (
                    <div className="expired-notice">
                      Plan Expired
                    </div>
                  )}
                </div>
                <Link to="/dashboard/subscription" className="widget-action">
                  Manage Plan →
                </Link>
              </div>
            )}
          </div>
        </div>

        {/* Notifications Widget */}
        <div className="widget notifications-widget">
          <div className="widget-header">
            <h2>Recent Notifications</h2>
            <div className="widget-icon">🔔</div>
          </div>
          <div className="widget-content">
            {notifLoading ? (
              <div className="loading-state">
                <div className="loading-spinner"></div>
                <p>Loading notifications...</p>
              </div>
            ) : notifError ? (
              <div className="error-state">
                <p>{notifError}</p>
              </div>
            ) : notifications.length === 0 ? (
              <div className="empty-state">
                <p>No notifications</p>
              </div>
            ) : (
              <div className="notifications-list">
                {notifications.slice(0, 3).map(n => (
                  <div key={n._id} className={`notification-item ${n.read ? 'read' : 'unread'}`}>
                    <div className="notification-content">
                      <h4>{n.title || 'Notification'}</h4>
                      <p>{n.message}</p>
                      <span className="notification-date">
                        {new Date(n.createdAt).toLocaleDateString()}
                      </span>
                    </div>
                    {!n.read && <div className="unread-indicator"></div>}
                  </div>
                ))}
                <Link to="/dashboard/notifications" className="widget-action">
                  View All →
                </Link>
              </div>
            )}
          </div>
        </div>

        {/* Complaints Widget */}
        <div className="widget complaints-widget">
          <div className="widget-header">
            <h2>Your Complaints</h2>
            <div className="widget-icon">��</div>
          </div>
          <div className="widget-content">
            {complaintsLoading ? (
              <div className="loading-state">
                <div className="loading-spinner"></div>
                <p>Loading complaints...</p>
              </div>
            ) : complaintsError ? (
              <div className="error-state">
                <p>{complaintsError}</p>
              </div>
            ) : complaints.length === 0 ? (
              <div className="empty-state">
                <p>No complaints raised yet.</p>
              </div>
            ) : (
              <div className="complaints-list">
                {complaints.map(c => {
                  console.log('DashboardHome complaint:', c);
                  return (
                    <div key={c._id} className="complaint-item" style={{ marginBottom: '1rem', padding: '1rem', background: '#23272F', borderRadius: '0.7rem' }}>
                      <div><b>Issue:</b> {c.message}</div>
                      <div><b>Status:</b> <span style={{ color: c.status === 'resolved' ? '#2ECC71' : '#FF6B35' }}>{c.status}</span></div>
                      {(c._id && (c.status === 'open' || c.reopenStatus === 'accepted')) ? (
                        <Link to={`/support-chat/${c._id}`} style={{ color: '#2ECC71', fontWeight: 700, marginRight: '1rem' }}>Continue Chat</Link>
                      ) : null}
                      {c.status === 'resolved' && c.reopenStatus !== 'pending' && c.reopenStatus !== 'accepted' ? (
                        <button onClick={async () => {
                          const token = localStorage.getItem('token');
                          await axios.post(`/api/auth/complaints/${c._id}/reopen`, {}, { headers: { Authorization: `Bearer ${token}` } });
                          setComplaints(complaints => complaints.map(cc => cc._id === c._id ? { ...cc, reopenStatus: 'pending' } : cc));
                        }} style={{ background: '#2ECC71', color: '#181A20', border: 'none', borderRadius: '0.5rem', padding: '0.4rem 1rem', fontWeight: 700, cursor: 'pointer' }}>Reopen Chat</button>
                      ) : null}
                      {c.reopenStatus === 'pending' && <span style={{ color: '#FFA500', marginLeft: '1rem' }}>Reopen requested (awaiting admin)</span>}
                      {c.reopenStatus === 'rejected' && <span style={{ color: '#FF6B35', marginLeft: '1rem' }}>Reopen rejected</span>}
                    </div>
                  );
                })}
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Quick Actions */}
      <div className="quick-actions">
        <h2 className="section-title">Quick Actions</h2>
        <div className="actions-grid">
          <Link to="/dashboard/subscription" className="action-card">
            <div className="action-icon">💳</div>
            <h3>Subscription</h3>
            <p>Manage your plan and billing</p>
          </Link>
          <Link to="/dashboard/purchases" className="action-card">
            <div className="action-icon">🛒</div>
            <h3>My Purchases</h3>
            <p>View your order history</p>
          </Link>
          <Link to="/dashboard/support" className="action-card">
            <div className="action-icon">💬</div>
            <h3>Support</h3>
            <p>Get help from our team</p>
          </Link>
          <Link to="/plans" className="action-card">
            <div className="action-icon">📋</div>
            <h3>Browse Plans</h3>
            <p>Explore our service plans</p>
          </Link>
        </div>
      </div>

      {/* Modern Styles */}
      <style jsx>{`
        .dashboard-home {
          max-width: 1200px;
          margin: 0 auto;
          color: #E5E7EB;
        }

        .welcome-header {
          text-align: center;
          margin-bottom: 2rem;
        }

        .welcome-title {
          font-size: clamp(1.75rem, 4vw, 2.5rem);
          font-weight: 800;
          margin-bottom: 0.5rem;
          color: #E5E7EB;
        }

        .user-name {
          background: linear-gradient(135deg, #2ECC71, #0057D9);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .welcome-subtitle {
          color: #A0AEC0;
          font-size: clamp(1rem, 2.5vw, 1.125rem);
          margin: 0;
        }

        .user-info-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: 1.5rem;
          margin-bottom: 2rem;
        }

        .info-card {
          background: #23272F;
          border-radius: 1rem;
          padding: 1.5rem;
          display: flex;
          align-items: center;
          gap: 1rem;
          border: 1px solid rgba(255, 255, 255, 0.1);
          transition: all 0.3s ease;
        }

        .info-card:hover {
          transform: translateY(-2px);
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
        }

        .info-icon {
          font-size: 2rem;
          width: 60px;
          height: 60px;
          background: rgba(46, 204, 113, 0.1);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .info-content h3 {
          color: #2ECC71;
          font-size: 0.875rem;
          font-weight: 600;
          margin: 0 0 0.25rem 0;
          text-transform: uppercase;
          letter-spacing: 0.5px;
        }

        .info-content p {
          color: #E5E7EB;
          font-size: 1.125rem;
          font-weight: 600;
          margin: 0;
        }

        .widgets-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
          gap: 2rem;
          margin-bottom: 2rem;
        }

        .widget {
          background: #23272F;
          border-radius: 1rem;
          border: 1px solid rgba(255, 255, 255, 0.1);
          overflow: hidden;
          transition: all 0.3s ease;
        }

        .widget:hover {
          transform: translateY(-2px);
          box-shadow: 0 8px 25px rgba(0, 0, 0, 0.2);
        }

        .widget-header {
          padding: 1.5rem 1.5rem 0;
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .widget-header h2 {
          color: #E5E7EB;
          font-size: 1.25rem;
          font-weight: 700;
          margin: 0;
        }

        .widget-icon {
          font-size: 1.5rem;
          opacity: 0.7;
        }

        .widget-content {
          padding: 1rem 1.5rem 1.5rem;
        }

        .loading-state,
        .error-state,
        .empty-state {
          text-align: center;
          padding: 2rem 1rem;
          color: #A0AEC0;
        }

        .loading-spinner {
          width: 30px;
          height: 30px;
          border: 2px solid rgba(46, 204, 113, 0.3);
          border-top: 2px solid #2ECC71;
          border-radius: 50%;
          animation: spin 1s linear infinite;
          margin: 0 auto 1rem;
        }

        @keyframes spin {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }

        .subscription-details {
          display: flex;
          flex-direction: column;
          gap: 1rem;
        }

        .plan-info {
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .plan-name {
          font-size: 1.25rem;
          font-weight: 700;
          color: #E5E7EB;
        }

        .plan-status {
          padding: 0.25rem 0.75rem;
          border-radius: 1rem;
          font-size: 0.75rem;
          font-weight: 600;
          text-transform: uppercase;
        }

        .plan-status.active {
          background: rgba(46, 204, 113, 0.2);
          color: #2ECC71;
        }

        .plan-status.pending {
          background: rgba(255, 193, 7, 0.2);
          color: #FFC107;
        }

        .plan-status.expired {
          background: rgba(255, 107, 53, 0.2);
          color: #FF6B35;
        }

        .plan-details {
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
        }

        .detail-item {
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .detail-label {
          color: #A0AEC0;
          font-size: 0.875rem;
        }

        .detail-value {
          color: #E5E7EB;
          font-weight: 600;
        }

        .days-left {
          color: #FFD700;
        }

        .expired-notice {
          background: rgba(255, 107, 53, 0.1);
          color: #FF6B35;
          padding: 0.75rem;
          border-radius: 0.5rem;
          text-align: center;
          font-weight: 600;
        }

        .notifications-list {
          display: flex;
          flex-direction: column;
          gap: 1rem;
        }

        .notification-item {
          position: relative;
          padding: 1rem;
          background: rgba(255, 255, 255, 0.05);
          border-radius: 0.5rem;
          border-left: 3px solid transparent;
        }

        .notification-item.unread {
          border-left-color: #2ECC71;
          background: rgba(46, 204, 113, 0.1);
        }

        .notification-content h4 {
          color: #E5E7EB;
          font-size: 0.875rem;
          font-weight: 600;
          margin: 0 0 0.25rem 0;
        }

        .notification-content p {
          color: #A0AEC0;
          font-size: 0.75rem;
          margin: 0 0 0.5rem 0;
          line-height: 1.4;
        }

        .notification-date {
          color: #A0AEC0;
          font-size: 0.625rem;
        }

        .unread-indicator {
          position: absolute;
          top: 1rem;
          right: 1rem;
          width: 8px;
          height: 8px;
          background: #2ECC71;
          border-radius: 50%;
        }

        .widget-action {
          color: #2ECC71;
          text-decoration: none;
          font-weight: 600;
          font-size: 0.875rem;
          display: inline-flex;
          align-items: center;
          gap: 0.25rem;
          margin-top: 1rem;
          transition: color 0.3s ease;
        }

        .widget-action:hover {
          color: #FF6B35;
        }

        .quick-actions {
          margin-top: 2rem;
        }

        .section-title {
          color: #E5E7EB;
          font-size: 1.5rem;
          font-weight: 700;
          margin-bottom: 1.5rem;
          text-align: center;
        }

        .actions-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
          gap: 1.5rem;
        }

        .action-card {
          background: #23272F;
          border-radius: 1rem;
          padding: 1.5rem;
          text-decoration: none;
          color: inherit;
          border: 1px solid rgba(255, 255, 255, 0.1);
          transition: all 0.3s ease;
          text-align: center;
        }

        .action-card:hover {
          transform: translateY(-3px);
          box-shadow: 0 8px 25px rgba(0, 0, 0, 0.2);
          border-color: #2ECC71;
        }

        .action-icon {
          font-size: 2.5rem;
          margin-bottom: 1rem;
        }

        .action-card h3 {
          color: #2ECC71;
          font-size: 1.125rem;
          font-weight: 600;
          margin: 0 0 0.5rem 0;
        }

        .action-card p {
          color: #A0AEC0;
          font-size: 0.875rem;
          margin: 0;
          line-height: 1.4;
        }

        /* Responsive Design */
        @media (max-width: 900px) {
          .user-info-grid {
            grid-template-columns: 1fr;
          }

          .widgets-grid {
            grid-template-columns: 1fr;
          }

          .actions-grid {
            grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
          }
        }

        @media (max-width: 600px) {
          .info-card {
            flex-direction: column;
            text-align: center;
          }

          .plan-info {
            flex-direction: column;
            gap: 0.5rem;
            align-items: flex-start;
          }

          .detail-item {
            flex-direction: column;
            align-items: flex-start;
            gap: 0.25rem;
          }
        }
      `}</style>
    </div>
  );
};

export default DashboardHome; 