import { useEffect, useRef, useState } from "react";
import "./App.css";

function App() {
  const homeSection = useRef();
  const aboutSection = useRef();
  const projectsSection = useRef();
  const contactSection = useRef();
  const navLinks = useRef().current.children
  const scrollTimeout = useRef();


  function activeLinkOnScroll() {
    clearTimeout(scrollTimeout.current);
    scrollTimeout.current = setTimeout(() => {
      if (
        window.scrollY >= 0 &&
        window.scrollY < aboutSection.current.offsetTop - 120
      ) {
        navLinks.forEach((link) => {
          link.classList.remove("active");
        });
        mobileMenuLinks.forEach((link) => {
          link.classList.remove("active");
        });
        navLinks[0].classList.add("active");
        mobileMenuLinks[0].classList.add("active");
      } else if (
        window.scrollY >= aboutSection.current.offsetTop - 120 &&
        window.scrollY < projectsSection.current.offsetTop - 120
      ) {
        navLinks.forEach((link) => {
          link.classList.remove("active");
        });
        mobileMenuLinks.forEach((link) => {
          link.classList.remove("active");
        });
        navLinks[1].classList.add("active");
        mobileMenuLinks[1].classList.add("active");
      } else if (
        window.scrollY >= projectsSection.current.offsetTop - 120 &&
        window.scrollY < contactSection.current.offsetTop - 600
      ) {
        navLinks.forEach((link) => {
          link.classList.remove("active");
        });
        mobileMenuLinks.forEach((link) => {
          link.classList.remove("active");
        });
        navLinks[2].classList.add("active");
        mobileMenuLinks[2].classList.add("active");
      } else if (window.scrollY > contactSection.current.offsetTop - 600) {
        navLinks.forEach((link) => {
          link.classList.remove("active");
        });
        mobileMenuLinks.forEach((link) => {
          link.classList.remove("active");
        });
        navLinks[3].classList.add("active");
        mobileMenuLinks[3].classList.add("active");
      }
    }, 650);
  }

  useEffect(() => {
    activeLinkOnScroll()
  }, [window.scrollY]);

  return (
    <div className="container">
      <nav className="navbar">
        <h1 className="logo">
          SA<span>.</span>
        </h1>
        <div className="nav-links" ref={navLinks}>
          <span className="link active">
            Home <span></span>
          </span>
          <span className="link">
            About <span></span>
          </span>
          <span className="link">
            Projects <span></span>
          </span>
          <span className="link">
            Contact <span></span>
          </span>
        </div>
        <div className="mobile-menu-container">
          <div className="mobile-menu">
            <i className="fa-solid fa-xmark close-menu-icon"></i>
            <div className="mobile-menu-links">
              <span className="link active">
                <i className="fa-solid fa-house-chimney"></i> Home
              </span>
              <span className="link">
                <i className="fa-solid fa-user"></i> About
              </span>
              <span className="link">
                <i className="fa-solid fa-briefcase"></i> Projects
              </span>
              <span className="link">
                <i className="fa-solid fa-envelope"></i> Contact
              </span>
              <div className="hr"></div>
              <div className="social-links">
                <a href="https://github.com/shariq-ali-30" target="_blank">
                  <i className="fa-brands fa-github"></i>
                </a>
                <a href="http://linkedin.com/in/shariqali30" target="_blank">
                  <i className="fa-brands fa-linkedin-in"></i>
                </a>
                <a
                  href="mailto:shariq3072007@gmail.com"
                  aria-label="Send Email"
                  target="_blank"
                >
                  <i className="fa-regular fa-envelope"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="btns">
          <button className="menu-icon">
            <i className="fa-solid fa-bars"></i>
          </button>
        </div>
      </nav>

      <section ref={homeSection} className="hero-section" id="home">
        <p className="role">
          <span></span>Frontend Developer
        </p>

        <h1 className="intro">
          Hi, I'm <span>Shariq Ali</span>
        </h1>

        <p className="description">
          I build modern, responsive and user-friendly web experiences with
          clean code and great design.
        </p>

        <div className="btns">
          <button className="view-project-btn" id="view-projects-cta">
            View Projects <i className="fa-solid fa-arrow-right"></i>
          </button>
          <button id="contact-me-cta">
            Contact me <i className="fa-regular fa-envelope"></i>
          </button>
        </div>

        <div className="social-links">
          <a href="https://github.com/shariq-ali-30" target="_blank">
            <i className="fa-brands fa-github"></i>
          </a>
          <a href="http://linkedin.com/in/shariqali30" target="_blank">
            <i className="fa-brands fa-linkedin-in"></i>
          </a>
          <a href="mailto:shariq3072007@gmail.com" target="_blank">
            <i className="fa-regular fa-envelope"></i>
          </a>
        </div>
      </section>

      <section ref={aboutSection} className="about-section" id="about">
        <p className="title">
          <span></span> About me
        </p>
        <div>
          <div className="about">
            <h1 className="heading">About Me</h1>
            <p className="description">
              I'm Shariq Ali, a passionate Frontend Developer who loves building
              clean, modern and responsive websites. I enjoy turning ideas into
              real-world products.
            </p>
            <button>
              Know More About Me <i className="fa-solid fa-arrow-right"></i>
            </button>
          </div>

          <div className="skills">
            <h1 className="heading">Skills</h1>
            <div id="skillsContainer">
              {/* <span>
                            <img src="images/html.png" />
                            HTML
                        </span> */}
            </div>
          </div>
        </div>
      </section>

      <section ref={projectsSection} className="projects-section" id="projects">
        <div className="projects-section-header">
          <div className="left">
            <p className="title">
              <span></span>Featured Projects
            </p>
            <h1 className="heading">My Projects</h1>
          </div>
          <div className="right">
            <button className="all-projects-btn">
              View All Projects <i className="fa-solid fa-arrow-right"></i>
            </button>
          </div>
        </div>
        <div className="project-cards" id="featured-projects-parent">
          {/* <div className="project-card">
                    <div className="project-card-image">
                        <img src="images/Screenshot 2026-07-05 144404.png" />
                    </div>
                    <div className="project-card-info">
                        <h2 className="project-title">Task Flow</h2>
                        <p className="project-description">A task management app to organize your work and boost #9A
                            A4B2#9AA4 B2#9AA4B2 #9AA4B2#9A A4B2# 9AA4B2#9AA4B2
                            productivity.</p>
                        <div className="tech-badges">
                            <span className="html">HTML</span>
                            <span className="css">CSS</span>
                            <span className="javascript">JavaScript</span>
                            <span className="bootstrap">Bootstrap</span>
                        </div>
                        <div className="project-card-footer">
                            <div className="hr-x"></div>
                            <div className="links">
                                <a href=""><i className="fa-brands fa-github"></i> GitHub</a>
                                <div className="hr-y"></div>
                                <a href=""><i className="fa-solid fa-globe"></i> Live Demo</a>
                            </div>
                        </div>
                    </div>
                </div> */}
        </div>
      </section>

      <div className="all-projects-container">
        <div className="container">
          <nav className="navbar">
            <div>
              <i className="fa-solid fa-arrow-left backFromAllProjectsBtn"></i>
              <h2>All Projects</h2>
            </div>
          </nav>

          <section className="all-projects-section">
            <div className="project-cards" id="all-projects-parent"></div>
          </section>
        </div>
      </div>

      <section ref={contactSection} className="contact-section" id="contact">
        <div className="left">
          <div className="title">
            <span></span> Get in touch
          </div>
          <h2 className="heading">Contact Me</h2>
          <p>
            Feel free to reach out to me for a collaborations or just a friendly
            hello.
          </p>
        </div>
        <div className="right">
          <div>
            <i className="fa-regular fa-envelope"></i>
            <h3>Email</h3>
            <a href="mailto:shariq3072007@gmail.com" target="_blank">
              shariq3072007@gmail.com
            </a>
          </div>
          <div>
            <i className="fa-brands fa-linkedin-in"></i>
            <h3>LinkedIn</h3>
            <a href="http://linkedin.com/in/shariqali30" target="_blank">
              linkedin.com/in/shariqali30
            </a>
          </div>
          <div>
            <i className="fa-brands fa-github"></i>
            <h3>GitHub</h3>
            <a href="https://github.com/shariq-ali-30" target="_blank">
              github.com/shariq-ali-30
            </a>
          </div>
        </div>
      </section>

      <footer className="footer">
        <h1 className="logo">
          SA<span>.</span>
        </h1>
        <p className="copyright-text">2026 Shariq Ali. All rights reserved.</p>
        <i className="fa-solid fa-arrow-up scrollTop"></i>
      </footer>
    </div>
  );
}

export default App;
