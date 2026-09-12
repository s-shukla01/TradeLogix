import React from "react";
import "./Summary.css";
import PortfolioChart from "./PortfolioChart";
const Summary = () => {
  const portfolioStats = [
    {
      label: "Portfolio Value",
      value: "₹1,24,850",
      change: "+₹4,280",
      percentage: "+3.56%",
      type: "positive",
      icon: "₹",
    },
    {
      label: "Today's P&L",
      value: "₹18,420",
      change: "+₹2,840",
      percentage: "+2.31%",
      type: "positive",
      icon: "↗",
    },
    {
      label: "Invested Value",
      value: "₹1,06,430",
      change: "12 Holdings",
      percentage: "",
      type: "neutral",
      icon: "◈",
    },
    {
      label: "Overall P&L",
      value: "+₹12,840",
      change: "+13.68%",
      percentage: "All time",
      type: "positive",
      icon: "✓",
    },
  ];

  const holdings = [
    {
      symbol: "INFY",
      name: "Infosys Ltd.",
      quantity: "24",
      value: "₹37,330",
      change: "+2.41%",
      type: "positive",
    },
    {
      symbol: "TCS",
      name: "Tata Consultancy Services",
      quantity: "10",
      value: "₹31,948",
      change: "+1.82%",
      type: "positive",
    },
    {
      symbol: "RELIANCE",
      name: "Reliance Industries",
      quantity: "12",
      value: "₹25,348",
      change: "+1.44%",
      type: "positive",
    },
    {
      symbol: "WIPRO",
      name: "Wipro Ltd.",
      quantity: "18",
      value: "₹10,399",
      change: "-0.42%",
      type: "negative",
    },
  ];

  const marketData = [
    {
      name: "NIFTY 50",
      value: "24,850.20",
      change: "+1.24%",
      type: "positive",
    },
    {
      name: "SENSEX",
      value: "81,240.50",
      change: "+0.82%",
      type: "positive",
    },
    {
      name: "BANK NIFTY",
      value: "56,420.35",
      change: "+0.95%",
      type: "positive",
    },
    {
      name: "NIFTY IT",
      value: "41,250.10",
      change: "-0.18%",
      type: "negative",
    },
  ];

  return (
    <div className="summary-page">

      {/* =========================================
          PAGE HEADER
          ========================================= */}
      <div className="summary-header">

        <div>
          <div className="summary-eyebrow">
            <span className="live-dot"></span>
            TRADING DASHBOARD
          </div>

          <h1>
            Good morning, User <span>👋</span>
          </h1>

          <p>
            Here's your portfolio overview for today.
          </p>
        </div>

        <div className="market-status">
          <span className="status-dot"></span>

          <div>
            <strong>Market Open</strong>
            <small>NSE • BSE</small>
          </div>
        </div>

      </div>


      {/* =========================================
          SUMMARY CARDS
          ========================================= */}
      <div className="summary-cards">

        {portfolioStats.map((item, index) => (
          <div
            className="summary-card"
            key={index}
          >

            <div className="summary-card-top">

              <span className="summary-card-label">
                {item.label}
              </span>

              <span className={`summary-card-icon ${item.type}`}>
                {item.icon}
              </span>

            </div>

            <div className="summary-card-value">
              {item.value}
            </div>

            <div className="summary-card-bottom">

              <span className={`summary-change ${item.type}`}>
                {item.change}
              </span>

              {item.percentage && (
                <span className="summary-card-period">
                  {item.percentage}
                </span>
              )}

            </div>

          </div>
        ))}

      </div>


      {/* =========================================
          MAIN GRID
          ========================================= */}
      <div className="summary-grid">

        {/* =======================================
            PERFORMANCE CARD
            ======================================= */}
        <section className="summary-panel performance-panel">

          <div className="panel-header">

            <div>
              <span className="panel-label">
                PORTFOLIO
              </span>

              <h2>
                Performance
              </h2>
            </div>

            <div className="time-filter">
              <button className="active">1D</button>
              <button>1W</button>
              <button>1M</button>
              <button>1Y</button>
            </div>

          </div>


          <div className="performance-summary">

            <div>
              <span>Current value</span>
              <strong>₹1,24,850</strong>
            </div>

            <div>
              <span>Returns</span>
              <strong className="positive-text">
                +₹12,840
              </strong>
            </div>

            <div>
              <span>Return %</span>
              <strong className="positive-text">
                +13.68%
              </strong>
            </div>

          </div>


          {/* CSS GRAPH */}
          <div className="chart-area">

            <div className="chart-y-axis">
              <span>1.30L</span>
              <span>1.20L</span>
              <span>1.10L</span>
              <span>1.00L</span>
              <span>90K</span>
            </div>

            <div className="chart">

              <div className="chart-grid-line line-1"></div>
              <div className="chart-grid-line line-2"></div>
              <div className="chart-grid-line line-3"></div>
              <div className="chart-grid-line line-4"></div>

              <svg
                className="performance-svg"
                viewBox="0 0 700 260"
                preserveAspectRatio="none"
              >

                <defs>

                  <linearGradient
                    id="chartGradient"
                    x1="0"
                    y1="0"
                    x2="0"
                    y2="1"
                  >
                    <stop
                      offset="0%"
                      stopColor="#1677ff"
                      stopOpacity="0.20"
                    />

                    <stop
                      offset="100%"
                      stopColor="#1677ff"
                      stopOpacity="0"
                    />
                  </linearGradient>

                </defs>

                <path
                  className="chart-area-fill"
                  d="
                    M0 205
                    L35 198
                    L70 210
                    L105 180
                    L140 190
                    L175 160
                    L210 168
                    L245 142
                    L280 151
                    L315 120
                    L350 130
                    L385 104
                    L420 115
                    L455 83
                    L490 92
                    L525 68
                    L560 76
                    L595 45
                    L630 58
                    L665 31
                    L700 42
                    L700 260
                    L0 260
                    Z
                  "
                />

                <path
                  className="chart-line"
                  d="
                    M0 205
                    L35 198
                    L70 210
                    L105 180
                    L140 190
                    L175 160
                    L210 168
                    L245 142
                    L280 151
                    L315 120
                    L350 130
                    L385 104
                    L420 115
                    L455 83
                    L490 92
                    L525 68
                    L560 76
                    L595 45
                    L630 58
                    L665 31
                    L700 42
                  "
                />

                <circle
                  className="chart-point"
                  cx="700"
                  cy="42"
                  r="6"
                />

              </svg>

              <div className="chart-tooltip">
                <span>Today</span>
                <strong>₹1,24,850</strong>
              </div>

            </div>

          </div>

          <div className="chart-dates">
            <span>09:15</span>
            <span>11:00</span>
            <span>13:00</span>
            <span>15:30</span>
          </div>

        </section>


        {/* =======================================
            QUICK ACTIONS
            ======================================= */}
        <section className="summary-panel quick-panel">

          <div className="panel-header">

            <div>
              <span className="panel-label">
                ACTIONS
              </span>

              <h2>
                Quick Trade
              </h2>
            </div>

            <span className="panel-more">
              •••
            </span>

          </div>


          <div className="quick-actions">

            <button className="trade-action buy-action">
              <span className="trade-action-icon">
                ↗
              </span>

              <span>
                <strong>Buy Stock</strong>
                <small>Place a new order</small>
              </span>

              <b>→</b>
            </button>


            <button className="trade-action sell-action">
              <span className="trade-action-icon">
                ↘
              </span>

              <span>
                <strong>Sell Stock</strong>
                <small>Exit your position</small>
              </span>

              <b>→</b>
            </button>


            <button className="trade-action fund-action">
              <span className="trade-action-icon">
                ₹
              </span>

              <span>
                <strong>Add Funds</strong>
                <small>Manage your balance</small>
              </span>

              <b>→</b>
            </button>


            <button className="trade-action neutral-action">
              <span className="trade-action-icon">
                ◈
              </span>

              <span>
                <strong>View Holdings</strong>
                <small>See your investments</small>
              </span>

              <b>→</b>
            </button>

          </div>

        </section>


        {/* =======================================
            HOLDINGS
            ======================================= */}
        <section className="summary-panel holdings-panel">

          <div className="panel-header">

            <div>
              <span className="panel-label">
                INVESTMENTS
              </span>

              <h2>
                Top Holdings
              </h2>
            </div>

            <button className="view-all">
              View all →
            </button>

          </div>


          <div className="holdings-table">

            <div className="holding-heading">
              <span>STOCK</span>
              <span>QTY</span>
              <span>VALUE</span>
              <span>CHANGE</span>
            </div>


            {holdings.map((stock, index) => (

              <div
                className="holding-row"
                key={index}
              >

                <div className="stock-info">

                  <div className="stock-avatar">
                    {stock.symbol.charAt(0)}
                  </div>

                  <div>
                    <strong>
                      {stock.symbol}
                    </strong>

                    <small>
                      {stock.name}
                    </small>
                  </div>

                </div>


                <span className="holding-qty">
                  {stock.quantity}
                </span>


                <strong className="holding-value">
                  {stock.value}
                </strong>


                <span
                  className={`holding-change ${stock.type}`}
                >
                  {stock.change}
                </span>

              </div>

            ))}

          </div>

        </section>


        {/* =======================================
            MARKET SNAPSHOT
            ======================================= */}
        <section className="summary-panel market-panel">

          <div className="panel-header">

            <div>
              <span className="panel-label">
                MARKET
              </span>

              <h2>
                Market Snapshot
              </h2>
            </div>

            <span className="live-label">
              LIVE
            </span>

          </div>


          <div className="market-list">

            {marketData.map((market, index) => (

              <div
                className="market-row"
                key={index}
              >

                <div className="market-name">

                  <span className="market-symbol">
                    {market.name.charAt(0)}
                  </span>

                  <div>
                    <strong>
                      {market.name}
                    </strong>

                    <small>
                      NSE
                    </small>
                  </div>

                </div>


                <div className="market-price">

                  <strong>
                    {market.value}
                  </strong>

                  <span className={market.type}>
                    {market.change}
                  </span>

                </div>

              </div>

            ))}

          </div>


          <div className="market-footer">
            <span>
              Market data updates automatically
            </span>

            <span className="market-live-dot"></span>
          </div>

        </section>

      </div>


      {/* =========================================
          FOOTER INFO
          ========================================= */}
      <div className="summary-footer">

        <span>
          TradeLogix • Your smart trading companion
        </span>

        <span>
          Last updated: Just now
        </span>

      </div>

    </div>
  );
};

export default Summary;