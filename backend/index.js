require("dotenv").config();

const dns = require("dns");

// MongoDB Atlas DNS workaround
dns.setServers(["8.8.8.8", "8.8.4.4"]);

const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

// ========================================
// Routes
// ========================================

// Existing routes
const holdingsRoutes = require("./routes/holdingsRoutes");
const positionsRoutes = require("./routes/positionsRoutes");
const ordersRoutes = require("./routes/ordersRoutes");

// Authentication
const authRoutes = require("./routes/authRoutes");

// Funds
const fundsRoutes = require("./routes/fundsRoutes");

// Watchlist
const watchlistRoutes = require("./routes/watchlistRoutes");

// Portfolio
const portfolioRoutes = require("./routes/portfolioRoutes");


// ========================================
// App Configuration
// ========================================

const app = express();

const PORT = process.env.PORT || 3002;
const MONGO_URL = process.env.MONGO_URL;


// ========================================
// Middleware
// ========================================

app.use(cors());

app.use(express.json());

app.use(express.urlencoded({ extended: true }));


// ========================================
// Home Route
// ========================================

app.get("/", (req, res) => {
  res.status(200).json({
    success: true,
    message: "🚀 Zerodha Backend API is running!",
    status: "Online",

    database:
      mongoose.connection.readyState === 1
        ? "Connected"
        : "Disconnected",

    server: `http://localhost:${PORT}`,

    endpoints: {
      health: "/health",

      authentication: {
        register: "POST /api/auth/register",
        login: "POST /api/auth/login",
        currentUser: "GET /api/auth/me",
      },

      funds: {
        getFunds: "GET /api/funds",
        addFunds: "POST /api/funds/add",
        withdrawFunds: "POST /api/funds/withdraw",
      },

      watchlist: {
        getWatchlist: "GET /api/watchlist",
        addStock: "POST /api/watchlist",
        removeStock: "DELETE /api/watchlist/:symbol",
      },

      portfolio: {
        portfolio: "GET /api/portfolio",
        performance: "GET /api/portfolio/performance",
      },

      trading: {
        orders: "GET /api/orders",
        createOrder: "POST /api/orders",
      },

      holdings: {
        getHoldings: "GET /api/holdings",
      },

      positions: {
        getPositions: "GET /api/positions",
      },
    },
  });
});


// ========================================
// Health Check
// ========================================

app.get("/health", (req, res) => {
  res.status(200).json({
    success: true,

    server: "Online",

    database:
      mongoose.connection.readyState === 1
        ? "Connected"
        : "Disconnected",

    uptime: `${process.uptime().toFixed(2)} seconds`,

    timestamp: new Date().toISOString(),
  });
});


// ========================================
// AUTHENTICATION ROUTES
// ========================================

// Register
// POST /api/auth/register

// Login
// POST /api/auth/login

// Current User
// GET /api/auth/me

app.use("/api/auth", authRoutes);


// ========================================
// FUNDS ROUTES
// ========================================

// GET    /api/funds
// POST   /api/funds/add
// POST   /api/funds/withdraw

app.use("/api/funds", fundsRoutes);


// ========================================
// WATCHLIST ROUTES
// ========================================

// GET    /api/watchlist
// POST   /api/watchlist
// DELETE /api/watchlist/:symbol

app.use("/api/watchlist", watchlistRoutes);


// ========================================
// PORTFOLIO ROUTES
// ========================================

// GET /api/portfolio
// GET /api/portfolio/performance

app.use("/api/portfolio", portfolioRoutes);


// ========================================
// ORDERS ROUTES
// ========================================

// GET  /api/orders
// POST /api/orders

app.use("/api/orders", ordersRoutes);


// ========================================
// HOLDINGS ROUTES
// ========================================

// GET /api/holdings

app.use("/api/holdings", holdingsRoutes);


// ========================================
// POSITIONS ROUTES
// ========================================

// GET /api/positions

app.use("/api/positions", positionsRoutes);


// ========================================
// BACKWARD COMPATIBILITY
// ========================================

// Tumhare purane frontend/API calls ke liye
// existing endpoints bhi work karenge.

// GET /allHoldings
app.use("/allHoldings", holdingsRoutes);

// GET /allPositions
app.use("/allPositions", positionsRoutes);

// POST /newOrder
app.use("/newOrder", ordersRoutes);


// ========================================
// 404 HANDLER
// ========================================

app.use((req, res) => {
  res.status(404).json({
    success: false,

    message: "Route not found",

    route: req.originalUrl,

    method: req.method,

    hint: "Check the API endpoint and HTTP method.",
  });
});


// ========================================
// GLOBAL ERROR HANDLER
// ========================================

app.use((err, req, res, next) => {
  console.error("❌ Server Error:", err);

  res.status(500).json({
    success: false,

    message: "Internal server error",

    error:
      process.env.NODE_ENV === "development"
        ? err.message
        : undefined,
  });
});


// ========================================
// START SERVER
// ========================================

const startServer = async () => {
  try {

    // ----------------------------------------
    // Check MongoDB URL
    // ----------------------------------------

    if (!MONGO_URL) {
      throw new Error(
        "MONGO_URL is missing in .env file."
      );
    }


    // ----------------------------------------
    // Check JWT Secret
    // ----------------------------------------

    if (!process.env.JWT_SECRET) {
      throw new Error(
        "JWT_SECRET is missing in .env file."
      );
    }


    // ----------------------------------------
    // MongoDB Connection
    // ----------------------------------------

    console.log("========================================");
    console.log("Connecting to MongoDB...");
    console.log("========================================");


    await mongoose.connect(MONGO_URL);


    console.log("✅ MongoDB connected successfully!");


    // ----------------------------------------
    // Start Express Server
    // ----------------------------------------

    app.listen(PORT, () => {

      console.log(`
========================================
🚀 ZERODHA BACKEND RUNNING
========================================

Server:
http://localhost:${PORT}

Health:
http://localhost:${PORT}/health


--------------- AUTH ----------------

Register:
POST /api/auth/register

Login:
POST /api/auth/login

Current User:
GET /api/auth/me


--------------- FUNDS ---------------

Get Funds:
GET /api/funds

Add Funds:
POST /api/funds/add

Withdraw Funds:
POST /api/funds/withdraw


------------- WATCHLIST -------------

Get Watchlist:
GET /api/watchlist

Add Stock:
POST /api/watchlist

Remove Stock:
DELETE /api/watchlist/:symbol


------------- PORTFOLIO -------------

Portfolio:
GET /api/portfolio

Performance:
GET /api/portfolio/performance


--------------- ORDERS --------------

Get Orders:
GET /api/orders

Create Order:
POST /api/orders


-------------- HOLDINGS -------------

Get Holdings:
GET /api/holdings


-------------- POSITIONS ------------

Get Positions:
GET /api/positions


========================================
Database: CONNECTED
Port: ${PORT}
========================================
      `);
    });

  } catch (error) {

    console.error(`
========================================
❌ BACKEND FAILED TO START
========================================
`);

    console.error(error.message);

    process.exit(1);
  }
};


// ========================================
// MongoDB Events
// ========================================

mongoose.connection.on(
  "connected",
  () => {
    console.log("🟢 MongoDB connection established");
  }
);


mongoose.connection.on(
  "disconnected",
  () => {
    console.log("⚠️ MongoDB disconnected");
  }
);


mongoose.connection.on(
  "error",
  (error) => {
    console.error(
      "❌ MongoDB error:",
      error.message
    );
  }
);


// ========================================
// Start Application
// ========================================

startServer();