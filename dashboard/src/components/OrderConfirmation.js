import React from "react";

const OrderConfirmation = ({
  mode = "BUY",
  uid = "",
  quantity = 0,
  price = 0,
  product = "CNC",
  orderType = "MARKET",
  orderId = "",
  onClose,
}) => {

  const isBuy = mode === "BUY";

  const qty = Number(quantity) || 0;
  const rate = Number(price) || 0;

  const totalValue = qty * rate;


  const formatCurrency = (value) => {
    return `₹${Number(value).toLocaleString("en-IN", {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    })}`;
  };


  return (
    <div className="order-confirmation">

      {/* Success Icon */}

      <div className="confirmation-icon">
        ✓
      </div>


      {/* Title */}

      <h2>
        Order placed successfully
      </h2>

      <p className="confirmation-message">
        Your {isBuy ? "buy" : "sell"} order has
        been submitted successfully.
      </p>


      {/* Order Details */}

      <div className="confirmation-order">

        <div className="confirmation-stock">

          <div className="confirmation-avatar">
            {uid?.charAt(0)?.toUpperCase()}
          </div>

          <div>

            <strong>
              {uid}
            </strong>

            <span>
              NSE • Equity
            </span>

          </div>

        </div>


        <span
          className={
            isBuy
              ? "confirmation-side buy-side"
              : "confirmation-side sell-side"
          }
        >
          {mode}
        </span>

      </div>


      {/* Details */}

      <div className="confirmation-details">

        <div>
          <span>Quantity</span>
          <strong>{qty}</strong>
        </div>

        <div>
          <span>Price</span>
          <strong>
            {formatCurrency(rate)}
          </strong>
        </div>

        <div>
          <span>Product</span>
          <strong>{product}</strong>
        </div>

        <div>
          <span>Order type</span>
          <strong>{orderType}</strong>
        </div>

        <div>
          <span>Total value</span>
          <strong>
            {formatCurrency(totalValue)}
          </strong>
        </div>

      </div>


      {/* Order ID */}

      {orderId && (
        <div className="confirmation-order-id">

          <span>
            Order ID
          </span>

          <strong>
            {orderId}
          </strong>

        </div>
      )}


      {/* Close */}

      <button
        type="button"
        className="confirmation-close"
        onClick={onClose}
      >
        Done
      </button>

    </div>
  );
};

export default OrderConfirmation;