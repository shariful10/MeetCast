import React from "react";
import { Link } from "react-router-dom";
import Container from "../Container/Container";
import { FaFacebook, FaLinkedin, FaTwitter } from "react-icons/fa";

const Footer = () => {
  const iconSize = 24;
  return (
    <div className="bg-darkBg text-white">
      <Container>
        <footer className="footer py-10">
          <div data-aos="fade-up" data-aos-duration="1200">
            <span className="footer-title">Video Conferencing</span>
            <Link className="link link-hover">Host Virtual Meetings</Link>
            <Link className="link link-hover">Webinars</Link>
            <Link className="link link-hover">Screen Sharing</Link>
            <Link className="link link-hover">Recording</Link>
          </div>
          <div data-aos="fade-up" data-aos-duration="1200" data-aos-delay="300">
            <span className="footer-title">Collaboration</span>
            <Link className="link link-hover">Real-time Chat</Link>
            <Link className="link link-hover">File Sharing</Link>
            <Link className="link link-hover">Integration</Link>
          </div>
          <div data-aos="fade-up" data-aos-duration="1200" data-aos-delay="500">
            <span className="footer-title">Support</span>
            <Link className="link link-hover">Customer Assistance</Link>
            <Link className="link link-hover">Security Features</Link>
          </div>
          <div data-aos="fade-up" data-aos-duration="1200" data-aos-delay="700">
            <span className="footer-title">Follow Us</span>
            <div className="social-icons">
              <a
                href="https://www.facebook.com/yourcompany"
                target="_blank"
                rel="noopener noreferrer"
                className="social-icon"
              >
                <FaFacebook size={iconSize} className="mb-2"/>
              </a>
              <a
                href="https://twitter.com/yourcompany"
                target="_blank"
                rel="noopener noreferrer"
                className="social-icon"
              >
                <FaTwitter size={iconSize} className="mb-2"/>
              </a>
              <a
                href="https://www.linkedin.com/company/yourcompany"
                target="_blank"
                rel="noopener noreferrer"
                className="social-icon"
              >
                <FaLinkedin size={iconSize} />
              </a>
            </div>
          </div>
          <div>
            <span className="footer-title">Newsletter</span>
            <div className="form-control w-80">
              <label className="label">
                <span className="label-text text-white">
                  Enter your email address
                </span>
              </label>
              <div className="relative">
                <input
                  type="text"
                  placeholder="username@site.com"
                  className="input input-bordered w-full pr-12"
                />
                <button className="btn hover:bg-primary bg-secondary text-white absolute top-0 right-0 rounded-l-none duration-300">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </footer>
      </Container>
    </div>
  );
};

export default Footer;
