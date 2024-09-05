import React from "react";
import { FaGithub, FaLinkedin, FaGlobe, FaFilePdf } from "react-icons/fa";
import "./about.css";

const AboutUs = () => {
  return (
    <div className="about-page">
      {/* Banner Section */}
      <section className="banner">
        <img
          src="image/about.webp"
          alt="UrbanBuy Banner"
          className="banner-image"
        />
        <h1 className="banner-title">Welcome to UrbanBuy</h1>
      </section>

      {/* About Us Section */}
      <section className="about-section">
        <h2>About Us</h2>
        <p>
          UrbanBuy is your one-stop destination for the latest and most
          innovative electronics. Our mission is to bring you high-quality
          products at the best prices, with exceptional customer service. From
          the latest gadgets to everyday tech essentials, UrbanBuy has it all.
        </p>
      </section>

      {/* About the Developer Section */}
      <section className="developer-section">
        <h2>About the Developer</h2>
        <p>
          Hi, myself Saquib Khan. I am a fresher front-end developer passionate
          about creating interactive and responsive web applications. I enjoy
          working with HTML, CSS, JavaScript, and React & NextJs to build clean,
          efficient, and user-friendly interfaces. I am eager to learn new
          technologies and contribute to impactful projects.
        </p>
        <div className="social-icons">
          <a
            href="https://github.com/SAQUIB-KHAN90"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub className="icon" />
          </a>
          <a
            href="https://www.linkedin.com/in/saquib-khan-sa890098/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin className="icon" />
          </a>
          <a
            href="https://personal-portfolio1-gold.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGlobe className="icon" />
          </a>
          <a
            href="https://storage.googleapis.com/resume-hosting/66d9ad40482cc.pdf"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaFilePdf className="icon" title="Download Resume" />{" "}
            {/* Added CV/Resume icon */}
          </a>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;
