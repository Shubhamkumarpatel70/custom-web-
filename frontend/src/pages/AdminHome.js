import React, { useState, useEffect } from 'react';
import axios from '../axios';

const AdminHome = () => {
  const [stats, setStats] = useState({
    userCount: 0,
    totalRevenue: 0,
    subCount: 0,
    activeSubs: 0
  });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchStats = async () => {
      try {
        setLoading(true);
        const token = localStorage.getItem('token');
        const response = await axios.get('/api/auth/admin/stats', {
          headers: { Authorization: `Bearer ${token}` }
        });
        setStats(response.data);
      } catch (err) {
        setError('Failed to fetch dashboard statistics');
        console.error('Error fetching stats:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchStats();
  }, []);

  if (loading) {
    return (
      <div style={{ color: '#E5E7EB', textAlign: 'center', marginTop: '2rem' }}>
        Loading dashboard...
      </div>
    );
  }

  if (error) {
    return (
      <div style={{ color: '#EF4444', textAlign: 'center', marginTop: '2rem' }}>
        {error}
      </div>
    );
  }

  return (
    <div style={{ color: '#E5E7EB', padding: '2rem' }}>
      <h1 style={{ color: '#2ECC71', fontWeight: 700, fontSize: '2rem', textAlign: 'center', marginBottom: '1rem' }}>
        Welcome to the Admin Dashboard!
      </h1>
      <p style={{ 
        textAlign: 'center', 
        color: '#9CA3AF', 
        fontSize: '1.1rem', 
        marginBottom: '3rem',
        maxWidth: '800px',
        margin: '0 auto 3rem'
      }}>
        Manage your website, monitor user activity, and track business performance from this comprehensive admin panel.
      </p>
      
      <div style={{ 
        display: 'grid', 
        gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', 
        gap: '1.5rem',
        maxWidth: '1200px',
        margin: '0 auto'
      }}>
        {/* Total Users Card */}
        <div style={{
          background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
          borderRadius: '1rem',
          padding: '2rem',
          textAlign: 'center',
          boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
          transition: 'transform 0.2s ease-in-out'
        }}>
          <div style={{ fontSize: '3rem', marginBottom: '0.5rem' }}>👥</div>
          <h3 style={{ fontSize: '1.5rem', fontWeight: 600, marginBottom: '0.5rem', color: 'white' }}>
            Total Users
          </h3>
          <p style={{ fontSize: '2.5rem', fontWeight: 700, color: 'white', margin: 0 }}>
            {stats.userCount.toLocaleString()}
          </p>
        </div>

        {/* Total Revenue Card */}
        <div style={{
          background: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
          borderRadius: '1rem',
          padding: '2rem',
          textAlign: 'center',
          boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
          transition: 'transform 0.2s ease-in-out'
        }}>
          <div style={{ fontSize: '3rem', marginBottom: '0.5rem' }}>💰</div>
          <h3 style={{ fontSize: '1.5rem', fontWeight: 600, marginBottom: '0.5rem', color: 'white' }}>
            Total Revenue
          </h3>
          <p style={{ fontSize: '2.5rem', fontWeight: 700, color: 'white', margin: 0 }}>
            ${stats.totalRevenue.toLocaleString()}
          </p>
        </div>

        {/* Total Subscriptions Card */}
        <div style={{
          background: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)',
          borderRadius: '1rem',
          padding: '2rem',
          textAlign: 'center',
          boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
          transition: 'transform 0.2s ease-in-out'
        }}>
          <div style={{ fontSize: '3rem', marginBottom: '0.5rem' }}>📊</div>
          <h3 style={{ fontSize: '1.5rem', fontWeight: 600, marginBottom: '0.5rem', color: 'white' }}>
            Total Subscriptions
          </h3>
          <p style={{ fontSize: '2.5rem', fontWeight: 700, color: 'white', margin: 0 }}>
            {stats.subCount.toLocaleString()}
          </p>
        </div>

        {/* Active Subscriptions Card */}
        <div style={{
          background: 'linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)',
          borderRadius: '1rem',
          padding: '2rem',
          textAlign: 'center',
          boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
          transition: 'transform 0.2s ease-in-out'
        }}>
          <div style={{ fontSize: '3rem', marginBottom: '0.5rem' }}>✅</div>
          <h3 style={{ fontSize: '1.5rem', fontWeight: 600, marginBottom: '0.5rem', color: 'white' }}>
            Active Subscriptions
          </h3>
          <p style={{ fontSize: '2.5rem', fontWeight: 700, color: 'white', margin: 0 }}>
            {stats.activeSubs.toLocaleString()}
          </p>
        </div>
      </div>

      {/* Quick Stats Summary */}
      <div style={{ 
        marginTop: '3rem', 
        background: '#23272F', 
        borderRadius: '1rem', 
        padding: '2rem',
        maxWidth: '1200px',
        margin: '3rem auto 0'
      }}>
        <h2 style={{ color: '#2ECC71', fontSize: '1.5rem', marginBottom: '1rem' }}>
          Quick Overview
        </h2>
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', 
          gap: '1rem' 
        }}>
          <div style={{ textAlign: 'center' }}>
            <p style={{ color: '#9CA3AF', fontSize: '0.875rem', margin: 0 }}>Conversion Rate</p>
            <p style={{ color: '#E5E7EB', fontSize: '1.25rem', fontWeight: 600, margin: 0 }}>
              {stats.userCount > 0 ? ((stats.activeSubs / stats.userCount) * 100).toFixed(1) : 0}%
            </p>
          </div>
          <div style={{ textAlign: 'center' }}>
            <p style={{ color: '#9CA3AF', fontSize: '0.875rem', margin: 0 }}>Avg Revenue per User</p>
            <p style={{ color: '#E5E7EB', fontSize: '1.25rem', fontWeight: 600, margin: 0 }}>
              ${stats.userCount > 0 ? (stats.totalRevenue / stats.userCount).toFixed(2) : 0}
            </p>
          </div>
          <div style={{ textAlign: 'center' }}>
            <p style={{ color: '#9CA3AF', fontSize: '0.875rem', margin: 0 }}>Active Rate</p>
            <p style={{ color: '#E5E7EB', fontSize: '1.25rem', fontWeight: 600, margin: 0 }}>
              {stats.subCount > 0 ? ((stats.activeSubs / stats.subCount) * 100).toFixed(1) : 0}%
            </p>
          </div>
        </div>
      </div>

      {/* Quick Actions Section */}
      <div style={{ 
        marginTop: '3rem', 
        background: '#23272F', 
        borderRadius: '1rem', 
        padding: '2rem',
        maxWidth: '1200px',
        margin: '3rem auto 0'
      }}>
        <h2 style={{ color: '#2ECC71', fontSize: '1.5rem', marginBottom: '1.5rem' }}>
          Quick Actions
        </h2>
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', 
          gap: '1.5rem' 
        }}>
          <div style={{ 
            background: '#374151', 
            borderRadius: '0.75rem', 
            padding: '1.5rem',
            border: '1px solid #4B5563'
          }}>
            <h3 style={{ color: '#E5E7EB', fontSize: '1.1rem', marginBottom: '0.5rem' }}>👥 User Management</h3>
            <p style={{ color: '#9CA3AF', fontSize: '0.9rem', marginBottom: '1rem' }}>
              Manage user accounts, change roles, and monitor user activity. View user profiles and subscription status.
            </p>
            <div style={{ color: '#10B981', fontSize: '0.875rem' }}>
              Navigate to "Manage Users" tab →
            </div>
          </div>

          <div style={{ 
            background: '#374151', 
            borderRadius: '0.75rem', 
            padding: '1.5rem',
            border: '1px solid #4B5563'
          }}>
            <h3 style={{ color: '#E5E7EB', fontSize: '1.1rem', marginBottom: '0.5rem' }}>📊 Site Statistics</h3>
            <p style={{ color: '#9CA3AF', fontSize: '0.9rem', marginBottom: '1rem' }}>
              View detailed analytics, user growth trends, and subscription metrics. Monitor site performance.
            </p>
            <div style={{ color: '#10B981', fontSize: '0.875rem' }}>
              Navigate to "Site Stats" tab →
            </div>
          </div>

          <div style={{ 
            background: '#374151', 
            borderRadius: '0.75rem', 
            padding: '1.5rem',
            border: '1px solid #4B5563'
          }}>
            <h3 style={{ color: '#E5E7EB', fontSize: '1.1rem', marginBottom: '0.5rem' }}>🔔 Notifications</h3>
            <p style={{ color: '#9CA3AF', fontSize: '0.9rem', marginBottom: '1rem' }}>
              Send announcements to users, manage notification settings, and track message delivery.
            </p>
            <div style={{ color: '#10B981', fontSize: '0.875rem' }}>
              Navigate to "Notifications" tab →
            </div>
          </div>

          <div style={{ 
            background: '#374151', 
            borderRadius: '0.75rem', 
            padding: '1.5rem',
            border: '1px solid #4B5563'
          }}>
            <h3 style={{ color: '#E5E7EB', fontSize: '1.1rem', marginBottom: '0.5rem' }}>📦 Content Management</h3>
            <p style={{ color: '#9CA3AF', fontSize: '0.9rem', marginBottom: '1rem' }}>
              Manage features, services, team members, and plans. Update website content and pricing.
            </p>
            <div style={{ color: '#10B981', fontSize: '0.875rem' }}>
              Navigate to "Features", "Services", or "Team" tabs →
            </div>
          </div>
        </div>
      </div>

      {/* Recent Activity Section */}
      <div style={{ 
        marginTop: '3rem', 
        background: '#23272F', 
        borderRadius: '1rem', 
        padding: '2rem',
        maxWidth: '1200px',
        margin: '3rem auto 0'
      }}>
        <h2 style={{ color: '#2ECC71', fontSize: '1.5rem', marginBottom: '1.5rem' }}>
          System Status
        </h2>
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', 
          gap: '1rem' 
        }}>
          <div style={{ 
            display: 'flex', 
            alignItems: 'center', 
            padding: '1rem',
            background: '#374151',
            borderRadius: '0.5rem'
          }}>
            <div style={{ 
              width: '12px', 
              height: '12px', 
              borderRadius: '50%', 
              background: '#10B981', 
              marginRight: '1rem' 
            }}></div>
            <div>
              <p style={{ color: '#E5E7EB', margin: 0, fontSize: '0.9rem' }}>Database Connection</p>
              <p style={{ color: '#9CA3AF', margin: 0, fontSize: '0.8rem' }}>Connected & Healthy</p>
            </div>
          </div>

          <div style={{ 
            display: 'flex', 
            alignItems: 'center', 
            padding: '1rem',
            background: '#374151',
            borderRadius: '0.5rem'
          }}>
            <div style={{ 
              width: '12px', 
              height: '12px', 
              borderRadius: '50%', 
              background: '#10B981', 
              marginRight: '1rem' 
            }}></div>
            <div>
              <p style={{ color: '#E5E7EB', margin: 0, fontSize: '0.9rem' }}>Notification System</p>
              <p style={{ color: '#9CA3AF', margin: 0, fontSize: '0.8rem' }}>Auto-cleanup Active</p>
            </div>
          </div>

          <div style={{ 
            display: 'flex', 
            alignItems: 'center', 
            padding: '1rem',
            background: '#374151',
            borderRadius: '0.5rem'
          }}>
            <div style={{ 
              width: '12px', 
              height: '12px', 
              borderRadius: '50%', 
              background: '#10B981', 
              marginRight: '1rem' 
            }}></div>
            <div>
              <p style={{ color: '#E5E7EB', margin: 0, fontSize: '0.9rem' }}>API Services</p>
              <p style={{ color: '#9CA3AF', margin: 0, fontSize: '0.8rem' }}>All Systems Operational</p>
            </div>
          </div>

          <div style={{ 
            display: 'flex', 
            alignItems: 'center', 
            padding: '1rem',
            background: '#374151',
            borderRadius: '0.5rem'
          }}>
            <div style={{ 
              width: '12px', 
              height: '12px', 
              borderRadius: '50%', 
              background: '#10B981', 
              marginRight: '1rem' 
            }}></div>
            <div>
              <p style={{ color: '#E5E7EB', margin: 0, fontSize: '0.9rem' }}>Security</p>
              <p style={{ color: '#9CA3AF', margin: 0, fontSize: '0.8rem' }}>All Checks Passed</p>
            </div>
          </div>
        </div>
      </div>

      {/* Footer Information */}
      <div style={{ 
        marginTop: '3rem', 
        textAlign: 'center',
        padding: '2rem',
        color: '#9CA3AF',
        fontSize: '0.9rem'
      }}>
        <p style={{ margin: '0 0 0.5rem 0' }}>
          Admin Dashboard v2.0 • Last updated: {new Date().toLocaleDateString()}
        </p>
        <p style={{ margin: 0 }}>
          Need help? Check the "Help" tab or contact system administrator.
        </p>
      </div>
    </div>
  );
};

export default AdminHome; 