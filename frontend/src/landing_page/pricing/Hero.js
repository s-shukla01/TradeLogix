import React from "react";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section className="pricing-hero">
      <div className="pricing-container">

        <span className="pricing-eyebrow">
          SIMPLE & TRANSPARENT
        </span>

        <h1>
          Pricing that keeps
          <span> investing simple.</span>
        </h1>

        <p>
          No hidden fees. No complicated plans. Just simple,
          transparent pricing designed for modern investors.
        </p>

        <div className="pricing-hero-actions">
          <Link to="/signup" className="pricing-main-button">
            Open an account →
          </Link>

          <a href="#pricing-details" className="pricing-text-link">
            View pricing
          </a>
        </div>

      </div>
    </section>
  );
};

export default Hero;