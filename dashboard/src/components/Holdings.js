import React, { useEffect, useMemo, useState } from "react";
import axios from "axios";
import { VerticalGraph } from "./VerticalGraph";
import "./Holdings.css";

const Holdings = () => {
  const [allHoldings, setAllHoldings] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    axios
      .get("http://localhost:3002/allHoldings")
      .then((res) => {
        setAllHoldings(Array.isArray(res.data) ? res.data : []);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching holdings:", err);
        setError("Unable to load holdings");
        setLoading(false);
      });
  }, []);

  /* ---------------------------------------------
     PORTFOLIO CALCULATIONS
     --------------------------------------------- */

  const portfolio = useMemo(() => {
    let investment = 0;
    let currentValue = 0;

    allHoldings.forEach((stock) => {
      const qty = Number(stock.qty) || 0;
      const avg = Number(stock.avg) || 0;
      const price = Number(stock.price) || 0;

      investment += avg * qty;
      currentValue += price * qty;
    });

    const pnl = currentValue - investment;

    const pnlPercent =
      investment > 0 ? (pnl / investment) * 100 : 0;

    return {
      investment,
      currentValue,
      pnl,
      pnlPercent,
    };
  }, [allHoldings]);

  /* ---------------------------------------------
     GRAPH DATA
     --------------------------------------------- */

  const graphData = useMemo(() => {
    return {
      labels: allHoldings.map((stock) => stock.name),

      datasets: [
        {
          label: "Current Value",

          data: allHoldings.map(
            (stock) =>
              (Number(stock.price) || 0) *
              (Number(stock.qty) || 0)
          ),

          backgroundColor: "rgba(37, 99, 235, 0.65)",
        },
      ],
    };
  }, [allHoldings]);

  /* ---------------------------------------------
     FORMAT CURRENCY
     --------------------------------------------- */

  const formatCurrency = (value) => {
    return `₹${Number(value).toLocaleString("en-IN", {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    })}`;
  };

  /* ---------------------------------------------
     LOADING
     --------------------------------------------- */

  if (loading) {
    return (
      <div className="holdings-page">
        <div className="holdings-loading">
          <div className="holdings-spinner"></div>
          <p>Loading your holdings...</p>
        </div>
      </div>
    );
  }

  /* ---------------------------------------------
     ERROR
     --------------------------------------------- */

  if (error) {
    return (
      <div className="holdings-page">
        <div className="holdings-error">
          <div className="holdings-error-icon">!</div>

          <h3>Unable to load holdings</h3>

          <p>
            Make sure the backend server is running on
            port 3002.
          </p>

          <button
            onClick={() => window.location.reload()}
          >
            Retry
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="holdings-page">

      {/* =========================================
          PAGE HEADER
          ========================================= */}

      <div className="holdings-page-header">

        <div>
          <span className="holdings-eyebrow">
            PORTFOLIO
          </span>

          <h1>
            Holdings
            <span className="holdings-count">
              {allHoldings.length}
            </span>
          </h1>

          <p>
            Track your investments and portfolio
            performance.
          </p>
        </div>

        <div className="holdings-header-status">
          <span className="status-dot"></span>
          Market data synced
        </div>

      </div>


      {/* =========================================
          SUMMARY CARDS
          ========================================= */}

      <div className="holdings-summary">

        {/* Investment */}

        <div className="holding-summary-card">

          <div className="summary-card-top">
            <span>Total Investment</span>

            <div className="summary-icon blue">
              ₹
            </div>
          </div>

          <h2>
            {formatCurrency(portfolio.investment)}
          </h2>

          <span className="summary-description">
            Amount invested
          </span>

        </div>


        {/* Current Value */}

        <div className="holding-summary-card">

          <div className="summary-card-top">
            <span>Current Value</span>

            <div className="summary-icon purple">
              ↗
            </div>
          </div>

          <h2>
            {formatCurrency(portfolio.currentValue)}
          </h2>

          <span className="summary-description">
            Current market value
          </span>

        </div>


        {/* P&L */}

        <div
          className={`holding-summary-card ${
            portfolio.pnl >= 0
              ? "positive-card"
              : "negative-card"
          }`}
        >

          <div className="summary-card-top">

            <span>Total P&L</span>

            <div className="summary-icon green">
              %
            </div>

          </div>

          <h2
            className={
              portfolio.pnl >= 0
                ? "profit"
                : "loss"
            }
          >
            {portfolio.pnl >= 0 ? "+" : ""}
            {formatCurrency(portfolio.pnl)}
          </h2>

          <span
            className={
              portfolio.pnl >= 0
                ? "summary-change profit"
                : "summary-change loss"
            }
          >
            {portfolio.pnl >= 0 ? "+" : ""}
            {portfolio.pnlPercent.toFixed(2)}%
            {" "}overall return
          </span>

        </div>

      </div>


      {/* =========================================
          HOLDINGS TABLE CARD
          ========================================= */}

      <div className="holdings-table-card">

        <div className="holdings-table-header">

          <div>
            <span className="holdings-eyebrow">
              INVESTMENTS
            </span>

            <h2>
              Your Holdings
            </h2>
          </div>

          <button className="table-action">
            Portfolio overview →
          </button>

        </div>


        <div className="holdings-table-wrapper">

          <table className="holdings-table">

            <thead>

              <tr>
                <th>Instrument</th>
                <th>Qty.</th>
                <th>Avg. Cost</th>
                <th>LTP</th>
                <th>Current Value</th>
                <th>P&L</th>
                <th>Net Chg.</th>
                <th>Day Chg.</th>
              </tr>

            </thead>

            <tbody>

              {allHoldings.map((stock, index) => {

                const qty =
                  Number(stock.qty) || 0;

                const avg =
                  Number(stock.avg) || 0;

                const price =
                  Number(stock.price) || 0;

                const currentValue =
                  price * qty;

                const investedValue =
                  avg * qty;

                const pnl =
                  currentValue - investedValue;

                const isProfit = pnl >= 0;

                const dayIsLoss =
                  Boolean(stock.isLoss);

                return (
                  <tr key={index}>

                    {/* Instrument */}

                    <td>

                      <div className="instrument">

                        <div className="instrument-avatar">
                          {stock.name
                            ?.charAt(0)
                            ?.toUpperCase()}
                        </div>

                        <div>

                          <strong>
                            {stock.name}
                          </strong>

                          <span>
                            NSE • Equity
                          </span>

                        </div>

                      </div>

                    </td>


                    {/* Quantity */}

                    <td className="number-cell">
                      {qty}
                    </td>


                    {/* Average */}

                    <td className="number-cell">
                      ₹{avg.toFixed(2)}
                    </td>


                    {/* LTP */}

                    <td className="number-cell ltp">
                      ₹{price.toFixed(2)}
                    </td>


                    {/* Current Value */}

                    <td className="number-cell strong-number">
                      ₹
                      {currentValue.toLocaleString(
                        "en-IN",
                        {
                          minimumFractionDigits: 2,
                          maximumFractionDigits: 2,
                        }
                      )}
                    </td>


                    {/* P&L */}

                    <td
                      className={
                        isProfit
                          ? "profit number-cell"
                          : "loss number-cell"
                      }
                    >
                      {isProfit ? "+" : ""}
                      ₹
                      {Math.abs(pnl).toLocaleString(
                        "en-IN",
                        {
                          minimumFractionDigits: 2,
                          maximumFractionDigits: 2,
                        }
                      )}
                    </td>


                    {/* Net Change */}

                    <td
                      className={
                        isProfit
                          ? "profit number-cell"
                          : "loss number-cell"
                      }
                    >
                      {isProfit ? "+" : ""}
                      {stock.net}
                    </td>


                    {/* Day Change */}

                    <td
                      className={
                        dayIsLoss
                          ? "loss number-cell"
                          : "profit number-cell"
                      }
                    >
                      {stock.day}
                    </td>

                  </tr>
                );
              })}

            </tbody>

          </table>

          {/* Empty state */}

          {allHoldings.length === 0 && (
            <div className="holdings-empty">

              <div className="empty-illustration">
                +
              </div>

              <h3>
                No holdings yet
              </h3>

              <p>
                Your purchased stocks will appear
                here.
              </p>

              <button>
                Start Investing
              </button>

            </div>
          )}

        </div>

      </div>


      {/* =========================================
          PERFORMANCE GRAPH
          ========================================= */}

      {allHoldings.length > 0 && (

        <div className="holdings-chart-card">

          <div className="holdings-chart-header">

            <div>

              <span className="holdings-eyebrow">
                PERFORMANCE
              </span>

              <h2>
                Holdings Distribution
              </h2>

            </div>

            <span className="chart-period">
              Current Value
            </span>

          </div>

          <div className="holdings-chart">
            <VerticalGraph data={graphData} />
          </div>

        </div>

      )}

    </div>
  );
};

export default Holdings;