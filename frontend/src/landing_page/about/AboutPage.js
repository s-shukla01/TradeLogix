import React from "react";
import Hero from "./Hero";
import Team from "./Team";
import "./about.css";

const AboutPage = () => {
  return (
    <div className="about-page">
      <Hero />

      {/* =========================
          ABOUT STORY
      ========================= */}
      <section className="about-story">
        <div className="about-container">

          <div className="about-story-heading">
            <div className="about-section-label">
              About TradeLogix
            </div>

            <h2 className="about-section-title">
              Built to make
              <br />
              investing <span>simpler.</span>
            </h2>
          </div>

          <div className="about-story-content">
            <p>
              TradeLogix is built around a simple idea: investing
              should be easier to understand and easier to access.
            </p>

            <p>
              We combine a clean user experience with powerful
              trading tools so investors can focus on making
              informed decisions rather than navigating complexity.
            </p>

            <p>
              From discovering opportunities to tracking a
              portfolio, every part of the experience is designed
              to remain simple, transparent and intuitive.
            </p>
          </div>

        </div>
      </section>

      {/* =========================
          HIGHLIGHTS
      ========================= */}
      <section className="about-highlights">
        <div className="about-container">

          <div className="about-highlights-header">
            <div className="about-section-label">
              Why TradeLogix
            </div>

            <h2 className="about-section-title">
              Everything you need.
              <br />
              <span>Nothing you don't.</span>
            </h2>

            <p>
              A focused trading experience designed around the
              things investors actually need.
            </p>
          </div>

          <div className="about-card-grid">

            <article className="about-card">
              <div className="about-card-number">
                01
              </div>

              <h3>Simple</h3>

              <p>
                Clean interfaces and intuitive workflows make
                investing easier to understand.
              </p>
            </article>

            <article className="about-card">
              <div className="about-card-number">
                02
              </div>

              <h3>Transparent</h3>

              <p>
                Clear information helps investors understand
                what they are doing at every step.
              </p>
            </article>

            <article className="about-card">
              <div className="about-card-number">
                03
              </div>

              <h3>Powerful</h3>

              <p>
                Modern tools provide the capabilities required
                to make smarter investment decisions.
              </p>
            </article>

          </div>
        </div>
      </section>

      {/* =========================
          TEAM
      ========================= */}
      <Team />

      {/* =========================
          CTA
      ========================= */}
      <section className="about-cta">
        <div className="about-cta-container">

          <h2>
            Ready to start
            <br />
            <span>investing?</span>
          </h2>

          <p>
            Create your account and experience a simpler way
            to approach the markets.
          </p>

          <a
            href="/signup"
            className="about-cta-button"
          >
            Open an account →
          </a>

        </div>
      </section>
    </div>
  );
};

export default AboutPage;