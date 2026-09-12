import React from "react";
import { Link } from "react-router-dom";

const Education = () => {
  return (
    <section className="tl-home-education">
      <div className="tl-home-container">
        <div className="tl-home-education-grid">

          <div className="tl-home-education-visual">
            <div className="tl-home-learning-card">
              <div className="tl-home-learning-header">
                <span>TradeLogix Learn</span>
                <span>↗</span>
              </div>

              <div className="tl-home-learning-main">
                <span className="tl-home-learning-label">
                  LEARN & GROW
                </span>

                <h3>
                  Make better
                  <br />
                  investment decisions.
                </h3>

                <p>
                  Understand markets, investing and trading with
                  easy-to-follow resources.
                </p>

                <div className="tl-home-learning-progress">
                  <div>
                    <span>Learning progress</span>
                    <strong>68%</strong>
                  </div>

                  <div className="tl-home-progress">
                    <i style={{ width: "68%" }}></i>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="tl-home-education-content">
            <span className="tl-home-eyebrow">LEARN & INVEST</span>

            <h2>
              Better knowledge.
              <span> Better decisions.</span>
            </h2>

            <p>
              Investing becomes easier when you understand what you're
              doing. Explore simple educational resources designed for
              investors at every stage.
            </p>

            <div className="tl-home-learning-points">
              <div>
                <span>✓</span>
                <p>Understand stocks and market fundamentals</p>
              </div>

              <div>
                <span>✓</span>
                <p>Learn how portfolios and risk work</p>
              </div>

              <div>
                <span>✓</span>
                <p>Build better long-term investing habits</p>
              </div>
            </div>

            <Link to="/product" className="tl-home-text-link">
              Explore TradeLogix Learn →
            </Link>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Education;