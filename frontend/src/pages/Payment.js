import React, { useState, useEffect } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import axios from '../axios';
import { UserContext } from '../UserContext';
import QRCode from 'qrcode.react';

const planDisplayNames = {
  starter: 'Starter',
  premium: 'Premium',
  pro: 'Pro',
};

const UPI_ID = 'customweb@upi';

const Payment = () => {
  const { plan } = useParams();
  const navigate = useNavigate();
  const [status, setStatus] = useState('idle');
  const [subscription, setSubscription] = useState(null);
  const [error, setError] = useState('');
  const [plans, setPlans] = useState([]);
  const [selectedMethod, setSelectedMethod] = useState('scan');
  const [transactionId, setTransactionId] = useState('');
  const [amount, setAmount] = useState('');

  useEffect(() => {
    const fetchPlans = async () => {
      try {
        const res = await axios.get('/api/auth/plans');
        setPlans(res.data.plans);
        const found = res.data.plans.find(p => p.name.toLowerCase() === plan.toLowerCase());
        if (found) setAmount(found.price);
      } catch {}
    };
    fetchPlans();
  }, [plan]);

  if (!['starter', 'premium', 'pro'].includes(plan)) {
    return <div style={{ color: '#FF6B35', textAlign: 'center', marginTop: '3rem' }}>Invalid plan selected.</div>;
  }

  const handlePayment = async () => {
    if (!transactionId) {
      setError('Please enter your transaction ID.');
      return;
    }
    setStatus('processing');
    setError('');
    try {
      const token = localStorage.getItem('token');
      const res = await axios.post('/api/auth/subscribe', { plan: plan.toLowerCase(), transactionId, method: selectedMethod }, {
        headers: { Authorization: `Bearer ${token}` }
      });
      setSubscription(res.data.subscription);
      setStatus('success');
    } catch (err) {
      setStatus('error');
      setError(err.response?.data?.message || 'Payment or subscription failed.');
    }
  };

  const upiString = `upi://pay?pa=${UPI_ID}&pn=Custom Web&am=${amount}&cu=INR&tn=${planDisplayNames[plan]} Plan`;

  return (
    <div style={{ background: '#181A20', minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <div style={{ background: '#23272F', borderRadius: '1.2rem', padding: '2.5rem 2rem', boxShadow: '0 2px 16px rgba(0,0,0,0.12)', minWidth: '320px', maxWidth: '400px', width: '100%', color: '#E5E7EB', textAlign: 'center' }}>
        <h2 style={{ color: '#2ECC71', fontWeight: 700, fontSize: '2rem', marginBottom: '1.2rem' }}>Payment for {planDisplayNames[plan]}</h2>
        {status === 'idle' && (
          <>
            <div style={{ marginBottom: '1.2rem' }}>
              <b>Plan:</b> {planDisplayNames[plan]}<br />
              <b>Amount:</b> ₹{amount}
            </div>
            <div style={{ marginBottom: '1.2rem' }}>
              <label style={{ fontWeight: 600, marginRight: 10 }}>Payment Method:</label>
              <label style={{ marginRight: 15 }}>
                <input type="radio" name="method" value="scan" checked={selectedMethod === 'scan'} onChange={() => setSelectedMethod('scan')} /> Scan & Pay
              </label>
              <label>
                <input type="radio" name="method" value="upi" checked={selectedMethod === 'upi'} onChange={() => setSelectedMethod('upi')} /> UPI ID
              </label>
            </div>
            {selectedMethod === 'scan' && (
              <div style={{ marginBottom: '1.2rem' }}>
                <div style={{ marginBottom: 10 }}><b>Scan this QR code to pay</b></div>
                <QRCode value={upiString} size={160} bgColor="#23272F" fgColor="#2ECC71" />
                <div style={{ marginTop: 10, fontSize: '0.95rem', color: '#A0AEC0' }}>UPI: {UPI_ID}</div>
              </div>
            )}
            {selectedMethod === 'upi' && (
              <div style={{ marginBottom: '1.2rem' }}>
                <div style={{ marginBottom: 10 }}><b>Pay to this UPI ID:</b></div>
                <div style={{ fontSize: '1.1rem', color: '#2ECC71', fontWeight: 700 }}>{UPI_ID}</div>
              </div>
            )}
            <div style={{ marginBottom: '1.2rem' }}>
              <input
                type="text"
                placeholder="Enter Transaction ID"
                value={transactionId}
                onChange={e => setTransactionId(e.target.value)}
                style={{ width: '100%', padding: '0.7rem', borderRadius: '0.4rem', border: '1px solid #333', background: '#181A20', color: '#E5E7EB', marginBottom: 5 }}
              />
              <div style={{ fontSize: '0.95rem', color: '#A0AEC0' }}>After payment, enter your transaction/reference ID above.</div>
            </div>
            <button onClick={handlePayment} style={{ background: '#2ECC71', color: '#181A20', border: 'none', borderRadius: '0.5rem', padding: '0.9rem 2rem', fontWeight: 700, fontSize: '1.1rem', cursor: 'pointer' }}>Submit Payment</button>
            {error && <div style={{ color: '#FF6B35', marginTop: '1rem' }}>{error}</div>}
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