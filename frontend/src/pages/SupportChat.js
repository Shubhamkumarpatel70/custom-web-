import React, { useState, useEffect, useRef } from 'react';
import { useParams, Link } from 'react-router-dom';
import axios from '../axios';

const SupportChat = () => {
  const { complaintId } = useParams();
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');
  const [complaint, setComplaint] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [sendError, setSendError] = useState('');
  const messagesEndRef = useRef(null);

  useEffect(() => {
    if (!complaintId) {
      setLoading(false);
      return;
    }
    const fetchComplaint = async () => {
      setLoading(true);
      setError('');
      try {
        const token = localStorage.getItem('token');
        const res = await axios.get(`/api/auth/complaints/${complaintId}` , {
          headers: { Authorization: `Bearer ${token}` }
        });
        setComplaint(res.data.complaint);
      } catch (err) {
        if (err.response) {
          if (err.response.status === 401) {
            setError('Not authorized. Please log in again.');
          } else if (err.response.status === 404) {
            setError('Complaint not found or you do not have access.');
          } else {
            setError('Could not load complaint.');
          }
        } else {
          setError('Network error. Please try again.');
        }
      }
      setLoading(false);
    };
    fetchComplaint();
  }, [complaintId]);

  useEffect(() => {
    if (!complaintId) return;
    const fetchChat = async () => {
      try {
        const token = localStorage.getItem('token');
        const res = await axios.get(`/api/auth/complaints/${complaintId}/chat`, {
          headers: { Authorization: `Bearer ${token}` }
        });
        setMessages(res.data.chat || []);
      } catch (err) {
        setMessages([]);
      }
    };
    fetchChat();
  }, [complaintId]);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  const sendMessage = async e => {
    e.preventDefault();
    setSendError('');
    if (!input.trim()) return;
    try {
      const token = localStorage.getItem('token');
      const res = await axios.post(`/api/auth/complaints/${complaintId}/chat`, { text: input }, {
        headers: { Authorization: `Bearer ${token}` }
      });
      setMessages(res.data.chat);
      setInput('');
    } catch (err) {
      setSendError('Could not send message.');
    }
  };

  const canChat = complaint && (complaint.status === 'open' || complaint.reopenStatus === 'accepted');

  if (!complaintId) {
    return (
      <div style={{ 
        color: '#E5E7EB', 
        maxWidth: '500px', 
        margin: '2rem auto', 
        textAlign: 'center',
        background: '#23272F',
        padding: '2rem',
        borderRadius: '1rem'
      }}>
        <h2 style={{ color: '#FF6B35' }}>No Complaint Selected</h2>
        <p style={{ margin: '1rem 0' }}>
          Please select a complaint from your dashboard to view the chat.
        </p>
        <Link 
          to="/dashboard/support" 
          style={{ 
            background: '#2ECC71', 
            color: '#181A20', 
            textDecoration: 'none',
            padding: '0.7rem 1.5rem',
            borderRadius: '0.5rem',
            fontWeight: 700
          }}
        >
          Go to Support
        </Link>
      </div>
    );
  }

  return (
    <div style={{ color: '#E5E7EB', maxWidth: '500px', margin: '0 auto' }}>
      <h2 style={{ color: '#2ECC71', fontWeight: 700, fontSize: '1.7rem', marginBottom: '1.2rem' }}>Support Chat</h2>
      {loading ? <div>Loading...</div> : error ? <div style={{ color: '#FF6B35' }}>{error}</div> : !complaint ? <div>Complaint not found.</div> : (
        <>
          <div style={{ marginBottom: '1.5rem', background: '#23272F', borderRadius: '1rem', padding: '1.2rem' }}>
            <div><b>Issue:</b> {complaint.message}</div>
            <div><b>Status:</b> <span style={{ color: complaint.status === 'resolved' ? '#2ECC71' : '#FF6B35' }}>{complaint.status}</span></div>
            {complaint.status === 'resolved' && <div style={{ color: '#2ECC71' }}>This complaint is resolved. Chat is closed.</div>}
            {complaint.reopenStatus === 'pending' && <div style={{ color: '#FFA500' }}>Reopen requested (awaiting admin)</div>}
            {complaint.reopenStatus === 'rejected' && <div style={{ color: '#FF6B35' }}>Reopen rejected by admin</div>}
          </div>
          <div style={{ background: '#23272F', borderRadius: '1rem', padding: '2rem', boxShadow: '0 2px 12px rgba(0,0,0,0.08)', minHeight: '300px', marginBottom: '1rem' }}>
            <div style={{ maxHeight: '200px', overflowY: 'auto', marginBottom: '1rem' }}>
              {messages.map((msg, i) => (
                <div key={i} style={{ textAlign: msg.from === 'user' ? 'right' : 'left', margin: '0.5rem 0' }}>
                  <span style={{ background: msg.from === 'user' ? '#2ECC71' : '#0057D9', color: '#fff', borderRadius: '1rem', padding: '0.5rem 1rem', display: 'inline-block', maxWidth: '80%' }}>
                    {msg.text}
                  </span>
                </div>
              ))}
              <div ref={messagesEndRef} />
            </div>
            <form onSubmit={sendMessage} style={{ display: 'flex', gap: '0.5rem' }}>
              <input
                type="text"
                value={input}
                onChange={e => setInput(e.target.value)}
                placeholder={canChat ? "Type your message..." : "Chat is closed for this complaint."}
                style={{ flex: 1, padding: '0.7rem', borderRadius: '0.5rem', border: '1px solid #333', background: '#181A20', color: '#E5E7EB' }}
                disabled={!canChat}
              />
              <button type="submit" style={{ background: '#2ECC71', color: '#181A20', border: 'none', borderRadius: '0.5rem', padding: '0.7rem 1.2rem', fontWeight: 700, fontSize: '1rem', cursor: canChat ? 'pointer' : 'not-allowed' }} disabled={!canChat}>Send</button>
            </form>
            {sendError && <div style={{ color: '#FF6B35', marginTop: '0.5rem' }}>{sendError}</div>}
          </div>
        </>
      )}
    </div>
  );
};

export default SupportChat; 