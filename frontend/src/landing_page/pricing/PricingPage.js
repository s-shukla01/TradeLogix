import React from "react";
import { Link } from "react-router-dom";
import "./pricing.css";

const PricingPage = () => {
  return (
    <main className="pricing-page">

      {/* HERO */}
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

        </div>
      </section>


      {/* PRICING HIGHLIGHTS */}
      <section className="pricing-highlights">
        <div className="pricing-container">

          <div className="pricing-heading">
            <span className="pricing-eyebrow">
              OUR PRICING
            </span>

            <h2>
              Invest more.
              <br />
              <span>Pay less.</span>
            </h2>

            <p>
              Everything you need to trade and invest with
              straightforward pricing.
            </p>
          </div>


          <div className="pricing-grid">

            {/* EQUITY */}
            <article className="pricing-card pricing-card-featured">

              <div className="pricing-card-icon">
                ₹0
              </div>

              <span className="pricing-card-label">
                EQUITY DELIVERY
              </span>

              <h3>
                Free equity delivery
              </h3>

              <p>
                All equity delivery investments are completely
                free with zero brokerage.
              </p>

              <div className="pricing-value">
                <strong>₹0</strong>
                <span>brokerage</span>
              </div>

              <div className="pricing-card-footer">
                No minimum investment
              </div>

            </article>


            {/* INTRADAY */}
            <article className="pricing-card">

              <div className="pricing-card-icon">
                ₹20
              </div>

              <span className="pricing-card-label">
                INTRADAY & F&O
              </span>

              <h3>
                Flat ₹20
              </h3>

              <p>
                Trade intraday, futures and options with a simple
                flat-fee structure.
              </p>

              <div className="pricing-value">
                <strong>₹20</strong>
                <span>per executed order</span>
              </div>

              <div className="pricing-card-footer">
                Or 0.03%, whichever is lower
              </div>

            </article>


            {/* MUTUAL FUNDS */}
            <article className="pricing-card">

              <div className="pricing-card-icon">
                MF
              </div>

              <span className="pricing-card-label">
                DIRECT MUTUAL FUNDS
              </span>

              <h3>
                ₹0 commission
              </h3>

              <p>
                Invest in direct mutual funds without paying
                commissions.
              </p>

              <div className="pricing-value">
                <strong>₹0</strong>
                <span>commission</span>
              </div>

              <div className="pricing-card-footer">
                Direct plans
              </div>

            </article>

          </div>

        </div>
      </section>


      {/* COMPARISON */}
      <section className="pricing-comparison">

        <div className="pricing-container">

          <div className="comparison-header">

            <div>
              <span className="pricing-eyebrow">
                WHY TRADELOGIX
              </span>

              <h2>
                Clear pricing.
                <br />
                <span>Zero confusion.</span>
              </h2>
            </div>

            <p>
              We believe pricing should be easy to understand.
              That's why our charges are designed to remain
              simple and transparent.
            </p>

          </div>


          <div className="comparison-table">

            <div className="comparison-row comparison-head">
              <span>Investment type</span>
              <span>TradeLogix pricing</span>
              <span>Details</span>
            </div>

            <div className="comparison-row">
              <span>Equity delivery</span>
              <strong>₹0</strong>
              <span>Zero brokerage</span>
            </div>

            <div className="comparison-row">
              <span>Intraday</span>
              <strong>₹20</strong>
              <span>Per executed order</span>
            </div>

            <div className="comparison-row">
              <span>Futures</span>
              <strong>₹20</strong>
              <span>Per executed order</span>
            </div>

            <div className="comparison-row">
              <span>Options</span>
              <strong>₹20</strong>
              <span>Per executed order</span>
            </div>

            <div className="comparison-row">
              <span>Direct mutual funds</span>
              <strong>₹0</strong>
              <span>Zero commission</span>
            </div>

          </div>

        </div>

      </section>


      {/* BROKERAGE */}
      <section className="brokerage-section">

        <div className="pricing-container">

          <div className="brokerage-box">

            <div className="brokerage-content">

              <span className="pricing-eyebrow">
                BROKERAGE CALCULATOR
              </span>

              <h2>
                Know your charges
                <span> before you trade.</span>
              </h2>

              <p>
                Understand brokerage and applicable charges before
                placing an order. No surprises after the trade.
              </p>

              <Link
                to="/signup"
                className="pricing-outline-button"
              >
                Open an account →
              </Link>

            </div>


            <div className="brokerage-stats">

              <div>
                <strong>₹0</strong>
                <span>Equity delivery</span>
              </div>

              <div>
                <strong>₹20</strong>
                <span>Intraday & F&O</span>
              </div>

              <div>
                <strong>₹0</strong>
                <span>Direct mutual funds</span>
              </div>

            </div>

          </div>

        </div>

      </section>


      {/* CTA */}
      <section className="pricing-cta">

        <div className="pricing-container">

          <span className="pricing-eyebrow">
            GET STARTED
          </span>

          <h2>
            Ready to start
            <span> investing?</span>
          </h2>

          <p>
            Create your TradeLogix account and start investing
            with simple, transparent pricing.
          </p>

          <Link
            to="/signup"
            className="pricing-main-button"
          >
            Open an account →
          </Link>

        </div>

      </section>

    </main>
  );
};

export default PricingPage;