import React from "react";
import "./App.css";
import profile from "./images/profile.jpeg";
import photo1 from "./images/photo1.png";
import photo2 from "./images/photo2.png";
import Sujal_CV from "./images/Sujal_CV.pdf";

function App() {
  return (
    <div>
      <link
        rel="stylesheet"
        href="https://unpkg.com/boxicons@latest/css/boxicons.min.css"
      />
      <link
        href="https://cdn.jsdelivr.net/npm/remixicon@4.0.0/fonts/remixicon.css"
        rel="stylesheet"
      />
      <header>
        <a href="/" className="logo">
          {" "}
          Sujal Patel.{" "}
        </a>

        <ul className="navbar">
          <li>
            <a href="#home">Home</a>
          </li>
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#work">Work</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul>

        <div className="bx bx-menu" id="menu-icon"></div>
      </header>

      <section className="home" id="home">
        <div className="home-text">
          <h5>Hello, I'm Sujal</h5>
          <h1>
            Front-End
            <br />
            Developer
          </h1>

          <div className="social">
            <a href="/">Follow me on</a>
            <a href="https://github.com/sujalPatel6021" className="social">
              <i className="bx bxl-github"></i>
            </a>
            <a
              href="https://www.linkedin.com/in/sujal-patel6021"
              className="social"
            >
              <i className="bx bxl-linkedin"></i>
            </a>
            <a
              href="https://www.instagram.com/sujalpatel6021?igsh=MW5qc2FscTBxeWdkdw=="
              className="social"
            >
              <i className="bx bxl-instagram"></i>
            </a>
          </div>

          <div className="button">
            <a href="mailto:patelsujal6021@gmail.com">
              <i className="ri-mail-open-line"></i>Mail Me
            </a>
            <a href={Sujal_CV} className="btn2" download>
              <i className="ri-arrow-down-line"></i>Download Resume
            </a>
          </div>
        </div>

        <div className="home-img">
          <img src={profile} alt="profile" className="imgg" />
        </div>
      </section>

      <section className="about" id="about">
        <div className="center">
          <div className="h-main">
            <div className="h-text">
              <h2>About.</h2>
            </div>
            <div className="h-btn">
              <a href="#about" className="hh-btn">
                Read More<i className="ri-arrow-right-line"></i>
              </a>
            </div>
          </div>
          <p>
            Hi, I'm Sujal Patel, a frontend developer passionate about blending
            creativity and code. With a keen eye for design and a commitment to
            seamless user experiences, I transform ideas into visually stunning
            and intuitive websites. Navigating the digital landscape, I thrive
            on crafting clean, elegant, and user-centric solutions. Join me on
            this journey of pixels and possibilities as we create extraordinary
            online experiences together.
          </p>
        </div>

        <div className="about-content">
          <div className="box">
            <h3>HTML</h3>
          </div>
          <div className="box">
            <h3>React JS</h3>
          </div>
          <div className="box">
            <h3>Django</h3>
          </div>
          <div className="box">
            <h3>Python</h3>
          </div>
          <div className="box">
            <h3>C</h3>
          </div>
          <div className="box">
            <h3>JavaScript</h3>
          </div>
          <div className="box">
            <h3>CSS</h3>
          </div>
        </div>
      </section>

      <section className="work" id="work">
        <div className="center">
          <div className="h-main">
            <div className="h-text">
              <h2>Projects:</h2>
            </div>
            <div className="h-btn">
              <a href="#work" className="hh-btn">
                More<i className="ri-arrow-right-line"></i>
              </a>
            </div>
          </div>
          <p></p>
        </div>

        <div className="work-content">
          <div className="row">
            <a
              href="https://github.com/sujalPatel6021/task_management_system.git"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={photo1} alt="wrking" />
              <div className="main-row">
                <div className="row-text">
                  <h5>React JS</h5>
                  <h4>Task Management System</h4>
                </div>
                <div className="row-icon">
                  <i className="ri-github-fill"></i>
                  <i className="ri-chrome-fill"></i>
                </div>
              </div>
            </a>
          </div>
          <div className="row">
            <a
              href="https://github.com/sujalPatel6021/textutils.git"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={photo2} alt="wrking" />
              <div className="main-row">
                <div className="row-text">
                  <h5>React JS</h5>
                  <h4>TextUtils</h4>
                </div>
                <div className="row-icon">
                  <i className="ri-github-fill"></i>
                  <i className="ri-chrome-fill"></i>
                </div>
              </div>
            </a>
          </div>
        </div>
      </section>

      <section className="contact" id="contact">
        <div className="center">
          <div className="h-main">
            <div className="h-text">
              <h2>Contact</h2>
            </div>
            <div className="h-btn">
              <a href="/" className="hh-btn">
                Ping me<i className="ri-arrow-right-line"></i>
              </a>
            </div>
          </div>
          <p className="contact-text">
            Please contact me directly at 'patelsujal6021@gmail.com' or through
            this form.
          </p>
        </div>

        <div className="contact-form">
          <form action="mailto:devhpatel1729@gmail.com" method="GET">
            <input type="text" placeholder="Your Name" required />
            <input type="email" placeholder="Email address.." required />
            <textarea
              cols="30"
              rows="10"
              placeholder="Write a message here..."
              required
            ></textarea>
            <button type="submit" value="Send Message" className="send-btn">
              Send Message
            </button>
          </form>
        </div>
      </section>

      <div className="end-content">
        <a href="#home" className="scroll-top">
          <i className="ri-arrow-up-s-fill"></i>
        </a>
        <div className="copyright">
          <p>© 2024 Sujal. All rights reserved</p>
        </div>
        <div className="copyright">
          <p>Developed by Sujal D. patel</p>
        </div>
      </div>
    </div>
  );
}

export default App;
