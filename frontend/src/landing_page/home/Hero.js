import React from "react";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section className="tl-home-hero">
      <div className="tl-home-container">
        <div className="tl-home-hero-grid">
          
          <div className="tl-home-hero-content">
            <div className="tl-home-badge">
              <span className="tl-home-badge-dot"></span>
              India's smarter trading platform
            </div>

            <h1>
              Invest in
              <span> everything.</span>
            </h1>

            <p className="tl-home-hero-description">
              Trade stocks, derivatives, mutual funds and more with
              powerful tools designed to make investing simple.
            </p>

            <div className="tl-home-hero-actions">
              <Link to="/signup" className="tl-home-primary-btn">
                Start investing
                <span>→</span>
              </Link>

              <Link to="/product" className="tl-home-secondary-btn">
                Explore platform
              </Link>
            </div>

            <div className="tl-home-trust-row">
              <div>
                <strong>₹0</strong>
                <span>Account opening</span>
              </div>

              <div className="tl-home-trust-divider"></div>

              <div>
                <strong>Fast</strong>
                <span>Order execution</span>
              </div>

              <div className="tl-home-trust-divider"></div>

              <div>
                <strong>24×7</strong>
                <span>Platform access</span>
              </div>
            </div>
          </div>

          <div className="tl-home-hero-visual">
            <div className="tl-home-glow"></div>

            <div className="tl-home-dashboard-card">
              <div className="tl-home-dashboard-top">
                <div>
                  <span>Portfolio value</span>
                  <strong>₹1,24,850</strong>
                </div>

                <span className="tl-home-live-pill">
                  <i></i>
                  LIVE
                </span>
              </div>

              <div className="tl-home-chart">
                <div className="tl-home-chart-grid"></div>

                <svg
                  viewBox="0 0 500 210"
                  preserveAspectRatio="none"
                  className="tl-home-chart-svg"
                >
                  <defs>
                    <linearGradient
                      id="portfolioGradient"
                      x1="0"
                      y1="0"
                      x2="0"
                      y2="1"
                    >
                      <stop
                        offset="0%"
                        stopColor="#1683ff"
                        stopOpacity="0.28"
                      />
                      <stop
                        offset="100%"
                        stopColor="#1683ff"
                        stopOpacity="0"
                      />
                    </linearGradient>
                  </defs>

                  <path
                    d="M0 170 L45 150 L80 158 L115 125 L150 138 L185 105 L220 116 L255 78 L290 92 L325 58 L360 73 L395 42 L430 53 L465 25 L500 38 L500 210 L0 210 Z"
                    fill="url(#portfolioGradient)"
                  />

                  <path
                    d="M0 170 L45 150 L80 158 L115 125 L150 138 L185 105 L220 116 L255 78 L290 92 L325 58 L360 73 L395 42 L430 53 L465 25 L500 38"
                    fill="none"
                    stroke="#1683ff"
                    strokeWidth="4"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>

              <div className="tl-home-dashboard-bottom">
                <div>
                  <span>Today's return</span>
                  <strong>+₹4,280</strong>
                </div>

                <div>
                  <span>Return</span>
                  <strong>+13.68%</strong>
                </div>
              </div>
            </div>

            <div className="tl-home-floating-card tl-home-floating-profit">
              <span>Today's P&L</span>
              <strong>+₹4,280</strong>
              <small>+3.56%</small>
            </div>

            <div className="tl-home-floating-card tl-home-floating-stock">
              <div className="tl-home-stock-icon">N</div>
              <div>
                <strong>NIFTY 50</strong>
                <span>24,850.20</span>
              </div>
              <b>+1.24%</b>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;