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

  return (
    <div style={{ 
      background: '#181A20', 
      minHeight: '100vh', 
      display: 'flex', 
      alignItems: 'center', 
      justifyContent: 'center',
      padding: '1rem'
    }}>
      <form 
        onSubmit={handleSubmit} 
        style={{
          background: '#23272F',
          color: '#E5E7EB',
          padding: '2rem 1.5rem',
          borderRadius: '1rem',
          boxShadow: '0 4px 20px rgba(0,0,0,0.2)',
          width: '100%',
          maxWidth: '400px',
          display: 'flex',
          flexDirection: 'column',
          gap: '1.25rem',
          border: '2px solid #0057D9',
        }}
      >
        <h2 style={{ 
          color: '#2ECC71', 
          fontWeight: 700, 
          marginBottom: '0.25rem', 
          textAlign: 'center', 
          fontSize: '1.75rem' 
        }}>
          Login
        </h2>
        
        {location.state?.success && (
          <div style={{ 
            color: '#2ECC71', 
            textAlign: 'center', 
            marginBottom: '0.5rem', 
            fontWeight: 600,
            fontSize: '0.95rem'
          }}>
            {location.state.success}
          </div>
        )}
        
        <div style={{ position: 'relative' }}>
          <label 
            htmlFor="email" 
            style={{
              position: 'absolute',
              left: '1rem',
              top: '50%',
              transform: 'translateY(-50%)',
              color: '#A0AEC0',
              fontSize: '1.2rem',
              pointerEvents: 'none',
              zIndex: 2
            }}
            aria-hidden="true"
          >
            📧
          </label>
          <input
            id="email"
            type="email"
            placeholder="Email"
            value={email}
            onChange={e => setEmail(e.target.value)}
            required
            style={{
              padding: '0.8rem 0.8rem 0.8rem 2.5rem',
              borderRadius: '0.5rem',
              border: '1px solid #3A3F47',
              fontSize: '1rem',
              background: '#1E222A',
              color: '#E5E7EB',
              width: '100%',
              transition: 'border-color 0.2s',
            }}
            onFocus={e => e.target.style.borderColor = '#0057D9'}
            onBlur={e => e.target.style.borderColor = '#3A3F47'}
          />
        </div>
        
        <div style={{ position: 'relative' }}>
          <label 
            htmlFor="password" 
            style={{
              position: 'absolute',
              left: '1rem',
              top: '50%',
              transform: 'translateY(-50%)',
              color: '#A0AEC0',
              fontSize: '1.2rem',
              pointerEvents: 'none',
              zIndex: 2
            }}
            aria-hidden="true"
          >
            🔒
          </label>
          <input
            id="password"
            type={showPassword ? 'text' : 'password'}
            placeholder="Password"
            value={password}
            onChange={e => setPassword(e.target.value)}
            required
            style={{
              padding: '0.8rem 0.8rem 0.8rem 2.5rem',
              borderRadius: '0.5rem',
              border: '1px solid #3A3F47',
              fontSize: '1rem',
              background: '#1E222A',
              color: '#E5E7EB',
              width: '100%',
              transition: 'border-color 0.2s',
            }}
            onFocus={e => e.target.style.borderColor = '#0057D9'}
            onBlur={e => e.target.style.borderColor = '#3A3F47'}
          />
          <button
            type="button"
            onClick={() => setShowPassword(s => !s)}
            style={{
              position: 'absolute',
              right: '1rem',
              top: '50%',
              transform: 'translateY(-50%)',
              cursor: 'pointer',
              background: 'transparent',
              border: 'none',
              color: '#A0AEC0',
              fontSize: '1.1rem',
              padding: '0.25rem',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}
            aria-label={showPassword ? 'Hide password' : 'Show password'}
          >
            {showPassword ? '🙈' : '👁️'}
          </button>
        </div>
        
        <button 
          type="submit" 
          disabled={loading}
          style={{
            background: loading ? '#3A3F47' : '#0057D9',
            color: '#E5E7EB',
            padding: '0.9rem',
            border: 'none',
            borderRadius: '0.5rem',
            fontWeight: 600,
            fontSize: '1rem',
            cursor: loading ? 'not-allowed' : 'pointer',
            marginTop: '0.5rem',
            borderBottom: '3px solid #2ECC71',
            transition: 'background 0.2s, transform 0.1s',
          }}
          onMouseDown={e => !loading && (e.currentTarget.style.transform = 'scale(0.98)')}
          onMouseUp={e => !loading && (e.currentTarget.style.transform = 'scale(1)')}
          onMouseLeave={e => !loading && (e.currentTarget.style.transform = 'scale(1)')}
        >
          {loading ? (
            <span style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem' }}>
              <span className="spinner" style={{
                display: 'inline-block',
                width: '1rem',
                height: '1rem',
                border: '2px solid rgba(255,255,255,0.3)',
                borderRadius: '50%',
                borderTopColor: '#fff',
                animation: 'spin 1s ease-in-out infinite'
              }} />
              Logging in...
            </span>
          ) : 'Login'}
        </button>
        
        {message && (
          <div style={{ 
            color: '#FF6B35', 
            textAlign: 'center', 
            marginTop: '0.5rem',
            fontSize: '0.9rem',
            padding: '0.5rem',
            background: 'rgba(255,107,53,0.1)',
            borderRadius: '0.25rem'
          }}>
            {message}
          </div>
        )}
        
        <div style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          marginTop: '0.5rem',
          fontSize: '0.9rem'
        }}>
          <span style={{ color: '#A0AEC0' }}>
            Don't have an account?{' '}
            <Link 
              to="/register" 
              style={{
                color: '#2ECC71',
                fontWeight: 600,
                textDecoration: 'none',
                transition: 'opacity 0.2s'
              }}
              onMouseEnter={e => e.currentTarget.style.opacity = '0.8'}
              onMouseLeave={e => e.currentTarget.style.opacity = '1'}
            >
              Sign up
            </Link>
          </span>
        </div>
      </form>
      
      <style>{`
        @keyframes spin {
          to { transform: rotate(360deg); }
        }
        
        @media (max-width: 480px) {
          form {
            padding: 1.5rem 1.25rem;
          }
          
          h2 {
            font-size: 1.5rem !important;
          }
          
          button {
            font-size: 0.95rem !important;
          }
        }
      `}</style>
    </div>
  );
}

export default Login;