import React from "react";

import Hero from "./Hero";
import Awards from "./Awards";
import Stats from "./Stats";
import Education from "./Education";
import Pricing from "./Pricing";

import "./home.css";

const HomePage = () => {
  return (
    <div className="tl-home">
      <Hero />
      <Awards />
      <Stats />
      <Education />
      <Pricing />

      <section className="tl-home-final-cta">
        <div className="tl-home-container">
          <div className="tl-home-final-card">
            <div>
              <span className="tl-home-eyebrow">START YOUR JOURNEY</span>

              <h2>
                Build your financial
                <span> future today.</span>
              </h2>

              <p>
                Open your TradeLogix account and experience a smarter,
                simpler way to invest and trade.
              </p>
            </div>

            <a href="/signup" className="tl-home-primary-btn">
              Open your account
              <span>→</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;