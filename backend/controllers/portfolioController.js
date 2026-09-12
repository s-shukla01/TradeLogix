const { HoldingsModel } = require("../model/HoldingsModel");
const { PositionsModel } = require("../model/PositionsModel");


// ==========================================
// GET PORTFOLIO SUMMARY
// ==========================================

const getPortfolio = async (req, res) => {
  try {
    const userId = req.user.userId;

    // Get user's holdings
    const holdings = await HoldingsModel.find({
      userId: userId,
    });

    // Get user's positions
    const positions = await PositionsModel.find({
      userId: userId,
    });

    // ==========================================
    // HOLDINGS CALCULATIONS
    // ==========================================

    let totalInvestment = 0;
    let currentValue = 0;
    let totalPnL = 0;
    let totalDayPnL = 0;

    const holdingDetails = holdings.map((holding) => {
      const quantity = Number(holding.qty) || 0;
      const averagePrice = Number(holding.avg) || 0;
      const currentPrice = Number(holding.price) || 0;

      const investedValue = quantity * averagePrice;
      const marketValue = quantity * currentPrice;

      const pnl = marketValue - investedValue;

      // Convert "+2.99%" / "-1.60%" into number
      const dayPercentage =
        parseFloat(
          String(holding.day || "0").replace("%", "")
        ) || 0;

      const dayPnL =
        marketValue * (dayPercentage / 100);

      totalInvestment += investedValue;
      currentValue += marketValue;
      totalPnL += pnl;
      totalDayPnL += dayPnL;

      return {
        name: holding.name,
        qty: quantity,
        avg: averagePrice,
        price: currentPrice,
        investedValue,
        marketValue,
        pnl,
        pnlPercentage:
          investedValue > 0
            ? (pnl / investedValue) * 100
            : 0,
        day: holding.day,
        dayPnL,
      };
    });

    // ==========================================
    // TOTAL P&L %
    // ==========================================

    const totalPnLPercentage =
      totalInvestment > 0
        ? (totalPnL / totalInvestment) * 100
        : 0;

    // ==========================================
    // POSITION SUMMARY
    // ==========================================

    let positionValue = 0;

    positions.forEach((position) => {
      const qty = Number(position.qty) || 0;
      const price = Number(position.price) || 0;

      positionValue += qty * price;
    });

    // ==========================================
    // RESPONSE
    // ==========================================

    res.status(200).json({
      success: true,

      data: {
        summary: {
          totalInvestment: Number(
            totalInvestment.toFixed(2)
          ),

          currentValue: Number(
            currentValue.toFixed(2)
          ),

          totalPnL: Number(
            totalPnL.toFixed(2)
          ),

          totalPnLPercentage: Number(
            totalPnLPercentage.toFixed(2)
          ),

          totalDayPnL: Number(
            totalDayPnL.toFixed(2)
          ),

          holdingsCount: holdings.length,

          positionsCount: positions.length,

          positionValue: Number(
            positionValue.toFixed(2)
          ),
        },

        holdings: holdingDetails,

        positions,
      },
    });
  } catch (error) {
    console.error(
      "Portfolio error:",
      error
    );

    res.status(500).json({
      success: false,
      message: "Failed to fetch portfolio",
      error: error.message,
    });
  }
};


// ==========================================
// GET PORTFOLIO PERFORMANCE
// ==========================================

const getPortfolioPerformance = async (
  req,
  res
) => {
  try {
    const userId = req.user.userId;

    const holdings = await HoldingsModel.find({
      userId: userId,
    });

    let invested = 0;
    let current = 0;

    holdings.forEach((holding) => {
      const qty = Number(holding.qty) || 0;
      const avg = Number(holding.avg) || 0;
      const price = Number(holding.price) || 0;

      invested += qty * avg;
      current += qty * price;
    });

    const profitLoss = current - invested;

    const profitLossPercentage =
      invested > 0
        ? (profitLoss / invested) * 100
        : 0;

    res.status(200).json({
      success: true,

      data: {
        invested: Number(
          invested.toFixed(2)
        ),

        current: Number(
          current.toFixed(2)
        ),

        profitLoss: Number(
          profitLoss.toFixed(2)
        ),

        profitLossPercentage: Number(
          profitLossPercentage.toFixed(2)
        ),
      },
    });
  } catch (error) {
    console.error(
      "Portfolio performance error:",
      error
    );

    res.status(500).json({
      success: false,
      message: "Failed to fetch portfolio performance",
      error: error.message,
    });
  }
};


module.exports = {
  getPortfolio,
  getPortfolioPerformance,
};
