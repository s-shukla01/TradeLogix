import React, { useState, useContext, useMemo } from "react";

import GeneralContext from "./GeneralContext";

import { Tooltip, Grow } from "@mui/material";

import {
  BarChartOutlined,
  KeyboardArrowDown,
  KeyboardArrowUp,
  MoreHoriz,
  Search,
  Close,
} from "@mui/icons-material";

import { watchlist } from "../data/data";

import { DoughnutChart } from "./DoughnoutChart";


const WatchList = () => {

  const [search, setSearch] = useState("");


  /* ---------------------------------------------
     FILTER WATCHLIST
     --------------------------------------------- */

  const filteredWatchlist = useMemo(() => {

    const query = search.trim().toLowerCase();

    if (!query) {
      return watchlist;
    }

    return watchlist.filter((stock) =>
      stock.name.toLowerCase().includes(query)
    );

  }, [search]);


  /* ---------------------------------------------
     DOUGHNUT CHART DATA
     --------------------------------------------- */

  const labels = watchlist.map(
    (stock) => stock.name
  );


  const data = {

    labels,

    datasets: [
      {
        label: "Price",

        data: watchlist.map(
          (stock) => stock.price
        ),

        backgroundColor: [
          "rgba(255, 99, 132, 0.5)",
          "rgba(54, 162, 235, 0.5)",
          "rgba(255, 206, 86, 0.5)",
          "rgba(75, 192, 192, 0.5)",
          "rgba(153, 102, 255, 0.5)",
          "rgba(255, 159, 64, 0.5)",
        ],

        borderColor: [
          "rgba(255, 99, 132, 1)",
          "rgba(54, 162, 235, 1)",
          "rgba(255, 206, 86, 1)",
          "rgba(75, 192, 192, 1)",
          "rgba(153, 102, 255, 1)",
          "rgba(255, 159, 64, 1)",
        ],

        borderWidth: 1,
      },
    ],
  };


  return (
    <div className="watchlist-container">

      {/* =========================================
          SEARCH BAR
          ========================================= */}

      <div className="search-container">

        <Search
          style={{
            fontSize: "16px",
            color: "#9aa3af",
            marginRight: "6px",
          }}
        />

        <input
          type="text"
          name="search"
          id="search"
          placeholder="Search eg:infy, bse, nifty fut weekly, gold mcx"
          className="search"
          value={search}
          onChange={(e) =>
            setSearch(e.target.value)
          }
          autoComplete="off"
        />

        {search && (
          <button
            type="button"
            onClick={() => setSearch("")}
            style={{
              border: "none",
              background: "transparent",
              cursor: "pointer",
              padding: "2px",
              color: "#8993a3",
              display: "flex",
              alignItems: "center",
            }}
            aria-label="Clear search"
          >
            <Close
              style={{
                fontSize: "16px",
              }}
            />
          </button>
        )}

        <span className="counts">
          {filteredWatchlist.length} / 50
        </span>

      </div>


      {/* =========================================
          STOCK LIST
          ========================================= */}

      <ul className="list">

        {filteredWatchlist.map(
          (stock, index) => {

            return (
              <WatchListItem
                stock={stock}
                key={`${stock.name}-${index}`}
              />
            );

          }
        )}


        {/* No Search Result */}

        {filteredWatchlist.length === 0 && (

          <li
            style={{
              padding: "40px 20px",
              textAlign: "center",
              color: "#8b95a5",
            }}
          >

            <Search
              style={{
                fontSize: "30px",
                marginBottom: "8px",
                opacity: 0.5,
              }}
            />

            <div
              style={{
                fontSize: "13px",
                fontWeight: 600,
              }}
            >
              No stocks found
            </div>

            <div
              style={{
                fontSize: "11px",
                marginTop: "4px",
              }}
            >
              Try another stock symbol
            </div>

          </li>

        )}

      </ul>


      {/* =========================================
          DOUGHNUT CHART
          ========================================= */}

      <DoughnutChart data={data} />

    </div>
  );
};


export default WatchList;


/* =====================================================
   WATCHLIST ITEM
   ===================================================== */

const WatchListItem = ({ stock }) => {

  const [
    showWatchlistActions,
    setShowWatchlistActions,
  ] = useState(false);


  const handleMouseEnter = () => {

    setShowWatchlistActions(true);

  };


  const handleMouseLeave = () => {

    setShowWatchlistActions(false);

  };


  return (

    <li
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >

      <div className="item">

        {/* Stock Name */}

        <p
          className={
            stock.isDown
              ? "down"
              : "up"
          }
        >
          {stock.name}
        </p>


        {/* Price Information */}

        <div className="itemInfo">

          <span className="percent">
            {stock.percent}
          </span>


          {stock.isDown ? (

            <KeyboardArrowDown
              className="down"
            />

          ) : (

            <KeyboardArrowUp
              className="up"
            />

          )}


          <span className="price">
            {stock.price}
          </span>

        </div>

      </div>


      {/* Hover Actions */}

      {showWatchlistActions && (

        <WatchListActions
          uid={stock.name}
        />

      )}

    </li>

  );
};


/* =====================================================
   WATCHLIST ACTIONS
   ===================================================== */

const WatchListActions = ({ uid }) => {

  const generalContext =
    useContext(GeneralContext);


  /* ---------------------------------------------
     BUY
     --------------------------------------------- */

  const handleBuyClick = () => {

    if (
      generalContext &&
      generalContext.openBuyWindow
    ) {

      generalContext.openBuyWindow(uid);

    }

  };


  /* ---------------------------------------------
     SELL
     --------------------------------------------- */

  const handleSellClick = () => {

    console.log(
      "Sell clicked:",
      uid
    );

  };


  /* ---------------------------------------------
     ANALYTICS
     --------------------------------------------- */

  const handleAnalyticsClick = () => {

    console.log(
      "Analytics clicked:",
      uid
    );

  };


  /* ---------------------------------------------
     MORE
     --------------------------------------------- */

  const handleMoreClick = () => {

    console.log(
      "More options:",
      uid
    );

  };


  return (

    <span className="actions">

      <span>

        {/* BUY */}

        <Tooltip
          title="Buy (B)"
          placement="top"
          arrow
          TransitionComponent={Grow}
        >

          <button
            type="button"
            className="buy"
            onClick={handleBuyClick}
          >
            Buy
          </button>

        </Tooltip>


        {/* SELL */}

        <Tooltip
          title="Sell (S)"
          placement="top"
          arrow
          TransitionComponent={Grow}
        >

          <button
            type="button"
            className="sell"
            onClick={handleSellClick}
          >
            Sell
          </button>

        </Tooltip>


        {/* ANALYTICS */}

        <Tooltip
          title="Analytics (A)"
          placement="top"
          arrow
          TransitionComponent={Grow}
        >

          <button
            type="button"
            className="action"
            onClick={handleAnalyticsClick}
            aria-label={`Analytics for ${uid}`}
          >

            <BarChartOutlined
              className="icon"
            />

          </button>

        </Tooltip>


        {/* MORE */}

        <Tooltip
          title="More"
          placement="top"
          arrow
          TransitionComponent={Grow}
        >

          <button
            type="button"
            className="action"
            onClick={handleMoreClick}
            aria-label={`More options for ${uid}`}
          >

            <MoreHoriz
              className="icon"
            />

          </button>

        </Tooltip>

      </span>

    </span>

  );
};