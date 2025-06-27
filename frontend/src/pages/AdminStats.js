import React, { useEffect, useState } from 'react';
import axios from '../axios';

const AdminStats = () => {
  const [stats, setStats] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchStats = async () => {
      setLoading(true);
      setError('');
      try {
        const token = localStorage.getItem('token');
        const res = await axios.get('/api/auth/admin/stats', {
          headers: { Authorization: `Bearer ${token}` }
        });
        setStats(res.data);
      } catch (err) {
        setError('Could not fetch stats.');
      }
      setLoading(false);
    };
    fetchStats();
  }, []);

  return (
    <div style={{ color: '#E5E7EB', maxWidth: '600px', margin: '0 auto' }}>
      <h2 style={{ color: '#2ECC71', fontWeight: 700, fontSize: '1.7rem', marginBottom: '1.2rem' }}>Site Statistics</h2>
      <div style={{ background: '#23272F', borderRadius: '1rem', padding: '2rem', boxShadow: '0 2px 12px rgba(0,0,0,0.08)' }}>
        {loading ? (
          <div>Loading...</div>
        ) : error ? (
          <div style={{ color: '#FF6B35' }}>{error}</div>
        ) : stats ? (
          <ul style={{ listStyle: 'none', padding: 0, fontSize: '1.2rem' }}>
            <li style={{ marginBottom: '1rem' }}><b>Total Users:</b> {stats.userCount}</li>
            <li style={{ marginBottom: '1rem' }}><b>Total Subscriptions:</b> {stats.subCount}</li>
            <li style={{ marginBottom: '1rem' }}><b>Active Subscriptions:</b> {stats.activeSubs}</li>
          </ul>
        ) : null}
      </div>
    </div>
  );
};

export default AdminStats; 