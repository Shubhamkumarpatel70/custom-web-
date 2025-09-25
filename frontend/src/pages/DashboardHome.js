import React, { useEffect, useState } from 'react';
import { useOutletContext, Link } from 'react-router-dom';
import axios from '../axios';
import './DashboardHome.css';

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
      {/* Profile Overview */}
      <section className="profile-widget">
        <div className="profile-card">
          <div className="profile-main">
            <div className="profile-avatar">
              <span>{(user?.name || 'U').split(' ').map(n => n[0]).join('')}</span>
            </div>
            <div className="profile-info">
              <h2 className="profile-name">{user?.name || 'User'}</h2>
              <div className="profile-meta">
                <span className="meta-item">{user?.email || 'N/A'}</span>
                <span className="meta-sep">•</span>
                <span className="meta-item">{user?.role || 'User'}</span>
              </div>
            </div>
          </div>
          <div className="profile-actions">
            <Link to="/dashboard/subscription" className="profile-action">
              <span className="action-icon">💳</span>
              <span>Manage Plan</span>
            </Link>
            <Link to="/dashboard/purchases" className="profile-action">
              <span className="action-icon">🛒</span>
              <span>Purchases</span>
            </Link>
            <Link to="/dashboard/notifications" className="profile-action">
              <span className="action-icon">🔔</span>
              <span>Notifications</span>
            </Link>
            <Link to="/dashboard/support" className="profile-action">
              <span className="action-icon">💬</span>
              <span>Support</span>
            </Link>
          </div>
        </div>
      </section>

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
            <div className="widget-icon">📝</div>
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
                    <div key={c._id} className="complaint-item">
                      <div><b>Issue:</b> {c.message}</div>
                      <div><b>Status:</b> <span style={{ color: c.status === 'resolved' ? '#2ECC71' : '#FF6B35' }}>{c.status}</span></div>
                      {(c._id && (c.status === 'open' || c.reopenStatus === 'accepted')) ? (
                        <Link to={`/support-chat/${c._id}`}>Continue Chat</Link>
                      ) : null}
                      {c.status === 'resolved' && c.reopenStatus !== 'pending' && c.reopenStatus !== 'accepted' ? (
                        <button onClick={async () => {
                          const token = localStorage.getItem('token');
                          await axios.post(`/api/auth/complaints/${c._id}/reopen`, {}, { headers: { Authorization: `Bearer ${token}` } });
                          setComplaints(complaints => complaints.map(cc => cc._id === c._id ? { ...cc, reopenStatus: 'pending' } : cc));
                        }}>Reopen Chat</button>
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
    </div>
  );
};

export default DashboardHome; 