import React from 'react';
import '../styles/Home.scss';

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

      <section id="about" className="section">
        <div className="container">
          <h2>About Us</h2>
          <p>Learn more about our company and our mission.</p>
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
