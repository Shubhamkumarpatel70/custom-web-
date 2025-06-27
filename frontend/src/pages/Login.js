import React, { useState, useContext } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import axios from '../axios';
import { UserContext } from '../UserContext';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const { setUser } = useContext(UserContext);

  const handleSubmit = async e => {
    e.preventDefault();
    setLoading(true);
    setMessage('');
    try {
      const res = await axios.post('/api/auth/login', { email, password });
      localStorage.setItem('token', res.data.token);
      setUser(res.data.user);
      setLoading(false);
      if (res.data.user && res.data.user.role === 'admin') {
        navigate('/admin-dashboard');
      } else {
        navigate('/dashboard');
      }
    } catch (err) {
      setLoading(false);
      setMessage(err.response?.data?.message || 'Login failed.');
    }
  };

  const handleGoogleLogin = () => {
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
        border: '2px solid #0057D9',
      }}>
        <h2 style={{ color: '#2ECC71', fontWeight: 700, marginBottom: '0.5rem', textAlign: 'center', fontSize: '2rem' }}>Login</h2>
        {location.state?.success && (
          <div style={{ color: '#2ECC71', textAlign: 'center', marginBottom: '0.5rem', fontWeight: 600 }}>
            {location.state.success}
          </div>
        )}
        <div style={{ position: 'relative' }}>
          <span style={{
            position: 'absolute',
            left: '0.8rem',
            top: '50%',
            transform: 'translateY(-50%)',
            color: '#A0AEC0',
            fontSize: '1.1rem',
            pointerEvents: 'none',
            zIndex: 2
          }}>\u2709\uFE0F</span>
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={e => setEmail(e.target.value)}
            required
            style={{
              padding: '0.8rem 0.8rem 0.8rem 2.2rem',
              borderRadius: '0.5rem',
              border: '1px solid #333',
              fontSize: '1rem',
              background: '#23272F',
              color: '#E5E7EB',
              width: '100%'
            }}
          />
        </div>
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
          background: '#0057D9',
          color: '#E5E7EB',
          padding: '0.9rem',
          border: 'none',
          borderRadius: '0.5rem',
          fontWeight: 700,
          fontSize: '1.1rem',
          cursor: 'pointer',
          marginTop: '0.5rem',
          borderBottom: '3px solid #2ECC71',
        }}>{loading ? 'Logging in...' : 'Login'}</button>
        {message && <div style={{ color: '#FF6B35', textAlign: 'center', marginTop: '0.5rem' }}>{message}</div>}
      </form>
    </div>
  );
}

export default Login; 