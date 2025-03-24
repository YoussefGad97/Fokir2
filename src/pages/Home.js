import React from 'react';
import '../styles/Home.scss';
import profile from '../assets/images/about/profile.jpg';
import { FaFacebookF, FaLinkedinIn, FaGithub, FaDownload, FaBriefcase } from 'react-icons/fa';

const Home = () => {
  return (
    <div className="home">
      <section id="home" className="section landing-section">
        <div className="landing-overlay"></div>
        <div className="hero">
          <div className="hero-content">
            <h1 className="hero-title">Hello I'm</h1>
            <h2 className="hero-name">Alex Smith</h2>
            <h3 className="hero-subtitle">Professional Web Designer</h3>
          </div>
        </div>
      </section>

      <section id="about" className="section about-section">
        <div className="container">
          <div className="section-title">
            <h2>About Me</h2>
            <div className="title-separator"></div>
          </div>
          <div className="about-content">
            <div className="about-image-container">
              <div className="image-border"></div>
              <div className="image-wrapper">
                <img src={profile} alt="Alex Smith" className="about-image" />
                <div className="social-overlay">
                  <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="social-icon">
                    <FaFacebookF />
                  </a>
                  <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="social-icon">
                    <FaLinkedinIn />
                  </a>
                  <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="social-icon">
                    <FaGithub />
                  </a>
                </div>
              </div>
            </div>
            <div className="about-info">
              <h3>Hello, I'm Alex Smith</h3>
              <p className="about-description">
                I'm a passionate web designer with over 5 years of experience in creating beautiful and functional websites. 
                I specialize in modern, responsive design and user experience optimization.
              </p>
              <div className="cv-details">
                <div className="cv-item">
                  <span className="label">Age:</span>
                  <span className="value">28</span>
                </div>
                <div className="cv-item">
                  <span className="label">Email:</span>
                  <span className="value">alex.smith@example.com</span>
                </div>
                <div className="cv-item">
                  <span className="label">Phone:</span>
                  <span className="value">+1 234 567 890</span>
                </div>
                <div className="cv-item">
                  <span className="label">Location:</span>
                  <span className="value">New York, USA</span>
                </div>
                <div className="cv-item">
                  <span className="label">Job Title:</span>
                  <span className="value">Senior Web Designer</span>
                </div>
              </div>
              <div className="action-buttons">
                <a href="#" className="btn btn-primary">
                  <FaDownload className="btn-icon" />
                  Download CV
                </a>
                <a href="#" className="btn btn-secondary">
                  <FaBriefcase className="btn-icon" />
                  Hire Me
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="services" className="section">
        <div className="container">
          <h2>Our Services</h2>
          <p>Discover what we can do for your business.</p>
        </div>
      </section>

      <section id="portfolio" className="section">
        <div className="container">
          <h2>Portfolio</h2>
          <p>Check out our latest work and projects.</p>
        </div>
      </section>

      <section id="testimonial" className="section">
        <div className="container">
          <h2>Testimonials</h2>
          <p>What our clients say about us.</p>
        </div>
      </section>

      <section id="blog" className="section">
        <div className="container">
          <h2>Blog</h2>
          <p>Read our latest news and insights.</p>
        </div>
      </section>

      <section id="contact" className="section">
        <div className="container">
          <h2>Contact Us</h2>
          <p>Get in touch with us today.</p>
        </div>
      </section>
    </div>
  );
};

export default Home;
