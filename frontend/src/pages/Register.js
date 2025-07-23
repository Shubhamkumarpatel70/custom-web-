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
    <div style={{ 
      background: '#181A20', 
      minHeight: '100vh', 
      display: 'flex', 
      alignItems: 'center', 
      justifyContent: 'center',
      padding: '1rem'
    }}>
      <form onSubmit={handleSubmit} style={{
        background: '#23272F',
        color: '#E5E7EB',
        padding: '2rem 1.5rem',
        borderRadius: '1rem',
        boxShadow: '0 4px 20px rgba(0,0,0,0.2)',
        width: '100%',
        maxWidth: '420px',
        display: 'flex',
        flexDirection: 'column',
        gap: '1.2rem',
        border: '1px solid #2ECC71',
        transition: 'all 0.3s ease',
      }}>
        <h2 style={{ 
          color: '#FF6B35', 
          fontWeight: 700, 
          margin: '0 0 1rem 0', 
          textAlign: 'center', 
          fontSize: '1.8rem',
          lineHeight: '1.3'
        }}>Create Account</h2>
        
        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
          <label htmlFor="name" style={{ fontSize: '0.95rem', color: '#A0AEC0' }}>Full Name</label>
          <input
            id="name"
            type="text"
            placeholder="Enter your name"
            value={name}
            onChange={e => setName(e.target.value)}
            required
            style={{
              padding: '0.8rem',
              borderRadius: '0.5rem',
              border: '1px solid #3A3F47',
              fontSize: '1rem',
              background: '#1E2228',
              color: '#E5E7EB',
              transition: 'border 0.2s ease',
            }}
            aria-label="Full name"
          />
        </div>
        
        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
          <label htmlFor="email" style={{ fontSize: '0.95rem', color: '#A0AEC0' }}>Email Address</label>
          <input
            id="email"
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={e => setEmail(e.target.value)}
            required
            style={{
              padding: '0.8rem',
              borderRadius: '0.5rem',
              border: '1px solid #3A3F47',
              fontSize: '1rem',
              background: '#1E2228',
              color: '#E5E7EB',
              transition: 'border 0.2s ease',
            }}
            aria-label="Email address"
          />
        </div>
        
        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
          <label htmlFor="password" style={{ fontSize: '0.95rem', color: '#A0AEC0' }}>Password</label>
          <div style={{ position: 'relative' }}>
            <input
              id="password"
              type={showPassword ? 'text' : 'password'}
              placeholder="Create a password"
              value={password}
              onChange={e => setPassword(e.target.value)}
              required
              style={{
                padding: '0.8rem',
                borderRadius: '0.5rem',
                border: '1px solid #3A3F47',
                fontSize: '1rem',
                background: '#1E2228',
                color: '#E5E7EB',
                width: '100%',
                transition: 'border 0.2s ease',
                paddingRight: '2.5rem',
              }}
              aria-label="Password"
            />
            <button
              type="button"
              onClick={() => setShowPassword(s => !s)}
              style={{
                position: 'absolute',
                right: '0.75rem',
                top: '50%',
                transform: 'translateY(-50%)',
                cursor: 'pointer',
                background: 'transparent',
                border: 'none',
                color: '#A0AEC0',
                fontSize: '1.1rem',
                padding: '0.25rem',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
              aria-label={showPassword ? 'Hide password' : 'Show password'}
            >
              {showPassword ? '🙈' : '👁️'}
            </button>
          </div>
        </div>
        
        <button 
          type="submit" 
          disabled={loading}
          style={{
            background: '#2ECC71',
            color: '#181A20',
            padding: '0.9rem',
            border: 'none',
            borderRadius: '0.5rem',
            fontWeight: 700,
            fontSize: '1rem',
            cursor: 'pointer',
            marginTop: '0.5rem',
            transition: 'all 0.2s ease',
            opacity: loading ? 0.7 : 1,
            ':hover': {
              transform: 'translateY(-1px)',
              boxShadow: '0 2px 10px rgba(46, 204, 113, 0.3)',
            },
          }}
        >
          {loading ? (
            <span style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem' }}>
              <span className="spinner" style={{ display: 'inline-block', width: '1rem', height: '1rem', border: '2px solid rgba(0,0,0,0.3)', borderTopColor: '#181A20', borderRadius: '50%', animation: 'spin 0.8s linear infinite' }}></span>
              Registering...
            </span>
          ) : 'Register'}
        </button>
        
        {message && (
          <div style={{ 
            color: '#FF6B35', 
            textAlign: 'center', 
            marginTop: '0.5rem',
            padding: '0.75rem',
            background: 'rgba(255, 107, 53, 0.1)',
            borderRadius: '0.5rem',
            fontSize: '0.9rem'
          }}>
            {message}
          </div>
        )}
        
        <p style={{ 
          textAlign: 'center', 
          color: '#A0AEC0', 
          marginTop: '0.5rem',
          fontSize: '0.95rem'
        }}>
          Already have an account?{' '}
          <Link to="/login" style={{ 
            color: '#2ECC71', 
            textDecoration: 'none',
            fontWeight: 600,
            ':hover': {
              textDecoration: 'underline'
            }
          }}>
            Sign in
          </Link>
        </p>
      </form>
      
      <style>{`
        @keyframes spin {
          to { transform: rotate(360deg); }
        }
        
        input:focus {
          outline: none;
          border-color: #2ECC71 !important;
          box-shadow: 0 0 0 2px rgba(46, 204, 113, 0.2);
        }
        
        button:disabled {
          cursor: not-allowed;
        }
        
        @media (max-width: 480px) {
          form {
            padding: 1.5rem 1.25rem;
          }
          
          h2 {
            font-size: 1.6rem;
          }
        }
      `}</style>
    </div>
  );
}

export default Register;