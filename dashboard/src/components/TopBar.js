import React from "react";
import { Link } from "react-router-dom";

const TopBar = () => {
  return (
    <header className="tl-topbar">

      {/* =========================================
          LEFT — MOBILE BRAND + MARKET TICKER
          ========================================= */}

      <div className="tl-topbar-left">

        {/* Mobile Brand */}
        <div className="tl-mobile-brand">
          <Link
            to="/"
            className="tl-mobile-brand-link"
            aria-label="TradeLogix Dashboard"
          >
            <div className="tl-brand-mark tl-brand-mark-small">
              TL
            </div>

            <span>TradeLogix</span>
          </Link>
        </div>


        {/* Market Ticker */}
        <div className="tl-market-ticker">

          {/* NIFTY 50 */}
          <div className="tl-index-card">

            <div className="tl-index-name">
              <span className="tl-market-live-dot" />
              <span>NIFTY 50</span>
            </div>

            <div className="tl-index-value">
              24,850.20
            </div>

            <div className="tl-index-change tl-index-positive">
              +1.24%
            </div>

          </div>


          {/* Divider */}
          <div className="tl-ticker-divider" />


          {/* SENSEX */}
          <div className="tl-index-card">

            <div className="tl-index-name">
              <span className="tl-market-live-dot" />
              <span>SENSEX</span>
            </div>

            <div className="tl-index-value">
              81,240.50
            </div>

            <div className="tl-index-change tl-index-positive">
              +0.82%
            </div>

          </div>

        </div>

      </div>


      {/* =========================================
          RIGHT — ACTIONS
          ========================================= */}

      <div className="tl-topbar-actions">

        {/* Market Status */}
        <div
          className="tl-market-status"
          title="Indian stock market is currently open"
        >
          <span className="tl-market-status-dot" />

          <span className="tl-market-status-text">
            Market Open
          </span>
        </div>


        {/* Notification */}
        <button
          type="button"
          className="tl-topbar-icon-button"
          aria-label="Notifications"
          title="Notifications"
        >

          <span className="tl-notification-icon">
            ♢
          </span>

          <span className="tl-notification-badge">
            2
          </span>

        </button>


        {/* Divider */}
        <div className="tl-topbar-divider" />


        {/* User Menu */}
        <button
          type="button"
          className="tl-user-menu"
          aria-label="Open user account menu"
          title="User Account"
        >

          <div className="tl-user-avatar">
            DS
          </div>


          <div className="tl-user-details">

            <strong>
              User
            </strong>

            <span>
              Trading Account
            </span>

          </div>


          <span
            className="tl-user-arrow"
            aria-hidden="true"
          >
            ▾
          </span>

        </button>

      </div>

    </header>
  );
};

export default TopBar;