import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Notifications = () => {
  const [notifications, setNotifications] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    fetchNotifications();
  }, []);

  const fetchNotifications = async () => {
    try {
      setLoading(true);
      setError('');
      const token = localStorage.getItem('token');
      const res = await axios.get('/api/auth/user-notifications', {
        headers: { Authorization: `Bearer ${token}` }
      });
      setNotifications(res.data.notifications || []);
    } catch (err) {
      setError('Could not fetch notifications.');
    } finally {
      setLoading(false);
    }
  };

  const markAsRead = async (notificationId) => {
    try {
      const token = localStorage.getItem('token');
      await axios.post(`/api/auth/notifications/read/${notificationId}`, {}, {
        headers: { Authorization: `Bearer ${token}` }
      });
      
      setNotifications(prev => prev.map(n => 
        n._id === notificationId ? { ...n, read: true } : n
      ));
    } catch (err) {
      setError('Could not mark notification as read.');
    }
  };

  const unreadCount = notifications.filter(n => !n.read).length;

  if (loading) {
    return (
      <div style={{ maxWidth: 600, margin: '0 auto', color: '#E5E7EB', textAlign: 'center', padding: '2rem' }}>
        <div style={{
          width: 40,
          height: 40,
          border: '3px solid rgba(46, 204, 113, 0.3)',
          borderTop: '3px solid #2ECC71',
          borderRadius: '50%',
          animation: 'spin 1s linear infinite',
          margin: '0 auto 1rem'
        }}></div>
        <p>Loading notifications...</p>
        <style>{`
          @keyframes spin {
            0% { transform: rotate(0deg); }
            100% { transform: rotate(360deg); }
          }
        `}</style>
      </div>
    );
  }

  return (
    <div style={{ maxWidth: 800, margin: '0 auto', color: '#E5E7EB', padding: '0 1rem' }}>
      <h2 style={{ color: '#2ECC71', fontWeight: 700, fontSize: '1.7rem', marginBottom: '1.2rem' }}>
        Notifications {unreadCount > 0 && <span style={{ background: '#FF6B35', color: '#fff', borderRadius: '1rem', padding: '0.2rem 0.8rem', fontSize: '1rem', marginLeft: '0.7rem' }}>{unreadCount}</span>}
      </h2>
      
      {error && (
        <div style={{ color: '#FF6B35', marginBottom: '1rem', padding: '1rem', background: 'rgba(255, 107, 53, 0.1)', borderRadius: '0.5rem' }}>
          {error}
        </div>
      )}

      {notifications.length === 0 ? (
        <div style={{ 
          background: '#23272F', 
          borderRadius: '1rem', 
          padding: '3rem 2rem', 
          textAlign: 'center',
          color: '#9CA3AF'
        }}>
          <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>🔔</div>
          <h3 style={{ color: '#E5E7EB', marginBottom: '0.5rem' }}>No notifications yet</h3>
          <p>You'll see important updates and announcements here.</p>
        </div>
      ) : (
        <div style={{ display: 'grid', gap: '1rem' }}>
          {notifications.map(notification => (
            <div 
              key={notification._id} 
              style={{ 
                background: notification.read ? '#23272F' : 'rgba(46, 204, 113, 0.1)', 
                color: '#E5E7EB', 
                borderRadius: '1rem', 
                padding: '1.5rem', 
                border: notification.read ? '1px solid #333' : '1px solid rgba(46, 204, 113, 0.3)',
                boxShadow: notification.read ? '0 1px 6px rgba(0,0,0,0.07)' : '0 2px 12px rgba(46, 204, 113, 0.1)',
                position: 'relative'
              }}
            >
              {!notification.read && (
                <div style={{
                  position: 'absolute',
                  top: '1rem',
                  right: '1rem',
                  width: '8px',
                  height: '8px',
                  background: '#2ECC71',
                  borderRadius: '50%'
                }}></div>
              )}

              <div style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
                <div style={{ fontSize: '1.5rem', marginTop: '0.2rem' }}>🔔</div>
                <div style={{ flex: 1 }}>
                  <div style={{ 
                    fontWeight: 700, 
                    fontSize: '1.1rem', 
                    marginBottom: '0.5rem',
                    color: notification.read ? '#E5E7EB' : '#2ECC71'
                  }}>
                    {notification.title || 'Notification'}
                  </div>
                  <div style={{ 
                    marginBottom: '1rem',
                    lineHeight: '1.5',
                    color: notification.read ? '#A0AEC0' : '#E5E7EB'
                  }}>
                    {notification.message}
                  </div>
                  <div style={{ 
                    display: 'flex', 
                    justifyContent: 'space-between', 
                    alignItems: 'center'
                  }}>
                    <div style={{ fontSize: '0.9rem', color: '#9CA3AF' }}>
                      {new Date(notification.createdAt).toLocaleDateString()}
                    </div>
                    
                    {!notification.read && (
                      <button
                        onClick={() => markAsRead(notification._id)}
                        style={{
                          background: 'transparent',
                          color: '#2ECC71',
                          border: '1px solid #2ECC71',
                          borderRadius: '0.5rem',
                          padding: '0.3rem 0.8rem',
                          fontWeight: 600,
                          cursor: 'pointer',
                          fontSize: '0.8rem'
                        }}
                      >
                        Mark as read
                      </button>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Notifications;
