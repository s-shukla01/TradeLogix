const { Schema } = require("mongoose");

const FundsSchema = new Schema(
  {
    userId: {
      type: Schema.Types.ObjectId,
      ref: "user",
      required: true,
      unique: true,
    },

    availableCash: {
      type: Number,
      default: 100000,
      min: 0,
    },

    usedMargin: {
      type: Number,
      default: 0,
      min: 0,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = { FundsSchema };