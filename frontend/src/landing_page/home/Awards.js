import React from "react";

const Awards = () => {
  return (
    <section className="tl-home-awards">
      <div className="tl-home-container">
        <div className="tl-home-section-heading tl-home-center">
          <span className="tl-home-eyebrow">WHY TRADELOGIX</span>

          <h2>
            Everything you need.
            <span> Nothing you don't.</span>
          </h2>

          <p>
            A clean, powerful platform built around the way modern
            investors actually trade.
          </p>
        </div>

        <div className="tl-home-feature-grid">
          <article className="tl-home-feature-card">
            <div className="tl-home-feature-icon blue">01</div>

            <h3>Simple by design</h3>

            <p>
              No complicated screens or unnecessary clutter. Everything
              important is exactly where you need it.
            </p>

            <a href="/product">Explore platform →</a>
          </article>

          <article className="tl-home-feature-card featured">
            <div className="tl-home-feature-icon green">02</div>

            <h3>Built for speed</h3>

            <p>
              Track markets, analyse opportunities and place orders
              through an experience designed for speed.
            </p>

            <a href="/product">See how it works →</a>
          </article>

          <article className="tl-home-feature-card">
            <div className="tl-home-feature-icon purple">03</div>

            <h3>Data that matters</h3>

            <p>
              Get the information you need to understand your portfolio
              without drowning in unnecessary noise.
            </p>

            <a href="/product">View features →</a>
          </article>
        </div>
      </div>
    </section>
  );
};

export default Awards;