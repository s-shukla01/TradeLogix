
const { PositionsModel } = require("../model/PositionsModel");


// ==========================================
// GET ALL POSITIONS FOR LOGGED-IN USER
// ==========================================

const getAllPositions = async (req, res) => {
  try {
    const userId = req.user.userId;

    const positions = await PositionsModel.find({
      userId: userId,
    }).sort({ createdAt: -1 });

    res.status(200).json({
      success: true,
      count: positions.length,
      data: positions,
    });
  } catch (error) {
    console.error("Error fetching positions:", error);

    res.status(500).json({
      success: false,
      message: "Failed to fetch positions",
      error: error.message,
    });
  }
};


module.exports = {
  getAllPositions,
};

