import React, { useState, useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from '../axios';
import { UserContext } from '../UserContext';

function Register() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const { setUser } = useContext(UserContext);

  const handleSubmit = async e => {
    e.preventDefault();
    setLoading(true);
    setMessage('');
    try {
      const res = await axios.post('/api/auth/register', { name, email, password });
      localStorage.setItem('token', res.data.token);
      setUser(res.data.user);
      setLoading(false);
      navigate('/dashboard');
    } catch (err) {
      setLoading(false);
      setMessage(err.response?.data?.message || 'Registration failed.');
    }
  };

  const handleGoogleRegister = () => {
    window.location.href = '/api/auth/google';
  };

  return (
    <div style={{ background: '#181A20', minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <form onSubmit={handleSubmit} className="responsive-card" style={{
        background: '#23272F',
        color: '#E5E7EB',
        padding: '2.5rem 2rem',
        borderRadius: '1.2rem',
        boxShadow: '0 2px 16px rgba(0,0,0,0.12)',
        minWidth: '320px',
        maxWidth: '350px',
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        gap: '1.2rem',
        border: '2px solid #2ECC71',
      }}>
        <h2 style={{ color: '#FF6B35', fontWeight: 700, marginBottom: '0.5rem', textAlign: 'center', fontSize: '2rem' }}>Register</h2>
        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={e => setName(e.target.value)}
          required
          style={{
            padding: '0.8rem',
            borderRadius: '0.5rem',
            border: '1px solid #333',
            fontSize: '1rem',
            background: '#23272F',
            color: '#E5E7EB',
          }}
        />
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={e => setEmail(e.target.value)}
          required
          style={{
            padding: '0.8rem',
            borderRadius: '0.5rem',
            border: '1px solid #333',
            fontSize: '1rem',
            background: '#23272F',
            color: '#E5E7EB',
          }}
        />
        <div style={{ position: 'relative' }}>
          <input
            type={showPassword ? 'text' : 'password'}
            placeholder="Password"
            value={password}
            onChange={e => setPassword(e.target.value)}
            required
            style={{
              padding: '0.8rem',
              borderRadius: '0.5rem',
              border: '1px solid #333',
              fontSize: '1rem',
              background: '#23272F',
              color: '#E5E7EB',
              width: '100%',
            }}
          />
          <span
            onClick={() => setShowPassword(s => !s)}
            style={{
              position: 'absolute',
              right: '1rem',
              top: '50%',
              transform: 'translateY(-50%)',
              cursor: 'pointer',
              color: '#A0AEC0',
              fontSize: '1.1rem',
              userSelect: 'none',
            }}
            title={showPassword ? 'Hide Password' : 'Show Password'}
          >
            {showPassword ? '🙈' : '👁️'}
          </span>
        </div>
        <button type="submit" style={{
          background: '#2ECC71',
          color: '#181A20',
          padding: '0.9rem',
          border: 'none',
          borderRadius: '0.5rem',
          fontWeight: 700,
          fontSize: '1.1rem',
          cursor: 'pointer',
          marginTop: '0.5rem',
          borderBottom: '3px solid #FF6B35',
        }}>{loading ? 'Registering...' : 'Register'}</button>
        {message && <div style={{ color: '#FF6B35', textAlign: 'center', marginTop: '0.5rem' }}>{message}</div>}
      </form>
    </div>
  );
}

export default Register; 