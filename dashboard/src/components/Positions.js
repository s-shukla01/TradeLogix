import React, { useMemo } from "react";

import { positions } from "../data/data";

import "./Positions.css";


const Positions = () => {

  /* ---------------------------------------------
     PORTFOLIO CALCULATIONS
     --------------------------------------------- */

  const summary = useMemo(() => {

    let totalPnl = 0;
    let openPositions = 0;
    let profitable = 0;
    let losing = 0;

    positions.forEach((stock) => {

      const qty = Number(stock.qty) || 0;
      const avg = Number(stock.avg) || 0;
      const price = Number(stock.price) || 0;

      const pnl =
        price * qty -
        avg * qty;

      totalPnl += pnl;

      if (qty !== 0) {
        openPositions++;
      }

      if (pnl >= 0) {
        profitable++;
      } else {
        losing++;
      }

    });

    return {
      totalPnl,
      openPositions,
      profitable,
      losing,
    };

  }, []);


  /* ---------------------------------------------
     FORMAT CURRENCY
     --------------------------------------------- */

  const formatCurrency = (value) => {

    return `₹${Math.abs(value).toLocaleString(
      "en-IN",
      {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2,
      }
    )}`;

  };


  return (

    <div className="positions-page">

      {/* =========================================
          PAGE HEADER
          ========================================= */}

      <div className="positions-page-header">

        <div>

          <span className="positions-eyebrow">
            TRADING
          </span>

          <h1>

            Positions

            <span className="positions-count">
              {positions.length}
            </span>

          </h1>

          <p>
            Monitor your active trades and
            intraday performance.
          </p>

        </div>


        <div className="positions-market-status">

          <span className="positions-status-dot"></span>

          Market Open

        </div>

      </div>


      {/* =========================================
          SUMMARY CARDS
          ========================================= */}

      <div className="positions-summary">

        {/* Open Positions */}

        <div className="position-summary-card">

          <div className="position-summary-top">

            <span>
              Open Positions
            </span>

            <div className="position-summary-icon blue">
              ↗
            </div>

          </div>

          <h2>
            {summary.openPositions}
          </h2>

          <p>
            Active trades
          </p>

        </div>


        {/* Total P&L */}

        <div
          className={`position-summary-card ${
            summary.totalPnl >= 0
              ? "position-positive"
              : "position-negative"
          }`}
        >

          <div className="position-summary-top">

            <span>
              Total P&L
            </span>

            <div className="position-summary-icon green">
              ₹
            </div>

          </div>

          <h2
            className={
              summary.totalPnl >= 0
                ? "profit"
                : "loss"
            }
          >

            {summary.totalPnl >= 0
              ? "+"
              : "-"}

            {formatCurrency(
              summary.totalPnl
            )}

          </h2>

          <p>
            Current position value
          </p>

        </div>


        {/* Profitable */}

        <div className="position-summary-card">

          <div className="position-summary-top">

            <span>
              Profitable
            </span>

            <div className="position-summary-icon green">
              ↑
            </div>

          </div>

          <h2 className="profit">
            {summary.profitable}
          </h2>

          <p>
            Winning positions
          </p>

        </div>


        {/* Losing */}

        <div className="position-summary-card">

          <div className="position-summary-top">

            <span>
              Losing
            </span>

            <div className="position-summary-icon red">
              ↓
            </div>

          </div>

          <h2 className="loss">
            {summary.losing}
          </h2>

          <p>
            Positions in loss
          </p>

        </div>

      </div>


      {/* =========================================
          POSITIONS TABLE
          ========================================= */}

      <div className="positions-table-card">

        <div className="positions-table-header">

          <div>

            <span className="positions-eyebrow">
              LIVE TRADES
            </span>

            <h2>
              Your Positions
            </h2>

          </div>


          <div className="positions-filters">

            <button className="position-filter active">
              All
            </button>

            <button className="position-filter">
              Intraday
            </button>

            <button className="position-filter">
              Long Term
            </button>

          </div>

        </div>


        <div className="positions-table-wrapper">

          <table className="positions-table">

            <thead>

              <tr>

                <th>
                  Product
                </th>

                <th>
                  Instrument
                </th>

                <th>
                  Qty.
                </th>

                <th>
                  Avg. Price
                </th>

                <th>
                  LTP
                </th>

                <th>
                  Position Value
                </th>

                <th>
                  P&L
                </th>

                <th>
                  Day Chg.
                </th>

              </tr>

            </thead>


            <tbody>

              {positions.map(
                (stock, index) => {

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
                    currentValue -
                    investedValue;


                  const isProfit =
                    pnl >= 0;

                  const isDayLoss =
                    Boolean(stock.isLoss);


                  return (

                    <tr key={index}>

                      {/* PRODUCT */}

                      <td>

                        <span
                          className={`product-badge ${
                            stock.product === "CNC"
                              ? "product-cnc"
                              : "product-mis"
                          }`}
                        >
                          {stock.product}
                        </span>

                      </td>


                      {/* INSTRUMENT */}

                      <td>

                        <div className="position-instrument">

                          <div className="position-avatar">
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


                      {/* QUANTITY */}

                      <td className="position-number">
                        {qty}
                      </td>


                      {/* AVG */}

                      <td className="position-number">
                        ₹{avg.toFixed(2)}
                      </td>


                      {/* LTP */}

                      <td className="position-number position-ltp">
                        ₹{price.toFixed(2)}
                      </td>


                      {/* POSITION VALUE */}

                      <td className="position-number position-value">
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
                        className={`position-number ${
                          isProfit
                            ? "profit"
                            : "loss"
                        }`}
                      >

                        {isProfit
                          ? "+"
                          : "-"}

                        {formatCurrency(
                          pnl
                        )}

                      </td>


                      {/* DAY CHANGE */}

                      <td
                        className={`position-number ${
                          isDayLoss
                            ? "loss"
                            : "profit"
                        }`}
                      >

                        {stock.day}

                      </td>

                    </tr>

                  );

                }
              )}

            </tbody>

          </table>


          {/* EMPTY STATE */}

          {positions.length === 0 && (

            <div className="positions-empty">

              <div className="positions-empty-icon">
                +
              </div>

              <h3>
                No open positions
              </h3>

              <p>
                Your active trades will appear
                here.
              </p>

              <button>
                Start Trading
              </button>

            </div>

          )}

        </div>

      </div>


      {/* =========================================
          POSITION INSIGHT
          ========================================= */}

      {positions.length > 0 && (

        <div className="position-insight">

          <div className="insight-icon">
            ✓
          </div>

          <div>

            <strong>
              Position overview
            </strong>

            <p>

              You currently have{" "}
              <b>
                {summary.openPositions}
              </b>{" "}
              active position
              {summary.openPositions !== 1
                ? "s"
                : ""}{" "}
              with{" "}

              <span
                className={
                  summary.totalPnl >= 0
                    ? "profit"
                    : "loss"
                }
              >

                {summary.totalPnl >= 0
                  ? "positive"
                  : "negative"}{" "}

                P&L

              </span>.

            </p>

          </div>

        </div>

      )}

    </div>

  );

};


export default Positions;