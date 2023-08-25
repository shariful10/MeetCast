import React from "react";
import { Link } from "react-router-dom";
import Container from "../Container/Container";

const Footer = () => {
  return (
    <Container>
      <footer className="footer py-10 text-base-content">
        <div data-aos="fade-up" data-aos-duration="1200">
          <span className="footer-title">Services</span>
          <Link className="link link-hover">Branding</Link>
          <Link className="link link-hover">Design</Link>
          <Link className="link link-hover">Marketing</Link>
          <Link className="link link-hover">Advertisement</Link>
        </div>
        <div data-aos="fade-up" data-aos-duration="1200" data-aos-delay="300">
          <span className="footer-title">Company</span>
          <Link to="/about" className="link link-hover">
            About us
          </Link>
          <Link to="/contact" className="link link-hover">
            Contact
          </Link>
          <Link to="/pricing" className="link link-hover">
            Pricing
          </Link>
        </div>
        <div data-aos="fade-up" data-aos-duration="1200" data-aos-delay="500">
          <span className="footer-title">Legal</span>
          <Link className="link link-hover">Terms of use</Link>
          <Link className="link link-hover">Privacy policy</Link>
          <Link className="link link-hover">Cookie policy</Link>
        </div>
        <div data-aos="fade-up" data-aos-duration="1200" data-aos-delay="700">
          <span className="footer-title">Newsletter</span>
          <div className="form-control w-80">
            <label className="label">
              <span className="label-text">Enter your email address</span>
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
  );
};

export default Footer;
