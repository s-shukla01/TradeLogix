import React from "react";
import { Link } from "react-router-dom";

const Pricing = () => {
  return (
    <section className="tl-home-pricing">
      <div className="tl-home-container">

        <div className="tl-home-section-heading tl-home-center">
          <span className="tl-home-eyebrow">PRICING</span>

          <h2>
            Transparent pricing.
            <span> No surprises.</span>
          </h2>

          <p>
            Simple pricing that lets you focus on your investments,
            not complicated fee structures.
          </p>
        </div>

        <div className="tl-home-pricing-grid">

          <div className="tl-home-price-card">
            <span className="tl-home-price-label">EQUITY DELIVERY</span>

            <div className="tl-home-price">
              ₹0
            </div>

            <p>
              No brokerage on equity delivery investments.
            </p>

            <div className="tl-home-price-line"></div>

            <span>Ideal for long-term investors</span>
          </div>

          <div className="tl-home-price-card highlighted">
            <div className="tl-home-price-popular">
              MOST POPULAR
            </div>

            <span className="tl-home-price-label">INTRADAY</span>

            <div className="tl-home-price">
              ₹20
              <small> / order</small>
            </div>

            <p>
              Trade intraday with a simple flat pricing model.
            </p>

            <div className="tl-home-price-line"></div>

            <span>Built for active traders</span>
          </div>

          <div className="tl-home-price-card">
            <span className="tl-home-price-label">MUTUAL FUNDS</span>

            <div className="tl-home-price">
              ₹0
            </div>

            <p>
              Invest in direct mutual funds without commission.
            </p>

            <div className="tl-home-price-line"></div>

            <span>Designed for wealth creation</span>
          </div>

        </div>

        <div className="tl-home-pricing-link">
          <Link to="/pricing">
            View complete pricing →
          </Link>
        </div>

      </div>
    </section>
  );
};

export default Pricing;