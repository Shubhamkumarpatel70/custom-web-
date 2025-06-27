import React, { useEffect, useState } from 'react';
import axios from 'axios';

const planDisplayNames = {
  starter: 'Starter',
  premium: 'Premium',
  pro: 'Pro',
};

const AdminApprove = () => {
  const [subs, setSubs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [actionMsg, setActionMsg] = useState('');
  const [rejectingId, setRejectingId] = useState(null);
  const [rejectReason, setRejectReason] = useState('');

  const fetchSubs = async () => {
    setLoading(true);
    setError('');
    try {
      const token = localStorage.getItem('token');
      const res = await axios.get('/api/auth/admin/pending-subscriptions', {
        headers: { Authorization: `Bearer ${token}` }
      });
      setSubs(res.data.subscriptions);
    } catch (err) {
      setError('Could not fetch subscriptions.');
    }
    setLoading(false);
  };

  useEffect(() => { fetchSubs(); }, []);

  const handleApprove = async (id) => {
    setActionMsg('');
    try {
      const token = localStorage.getItem('token');
      await axios.patch(`/api/auth/admin/approve-subscription/${id}`, {}, {
        headers: { Authorization: `Bearer ${token}` }
      });
      setActionMsg('Subscription approved!');
      fetchSubs();
    } catch {
      setActionMsg('Could not approve.');
    }
  };

  const handleReject = async (id) => {
    if (!rejectReason.trim()) {
      setActionMsg('Please enter a rejection reason.');
      return;
    }
    setActionMsg('');
    try {
      const token = localStorage.getItem('token');
      await axios.patch(`/api/auth/admin/reject-subscription/${id}`, { reason: rejectReason }, {
        headers: { Authorization: `Bearer ${token}` }
      });
      setActionMsg('Subscription rejected!');
      setRejectingId(null);
      setRejectReason('');
      fetchSubs();
    } catch {
      setActionMsg('Could not reject.');
    }
  };

  return (
    <div style={{ color: '#E5E7EB', maxWidth: '800px', margin: '0 auto' }}>
      <h2 style={{ color: '#2ECC71', fontWeight: 700, fontSize: '1.7rem', marginBottom: '1.2rem' }}>Approve Subscriptions</h2>
      <div style={{ background: '#23272F', borderRadius: '1rem', padding: '2rem', boxShadow: '0 2px 12px rgba(0,0,0,0.08)' }}>
        {loading ? (
          <div>Loading...</div>
        ) : error ? (
          <div style={{ color: '#FF6B35' }}>{error}</div>
        ) : subs.length === 0 ? (
          <div>No pending subscriptions.</div>
        ) : (
          <ul style={{ listStyle: 'none', padding: 0 }}>
            {subs.map(sub => (
              <li key={sub._id} style={{ background: '#181A20', borderRadius: '0.5rem', padding: '1rem', marginBottom: '1rem' }}>
                <div><b>User:</b> {sub.user?.name} ({sub.user?.email})</div>
                <div><b>Plan:</b> {planDisplayNames[sub.plan]}</div>
                <div><b>Subscription ID:</b> {sub.uniqueId}</div>
                <div style={{ fontSize: '0.95rem', color: '#A0AEC0' }}>Requested: {new Date(sub.createdAt).toLocaleString()}</div>
                {rejectingId === sub._id ? (
                  <div style={{ marginTop: '0.7rem' }}>
                    <input
                      type="text"
                      value={rejectReason}
                      onChange={e => setRejectReason(e.target.value)}
                      placeholder="Enter rejection reason"
                      style={{ width: '70%', marginRight: '0.5rem', padding: '0.4rem', borderRadius: '0.3rem' }}
                    />
                    <button onClick={() => handleReject(sub._id)} style={{ background: '#FF6B35', color: '#fff', border: 'none', borderRadius: '0.5rem', padding: '0.4rem 1rem', fontWeight: 600, cursor: 'pointer' }}>Submit</button>
                    <button onClick={() => { setRejectingId(null); setRejectReason(''); }} style={{ marginLeft: '0.5rem', background: '#23272F', color: '#E5E7EB', border: '1px solid #A0AEC0', borderRadius: '0.5rem', padding: '0.4rem 1rem', fontWeight: 600, cursor: 'pointer' }}>Cancel</button>
                  </div>
                ) : (
                  <div style={{ marginTop: '0.7rem' }}>
                    <button onClick={() => handleApprove(sub._id)} style={{ background: '#2ECC71', color: '#181A20', border: 'none', borderRadius: '0.5rem', padding: '0.4rem 1rem', fontWeight: 600, cursor: 'pointer', marginRight: '0.5rem' }}>Approve</button>
                    <button onClick={() => setRejectingId(sub._id)} style={{ background: '#FF6B35', color: '#fff', border: 'none', borderRadius: '0.5rem', padding: '0.4rem 1rem', fontWeight: 600, cursor: 'pointer' }}>Reject</button>
                  </div>
                )}
              </li>
            ))}
          </ul>
        )}
        {actionMsg && <div style={{ color: actionMsg.includes('approve') ? '#2ECC71' : '#FF6B35', marginTop: '1rem' }}>{actionMsg}</div>}
      </div>
    </div>
  );
};

export default AdminApprove; 