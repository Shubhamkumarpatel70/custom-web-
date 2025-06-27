import React, { useState } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import axios from '../axios';
import { UserContext } from '../UserContext';

const planDisplayNames = {
  starter: 'Starter',
  premium: 'Premium',
  pro: 'Pro',
};

const Payment = () => {
  const { plan } = useParams();
  const navigate = useNavigate();
  const [status, setStatus] = useState('idle');
  const [subscription, setSubscription] = useState(null);
  const [error, setError] = useState('');

  const handlePayment = async () => {
    setStatus('processing');
    setError('');
    try {
      const token = localStorage.getItem('token');
      const res = await axios.post('/api/auth/subscribe', { plan }, {
        headers: { Authorization: `Bearer ${token}` }
      });
      setSubscription(res.data.subscription);
      setStatus('success');
    } catch (err) {
      setStatus('error');
      setError(err.response?.data?.message || 'Payment or subscription failed.');
    }
  };

  if (!['starter', 'premium', 'pro'].includes(plan)) {
    return <div style={{ color: '#FF6B35', textAlign: 'center', marginTop: '3rem' }}>Invalid plan selected.</div>;
  }
  
  return (
    <div style={{ background: '#181A20', minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <div style={{ background: '#23272F', borderRadius: '1.2rem', padding: '2.5rem 2rem', boxShadow: '0 2px 16px rgba(0,0,0,0.12)', minWidth: '320px', maxWidth: '400px', width: '100%', color: '#E5E7EB', textAlign: 'center' }}>
        <h2 style={{ color: '#2ECC71', fontWeight: 700, fontSize: '2rem', marginBottom: '1.2rem' }}>Payment for {planDisplayNames[plan]}</h2>
        {status === 'idle' && (
          <>
            <p style={{ marginBottom: '1.5rem' }}>Click below to simulate payment and subscribe to the <b>{planDisplayNames[plan]}</b> plan.</p>
            <button onClick={handlePayment} style={{ background: '#2ECC71', color: '#181A20', border: 'none', borderRadius: '0.5rem', padding: '0.9rem 2rem', fontWeight: 700, fontSize: '1.1rem', cursor: 'pointer' }}>Pay & Subscribe</button>
          </>
        )}
        {status === 'processing' && <div>Processing payment...</div>}
        {status === 'success' && subscription && (
          <div style={{ marginTop: '1.5rem' }}>
            <div style={{ color: '#2ECC71', fontWeight: 700, marginBottom: '1rem' }}>Subscription Created!</div>
            <div><b>Plan:</b> {planDisplayNames[subscription.plan]}</div>
            <div><b>Subscription ID:</b> {subscription.uniqueId}</div>
            <div><b>Status:</b> {subscription.status}</div>
            <div style={{ marginTop: '1.2rem' }}>
              <button 
                onClick={() => navigate('/dashboard/purchases')} 
                style={{ 
                  background: '#0057D9', 
                  color: '#fff',
                  border: 'none',
                  borderRadius: '0.5rem', 
                  padding: '0.7rem 1.5rem', 
                  fontWeight: 700, 
                  fontSize: '1rem', 
                  cursor: 'pointer' 
                }}
              >
                Go to My Purchases
              </button>
            </div>
          </div>
        )}
        {status === 'error' && <div style={{ color: '#FF6B35', marginTop: '1rem' }}>{error}</div>}
      </div>
    </div>
  );
};

export default Payment; 