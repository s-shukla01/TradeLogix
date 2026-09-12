import React from "react";
import { Link } from "react-router-dom";

import "./Funds.css";

const Funds = () => {
  return (
    <div className="funds-page">

      {/* =========================================
          PAGE HEADER
          ========================================= */}

      <div className="funds-page-header">

        <div>
          <span className="funds-eyebrow">
            ACCOUNT
          </span>

          <h1>
            Funds
          </h1>

          <p>
            Manage your trading capital and account
            balance.
          </p>
        </div>

        <div className="funds-market-status">
          <span className="funds-status-dot" />
          Market Open
        </div>

      </div>


      {/* =========================================
          ACTION CARD
          ========================================= */}

      <div className="funds-action-card">

        <div className="funds-action-content">

          <div className="funds-action-icon">
            ₹
          </div>

          <div>
            <h3>
              Add money to your account
            </h3>

            <p>
              Instant, zero-cost fund transfers
              with UPI.
            </p>
          </div>

        </div>


        <div className="funds-action-buttons">

          <Link
            to="#"
            className="funds-btn funds-btn-primary"
          >
            Add Funds
          </Link>

          <Link
            to="#"
            className="funds-btn funds-btn-secondary"
          >
            Withdraw
          </Link>

        </div>

      </div>


      {/* =========================================
          BALANCE CARDS
          ========================================= */}

      <div className="funds-balance-grid">

        <div className="funds-balance-card">

          <div className="funds-card-top">
            <span>
              Available Margin
            </span>

            <div className="funds-card-icon blue">
              ₹
            </div>
          </div>

          <h2>
            ₹4,043.10
          </h2>

          <p className="funds-positive">
            Available to trade
          </p>

        </div>


        <div className="funds-balance-card">

          <div className="funds-card-top">
            <span>
              Used Margin
            </span>

            <div className="funds-card-icon orange">
              ↗
            </div>
          </div>

          <h2>
            ₹3,757.30
          </h2>

          <p>
            Currently utilized
          </p>

        </div>


        <div className="funds-balance-card">

          <div className="funds-card-top">
            <span>
              Available Cash
            </span>

            <div className="funds-card-icon green">
              ✓
            </div>
          </div>

          <h2>
            ₹4,043.10
          </h2>

          <p className="funds-positive">
            Ready for trading
          </p>

        </div>

      </div>


      {/* =========================================
          MAIN GRID
          ========================================= */}

      <div className="funds-main-grid">


        {/* =======================================
            EQUITY DETAILS
            ======================================= */}

        <section className="funds-details-card">

          <div className="funds-section-header">

            <div>
              <span>
                ACCOUNT OVERVIEW
              </span>

              <h2>
                Equity
              </h2>
            </div>

            <div className="funds-section-badge">
              NSE
            </div>

          </div>


          <div className="funds-data-section">

            <div className="funds-data-row highlight">

              <span>
                Available margin
              </span>

              <strong className="funds-colored">
                ₹4,043.10
              </strong>

            </div>


            <div className="funds-data-row">

              <span>
                Used margin
              </span>

              <strong>
                ₹3,757.30
              </strong>

            </div>


            <div className="funds-data-row">

              <span>
                Available cash
              </span>

              <strong className="funds-colored">
                ₹4,043.10
              </strong>

            </div>


            <div className="funds-divider" />


            <div className="funds-data-row">

              <span>
                Opening balance
              </span>

              <strong>
                ₹4,043.10
              </strong>

            </div>


            <div className="funds-data-row">

              <span>
                Previous balance
              </span>

              <strong>
                ₹3,736.40
              </strong>

            </div>


            <div className="funds-data-row">

              <span>
                Payin
              </span>

              <strong>
                ₹4,064.00
              </strong>

            </div>


            <div className="funds-data-row">

              <span>
                SPAN
              </span>

              <strong>
                ₹0.00
              </strong>

            </div>


            <div className="funds-data-row">

              <span>
                Delivery margin
              </span>

              <strong>
                ₹0.00
              </strong>

            </div>


            <div className="funds-data-row">

              <span>
                Exposure
              </span>

              <strong>
                ₹0.00
              </strong>

            </div>


            <div className="funds-data-row">

              <span>
                Options premium
              </span>

              <strong>
                ₹0.00
              </strong>

            </div>


            <div className="funds-divider" />


            <div className="funds-data-row">

              <span>
                Collateral (Liquid funds)
              </span>

              <strong>
                ₹0.00
              </strong>

            </div>


            <div className="funds-data-row">

              <span>
                Collateral (Equity)
              </span>

              <strong>
                ₹0.00
              </strong>

            </div>


            <div className="funds-data-row total">

              <span>
                Total collateral
              </span>

              <strong>
                ₹0.00
              </strong>

            </div>

          </div>

        </section>


        {/* =======================================
            FUND UTILIZATION
            ======================================= */}

        <section className="funds-utilization-card">

          <div className="funds-section-header">

            <div>
              <span>
                CAPITAL
              </span>

              <h2>
                Fund Utilization
              </h2>
            </div>

          </div>


          <div className="funds-utilization">

            <div className="funds-utilization-circle">

              <div>
                <strong>
                  48%
                </strong>

                <span>
                  Used
                </span>
              </div>

            </div>


            <div className="funds-utilization-legend">

              <div>

                <span className="legend-dot used" />

                <div>
                  <strong>
                    Used Margin
                  </strong>

                  <small>
                    ₹3,757.30
                  </small>
                </div>

              </div>


              <div>

                <span className="legend-dot available" />

                <div>
                  <strong>
                    Available
                  </strong>

                  <small>
                    ₹4,043.10
                  </small>
                </div>

              </div>

            </div>

          </div>


          <div className="funds-utilization-note">
            <span>
              ●
            </span>

            Keep sufficient margin available
            before placing new orders.
          </div>

        </section>

      </div>


      {/* =========================================
          COMMODITY ACCOUNT
          ========================================= */}

      <section className="funds-commodity-card">

        <div className="funds-commodity-icon">
          ◈
        </div>

        <div className="funds-commodity-content">

          <span>
            COMMODITY
          </span>

          <h3>
            You don't have a commodity account
          </h3>

          <p>
            Open a commodity trading account to
            access MCX markets.
          </p>

        </div>


        <Link
          to="#"
          className="funds-btn funds-btn-primary"
        >
          Open Account
          <span>
            →
          </span>
        </Link>

      </section>

    </div>
  );
};

export default Funds;