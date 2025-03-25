import React, { useState, useEffect } from "react";
import "../styles/Home.scss";
import profile from "../assets/images/about/profile.jpg";
import project1 from "../assets/images/portfolio/1.jpg";
import project2 from "../assets/images/portfolio/2.jpg";
import project3 from "../assets/images/portfolio/3.jpg";
import project4 from "../assets/images/portfolio/4.jpg";
import project5 from "../assets/images/portfolio/5.jpg";
import project6 from "../assets/images/portfolio/6.jpg";
import project7 from "../assets/images/portfolio/1.jpg";
import project8 from "../assets/images/portfolio/2.jpg";
import project9 from "../assets/images/portfolio/3.jpg";
import client1 from "../assets/images/testimonial/2.jpg";
import client2 from "../assets/images/testimonial/2.jpg";
import blog1 from "../assets/images/blog/1.jpg";
import blog2 from "../assets/images/blog/3.jpg";
import blog3 from "../assets/images/blog/1.jpg";


import {
  FaFacebookF,
  FaLinkedinIn,
  FaGithub,
  FaDownload,
  FaBriefcase,
  FaPalette,
  FaMobileAlt,
  FaCube,
  FaTools,
  FaUsers,
  FaProjectDiagram,
  FaFileDownload,
  FaCode,
  FaStar,
  FaArrowRight
} from "react-icons/fa";

const Home = () => {
  const [activeFilter, setActiveFilter] = useState("all");

  const handleFilter = (filter) => {
    setActiveFilter(filter);
  };

  const portfolioItems = [
    {
      id: 1,
      image: project1,
      category: "graphic",
      title: "Project Title",
      type: "Graphic Design",
    },
    {
      id: 2,
      image: project2,
      category: "web",
      title: "Project Title",
      type: "Web Design",
    },
    {
      id: 3,
      image: project3,
      category: "branding",
      title: "Project Title",
      type: "Branding",
    },
    {
      id: 4,
      image: project4,
      category: "graphic",
      title: "Project Title",
      type: "Graphic Design",
    },
    {
      id: 5,
      image: project5,
      category: "web",
      title: "Project Title",
      type: "Web Design",
    },
    {
      id: 6,
      image: project6,
      category: "branding",
      title: "Project Title",
      type: "Branding",
    },
    {
      id: 7,
      image: project7,
      category: "graphic",
      title: "Project Title",
      type: "Graphic Design",
    },
    {
      id: 8,
      image: project8,
      category: "web",
      title: "Project Title",
      type: "Web Design",
    },
    {
      id: 9,
      image: project9,
      category: "branding",
      title: "Project Title",
      type: "Branding",
    },
  ];

  const filteredItems =
    activeFilter === "all"
      ? portfolioItems
      : portfolioItems.filter((item) => item.category === activeFilter);

  const counterData = [
    { icon: <FaUsers />, count: 150, title: "Team Members" },
    { icon: <FaProjectDiagram />, count: 135, title: "Completed Projects" },
    { icon: <FaFileDownload />, count: 50, title: "Files Downloaded" },
    { icon: <FaCode />, count: 500, title: "Lines of Code" },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const counters = entry.target.querySelectorAll(".counter-number");
            counters.forEach((counter) => {
              const target = parseInt(counter.getAttribute("data-count"));
              let current = 0;
              const increment = target / 100;
              const duration = 2000; // 2 seconds
              const stepTime = duration / 100;

              const updateCounter = () => {
                current += increment;
                if (current < target) {
                  counter.textContent = Math.round(current);
                  setTimeout(updateCounter, stepTime);
                } else {
                  counter.textContent = target;
                }
              };

              updateCounter();
            });
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.5 }
    );

    const counterSection = document.querySelector(".counter-banner");
    if (counterSection) {
      observer.observe(counterSection);
    }

    return () => {
      if (counterSection) {
        observer.unobserve(counterSection);
      }
    };
  }, []);

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
                  <a
                    href="https://facebook.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="social-icon"
                  >
                    <FaFacebookF />
                  </a>
                  <a
                    href="https://linkedin.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="social-icon"
                  >
                    <FaLinkedinIn />
                  </a>
                  <a
                    href="https://github.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="social-icon"
                  >
                    <FaGithub />
                  </a>
                </div>
              </div>
            </div>
            <div className="about-info">
              <h3>Hello, I'm Alex Smith</h3>
              <p className="about-description">
                I'm a passionate web designer with over 5 years of experience in
                creating beautiful and functional websites. I specialize in
                modern, responsive design and user experience optimization.
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

      <section id="services" className="section services-section">
        <div className="container">
          <div className="section-title">
            <h2>Our Services</h2>
            <div className="title-separator"></div>
          </div>
          <div className="services-grid">
            <div className="service-card">
              <div className="service-icon">
                <FaPalette />
              </div>
              <h3>UI/UX Design</h3>
              <p>
                Creating beautiful and intuitive user interfaces with a focus on
                user experience and modern design principles.
              </p>
            </div>
            <div className="service-card">
              <div className="service-icon">
                <FaMobileAlt />
              </div>
              <h3>App Development</h3>
              <p>
                Building responsive and scalable applications for web and mobile
                platforms using cutting-edge technologies.
              </p>
            </div>
            <div className="service-card">
              <div className="service-icon">
                <FaCube />
              </div>
              <h3>Product Design</h3>
              <p>
                Designing innovative products that solve real problems and
                provide exceptional user experiences.
              </p>
            </div>
            <div className="service-card">
              <div className="service-icon">
                <FaTools />
              </div>
              <h3>Tools</h3>
              <p>
                Developing custom tools and solutions to streamline workflows
                and enhance productivity.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="portfolio" className="section portfolio-section">
        <div className="container">
          <div className="section-title">
            <h2>My Portfolio</h2>
            <div className="title-separator"></div>
          </div>
          <div className="portfolio-filters">
            <button
              className={`filter-btn ${activeFilter === "all" ? "active" : ""}`}
              onClick={() => handleFilter("all")}
            >
              All
            </button>
            <button
              className={`filter-btn ${
                activeFilter === "graphic" ? "active" : ""
              }`}
              onClick={() => handleFilter("graphic")}
            >
              Graphic
            </button>
            <button
              className={`filter-btn ${activeFilter === "web" ? "active" : ""}`}
              onClick={() => handleFilter("web")}
            >
              Web Design
            </button>
            <button
              className={`filter-btn ${
                activeFilter === "branding" ? "active" : ""
              }`}
              onClick={() => handleFilter("branding")}
            >
              Branding
            </button>
          </div>
          <div className="portfolio-grid">
            {filteredItems.map((item) => (
              <div
                key={item.id}
                className="portfolio-item"
                data-category={item.category}
              >
                <div className="portfolio-image">
                  <img src={item.image} alt={`Project ${item.id}`} />
                  <div className="portfolio-overlay">
                    <h3>{item.title}</h3>
                    <p>{item.type}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="counter-banner">
        <div className="container">
          <div className="counter-grid">
            {counterData.map((item, index) => (
              <div key={index} className="counter-item">
                <div className="counter-icon">{item.icon}</div>
                <div className="counter-number" data-count={item.count}>
                  0
                </div>
                <div className="counter-title">{item.title}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="testimonial" className="section testimonial-section">
        <div className="container">
          <div className="section-title">
            <h2>Client Feedback</h2>
            <div className="title-separator"></div>
          </div>
          <div className="testimonial-carousel">
            <div className="testimonial-track">
              <div className="testimonial-card">
                <div className="testimonial-image">
                  <img src={client1} alt="Client 1" />
                </div>
                <div className="testimonial-content">
                  <div className="testimonial-rating">
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaStar />
                  </div>
                  <p className="testimonial-text">
                    "Working with this team was an absolute pleasure. They
                    delivered beyond our expectations and created a stunning
                    website that perfectly represents our brand."
                  </p>
                  <div className="testimonial-author">
                    <h4>John Smith</h4>
                    <span>New York, USA</span>
                  </div>
                </div>
              </div>

              <div className="testimonial-card">
                <div className="testimonial-image">
                  <img src={client2} alt="Client 2" />
                </div>
                <div className="testimonial-content">
                  <div className="testimonial-rating">
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaStar />
                  </div>
                  <p className="testimonial-text">
                    "The attention to detail and professional approach made all
                    the difference. They transformed our vision into reality
                    with exceptional results."
                  </p>
                  <div className="testimonial-author">
                    <h4>Sarah Johnson</h4>
                    <span>London, UK</span>
                  </div>
                </div>
              </div>

              <div className="testimonial-card">
                <div className="testimonial-image">
                  <img src={client1} alt="Client 3" />
                </div>
                <div className="testimonial-content">
                  <div className="testimonial-rating">
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaStar />
                  </div>
                  <p className="testimonial-text">
                    "Outstanding service and incredible results! They went above
                    and beyond to ensure our project was perfect. Highly
                    recommended!"
                  </p>
                  <div className="testimonial-author">
                    <h4>Michael Chen</h4>
                    <span>Singapore</span>
                  </div>
                </div>
              </div>

              <div className="testimonial-card">
                <div className="testimonial-image">
                  <img src={client1} alt="Client 4" />
                </div>
                <div className="testimonial-content">
                  <div className="testimonial-rating">
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaStar />
                  </div>
                  <p className="testimonial-text">
                    "Their expertise in web design and development is unmatched.
                    They created a beautiful, responsive website that drives
                    results."
                  </p>
                  <div className="testimonial-author">
                    <h4>Emma Davis</h4>
                    <span>Melbourne, Australia</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="blog" className="section blog-section">
        <div className="container">
          <div className="section-title">
            <h2>Our Blogs</h2>
            <div className="title-separator"></div>
          </div>
          <div className="blog-grid">
            <div className="blog-card">
              <div className="blog-image">
                <img src={blog1} alt="Blog 1" />
              </div>
              <div className="blog-content">
                <h3>Web Design Trends in 2024</h3>
                <p>Discover the latest trends shaping the future of web design, from AI integration to immersive experiences.</p>
                <a href="#" className="read-more">
                  Read More <FaArrowRight />
                </a>
              </div>
            </div>

            <div className="blog-card">
              <div className="blog-image">
                <img src={blog2} alt="Blog 2" />
              </div>
              <div className="blog-content">
                <h3>UI/UX Best Practices</h3>
                <p>Learn essential principles and practices for creating user-friendly and engaging digital experiences.</p>
                <a href="#" className="read-more">
                  Read More <FaArrowRight />
                </a>
              </div>
            </div>

            <div className="blog-card">
              <div className="blog-image">
                <img src={blog3} alt="Blog 3" />
              </div>
              <div className="blog-content">
                <h3>Mobile-First Design</h3>
                <p>Explore the importance of mobile-first design and how it impacts user experience across devices.</p>
                <a href="#" className="read-more">
                  Read More <FaArrowRight />
                </a>
              </div>
            </div>
          </div>
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
