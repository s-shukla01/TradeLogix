const express = require("express");

const authMiddleware = require("../middleware/authMiddleware");

const {
  getPortfolio,
  getPortfolioPerformance,
} = require("../controllers/portfolioController");

const router = express.Router();


// ==========================================
// GET COMPLETE PORTFOLIO
// ==========================================

router.get(
  "/",
  authMiddleware,
  getPortfolio
);


// ==========================================
// GET PORTFOLIO PERFORMANCE
// ==========================================

router.get(
  "/performance",
  authMiddleware,
  getPortfolioPerformance
);


module.exports = router;

