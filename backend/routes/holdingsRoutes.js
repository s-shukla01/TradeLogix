const express = require("express");

const authMiddleware = require("../middleware/authMiddleware");

const {
  getAllHoldings,
} = require("../controllers/holdingsController");

const router = express.Router();

// GET /api/holdings
router.get(
  "/",
  authMiddleware,
  getAllHoldings
);

module.exports = router;