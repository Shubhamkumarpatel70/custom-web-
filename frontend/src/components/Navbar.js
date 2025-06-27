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
  const navigate = useNavigate();

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu when route changes
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location]);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const handleLogout = () => {
    localStorage.removeItem('token');
    setUser(null);
    setDropdownOpen(false);
    navigate('/login');
  };

  return (
    <>
      <nav className={`modern-navbar ${isScrolled ? 'scrolled' : ''}`}>
        <div className="container">
          <div className="navbar-content">
            {/* Logo */}
            <Link to="/" className="navbar-logo">
              <span className="logo-text">CUSTOM WEB</span>
            </Link>

            {/* Desktop Navigation */}
            <div className="navbar-nav desktop-nav">
              {navLinks.map(link => (
                <Link
                  key={link.to}
                  to={link.to}
                  className={`nav-link ${location.pathname === link.to ? 'active' : ''}`}
                >
                  {link.label}
                </Link>
              ))}
            </div>

            {/* Auth Buttons / User Dropdown */}
            <div className="navbar-auth desktop-auth">
              {user ? (
                <div className="user-dropdown-wrapper">
                  <button
                    className="user-btn user-dropdown-toggle"
                    onClick={() => setDropdownOpen(o => !o)}
                    aria-haspopup="true"
                    aria-expanded={dropdownOpen}
                  >
                    <span className="user-name">{user.name || 'User'}</span>
                  </button>
                  {dropdownOpen && (
                    <div className="user-dropdown-menu" onMouseLeave={() => setDropdownOpen(false)}>
                      <Link to={user.role === 'admin' ? '/admin-dashboard' : '/dashboard'} className="dropdown-item" onClick={() => setDropdownOpen(false)}>
                        {user.role === 'admin' ? 'Admin Dashboard' : 'User Dashboard'}
                      </Link>
                      <button className="dropdown-item logout-btn" onClick={handleLogout}>
                        Logout
                      </button>
                    </div>
                  )}
                </div>
              ) : (
                <div className="auth-buttons">
                  <Link to='/login' className="btn btn-primary">
                    Login
                  </Link>
                  <Link to='/register' className="btn btn-secondary">
                    Register
                  </Link>
                </div>
              )}
            </div>

            {/* Mobile Menu Button */}
            <button 
              className={`mobile-menu-btn ${isMobileMenuOpen ? 'active' : ''}`}
              onClick={toggleMobileMenu}
              aria-label="Toggle mobile menu"
            >
              <span></span>
              <span></span>
              <span></span>
            </button>
          </div>
        </div>

        {/* Mobile Menu Overlay */}
        <div className={`mobile-menu-overlay ${isMobileMenuOpen ? 'active' : ''}`}>
          <div className="mobile-menu-content">
            <div className="mobile-nav-links">
              {navLinks.map(link => (
                <Link
                  key={link.to}
                  to={link.to}
                  className={`mobile-nav-link ${location.pathname === link.to ? 'active' : ''}`}
                >
                  {link.label}
                </Link>
              ))}
            </div>
            <div className="mobile-auth">
              {user ? (
                <div className="user-dropdown-wrapper">
                  <button
                    className="user-btn user-dropdown-toggle"
                    onClick={() => setDropdownOpen(o => !o)}
                    aria-haspopup="true"
                    aria-expanded={dropdownOpen}
                  >
                    <span className="user-name">{user.name || 'User'}</span>
                  </button>
                  {dropdownOpen && (
                    <div className="user-dropdown-menu" onMouseLeave={() => setDropdownOpen(false)}>
                      <Link to={user.role === 'admin' ? '/admin-dashboard' : '/dashboard'} className="dropdown-item" onClick={() => setDropdownOpen(false)}>
                        {user.role === 'admin' ? 'Admin Dashboard' : 'User Dashboard'}
                      </Link>
                      <button className="dropdown-item logout-btn" onClick={handleLogout}>
                        Logout
                      </button>
                    </div>
                  )}
                </div>
              ) : (
                <div className="mobile-auth-buttons">
                  <Link to='/login' className="btn btn-primary">
                    Login
                  </Link>
                  <Link to='/register' className="btn btn-secondary">
                    Register
                  </Link>
                </div>
              )}
            </div>
          </div>
        </div>
      </nav>

      {/* Navbar Styles */}
      <style jsx>{`
        .modern-navbar {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          background: rgba(35, 39, 47, 0.95);
          backdrop-filter: blur(10px);
          border-bottom: 1px solid rgba(255, 255, 255, 0.1);
          z-index: 1000;
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
          min-height: 48px;
        }

        .modern-navbar.scrolled {
          background: rgba(35, 39, 47, 0.98);
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.15);
        }

        .navbar-content {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 0.5rem 0;
          min-height: 48px;
        }

        .navbar-logo {
          text-decoration: none;
          z-index: 1001;
        }

        .logo-text {
          font-weight: 800;
          font-size: clamp(1.1rem, 2.5vw, 1.3rem);
          background: linear-gradient(135deg, #2ECC71, #FF6B35);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          letter-spacing: 1px;
        }

        .navbar-nav {
          display: flex;
          align-items: center;
          gap: clamp(0.7rem, 2vw, 1.2rem);
        }

        .nav-link {
          color: #E5E7EB;
          text-decoration: none;
          font-weight: 500;
          font-size: clamp(0.85rem, 2vw, 0.95rem);
          padding: 0.3rem 0;
          position: relative;
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .nav-link::after {
          content: '';
          position: absolute;
          bottom: 0;
          left: 0;
          width: 0;
          height: 2px;
          background: linear-gradient(135deg, #2ECC71, #FF6B35);
          transition: width 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .nav-link:hover,
        .nav-link.active {
          color: #2ECC71;
        }

        .nav-link.active::after {
          width: 100%;
        }

        .mobile-menu-btn {
          display: none;
          background: none;
          border: none;
          cursor: pointer;
          padding: 0.5rem;
          z-index: 1001;
        }

        .mobile-menu-btn span {
          display: block;
          width: 24px;
          height: 2px;
          background: #E5E7EB;
          margin: 5px 0;
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .mobile-menu-btn.active span:nth-child(1) {
          transform: translateY(7px) rotate(45deg);
        }
        .mobile-menu-btn.active span:nth-child(2) {
          opacity: 0;
        }
        .mobile-menu-btn.active span:nth-child(3) {
          transform: translateY(-7px) rotate(-45deg);
        }

        .mobile-menu-overlay {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: rgba(35, 39, 47, 0.98);
          backdrop-filter: blur(12px);
          display: flex;
          align-items: center;
          justify-content: center;
          opacity: 0;
          visibility: hidden;
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
          z-index: 1000;
        }

        .mobile-menu-overlay.active {
          opacity: 1;
          visibility: visible;
        }

        .mobile-menu-content {
          text-align: center;
        }

        .mobile-nav-links {
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
        }

        .mobile-nav-link {
          color: #E5E7EB;
          text-decoration: none;
          font-size: 1.5rem;
          font-weight: 600;
          opacity: 0;
          transform: translateY(20px);
          transition: opacity 0.3s ease, transform 0.3s ease;
        }

        .mobile-menu-overlay.active .mobile-nav-link {
          opacity: 1;
          transform: translateY(0);
        }

        .mobile-nav-link:hover {
          color: #2ECC71;
        }
        
        .mobile-menu-overlay.active .mobile-nav-link:nth-child(1) { transition-delay: 0.1s; }
        .mobile-menu-overlay.active .mobile-nav-link:nth-child(2) { transition-delay: 0.2s; }
        .mobile-menu-overlay.active .mobile-nav-link:nth-child(3) { transition-delay: 0.3s; }
        .mobile-menu-overlay.active .mobile-nav-link:nth-child(4) { transition-delay: 0.4s; }
        .mobile-menu-overlay.active .mobile-nav-link:nth-child(5) { transition-delay: 0.5s; }
        .mobile-menu-overlay.active .mobile-nav-link:nth-child(6) { transition-delay: 0.6s; }
        .mobile-menu-overlay.active .mobile-nav-link:nth-child(7) { transition-delay: 0.7s; }

        .btn {
          padding: 0.6rem 1.2rem;
          border-radius: 2rem;
          text-decoration: none;
          font-weight: 600;
          transition: all 0.3s ease;
          border: 2px solid transparent;
        }
        .btn-primary {
          background: linear-gradient(135deg, #2ECC71, #0057D9);
          color: white;
        }
        .btn-primary:hover {
          transform: translateY(-2px);
          box-shadow: 0 4px 12px rgba(46, 204, 113, 0.2);
        }
        .btn-secondary {
          background: transparent;
          color: #E5E7EB;
          border-color: #E5E7EB;
        }
        .btn-secondary:hover {
          background: #E5E7EB;
          color: #181A20;
          transform: translateY(-2px);
        }

        .navbar-auth {
          display: flex;
          align-items: center;
          gap: 0.5rem;
        }

        .auth-buttons {
          display: flex;
          gap: 0.75rem;
        }

        .user-btn {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          padding: 0.5rem 1rem;
        }
 
         .mobile-auth {
          margin-top: 2rem;
          opacity: 0;
          transform: translateY(20px);
          animation: slideInUp 0.5s ease-out 0.8s forwards;
        }

        .mobile-auth-buttons {
          display: flex;
          flex-direction: column;
          gap: 1rem;
          width: 200px;
        }

         @keyframes slideInUp {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }

        /* Responsive Design */
        @media (max-width: 900px) {
          .desktop-nav,
          .desktop-auth {
            display: none;
          }
          .mobile-menu-btn {
            display: block;
          }
        }
        
        @media (max-width: 600px) {
            .mobile-nav-link {
              font-size: 1.25rem;
            }

           .mobile-auth-buttons {
             width: 100%;
             max-width: 250px;
           }
         }

        .user-dropdown-wrapper {
          position: relative;
          display: inline-block;
        }
        .user-btn.user-dropdown-toggle {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          background: none;
          border: none;
          color: #E5E7EB;
          font-weight: 600;
          font-size: 1rem;
          cursor: pointer;
          padding: 0.5rem 1rem;
          border-radius: 2rem;
          transition: background 0.2s;
        }
        .user-btn.user-dropdown-toggle:hover, .user-btn.user-dropdown-toggle:focus {
          background: rgba(46,204,113,0.08);
        }
        .user-name {
          font-weight: 600;
          color: #E5E7EB;
        }
        .user-dropdown-menu {
          position: absolute;
          top: 110%;
          right: 0;
          min-width: 180px;
          background: #23272F;
          border-radius: 1rem;
          box-shadow: 0 8px 32px rgba(0,0,0,0.18);
          padding: 0.5rem 0;
          z-index: 2000;
          animation: dropdownFadeIn 0.2s;
        }
        @keyframes dropdownFadeIn {
          from { opacity: 0; transform: translateY(-10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .dropdown-item {
          display: block;
          width: 100%;
          padding: 0.7rem 1.2rem;
          color: #E5E7EB;
          background: none;
          border: none;
          text-align: left;
          font-size: 1rem;
          font-weight: 500;
          cursor: pointer;
          transition: background 0.18s;
          text-decoration: none;
        }
        .dropdown-item:hover, .dropdown-item:focus {
          background: rgba(46,204,113,0.10);
          color: #2ECC71;
        }
        .logout-btn {
          color: #FF6B35;
        }
        @media (max-width: 900px) {
          .user-dropdown-menu {
            left: 0;
            right: auto;
            min-width: 160px;
          }
        }
      `}</style>
    </>
  );
}

export default Navbar; 