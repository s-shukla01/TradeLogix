import React from "react";

const OrderSummary = ({
  mode = "BUY",
  uid = "",
  quantity = 0,
  price = 0,
  product = "CNC",
  orderType = "MARKET",
  availableFunds = 0,
}) => {
  const qty = Number(quantity) || 0;
  const rate = Number(price) || 0;

  const estimatedValue = qty * rate;

  const isBuy = mode === "BUY";

  const formatCurrency = (value) => {
    return `₹${Number(value).toLocaleString("en-IN", {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    })}`;
  };

  return (
    <div className="order-summary">

      {/* Header */}

      <div className="order-summary-header">

        <div>
          <span>ORDER SUMMARY</span>

          <strong>
            {uid}
          </strong>
        </div>

        <span
          className={
            isBuy
              ? "order-summary-side buy-side"
              : "order-summary-side sell-side"
          }
        >
          {mode}
        </span>

      </div>


      {/* Details */}

      <div className="order-summary-details">

        <div className="order-summary-row">
          <span>Product</span>
          <strong>{product}</strong>
        </div>

        <div className="order-summary-row">
          <span>Order type</span>
          <strong>{orderType}</strong>
        </div>

        <div className="order-summary-row">
          <span>Quantity</span>
          <strong>{qty}</strong>
        </div>

        <div className="order-summary-row">
          <span>Price</span>
          <strong>
            {formatCurrency(rate)}
          </strong>
        </div>

      </div>


      {/* Total */}

      <div className="order-summary-total">

        <span>
          Estimated value
        </span>

        <strong>
          {formatCurrency(estimatedValue)}
        </strong>

      </div>


      {/* Funds */}

      <div className="order-summary-funds">

        <span>
          Available funds
        </span>

        <strong>
          {formatCurrency(availableFunds)}
        </strong>

      </div>

    </div>
  );
};

export default OrderSummary;