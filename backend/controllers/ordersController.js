
const { OrdersModel } = require("../model/OrdersModel");


// ==========================================
// CREATE NEW ORDER
// ==========================================

const createOrder = async (req, res) => {
  try {
    const userId = req.user.userId;

    const {
      name,
      qty,
      price,
      mode,
    } = req.body;


    // ========================================
    // VALIDATION
    // ========================================

    if (!name || !qty || !price || !mode) {
      return res.status(400).json({
        success: false,
        message:
          "name, qty, price and mode are required",
      });
    }


    if (Number(qty) <= 0) {
      return res.status(400).json({
        success: false,
        message: "Quantity must be greater than 0",
      });
    }


    if (Number(price) <= 0) {
      return res.status(400).json({
        success: false,
        message: "Price must be greater than 0",
      });
    }


    const normalizedMode =
      String(mode).toUpperCase();


    if (
      normalizedMode !== "BUY" &&
      normalizedMode !== "SELL"
    ) {
      return res.status(400).json({
        success: false,
        message: "Mode must be either BUY or SELL",
      });
    }


    // ========================================
    // CREATE ORDER
    // ========================================

    const newOrder = new OrdersModel({
      userId: userId,

      name: String(name).trim().toUpperCase(),

      qty: Number(qty),

      price: Number(price),

      mode: normalizedMode,

      status: "COMPLETED",
    });


    const savedOrder = await newOrder.save();


    // ========================================
    // RESPONSE
    // ========================================

    res.status(201).json({
      success: true,

      message: "Order placed successfully",

      data: savedOrder,
    });


  } catch (error) {
    console.error(
      "Error creating order:",
      error
    );

    res.status(500).json({
      success: false,

      message: "Failed to create order",

      error: error.message,
    });
  }
};



// ==========================================
// GET ORDER HISTORY
// ==========================================

const getOrders = async (req, res) => {
  try {
    const userId = req.user.userId;


    const orders = await OrdersModel.find({
      userId: userId,
    })
      .sort({ createdAt: -1 });


    res.status(200).json({
      success: true,

      count: orders.length,

      data: orders,
    });


  } catch (error) {
    console.error(
      "Error fetching orders:",
      error
    );

    res.status(500).json({
      success: false,

      message: "Failed to fetch orders",

      error: error.message,
    });
  }
};



module.exports = {
  createOrder,
  getOrders,
};

