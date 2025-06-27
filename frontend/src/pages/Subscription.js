import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const planDisplayNames = {
  starter: 'Starter',
  premium: 'Premium',
  pro: 'Pro',
};

const Subscription = () => {
  const [subscription, setSubscription] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [requestStatus, setRequestStatus] = useState({});
  const navigate = useNavigate();

  const fetchSubscription = async () => {
    setLoading(true);
    setError('');
    try {
      const token = localStorage.getItem('token');
      const res = await axios.get('/api/auth/user-subscriptions', {
        headers: { Authorization: `Bearer ${token}` },
      });
      const subscriptions = res.data.subscriptions || [];
      const activeSub = subscriptions.find((s) => s.status === 'active');
      const latestSub = subscriptions.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt))[0];
      setSubscription(activeSub || latestSub || null);
    } catch (err) {
      setError('Could not fetch subscription details.');
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchSubscription();
  }, []);

  const handleRenewalRequest = async () => {
    if (!subscription) return;
    setRequestStatus({ ...requestStatus, [subscription._id]: 'pending' });
    setError('');
    try {
      const token = localStorage.getItem('token');
      await axios.post(
        '/api/auth/renewal-request',
        { subscriptionId: subscription._id },
        { headers: { Authorization: `Bearer ${token}` } }
      );
      setRequestStatus({ ...requestStatus, [subscription._id]: 'success' });
      fetchSubscription();
    } catch (err) {
      const errorMessage = err.response?.data?.message || 'Could not submit renewal request.';
      setError(errorMessage);
      setRequestStatus({ ...requestStatus, [subscription._id]: 'error' });
    }
  };

  const isExpired = subscription && subscription.status === 'expired';
  const isRenewalPending = subscription && subscription.renewalStatus === 'pending';
  const showRenewButton = isExpired && !isRenewalPending;

  if (loading) {
    return <div style={{ color: '#E5E7EB', textAlign: 'center', padding: '2rem' }}>Loading...</div>;
  }

  return (
    <div style={{ maxWidth: 600, margin: '0 auto', color: '#E5E7EB' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.2rem' }}>
        <h2 style={{ color: '#2ECC71', fontWeight: 700, fontSize: '1.7rem', margin: 0 }}>My Subscription</h2>
        {isExpired && !isRenewalPending && <span style={{ background: '#FF6B35', color: '#fff', borderRadius: '0.7rem', padding: '0.3rem 1.1rem', fontWeight: 700, fontSize: '1rem' }}>Expired</span>}
      </div>

      {error && <div style={{ color: '#FF6B35', background: 'rgba(255, 107, 53, 0.1)', padding: '1rem', borderRadius: '0.5rem', marginBottom: '1rem' }}>{error}</div>}
      
      {!subscription && !error ? (
        <div style={{ color: '#A0AEC0', textAlign: 'center', background: '#23272F', padding: '2rem', borderRadius: '1rem' }}>No subscription found.</div>
      ) : subscription && (
        <div style={{ background: '#23272F', borderRadius: '1rem', padding: '2rem', boxShadow: '0 2px 12px rgba(0,0,0,0.08)' }}>
          <div style={{ marginBottom: '1rem' }}><b>Current Plan:</b> {planDisplayNames[subscription.plan]}</div>
          <div style={{ marginBottom: '1rem' }}><b>Status:</b> <span style={{ color: subscription.status === 'active' ? '#2ECC71' : '#FF6B35', fontWeight: 700, marginLeft: '0.5rem' }}>{subscription.status}</span></div>
          <div style={{ marginBottom: '1rem' }}><b>Expires At:</b> {subscription.expiresAt ? new Date(subscription.expiresAt).toLocaleDateString() : 'N/A'}</div>
          
          {isRenewalPending && (
            <div style={{ background: 'rgba(255, 165, 0, 0.1)', padding: '1rem', borderRadius: '0.5rem', color: '#FFA500', fontWeight: 600, marginTop: '1rem' }}>
              Renewal request is pending approval.
            </div>
          )}

          {subscription.renewalStatus === 'rejected' && (
            <div style={{ background: 'rgba(255, 107, 53, 0.1)', padding: '1rem', borderRadius: '0.5rem', color: '#FF6B35', fontWeight: 600, marginTop: '1rem' }}>
              <strong>Renewal Rejected:</strong> {subscription.renewalRejectionReason}
            </div>
          )}

          {showRenewButton && (
            <button onClick={handleRenewalRequest} disabled={requestStatus[subscription._id] === 'pending'} style={{ background: '#2ECC71', color: '#181A20', border: 'none', borderRadius: '0.5rem', padding: '0.7rem 1.5rem', fontWeight: 700, fontSize: '1rem', cursor: 'pointer', marginTop: '1rem' }}>
              {requestStatus[subscription._id] === 'pending' ? 'Requesting...' : 'Request Renewal'}
            </button>
          )}
        </div>
      )}
    </div>
  );
};

export default Subscription; 