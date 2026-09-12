const express = require("express");

const authMiddleware = require("../middleware/authMiddleware");

const {
  getFunds,
  addFunds,
  withdrawFunds,
} = require("../controllers/fundsController");

const router = express.Router();

router.get("/", authMiddleware, getFunds);

router.post("/add", authMiddleware, addFunds);

router.post("/withdraw", authMiddleware, withdrawFunds);

module.exports = router;