const express = require("express");

const authMiddleware = require("../middleware/authMiddleware");

const {
  createOrder,
  getOrders,
} = require("../controllers/ordersController");

const router = express.Router();

// GET /api/orders
// Get logged-in user's orders
router.get(
  "/",
  authMiddleware,
  getOrders
);

// POST /api/orders
// Create new order for logged-in user
router.post(
  "/",
  authMiddleware,
  createOrder
);

module.exports = router;