import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const faqs = [
  { q: 'How do I upgrade my subscription?', a: 'Go to the Subscription tab and click Upgrade. You can select a new plan and proceed to payment.' },
  { q: 'How do I contact support?', a: 'Use the contact form on the Contact page or start a chat below.' },
  { q: 'How do I change my password?', a: 'Go to Account Settings and use the Change Password form.' },
  { q: 'What happens if my subscription expires?', a: 'You will lose access to premium features until you renew or upgrade your plan.' },
];

const HelpAndSupport = () => {
  const [complaints, setComplaints] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [message, setMessage] = useState('');
  const [submitting, setSubmitting] = useState(false);
  const navigate = useNavigate();

  const fetchComplaints = async () => {
    setLoading(true);
    setError('');
    try {
      const token = localStorage.getItem('token');
      const res = await axios.get('/api/auth/complaints', {
        headers: { Authorization: `Bearer ${token}` },
      });
      setComplaints(res.data.complaints);
    } catch (err) {
      setError('Could not fetch your support tickets.');
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchComplaints();
  }, []);

  const handleSubmitComplaint = async (e) => {
    e.preventDefault();
    if (!message.trim()) {
      setError('Please enter a message for your complaint.');
      return;
    }
    setSubmitting(true);
    setError('');
    try {
      const token = localStorage.getItem('token');
      await axios.post(
        '/api/auth/complaints',
        { message },
        { headers: { Authorization: `Bearer ${token}` } }
      );
      setMessage('');
      fetchComplaints(); // Refresh the list
    } catch (err) {
      setError(err.response?.data?.message || 'Could not submit your complaint.');
    }
    setSubmitting(false);
  };
  
  const getStatusStyle = (status) => {
    switch (status) {
      case 'open':
        return { color: '#FFA500', background: 'rgba(255, 165, 0, 0.1)', borderColor: '#FFA500' };
      case 'resolved':
        return { color: '#2ECC71', background: 'rgba(46, 204, 113, 0.1)', borderColor: '#2ECC71' };
      default:
        return { color: '#9CA3AF', background: '#23272F', borderColor: '#333' };
    }
  };

  return (
    <div style={{ maxWidth: '800px', margin: '0 auto', color: '#E5E7EB' }}>
      <h2 style={{ color: '#2ECC71', fontWeight: 700, fontSize: '1.7rem', marginBottom: '1.5rem' }}>Help & Support</h2>

      {/* Submit new complaint */}
      <div style={{ background: '#23272F', borderRadius: '1rem', padding: '2rem', marginBottom: '2rem' }}>
        <h3 style={{ color: '#E5E7EB', marginBottom: '1rem' }}>Submit a New Complaint</h3>
        <form onSubmit={handleSubmitComplaint}>
          <textarea
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Please describe your issue in detail..."
            style={{
              width: '100%',
              minHeight: '100px',
              padding: '1rem',
              borderRadius: '0.5rem',
              border: '1px solid #333',
              background: '#181A20',
              color: '#E5E7EB',
              marginBottom: '1rem',
              resize: 'vertical',
            }}
          />
          {error && <div style={{ color: '#FF6B35', marginBottom: '1rem' }}>{error}</div>}
          <button type="submit" disabled={submitting} style={{ background: '#2ECC71', color: '#181A20', border: 'none', borderRadius: '0.5rem', padding: '0.7rem 1.5rem', fontWeight: 700, cursor: 'pointer' }}>
            {submitting ? 'Submitting...' : 'Submit Complaint'}
          </button>
        </form>
      </div>

      {/* Existing complaints */}
      <div>
        <h3 style={{ color: '#E5E7EB', marginBottom: '1rem' }}>Your Support Tickets</h3>
        {loading ? (
          <div>Loading tickets...</div>
        ) : complaints.length === 0 ? (
          <div style={{ background: '#23272F', borderRadius: '1rem', padding: '2rem', textAlign: 'center', color: '#9CA3AF' }}>
            You haven't submitted any complaints yet.
          </div>
        ) : (
          <ul style={{ listStyle: 'none', padding: 0, display: 'grid', gap: '1rem' }}>
            {complaints.map((c) => {
               const statusStyle = getStatusStyle(c.status);
               return (
                <li key={c._id} style={{ background: '#23272F', borderRadius: '0.5rem', padding: '1.5rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <div>
                    <p style={{ margin: 0, marginBottom: '0.75rem', lineHeight: '1.5' }}>{c.message}</p>
                    <div style={{ fontSize: '0.9rem', color: '#9CA3AF' }}>
                      Submitted: {new Date(c.createdAt).toLocaleString()}
                    </div>
                  </div>
                  <div style={{ textAlign: 'right' }}>
                    <div style={{ ...statusStyle, display: 'inline-block', padding: '0.3rem 0.8rem', borderRadius: '0.5rem', marginBottom: '0.75rem', fontWeight: '600', border: '1px solid' }}>
                      {c.status}
                    </div>
                    <button onClick={() => navigate(`/support-chat/${c._id}`)} style={{ background: '#0057D9', color: '#fff', border: 'none', borderRadius: '0.5rem', padding: '0.5rem 1rem', fontWeight: 600, cursor: 'pointer', display: 'block', width: '100%' }}>
                      View Chat
                    </button>
                  </div>
                </li>
              );
            })}
          </ul>
        )}
      </div>
    </div>
  );
};

export default HelpAndSupport; 