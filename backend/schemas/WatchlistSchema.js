const { Schema } = require("mongoose");

const WatchlistSchema = new Schema(
  {
    userId: {
      type: Schema.Types.ObjectId,
      ref: "user",
      required: true,
    },

    symbol: {
      type: String,
      required: true,
      uppercase: true,
      trim: true,
    },

    companyName: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

WatchlistSchema.index(
  { userId: 1, symbol: 1 },
  { unique: true }
);

module.exports = { WatchlistSchema };