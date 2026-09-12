
const { Schema } = require("mongoose");

const OrdersSchema = new Schema(
  {
    // ========================================
    // User
    // ========================================

    userId: {
      type: Schema.Types.ObjectId,
      ref: "user",
      required: true,
      index: true,
    },

    // ========================================
    // Order Details
    // ========================================

    name: {
      type: String,
      required: true,
      trim: true,
      uppercase: true,
    },

    qty: {
      type: Number,
      required: true,
      min: 1,
    },

    price: {
      type: Number,
      required: true,
      min: 0,
    },

    mode: {
      type: String,
      required: true,
      enum: ["BUY", "SELL"],
      uppercase: true,
    },

    // ========================================
    // Order Status
    // ========================================

    status: {
      type: String,
      enum: [
        "PENDING",
        "COMPLETED",
        "CANCELLED",
      ],
      default: "COMPLETED",
    },
  },

  {
    timestamps: true,
  }
);

module.exports = { OrdersSchema };

