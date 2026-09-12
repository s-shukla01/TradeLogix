import React from "react";
import { Link } from "react-router-dom";
import "./Orders.css";

const Orders = () => {
  return (
    <div className="orders-page">

      {/* ================================
          PAGE HEADER
          ================================ */}

      <div className="orders-page-header">

        <div>
          <span className="orders-eyebrow">
            TRADING
          </span>

          <h1>
            Orders
            <span className="orders-count">
              0
            </span>
          </h1>

          <p>
            Review and manage your orders for today.
          </p>
        </div>

        <div className="orders-market-status">
          <span className="orders-status-dot" />
          Market Open
        </div>

      </div>


      {/* ================================
          ORDER FILTERS
          ================================ */}

      <div className="orders-filter-bar">

        <button className="order-filter active">
          All Orders
        </button>

        <button className="order-filter">
          Open
        </button>

        <button className="order-filter">
          Completed
        </button>

        <button className="order-filter">
          Cancelled
        </button>

      </div>


      {/* ================================
          EMPTY ORDER CARD
          ================================ */}

      <div className="orders-card">

        <div className="orders-empty">

          <div className="orders-empty-illustration">

            <div className="order-document">
              <span />
              <span />
              <span />
            </div>

          </div>


          <h2>
            You haven't placed any orders today
          </h2>

          <p>
            Your orders will appear here once you
            place a trade.
          </p>


          <Link
            to="/"
            className="orders-start-button"
          >
            Get started
            <span>→</span>
          </Link>

        </div>

      </div>


      {/* ================================
          QUICK INFO
          ================================ */}

      <div className="orders-info-grid">

        <div className="orders-info-card">

          <div className="orders-info-icon blue">
            +
          </div>

          <div>
            <strong>
              Place your first order
            </strong>

            <span>
              Select a stock from your watchlist
              to start trading.
            </span>
          </div>

        </div>


        <div className="orders-info-card">

          <div className="orders-info-icon green">
            ✓
          </div>

          <div>
            <strong>
              Orders update in real time
            </strong>

            <span>
              Track order status and execution
              from this section.
            </span>
          </div>

        </div>

      </div>

    </div>
  );
};

export default Orders;