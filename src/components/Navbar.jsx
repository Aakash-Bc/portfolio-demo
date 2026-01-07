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
                <a href="https://www.instagram.com/aakashbc__/" target="_blank" rel="noopener noreferrer">Instagram</a>
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
        .hamburger.open::after { background: #ffffff; }
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
            display: block;
            visibility: hidden;
            opacity: 0;
            pointer-events: none;
            transition: 0.5s cubic-bezier(0.77,0.2,0.05,1.0);
            z-index: 1500;
            background-image: url('https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=1964&auto=format&fit=crop');
            background-size: cover;
            background-position: center;
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
            justify-content: flex-start;
            gap: 2.5rem;
            padding: 60px 30px 40px;
            background: rgba(5, 5, 5, 0.8);
            backdrop-filter: blur(15px);
            border-left: 1px solid rgba(255, 255, 255, 0.05);
          }

          .mobile-links {
            display: flex;
            flex-direction: column;
            gap: 0.8rem;
          }

          .mobile-nav-link {
            font-size: 1.1rem;
            font-weight: 600;
            color: #ffffff;
            letter-spacing: 1px;
            text-transform: uppercase;
            text-decoration: none;
            opacity: 0;
            transform: translateX(20px);
            transition: 0.4s ease;
            padding: 0.5rem 0;
            display: flex;
            align-items: center;
            gap: 10px;
          }

          .mobile-nav-link::before {
            content: '';
            width: 0;
            height: 1px;
            background: var(--accent-primary);
            transition: 0.3s;
          }

          .mobile-menu.open .mobile-nav-link {
            opacity: 1;
            transform: translateX(0);
            animation: slideRightFade 0.5s ease forwards;
          }

          .mobile-menu.open .mobile-nav-link:hover::before {
            width: 20px;
          }

          .mobile-socials {
            border-top: 1px solid rgba(255,255,255,0.1);
            padding-top: 1.5rem;
          }

          .mobile-socials p {
            color: var(--text-secondary);
            font-size: 0.7rem;
            margin-bottom: 1rem;
            text-transform: uppercase;
            letter-spacing: 3px;
            font-weight: 700;
          }

          .mobile-social-icons {
            display: flex;
            gap: 1.5rem;
          }

          .mobile-social-icons a {
            color: #ffffff;
            font-weight: 500;
            font-size: 0.8rem;
            text-decoration: none;
            opacity: 0.7;
            transition: 0.3s;
          }

          .mobile-social-icons a:hover {
            opacity: 1;
            color: var(--accent-secondary);
          }

          @keyframes slideRightFade {
            from {
              opacity: 0;
              transform: translateX(20px);
            }
            to {
              opacity: 1;
              transform: translateX(0);
            }
          }
        }
      `}</style>
    </nav>
  );
};

export default Navbar;
