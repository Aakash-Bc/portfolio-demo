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
          <div className="mobile-menu-inner">
            <div className="mobile-links">
              {navLinks.map((link, index) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="mobile-nav-link"
                  style={{ animationDelay: `${0.1 + index * 0.1}s` }}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.name}
                </a>
              ))}
            </div>

            <div className="mobile-socials">
              <p>Get in Touch</p>
              <div className="mobile-social-icons">
                <a href="https://github.com/Aakash-Bc" target="_blank" rel="noopener noreferrer">GitHub</a>
                <a href="https://www.linkedin.com/in/aakash-bc-7a3773281" target="_blank" rel="noopener noreferrer">LinkedIn</a>
                <a href="https://www.facebook.com/aakash.budathoki.18" target="_blank" rel="noopener noreferrer">Facebook</a>
              </div>
            </div>
          </div>
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
          font-size: 2.2rem;
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
          z-index: 2000;
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
        .hamburger.open::before,
        .hamburger.open::after { background: #000000; }
        .hamburger.open::before { transform: rotate(45deg); }
        .hamburger.open::after { transform: rotate(-45deg); }

        .mobile-menu {
          display: none;
        }

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
            left: 0;
            width: 100%;
            height: 100vh;
            background: #ffffff;
            display: block;
            visibility: hidden;
            opacity: 0;
            pointer-events: none;
            transition: 0.4s cubic-bezier(0.77,0.2,0.05,1.0);
            z-index: 1500;
          }

          .mobile-menu.open {
            visibility: visible;
            opacity: 1;
            pointer-events: auto;
          }

          .mobile-menu-inner {
            height: 100%;
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            padding: 100px 40px 60px;
            background: radial-gradient(circle at top right, rgba(109, 40, 217, 0.05), transparent);
          }

          .mobile-links {
            display: flex;
            flex-direction: column;
            gap: 1.5rem;
          }

          .mobile-nav-link {
            font-size: 2.5rem;
            font-weight: 800;
            color: #1a1a1a;
            letter-spacing: -1px;
            text-transform: capitalize;
            text-decoration: none;
            opacity: 0;
            transform: translateY(20px);
            transition: 0.4s ease;
          }

          .mobile-menu.open .mobile-nav-link {
            opacity: 1;
            transform: translateY(0);
            animation: slideUpFade 0.5s ease forwards;
          }

          .mobile-socials {
            margin-top: auto;
            border-top: 1px solid rgba(0,0,0,0.1);
            padding-top: 2rem;
          }

          .mobile-socials p {
            color: #666;
            font-size: 0.9rem;
            margin-bottom: 1rem;
            text-transform: uppercase;
            letter-spacing: 2px;
            font-weight: 700;
          }

          .mobile-social-icons {
            display: flex;
            gap: 1.5rem;
          }

          .mobile-social-icons a {
            color: #1a1a1a;
            font-weight: 600;
            font-size: 1rem;
            text-decoration: underline;
            text-decoration-color: var(--accent-primary);
          }

          @keyframes slideUpFade {
            from {
              opacity: 0;
              transform: translateY(30px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }
        }
      `}</style>
    </nav>
  );
};

export default Navbar;
