const { WatchlistModel } = require("../model/WatchlistModel");


// GET WATCHLIST

const getWatchlist = async (req, res) => {
  try {
    const watchlist = await WatchlistModel.find({
      userId: req.user.userId,
    });

    res.status(200).json({
      success: true,
      data: watchlist,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Failed to fetch watchlist",
      error: error.message,
    });
  }
};


// ADD STOCK

const addToWatchlist = async (req, res) => {
  try {
    const { symbol, companyName } = req.body;

    if (!symbol || !companyName) {
      return res.status(400).json({
        success: false,
        message: "Symbol and company name are required",
      });
    }

    const existing = await WatchlistModel.findOne({
      userId: req.user.userId,
      symbol: symbol.toUpperCase(),
    });

    if (existing) {
      return res.status(409).json({
        success: false,
        message: "Stock already exists in watchlist",
      });
    }

    const stock = await WatchlistModel.create({
      userId: req.user.userId,
      symbol,
      companyName,
    });

    res.status(201).json({
      success: true,
      message: "Added to watchlist",
      data: stock,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Failed to add stock",
      error: error.message,
    });
  }
};


// REMOVE STOCK

const removeFromWatchlist = async (req, res) => {
  try {
    const { symbol } = req.params;

    const deleted = await WatchlistModel.findOneAndDelete({
      userId: req.user.userId,
      symbol: symbol.toUpperCase(),
    });

    if (!deleted) {
      return res.status(404).json({
        success: false,
        message: "Stock not found in watchlist",
      });
    }

    res.status(200).json({
      success: true,
      message: "Removed from watchlist",
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Failed to remove stock",
      error: error.message,
    });
  }
};


module.exports = {
  getWatchlist,
  addToWatchlist,
  removeFromWatchlist,
};