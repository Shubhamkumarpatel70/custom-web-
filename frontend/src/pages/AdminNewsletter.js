import React, { useEffect, useState } from 'react';
import axios from '../axios';

const AdminNewsletter = () => {
  const [subscribers, setSubscribers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchSubscribers = async () => {
      setLoading(true);
      setError('');
      try {
        const token = localStorage.getItem('token');
        const res = await axios.get('/api/auth/admin/newsletter-subscribers', {
          headers: { Authorization: `Bearer ${token}` }
        });
        setSubscribers(res.data.subscribers);
      } catch (err) {
        setError('Could not fetch newsletter subscribers.');
      }
      setLoading(false);
    };
    fetchSubscribers();
  }, []);

  return (
    <div style={{ color: '#E5E7EB', maxWidth: '900px', margin: '0 auto' }}>
      <h2 style={{ color: '#2ECC71', fontWeight: 700, fontSize: '1.7rem', marginBottom: '1.2rem' }}>Newsletter Subscribers</h2>
      <div style={{ background: '#23272F', borderRadius: '1rem', padding: '2rem', boxShadow: '0 2px 12px rgba(0,0,0,0.08)' }}>
        {loading ? (
          <div>Loading...</div>
        ) : error ? (
          <div style={{ color: '#FF6B35' }}>{error}</div>
        ) : subscribers.length === 0 ? (
          <div>No newsletter subscribers found.</div>
        ) : (
          <table style={{ width: '100%', borderCollapse: 'collapse', color: '#E5E7EB' }}>
            <thead>
              <tr style={{ background: '#181A20' }}>
                <th style={{ padding: '0.7rem', borderBottom: '1px solid #333' }}>Email</th>
                <th style={{ padding: '0.7rem', borderBottom: '1px solid #333' }}>Subscribed At</th>
                <th style={{ padding: '0.7rem', borderBottom: '1px solid #333' }}>Status</th>
              </tr>
            </thead>
            <tbody>
              {subscribers.map(sub => (
                <tr key={sub._id}>
                  <td style={{ padding: '0.7rem', borderBottom: '1px solid #333' }}>{sub.email}</td>
                  <td style={{ padding: '0.7rem', borderBottom: '1px solid #333' }}>{new Date(sub.createdAt).toLocaleString()}</td>
                  <td style={{ padding: '0.7rem', borderBottom: '1px solid #333', fontWeight: 700, color: sub.status === 'subscribed' ? '#2ECC71' : '#FF6B35' }}>{sub.status === 'subscribed' ? 'Subscribed' : 'Unsubscribed'}</td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
};

export default AdminNewsletter; 