import React, { useEffect, useState } from 'react';
import axios from '../axios';

const AdminUsers = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchUsers = async () => {
      setLoading(true);
      setError('');
      try {
        const token = localStorage.getItem('token');
        const res = await axios.get('/api/auth/admin/users', {
          headers: { Authorization: `Bearer ${token}` }
        });
        setUsers(res.data.users);
      } catch (err) {
        setError('Could not fetch users.');
      }
      setLoading(false);
    };
    fetchUsers();
  }, []);

  return (
    <div style={{ color: '#E5E7EB', maxWidth: '900px', margin: '0 auto' }}>
      <h2 style={{ color: '#2ECC71', fontWeight: 700, fontSize: '1.7rem', marginBottom: '1.2rem' }}>Manage Users</h2>
      <div style={{ background: '#23272F', borderRadius: '1rem', padding: '2rem', boxShadow: '0 2px 12px rgba(0,0,0,0.08)' }}>
        {loading ? (
          <div>Loading...</div>
        ) : error ? (
          <div style={{ color: '#FF6B35' }}>{error}</div>
        ) : users.length === 0 ? (
          <div>No users found.</div>
        ) : (
          <table style={{ width: '100%', borderCollapse: 'collapse', color: '#E5E7EB' }}>
            <thead>
              <tr style={{ background: '#181A20' }}>
                <th style={{ padding: '0.7rem', borderBottom: '1px solid #333' }}>Name</th>
                <th style={{ padding: '0.7rem', borderBottom: '1px solid #333' }}>Email</th>
                <th style={{ padding: '0.7rem', borderBottom: '1px solid #333' }}>Role</th>
                <th style={{ padding: '0.7rem', borderBottom: '1px solid #333' }}>Created</th>
              </tr>
            </thead>
            <tbody>
              {users.map(user => (
                <tr key={user._id} style={{ background: '#23272F' }}>
                  <td style={{ padding: '0.7rem', borderBottom: '1px solid #333' }}>{user.name}</td>
                  <td style={{ padding: '0.7rem', borderBottom: '1px solid #333' }}>{user.email}</td>
                  <td style={{ padding: '0.7rem', borderBottom: '1px solid #333' }}>{user.role}</td>
                  <td style={{ padding: '0.7rem', borderBottom: '1px solid #333' }}>{new Date(user.createdAt).toLocaleDateString()}</td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
};

export default AdminUsers; 