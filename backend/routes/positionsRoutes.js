const express = require("express");

const authMiddleware = require("../middleware/authMiddleware");

const {
  getAllPositions,
} = require("../controllers/positionsController");

const router = express.Router();

// GET /api/positions
router.get(
  "/",
  authMiddleware,
  getAllPositions
);

module.exports = router;