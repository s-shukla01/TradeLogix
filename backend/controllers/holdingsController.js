
const { HoldingsModel } = require("../model/HoldingsModel");


// ==========================================
// GET ALL HOLDINGS FOR LOGGED-IN USER
// ==========================================

const getAllHoldings = async (req, res) => {
  try {
    const userId = req.user.userId;

    const holdings = await HoldingsModel.find({
      userId: userId,
    }).sort({ createdAt: -1 });

    res.status(200).json({
      success: true,
      count: holdings.length,
      data: holdings,
    });
  } catch (error) {
    console.error("Error fetching holdings:", error);

    res.status(500).json({
      success: false,
      message: "Failed to fetch holdings",
      error: error.message,
    });
  }
};


module.exports = {
  getAllHoldings,
};

