import React, { useContext, useState } from "react";
import axios from "axios";

import GeneralContext from "./GeneralContext";

import "./BuyActionWindow.css";

const BuyActionWindow = ({ uid }) => {
  const generalContext = useContext(GeneralContext);

  const [stockQuantity, setStockQuantity] = useState(1);
  const [stockPrice, setStockPrice] = useState(0.0);
  const [orderType, setOrderType] = useState("MARKET");
  const [product, setProduct] = useState("CNC");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  const quantity = Number(stockQuantity) || 0;
  const price = Number(stockPrice) || 0;

  const estimatedValue = quantity * price;


  /* =========================================
     BUY ORDER
     ========================================= */

  const handleBuyClick = async (e) => {
    e.preventDefault();

    setError("");

    if (quantity <= 0) {
      setError("Quantity must be greater than 0.");
      return;
    }

    if (orderType === "LIMIT" && price <= 0) {
      setError("Please enter a valid price.");
      return;
    }

    try {
      setIsLoading(true);

      await axios.post("http://localhost:3002/newOrder", {
        name: uid,
        qty: quantity,
        price: price,
        mode: "BUY",
        product: product,
        orderType: orderType,
      });

      setIsLoading(false);

      if (
        generalContext &&
        typeof generalContext.closeBuyWindow === "function"
      ) {
        generalContext.closeBuyWindow();
      }

    } catch (err) {
      console.error("Order placement failed:", err);

      setIsLoading(false);

      setError(
        err?.response?.data?.message ||
        "Unable to place order. Please try again."
      );
    }
  };


  /* =========================================
     CANCEL
     ========================================= */

  const handleCancelClick = (e) => {
    e.preventDefault();

    setError("");

    if (
      generalContext &&
      typeof generalContext.closeBuyWindow === "function"
    ) {
      generalContext.closeBuyWindow();
    }
  };


  return (
    <div
      className="container"
      id="buy-window"
    >

      {/* =====================================
          HEADER
          ===================================== */}

      <div className="header">

        <h3>
          Buy {uid}
          <span> NSE</span>
        </h3>

        <div className="market-options">

          <label>
            <input
              type="radio"
              name="orderType"
              value="MARKET"
              checked={orderType === "MARKET"}
              onChange={(e) =>
                setOrderType(e.target.value)
              }
            />

            Market
          </label>

          <label>
            <input
              type="radio"
              name="orderType"
              value="LIMIT"
              checked={orderType === "LIMIT"}
              onChange={(e) =>
                setOrderType(e.target.value)
              }
            />

            Limit
          </label>

        </div>

      </div>


      {/* =====================================
          ORDER FORM
          ===================================== */}

      <div className="regular-order">

        {/* Product */}

        <div className="sub-order-type">

          <label>
            <input
              type="radio"
              name="product"
              value="CNC"
              checked={product === "CNC"}
              onChange={(e) =>
                setProduct(e.target.value)
              }
            />

            CNC
          </label>

          <label>
            <input
              type="radio"
              name="product"
              value="MIS"
              checked={product === "MIS"}
              onChange={(e) =>
                setProduct(e.target.value)
              }
            />

            MIS
          </label>

        </div>


        {/* Quantity + Price */}

        <div className="inputs">

          <fieldset>

            <legend>
              Qty.
            </legend>

            <input
              type="number"
              name="qty"
              id="qty"
              min="1"
              step="1"
              value={stockQuantity}
              onChange={(e) =>
                setStockQuantity(e.target.value)
              }
            />

          </fieldset>


          <fieldset>

            <legend>
              Price
            </legend>

            <input
              type="number"
              name="price"
              id="price"
              min="0"
              step="0.05"
              value={stockPrice}
              disabled={orderType === "MARKET"}
              onChange={(e) =>
                setStockPrice(e.target.value)
              }
            />

          </fieldset>

        </div>


        {/* Order information */}

        <div className="options">

          <span>
            Product: {product}
          </span>

          <span>
            {orderType === "MARKET"
              ? "Market Price"
              : "Limit Price"}
          </span>

        </div>


        {/* Estimated Value */}

        <div className="order-summary">

          <div>
            <span>
              Estimated value
            </span>

            <strong>
              ₹
              {estimatedValue.toLocaleString(
                "en-IN",
                {
                  minimumFractionDigits: 2,
                  maximumFractionDigits: 2,
                }
              )}
            </strong>
          </div>

          <div>
            <span>
              Margin required
            </span>

            <strong>
              ₹
              {estimatedValue.toLocaleString(
                "en-IN",
                {
                  minimumFractionDigits: 2,
                  maximumFractionDigits: 2,
                }
              )}
            </strong>
          </div>

        </div>


        {/* Error */}

        {error && (
          <div className="order-error">
            {error}
          </div>
        )}

      </div>


      {/* =====================================
          BUTTONS
          ===================================== */}

      <div className="buttons">

        <span>
          {isLoading
            ? "Placing order..."
            : "Review your order"}
        </span>

        <div>

          <button
            type="button"
            className="btn btn-blue"
            onClick={handleBuyClick}
            disabled={isLoading}
          >
            {isLoading
              ? "Placing..."
              : "Buy"}
          </button>


          <button
            type="button"
            className="btn btn-grey"
            onClick={handleCancelClick}
            disabled={isLoading}
          >
            Cancel
          </button>

        </div>

      </div>

    </div>
  );
};

export default BuyActionWindow;