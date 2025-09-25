import React, { useContext, useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { UserContext } from '../UserContext';

const navLinks = [
  { to: '/', label: 'Home' },
  { to: '/about', label: 'About' },
  { to: '/plans', label: 'Plans' },
  { to: '/services', label: 'Services' },
  { to: '/features', label: 'Features' },
  { to: '/team', label: 'Our Team' },
  { to: '/contact', label: 'Contact' },
];

function Navbar() {
  const location = useLocation();
  const { user, setUser } = useContext(UserContext);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location]);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    
    // Cleanup on unmount
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMobileMenuOpen]);

  // Handle keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && isMobileMenuOpen) {
        toggleMobileMenu();
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [isMobileMenuOpen]);

  const toggleMobileMenu = () => {
    if (isAnimating) return;
    
    setIsAnimating(true);
    setIsMobileMenuOpen(!isMobileMenuOpen);
    
    // Reset animation flag after transition completes
    setTimeout(() => {
      setIsAnimating(false);
    }, 400);
  };

  const handleLogout = () => {
    localStorage.removeItem('token');
    setUser(null);
    setDropdownOpen(false);
    navigate('/login');
  };

  const getAvatar = () => {
    if (user && user.name) {
      return user.name[0].toUpperCase();
    }
    return <span role="img" aria-label="User">👤</span>;
  };

  return (
    <>
      <nav className={`modern-navbar ${isScrolled ? 'scrolled' : ''} ${isMobileMenuOpen ? 'menu-open' : ''}`} aria-label="Main Navigation">
        <div className="container">
          <div className="navbar-content">
            {/* Logo */}
            <Link to="/" className="navbar-logo" aria-label="Home" title="Bihar IT Solution">
              <span className="logo-text">BIS</span>
            </Link>

            {/* Desktop Navigation */}
            <div className="navbar-nav">
              {navLinks.map(link => (
                <Link
                  key={link.to}
                  to={link.to}
                  className={`nav-link ${location.pathname === link.to ? 'active' : ''}`}
                  tabIndex={0}
                >
                  {link.label}
                </Link>
              ))}
            </div>

            {/* Auth Buttons / User Dropdown */}
            <div className="navbar-auth">
              {user ? (
                <div className="user-dropdown-wrapper">
                  <button
                    className="user-btn"
                    onClick={() => setDropdownOpen(!dropdownOpen)}
                    aria-haspopup="true"
                    aria-expanded={dropdownOpen}
                    aria-label="User menu"
                  >
                    <span className="user-avatar">{getAvatar()}</span>
                    <span className="user-name">{user.name || 'User'}</span>
                    <span className="user-caret">▼</span>
                  </button>
                  <div className={`user-dropdown ${dropdownOpen ? 'open' : ''}`} tabIndex={-1} onBlur={() => setDropdownOpen(false)}>
                    <Link to={user.role === 'admin' ? '/admin-dashboard' : '/dashboard'} className="dropdown-item" onClick={() => setDropdownOpen(false)}>
                      {user.role === 'admin' ? 'Admin Dashboard' : 'User Dashboard'}
                    </Link>
                    <div className="dropdown-divider"></div>
                    <button className="dropdown-item logout-btn" onClick={handleLogout}>
                      Logout
                    </button>
                  </div>
                </div>
              ) : (
                <div className="auth-buttons">
                  <Link to='/login' className="btn btn-primary" aria-label="Login">
                    <span role="img" aria-label="Login">🔑</span> Login
                  </Link>
                  <Link to='/register' className="btn btn-secondary" aria-label="Register">
                    <span role="img" aria-label="Register">📝</span> Register
                  </Link>
                </div>
              )}
            </div>

            {/* Mobile Menu Button */}
            <button 
              className={`mobile-menu-btn ${isMobileMenuOpen ? 'active' : ''}`}
              onClick={toggleMobileMenu}
              aria-label="Toggle mobile menu"
              aria-expanded={isMobileMenuOpen}
            >
              <span></span>
              <span></span>
              <span></span>
            </button>
          </div>
        </div>

        {/* Mobile Menu Overlay */}
        <div className={`mobile-menu-overlay ${isMobileMenuOpen ? 'active' : ''}`} onClick={toggleMobileMenu} aria-hidden={!isMobileMenuOpen}>
          <div className="mobile-menu-content" onClick={(e) => e.stopPropagation()}>
            <div className="mobile-nav-links">
              {navLinks.map(link => (
                <Link
                  key={link.to}
                  to={link.to}
                  className={`mobile-nav-link ${location.pathname === link.to ? 'active' : ''}`}
                  tabIndex={isMobileMenuOpen ? 0 : -1}
                  onClick={toggleMobileMenu}
                >
                  {link.label}
                </Link>
              ))}
            </div>
            <div className="mobile-auth">
              {user ? (
                <div className="user-dropdown-wrapper">
                  <button
                    className="user-btn"
                    onClick={() => setDropdownOpen(!dropdownOpen)}
                    aria-haspopup="true"
                    aria-expanded={dropdownOpen}
                    aria-label="User menu"
                  >
                    <span className="user-avatar">{getAvatar()}</span>
                    <span className="user-name">{user.name || 'User'}</span>
                    <span className="user-caret">▼</span>
                  </button>
                  <div className={`user-dropdown ${dropdownOpen ? 'open' : ''}`} tabIndex={-1}>
                    <Link to={user.role === 'admin' ? '/admin-dashboard' : '/dashboard'} className="dropdown-item" onClick={toggleMobileMenu}>
                      {user.role === 'admin' ? 'Admin Dashboard' : 'User Dashboard'}
                    </Link>
                    <div className="dropdown-divider"></div>
                    <button className="dropdown-item logout-btn" onClick={handleLogout}>
                      Logout
                    </button>
                  </div>
                </div>
              ) : (
                <div className="mobile-auth-buttons">
                  <Link to='/login' className="btn btn-primary" onClick={toggleMobileMenu} aria-label="Login">
                    <span role="img" aria-label="Login">🔑</span> Login
                  </Link>
                  <Link to='/register' className="btn btn-secondary" onClick={toggleMobileMenu} aria-label="Register">
                    <span role="img" aria-label="Register">📝</span> Register
                  </Link>
                </div>
              )}
            </div>
          </div>
        </div>
      </nav>

      {/* Navbar Styles */}
      <style jsx>{`
        :root {
          --primary: #0ea5e9; /* sky-500 */
          --primary-dark: #0369a1; /* sky-700 */
          --secondary: #22c55e; /* emerald-500 */
          --accent: #38bdf8; /* sky-400 */
          --dark: #0b1220; /* deeper navy for navbar bg */
          --light: #f8fafc;
          --bg: #0f172a; /* slate-900 */
          --error: #ef4444;
          --success: #10b981;
        }
        
        .modern-navbar {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          background: transparent;
          backdrop-filter: blur(12px);
          -webkit-backdrop-filter: blur(12px);
          z-index: 2000;
          transition: all 0.3s ease;
          border-bottom: none;
          border-radius: 20px;
          overflow: visible;
          margin: 0.5rem 0.75rem;
        }

        .modern-navbar.menu-open {
          border-radius: 0;
          margin: 0;
        }
        
        .modern-navbar.scrolled {
          background: linear-gradient(180deg, rgba(11, 18, 32, 0.98) 0%, rgba(11, 18, 32, 0.92) 100%);
          border-bottom: 1px solid rgba(255, 255, 255, 0.1);
          box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
        }
        
        .container {
          max-width: 1280px;
          margin: 0 auto;
          padding: 0 1.5rem;
        }
        
        .navbar-content {
          display: flex;
          align-items: center;
          justify-content: space-between;
          height: 5rem;
        }
        
        .navbar-logo {
          display: flex;
          align-items: center;
          text-decoration: none;
          font-weight: 800;
          font-size: 1.5rem;
          color: var(--light);
          z-index: 1100;
        }
        
        .logo-text {
          background: linear-gradient(90deg, var(--primary), var(--primary-dark));
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          letter-spacing: 0.5px;
        }
        
        .navbar-nav {
          display: flex;
          align-items: center;
          gap: 1.5rem;
        }
        
        .nav-link {
          color: var(--light);
          text-decoration: none;
          font-weight: 500;
          font-size: 1rem;
          padding: 0.5rem 0;
          position: relative;
          transition: color 0.2s ease;
        }
        
        .nav-link::after {
          content: '';
          position: absolute;
          bottom: 0;
          left: 0;
          width: 100%;
          height: 2px;
          background: linear-gradient(90deg, var(--primary), var(--accent));
          transform: scaleX(0);
          transform-origin: left;
          transition: transform 0.25s ease;
        }
        
        .nav-link:hover,
        .nav-link.active {
          color: var(--secondary);
        }
        
        .nav-link.active::after,
        .nav-link:hover::after {
          transform: scaleX(1);
        }
        
        .navbar-auth {
          display: flex;
          align-items: center;
          gap: 1rem;
        }
        
        .auth-buttons {
          display: flex;
          gap: 0.75rem;
        }
        
        .btn {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          padding: 0.5rem 1.25rem;
          border-radius: 0.375rem;
          font-weight: 600;
          font-size: 0.9375rem;
          transition: all 0.2s ease;
          cursor: pointer;
          text-decoration: none;
        }
        
        .btn-primary {
          background: linear-gradient(135deg, var(--primary), var(--primary-dark));
          color: white;
          border: none;
        }
        
        .btn-primary:hover {
          background: linear-gradient(135deg, var(--primary-dark), var(--primary));
          transform: translateY(-1px);
          box-shadow: 0 4px 12px rgba(99, 102, 241, 0.3);
        }
        
        .btn-secondary {
          background: transparent;
          color: var(--light);
          border: 1px solid rgba(255, 255, 255, 0.2);
        }
        
        .btn-secondary:hover {
          background: rgba(255, 255, 255, 0.05);
          border-color: rgba(255, 255, 255, 0.3);
          transform: translateY(-1px);
        }
        
        .user-dropdown-wrapper {
          position: relative;
        }
        
        .user-btn {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          background: rgba(255, 255, 255, 0.1);
          border: none;
          border-radius: 2rem;
          padding: 0.5rem 0.75rem 0.5rem 0.5rem;
          color: var(--light);
          font-weight: 500;
          cursor: pointer;
          transition: all 0.2s ease;
        }
        
        .user-btn:hover {
          background: rgba(255, 255, 255, 0.15);
        }
        
        .user-avatar {
          width: 2rem;
          height: 2rem;
          background: linear-gradient(135deg, var(--primary), var(--secondary));
          color: white;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-weight: 600;
        }
        
        .user-caret {
          font-size: 0.75rem;
          margin-left: 0.25rem;
          transition: transform 0.2s ease;
        }
        
        .user-dropdown {
          position: absolute;
          right: 0;
          top: calc(100% + 0.5rem);
          min-width: 12rem;
          background: white;
          border-radius: 0.5rem;
          box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);
          opacity: 0;
          visibility: hidden;
          transform: translateY(-0.5rem);
          transition: all 0.2s ease;
          z-index: 50;
          border: 1px solid rgba(0, 0, 0, 0.05);
        }
        
        .user-dropdown.open {
          opacity: 1;
          visibility: visible;
          transform: translateY(0);
        }
        
        .dropdown-item {
          display: block;
          padding: 0.75rem 1rem;
          color: var(--dark);
          text-decoration: none;
          font-size: 0.9375rem;
          transition: all 0.2s ease;
        }
        
        .dropdown-item:hover {
          background: var(--bg);
          color: var(--primary);
        }
        
        .dropdown-divider {
          height: 1px;
          background: rgba(0, 0, 0, 0.1);
          margin: 0.25rem 0;
        }
        
        .logout-btn {
          color: var(--error);
          width: 100%;
          text-align: left;
          background: none;
          border: none;
          cursor: pointer;
        }
        
        .logout-btn:hover {
          background: rgba(239, 68, 68, 0.05);
        }
        
        .mobile-menu-btn {
          display: none;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          width: 2.5rem;
          height: 2.5rem;
          background: rgba(255, 255, 255, 0.1);
          border: 1px solid rgba(255, 255, 255, 0.2);
          border-radius: 8px;
          cursor: pointer;
          padding: 0;
          z-index: 1100;
          transition: all 0.3s ease;
          position: relative;
        }
        
        .mobile-menu-btn:hover {
          background: rgba(255, 255, 255, 0.15);
          border-color: rgba(255, 255, 255, 0.3);
          transform: scale(1.05);
        }
        
        .mobile-menu-btn span {
          display: block;
          width: 1.25rem;
          height: 2px;
          background: var(--light);
          border-radius: 2px;
          transition: all 0.3s cubic-bezier(0.68, -0.55, 0.265, 1.55);
          position: absolute;
        }
        
        .mobile-menu-btn span:nth-child(1) {
          top: 0.625rem;
        }
        
        .mobile-menu-btn span:nth-child(2) {
          top: 1.125rem;
        }
        
        .mobile-menu-btn span:nth-child(3) {
          top: 1.625rem;
        }
        
        .mobile-menu-btn.active {
          background: rgba(239, 68, 68, 0.1);
          border-color: rgba(239, 68, 68, 0.3);
        }
        
        .mobile-menu-btn.active span:nth-child(1) {
          top: 1.125rem;
          transform: rotate(45deg);
          background: #ef4444;
        }
        
        .mobile-menu-btn.active span:nth-child(2) {
          opacity: 0;
          transform: scale(0);
        }
        
        .mobile-menu-btn.active span:nth-child(3) {
          top: 1.125rem;
          transform: rotate(-45deg);
          background: #ef4444;
        }
        
        .mobile-menu-overlay {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: rgba(0, 0, 0, 0.8);
          backdrop-filter: blur(12px);
          -webkit-backdrop-filter: blur(12px);
          z-index: 2100;
          opacity: 0;
          visibility: hidden;
          transition: opacity 0.3s ease, visibility 0.3s ease;
          pointer-events: none;
        }
        
        .mobile-menu-overlay.active {
          opacity: 1;
          visibility: visible;
          pointer-events: auto;
        }
        
        .mobile-menu-content {
          position: absolute;
          top: 0;
          right: 0;
          width: 100%;
          max-width: 22rem;
          height: 100vh;
          background: linear-gradient(180deg, rgba(11, 18, 32, 0.98) 0%, rgba(15, 23, 42, 0.95) 100%);
          border-left: 1px solid rgba(255, 255, 255, 0.1);
          padding: 6rem 2rem 2rem;
          overflow-y: auto;
          transform: translateX(100%);
          transition: transform 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94);
          box-shadow: -10px 0 30px rgba(0, 0, 0, 0.3);
          z-index: 2200;
        }
        
        .mobile-menu-overlay.active .mobile-menu-content {
          transform: translateX(0);
        }
        
        .mobile-nav-links {
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
          margin-bottom: 3rem;
        }
        
        .mobile-nav-link {
          color: var(--light);
          font-size: 1.125rem;
          font-weight: 500;
          text-decoration: none;
          padding: 1rem 1.5rem;
          border-radius: 12px;
          transition: all 0.3s ease;
          position: relative;
          overflow: hidden;
          border: 1px solid transparent;
        }
        
        .mobile-nav-link::before {
          content: '';
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.1), transparent);
          transition: left 0.5s ease;
        }
        
        .mobile-nav-link:hover::before {
          left: 100%;
        }
        
        .mobile-nav-link:hover,
        .mobile-nav-link.active {
          color: var(--accent);
          background: rgba(56, 189, 248, 0.1);
          border-color: rgba(56, 189, 248, 0.3);
          transform: translateX(8px);
        }
        
        .mobile-nav-link.active {
          background: rgba(34, 197, 94, 0.15);
          border-color: rgba(34, 197, 94, 0.4);
          color: var(--secondary);
        }
        
        .mobile-auth {
          display: flex;
          flex-direction: column;
          gap: 1rem;
        }
        
        .mobile-auth-buttons {
          display: flex;
          flex-direction: column;
          gap: 0.75rem;
        }
        
        .mobile-auth-buttons .btn {
          width: 100%;
          justify-content: center;
          padding: 0.875rem 1.5rem;
          font-size: 1rem;
          border-radius: 10px;
        }
        
        .mobile-auth .user-btn {
          width: 100%;
          justify-content: center;
          padding: 1rem 1.5rem;
          border-radius: 10px;
          margin-bottom: 1rem;
        }
        
        .mobile-auth .user-dropdown {
          position: static;
          width: 100%;
          background: rgba(255, 255, 255, 0.05);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 10px;
          margin-top: 0.5rem;
          transform: none;
          opacity: 1;
          visibility: visible;
        }
        
        .mobile-auth .dropdown-item {
          color: var(--light);
          padding: 0.875rem 1rem;
          border-radius: 8px;
          margin: 0.25rem;
        }
        
        .mobile-auth .dropdown-item:hover {
          background: rgba(255, 255, 255, 0.1);
          color: var(--accent);
        }
        
        @media (max-width: 1024px) {
          .navbar-nav,
          .navbar-auth {
            display: none;
          }
          
          .mobile-menu-btn {
            display: flex;
          }
          
          .modern-navbar {
            margin: 0.25rem 0.5rem;
          }
        }
        
        @media (max-width: 640px) {
          .container {
            padding: 0 1rem;
          }
          
          .mobile-menu-content {
            max-width: 100%;
          }
        }
      `}</style>
    </>
  );
}

export default Navbar;