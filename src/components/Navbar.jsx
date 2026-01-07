import React, { useState, useEffect } from 'react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
      <div className="container nav-content">
        <a href="#home" className="logo">
          Aakash<span className="dot">.</span>
        </a>

        <div className="desktop-menu">
          {navLinks.map((link) => (
            <a key={link.name} href={link.href} className="nav-link">
              {link.name}
            </a>
          ))}
          <a href="#contact" className="btn btn-primary" style={{ padding: '0.5rem 1rem', fontSize: '0.9rem' }}>
            Get in Touch
          </a>
        </div>

        <button
          className="mobile-menu-btn"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <span className={`hamburger ${isMenuOpen ? 'open' : ''}`}></span>
        </button>

        <div className={`mobile-menu ${isMenuOpen ? 'open' : ''}`}>
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="mobile-nav-link"
              onClick={() => setIsMenuOpen(false)}
            >
              {link.name}
            </a>
          ))}
        </div>
      </div>

      <style>{`
        .navbar {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          z-index: 1000;
          padding: 1.5rem 0;
          transition: all 0.3s ease;
        }

        .navbar.scrolled {
          padding: 1rem 0;
          background: rgba(5, 5, 5, 0.85);
          backdrop-filter: blur(10px);
          border-bottom: 1px solid rgba(255, 255, 255, 0.1);
        }

        .nav-content {
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .logo {
          font-size: 1.8rem;
          font-weight: 800;
          font-family: 'Playfair Display', serif;
          font-style: italic;
          background: linear-gradient(to right, var(--text-primary), var(--text-secondary));
          -webkit-background-clip: text;
          color: transparent;
          letter-spacing: -1px;
          transition: transform 0.3s ease;
          display: flex;
          align-items: center;
          gap: 2px;
        }

        .logo:hover {
          transform: scale(1.05);
        }

        .dot {
          color: var(--accent-secondary);
          font-size: 2rem;
          line-height: 0;
          text-shadow: 0 0 10px var(--accent-secondary);
        }

        .desktop-menu {
          display: flex;
          gap: 2rem;
          align-items: center;
        }

        .nav-link {
          color: var(--text-secondary);
          font-weight: 500;
          transition: color 0.2s;
          font-size: 0.95rem;
        }

        .nav-link:hover {
          color: var(--text-primary);
        }

        .mobile-menu-btn {
          display: none;
          justify-content: center;
          align-items: center;
          width: 40px;
          height: 40px;
          z-index: 1001;
        }

        .hamburger {
          width: 24px;
          height: 2px;
          background: var(--text-primary);
          position: relative;
          transition: 0.3s;
        }

        .hamburger::before,
        .hamburger::after {
          content: '';
          position: absolute;
          width: 24px;
          height: 2px;
          background: var(--text-primary);
          transition: 0.3s;
        }

        .hamburger::before { transform: translateY(-8px); }
        .hamburger::after { transform: translateY(8px); }

        .hamburger.open { background: transparent; }
        .hamburger.open::before { transform: rotate(45deg); }
        .hamburger.open::after { transform: rotate(-45deg); }

        @media (max-width: 768px) {
          .desktop-menu {
            display: none;
          }

          .mobile-menu-btn {
            display: flex;
          }

          .mobile-menu {
            position: fixed;
            top: 0;
            right: -100%;
            width: 100%;
            height: 100vh;
            background: var(--bg-card);
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            gap: 2.5rem;
            transition: 0.4s cubic-bezier(0.77,0.2,0.05,1.0);
            z-index: 1000;
          }

          .mobile-menu.open {
            right: 0;
          }

          .mobile-nav-link {
            font-size: 1.5rem;
            font-weight: 700;
            color: var(--text-primary);
            letter-spacing: 1px;
            text-transform: uppercase;
          }
        }
      `}</style>
    </nav>
  );
};

export default Navbar;
