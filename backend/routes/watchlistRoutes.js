const express = require("express");

const authMiddleware = require("../middleware/authMiddleware");

const {
  getWatchlist,
  addToWatchlist,
  removeFromWatchlist,
} = require("../controllers/watchlistController");

const router = express.Router();

router.get(
  "/",
  authMiddleware,
  getWatchlist
);

router.post(
  "/",
  authMiddleware,
  addToWatchlist
);

router.delete(
  "/:symbol",
  authMiddleware,
  removeFromWatchlist
);

module.exports = router;