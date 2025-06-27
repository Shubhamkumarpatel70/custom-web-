import React, { useEffect, useState } from 'react';
import axios from 'axios';

const AdminContacts = () => {
  const [contacts, setContacts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchContacts = async () => {
      setLoading(true);
      setError('');
      try {
        const token = localStorage.getItem('token');
        const res = await axios.get('/api/auth/contacts', {
          headers: { Authorization: `Bearer ${token}` }
        });
        setContacts(res.data.contacts);
      } catch (err) {
        setError('Could not fetch contacts.');
      }
      setLoading(false);
    };
    fetchContacts();
  }, []);

  return (
    <div style={{ color: '#E5E7EB', maxWidth: '900px', margin: '0 auto' }}>
      <h2 style={{ color: '#2ECC71', fontWeight: 700, fontSize: '1.7rem', marginBottom: '1.2rem' }}>User Contacts</h2>
      <div style={{ background: '#23272F', borderRadius: '1rem', padding: '2rem', boxShadow: '0 2px 12px rgba(0,0,0,0.08)' }}>
        {loading ? (
          <div>Loading...</div>
        ) : error ? (
          <div style={{ color: '#FF6B35' }}>{error}</div>
        ) : contacts.length === 0 ? (
          <div>No contacts found.</div>
        ) : (
          <table style={{ width: '100%', borderCollapse: 'collapse', color: '#E5E7EB' }}>
            <thead>
              <tr style={{ background: '#181A20' }}>
                <th style={{ padding: '0.7rem', borderBottom: '1px solid #333' }}>Name</th>
                <th style={{ padding: '0.7rem', borderBottom: '1px solid #333' }}>Email</th>
                <th style={{ padding: '0.7rem', borderBottom: '1px solid #333' }}>Message</th>
                <th style={{ padding: '0.7rem', borderBottom: '1px solid #333' }}>Submitted</th>
              </tr>
            </thead>
            <tbody>
              {contacts.map(contact => (
                <tr key={contact._id} style={{ background: '#23272F' }}>
                  <td style={{ padding: '0.7rem', borderBottom: '1px solid #333' }}>{contact.name}</td>
                  <td style={{ padding: '0.7rem', borderBottom: '1px solid #333' }}>{contact.email}</td>
                  <td style={{ padding: '0.7rem', borderBottom: '1px solid #333' }}>{contact.message}</td>
                  <td style={{ padding: '0.7rem', borderBottom: '1px solid #333' }}>{new Date(contact.createdAt).toLocaleString()}</td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
};

export default AdminContacts; 