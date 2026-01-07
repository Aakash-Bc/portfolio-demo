import React from 'react';
import { FaGithub, FaLinkedin, FaFacebook, FaInstagram } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container footer-content">
        <div className="footer-grid">
          <div className="footer-brand">
            <h2 className="brand-logo">Aakash<span className="dot">.</span></h2>
            <p className="brand-desc">
              Building digital experiences with passion and precision.
              Turning ideas into reality through code.
            </p>
          </div>

          <div className="footer-links">
            <h3>Quick Links</h3>
            <ul>
              <li><a href="#home">Home</a></li>
              <li><a href="#about">About</a></li>
              <li><a href="#skills">Skills</a></li>
              <li><a href="#projects">Projects</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </div>

          <div className="footer-socials">
            <h3>Connect</h3>
            <div className="social-icons">
              <a href="https://github.com/Aakash-Bc" className="social-icon" target="_blank" rel="noopener noreferrer" aria-label="GitHub"><FaGithub /></a>
              <a href="https://www.linkedin.com/in/aakash-bc-7a3773281" className="social-icon" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"><FaLinkedin /></a>
              <a href="https://www.facebook.com/aakash.budathoki.18" className="social-icon" target="_blank" rel="noopener noreferrer" aria-label="Facebook"><FaFacebook /></a>
              <a href="https://www.instagram.com/aakashbc__/" className="social-icon" target="_blank" rel="noopener noreferrer" aria-label="Instagram"><FaInstagram /></a>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} Aakash Budhathoki. All rights reserved.</p>
          <p className="made-with">Made with <span className="heart">♥</span> in Nepal</p>
        </div>
      </div>

      <style>{`
        .footer {
          background: var(--bg-secondary);
          padding: 3rem 0 2rem;
          margin-top: 3rem;
          position: relative;
        }

        .footer::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 1px;
          background: linear-gradient(to right, transparent, var(--accent-primary), transparent);
        }

        .footer-grid {
          display: grid;
          grid-template-columns: 1.5fr 1fr 1fr;
          gap: 3rem;
          margin-bottom: 2.5rem;
        }

        .brand-logo {
          font-size: 2rem;
          font-weight: 800;
          margin-bottom: 1rem;
          color: var(--text-primary);
          font-family: 'Playfair Display', serif;
          background: linear-gradient(to right, var(--text-primary), var(--text-secondary));
          -webkit-background-clip: text;
          color: transparent;
        }

        .brand-desc {
          color: var(--text-secondary);
          max-width: 350px;
          line-height: 1.6;
        }

        .footer-links h3,
        .footer-socials h3 {
          color: var(--text-primary);
          font-size: 1.2rem;
          margin-bottom: 1.5rem;
          font-weight: 600;
        }

        .footer-links ul {
          display: flex;
          flex-direction: column;
          gap: 0.8rem;
        }

        .footer-links a {
          color: var(--text-secondary);
          transition: 0.2s;
        }

        .footer-links a:hover {
          color: var(--accent-primary);
          padding-left: 5px;
        }

        .social-icons {
          display: flex;
          gap: 1rem;
        }

        .social-icon {
          width: 40px;
          height: 40px;
          display: flex;
          align-items: center;
          justify-content: center;
          background: rgba(255,255,255,0.05);
          border-radius: 50%;
          color: var(--text-primary);
          font-size: 1.2rem;
          transition: 0.3s;
          border: 1px solid transparent;
        }

        .social-icon:hover {
          background: var(--accent-primary);
          transform: translateY(-3px);
          box-shadow: 0 5px 15px var(--accent-glow);
        }

        .footer-bottom {
          text-align: center;
          padding-top: 2rem;
          border-top: 1px solid rgba(255,255,255,0.05);
          color: var(--text-secondary);
          font-size: 0.9rem;
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
          align-items: center;
        }

        .heart {
          color: var(--error);
          animation: pulse 1.5s infinite;
        }

        @keyframes pulse {
          0% { transform: scale(1); }
          50% { transform: scale(1.2); }
          100% { transform: scale(1); }
        }

        @media (max-width: 768px) {
          .footer-grid {
            grid-template-columns: 1fr;
            gap: 2rem;
            text-align: center;
          }

          .brand-desc {
            margin: 0 auto;
          }

          .social-icons {
            justify-content: center;
          }

          .footer-bottom {
            flex-direction: column;
            gap: 1rem;
          }
        }
      `}</style>
    </footer>
  );
};

export default Footer;
