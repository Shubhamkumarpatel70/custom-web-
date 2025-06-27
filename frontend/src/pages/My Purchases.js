import React from 'react';

const mockPurchases = [
  { plan: 'Pro', status: 'active', purchasedAt: new Date(Date.now() - 10 * 24 * 60 * 60 * 1000), expiresAt: new Date(Date.now() + 20 * 24 * 60 * 60 * 1000), amount: 49 },
  { plan: 'Basic', status: 'expired', purchasedAt: new Date(Date.now() - 40 * 24 * 60 * 60 * 1000), expiresAt: new Date(Date.now() - 10 * 24 * 60 * 60 * 1000), amount: 19 },
];

const MyPurchases = () => (
  <div style={{ maxWidth: 700, margin: '0 auto', color: '#E5E7EB' }}>
    <h2 style={{ color: '#2ECC71', fontWeight: 700, fontSize: '1.7rem', marginBottom: '1.2rem' }}>My Purchases</h2>
    <div style={{ background: '#23272F', borderRadius: '1rem', padding: '2rem', boxShadow: '0 2px 12px rgba(0,0,0,0.08)' }}>
      <table style={{ width: '100%', borderCollapse: 'collapse', color: '#E5E7EB' }}>
        <thead>
          <tr style={{ background: '#181A20' }}>
            <th style={{ padding: '0.8rem', textAlign: 'left' }}>Plan</th>
            <th style={{ padding: '0.8rem', textAlign: 'left' }}>Status</th>
            <th style={{ padding: '0.8rem', textAlign: 'left' }}>Purchase Date</th>
            <th style={{ padding: '0.8rem', textAlign: 'left' }}>Expiration</th>
            <th style={{ padding: '0.8rem', textAlign: 'left' }}>Amount ($)</th>
          </tr>
        </thead>
        <tbody>
          {mockPurchases.map((p, i) => (
            <tr key={i} style={{ borderBottom: '1px solid #333' }}>
              <td style={{ padding: '0.8rem' }}>{p.plan}</td>
              <td style={{ padding: '0.8rem' }}>{p.status}</td>
              <td style={{ padding: '0.8rem' }}>{p.purchasedAt.toLocaleDateString()}</td>
              <td style={{ padding: '0.8rem' }}>{p.expiresAt.toLocaleDateString()}</td>
              <td style={{ padding: '0.8rem' }}>{p.amount}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  </div>
);

export default MyPurchases; 