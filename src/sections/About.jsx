import React from 'react';

const About = () => {
  return (
    <section id="about" className="section-container">
      <div className="container">
        <h2 className="section-title about-title">About Me</h2>

        <div className="about-content">
          <div className="about-text">
            <div className="bio-card">
              <p className="about-lead">
                I am a <span className="highlight">BCA student</span> tailored with a strong foundation in computer science and a knack for building efficient digital solutions.
              </p>
              <p>
                My journey in tech began with a curiosity for how things work, which led me to master foundational languages like C and C++.
                Today, I leverage modern frameworks like React and powerful backends like PHP and Java to create holistic applications.
              </p>
              <p>
                Whether it's developing a complex <span className="highlight">Movie Ticket Booking System</span> or an innovative <span className="highlight">Eye Blink Detection System</span> using Computer Vision,
                I am always eager to tackle new challenges and expand my skillset.
              </p>
            </div>

            <div className="education-card">
              <h3>Education</h3>
              <div className="edu-item">
                <span className="degree">Bachelors in Computer Application (BCA)</span>
                <span className="school">Pokhara university </span>
                <span className="year">Current 7th sem</span>
              </div>
            </div>
          </div>

          <div className="about-stats">
            <StatItem end={4} suffix="+" label="Major Projects" />
            <StatItem end={8} suffix="+" label="Tech Skills" />
            <StatItem end={100} suffix="%" label="Dedication" />
          </div>
        </div>
      </div>

      <style>{`
        .section-container {
          padding: var(--section-spacing) 0;
          background-image: url('https://images.unsplash.com/photo-1497215728101-856f4ea42174?q=80&w=2070&auto=format&fit=crop');
          background-size: cover;
          background-position: center;
          background-attachment: fixed;
          position: relative;
        }

        .section-container::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: rgba(5, 5, 5, 0.9); /* Dark overlay */
          z-index: 0;
        }

        .container {
          position: relative;
          z-index: 1;
        }

        .about-content {
          display: grid;
          grid-template-columns: 1.5fr 1fr;
          gap: 4rem;
          align-items: center;
        }

        .about-lead {
          font-size: 1.25rem;
          color: var(--text-primary);
          margin-bottom: 1.5rem;
          line-height: 1.8;
        }

        .bio-card {
          background: var(--bg-card);
          padding: 2rem;
          border-radius: var(--border-radius-lg);
          border: 1px solid rgba(255, 255, 255, 0.05);
          box-shadow: 0 10px 30px -10px rgba(0, 0, 0, 0.5);
          animation: fadeUp 0.8s ease-out forwards;
          margin-bottom: 2rem;
          transition: all 0.3s ease;
          position: relative;
          overflow: hidden;
        }

        .bio-card::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          width: 4px;
          height: 100%;
          background: linear-gradient(to bottom, var(--accent-primary), var(--accent-secondary));
          opacity: 0.7;
        }

        .bio-card:hover {
          transform: translateY(-5px);
          border-color: var(--accent-primary);
          box-shadow: 0 20px 40px -10px rgba(109, 40, 217, 0.2);
        }

        @keyframes fadeUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .about-text p {
          color: var(--text-secondary);
          margin-bottom: 1.5rem;
        }

        .about-text p:last-child {
          margin-bottom: 0;
        }

        .highlight {
          color: var(--accent-primary);
          font-weight: 600;
        }

        .education-card {
          background: var(--bg-card);
          padding: 1.5rem;
          border-radius: var(--border-radius-md);
          border-left: 4px solid var(--accent-secondary);
          margin-top: 2rem;
        }

        .education-card h3 {
          margin-bottom: 1rem;
          font-size: 1.2rem;
        }

        .edu-item {
          display: flex;
          flex-direction: column;
        }

        .degree {
          font-weight: 600;
          color: var(--text-primary);
        }

        .school {
          color: var(--text-secondary);
          font-size: 0.9rem;
        }
        
        .about-stats {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 2rem;
        }

        .stat-item {
          background: var(--bg-card);
          padding: 2rem;
          border-radius: var(--border-radius-lg);
          text-align: center;
          transition: transform 0.3s ease;
          border: 1px solid rgba(255,255,255,0.05);
        }

        .stat-item:hover {
          transform: translateY(-5px);
          border-color: var(--accent-primary);
        }

        .stat-number {
          display: block;
          font-size: 3rem;
          font-weight: 800;
          color: var(--accent-secondary);
          margin-bottom: 0.5rem;
        }

        .stat-label {
          color: var(--text-secondary);
          font-size: 0.9rem;
          text-transform: uppercase;
          letter-spacing: 1px;
        }

        @media (max-width: 768px) {
          .about-content {
            grid-template-columns: 1fr;
          }
          
          .about-stats {
            grid-template-columns: repeat(3, 1fr);
          }
        }
        
        @media (max-width: 500px) {
          .about-stats {
            grid-template-columns: 1fr;
          }
        }
        .about-title {
          font-family: 'Dancing Script', cursive;
          font-style: italic;
          font-size: 3rem;
          letter-spacing: 1px;
          text-shadow: 2px 2px 15px rgba(109, 40, 217, 0.5);
          background: linear-gradient(to right, var(--accent-primary), var(--accent-secondary));
          -webkit-background-clip: text;
          color: transparent;
          display: inline-block;
        }
      `}</style>
    </section>
  );
};

const StatItem = ({ end, suffix, label }) => {
  const [count, setCount] = React.useState(0);
  const ref = React.useRef(null);
  const [isVisible, setIsVisible] = React.useState(false);

  React.useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.5 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, []);

  React.useEffect(() => {
    if (!isVisible) return;

    let start = 0;
    const duration = 2000; // 2 seconds
    const increment = end / (duration / 16); // 60fps

    const timer = setInterval(() => {
      start += increment;
      if (start >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(Math.ceil(start));
      }
    }, 16);

    return () => clearInterval(timer);
  }, [isVisible, end]);

  return (
    <div className="stat-item" ref={ref}>
      <span className="stat-number">
        {count}{suffix}
      </span>
      <span className="stat-label">{label}</span>
    </div>
  );
};

export default About;
