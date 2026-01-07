import React, { useState } from 'react';
import { FaGithub, FaTimes, FaExternalLinkAlt } from 'react-icons/fa';
import movieImg from '../assets/project-images/movie-booking.png';
import restaurantImg from '../assets/project-images/restaurant.png';
import jobPortalImg from '../assets/project-images/job-portal.png';
import eyeDetectionImg from '../assets/project-images/eye-detection.png';
import projectsBg from '../assets/hero-bg.png'; // Reusing hero abstract bg

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  const projects = [
    {
      title: 'Movie Ticket Booking System',
      description: 'A comprehensive system developed in C for booking movie tickets, managing screens, and handling user reservations efficiently.',
      longDescription: 'This C-based application simulates a real-world movie ticket booking system. It handles movie scheduling, seat allocation, price calculation, and ticket generation. Key features include admin and user modes, file handling for data persistence, and a robust error-handling mechanism to ensure smooth operation.',
      tags: ['C', 'File Handling', 'Data Structures'],
      link: '#',
      github: 'https://github.com/Aakash-Bc/Movie-Ticket-Booking-System',
      image: movieImg
    },
    {
      title: 'Restaurant Website',
      description: 'A dynamic website for a restaurant featuring menu display, online ordering, and table reservation capabilities.',
      longDescription: 'A fully responsive restaurant website designed to provide a seamless dining experience. Users can browse the interactive menu, place orders online, and book tables in advance. The backend manages orders and reservations, sending real-time updates to the kitchen staff.',
      tags: ['HTML', 'CSS', 'JavaScript', 'PHP', 'SQL'],
      link: '#',
      github: 'https://github.com/Aakash-Bc/Restaurant-Website',
      image: restaurantImg
    },
    {
      title: 'Job Portal',
      description: 'An online platform connecting job seekers with employers, allowing resume uploads and job application tracking.',
      longDescription: 'This job portal connects talent with opportunity. Employers can post jobs, manage applications, and search for candidates. Job seekers can create profiles, upload resumes, and track their application status. The platform features advanced search filters and email notifications.',
      tags: ['SASS', 'PHP', 'MySQL', 'JavaScript'],
      link: '#',
      github: 'https://github.com/Aakash-Bc/Job-Portal',
      image: jobPortalImg
    },
    {
      title: 'Eye Blink Detection',
      description: 'A computer vision application that detects eye blinking in real-time to monitor driver drowsiness or for accessibility controls.',
      longDescription: 'Utilizing OpenCV and Python, this project implements real-time eye aspect ratio (EAR) calculation to detect blinks. It is primarily designed for driver drowsiness detection systems, alerting the user if their eyes remain closed for a specific duration. It can also be adapted for hands-free assistive technologies.',
      tags: ['Python', 'OpenCV', 'Computer Vision'],
      link: '#',
      github: 'https://github.com/Aakash-Bc/Eye-Blink-Detection',
      image: eyeDetectionImg
    }
  ];

  return (
    <section id="projects" className="section-container projects-section">
      <div className="container" style={{ position: 'relative', zIndex: 2 }}>
        <h2 className="section-title">Featured Projects</h2>

        <div className="projects-grid">
          {projects.map((project, index) => (
            <div key={index} className="project-card">
              <div className="project-image">
                <img src={project.image} alt={project.title} loading="lazy" />
                <div className="overlay"></div>
              </div>
              <div className="project-content">
                <h3 className="project-title">{project.title}</h3>
                <p className="project-desc">{project.description}</p>
                <div className="project-tags">
                  {project.tags.map(tag => (
                    <span key={tag} className="project-tag">{tag}</span>
                  ))}
                </div>
                <div className="project-actions">
                  <button
                    className="btn-link view-details"
                    onClick={() => setSelectedProject(project)}
                  >
                    View Details <FaExternalLinkAlt className="icon-sm" />
                  </button>
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-github"
                    aria-label="View Source Code"
                  >
                    <FaGithub /> Code
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {selectedProject && (
        <div className="modal-overlay" onClick={() => setSelectedProject(null)}>
          <div className="modal-content" onClick={e => e.stopPropagation()}>
            <button className="modal-close" onClick={() => setSelectedProject(null)}>
              <FaTimes />
            </button>

            <div className="modal-image">
              <img src={selectedProject.image} alt={selectedProject.title} />
            </div>

            <div className="modal-body">
              <h3>{selectedProject.title}</h3>
              <div className="modal-tags">
                {selectedProject.tags.map(tag => (
                  <span key={tag} className="project-tag">{tag}</span>
                ))}
              </div>
              <p className="modal-desc">{selectedProject.longDescription}</p>

              <div className="modal-links">
                <a href={selectedProject.github} target="_blank" rel="noopener noreferrer" className="btn-primary-sm">
                  <FaGithub /> View on GitHub
                </a>
              </div>
            </div>
          </div>
        </div>
      )}

      <style>{`
        .projects-section {
          background-image: url(${projectsBg});
          background-size: cover;
          background-position: center;
          background-attachment: fixed;
          position: relative;
        }

        .projects-section::before {
          content: '';
          position: absolute;
          width: 100%;
          height: 100%;
          background: rgba(5, 5, 5, 0.85); /* Medium dark overlay */
          top: 0;
          left: 0;
          z-index: 0;
        }

        .projects-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
          gap: 1.5rem;
        }

        .project-card {
          background: var(--bg-card);
          border-radius: var(--border-radius-lg);
          overflow: hidden;
          border: 1px solid rgba(255,255,255,0.05);
          transition: all 0.3s ease;
          position: relative;
          z-index: 1;
          display: flex;
          flex-direction: column;
        }

        .project-image {
          position: relative;
          height: 200px;
          overflow: hidden;
        }

        .project-image img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.5s ease;
        }

        .project-card:hover .project-image img {
          transform: scale(1.1);
        }

        .project-card:hover {
          transform: translateY(-10px);
          border-color: var(--accent-primary);
          box-shadow: 0 10px 40px -10px rgba(0,0,0,0.3);
        }

        .project-content {
          padding: 1.5rem;
          flex-grow: 1;
          display: flex;
          flex-direction: column;
        }

        .project-title {
          font-size: 1.25rem;
          margin-bottom: 0.5rem;
          color: var(--text-primary);
          font-weight: 700;
        }

        .project-desc {
          color: var(--text-secondary);
          margin-bottom: 1.5rem;
          font-size: 0.95rem;
          line-height: 1.5;
          flex-grow: 1;
        }

        .project-tags {
          display: flex;
          flex-wrap: wrap;
          gap: 0.5rem;
          margin-bottom: 1.5rem;
        }

        .project-tag {
          font-size: 0.75rem;
          padding: 0.25rem 0.75rem;
          background: var(--bg-secondary);
          border-radius: 100px;
          color: var(--accent-secondary);
          border: 1px solid rgba(255,255,255,0.1);
          font-weight: 500;
        }

        .project-actions {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-top: auto;
        }

        .btn-link {
          color: var(--accent-primary);
          font-weight: 600;
          font-size: 0.9rem;
          transition: 0.2s;
          display: flex;
          align-items: center;
          gap: 0.5rem;
          background: none;
          border: none;
          cursor: pointer;
          padding: 0;
        }

        .btn-link:hover {
          color: var(--accent-secondary);
          letter-spacing: 0.5px;
        }

        .btn-github {
          color: var(--text-secondary);
          font-size: 0.9rem;
          display: flex;
          align-items: center;
          gap: 0.5rem;
          transition: 0.2s;
        }

        .btn-github:hover {
          color: #fff;
        }

        .icon-sm {
          font-size: 0.8rem;
        }

        /* Modal Styles */
        .modal-overlay {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: rgba(0, 0, 0, 0.8);
          backdrop-filter: blur(5px);
          z-index: 1000;
          display: flex;
          justify-content: center;
          align-items: center;
          padding: 1rem;
          animation: fadeIn 0.3s ease;
        }

        .modal-content {
          background: var(--bg-card);
          width: 100%;
          max-width: 600px;
          border-radius: var(--border-radius-lg);
          border: 1px solid var(--accent-primary);
          position: relative;
          overflow: hidden;
          animation: slideUp 0.3s ease;
          box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.5);
        }

        .modal-close {
          position: absolute;
          top: 1rem;
          right: 1rem;
          background: rgba(0,0,0,0.5);
          border: none;
          color: white;
          width: 32px;
          height: 32px;
          border-radius: 50%;
          cursor: pointer;
          z-index: 10;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: 0.2s;
        }

        .modal-close:hover {
          background: var(--error);
        }

        .modal-image {
          height: 250px;
          overflow: hidden;
        }

        .modal-image img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        .modal-body {
          padding: 2rem;
        }

        .modal-body h3 {
          font-size: 1.8rem;
          color: var(--text-primary);
          margin-bottom: 1rem;
        }

        .modal-desc {
          font-size: 1rem;
          line-height: 1.6;
          color: var(--text-secondary);
          margin-bottom: 2rem;
        }
        
        .modal-tags {
          display: flex;
          flex-wrap: wrap;
          gap: 0.5rem;
          margin-bottom: 1.5rem;
        }

        .btn-primary-sm {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          background: var(--accent-primary);
          color: white;
          padding: 0.5rem 1rem;
          border-radius: var(--border-radius-sm);
          font-size: 0.9rem;
          transition: 0.2s;
        }

        .btn-primary-sm:hover {
          background: var(--accent-secondary);
        }

        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }

        @keyframes slideUp {
          from { transform: translateY(50px); opacity: 0; }
          to { transform: translateY(0); opacity: 1; }
        }
      `}</style>
    </section>
  );
};

export default Projects;
