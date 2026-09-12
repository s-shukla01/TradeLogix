const { FundsModel } = require("../model/FundsModel");


// GET FUNDS

const getFunds = async (req, res) => {
  try {
    let funds = await FundsModel.findOne({
      userId: req.user.userId,
    });

    if (!funds) {
      funds = await FundsModel.create({
        userId: req.user.userId,
        availableCash: 100000,
        usedMargin: 0,
      });
    }

    res.status(200).json({
      success: true,
      data: funds,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Failed to fetch funds",
      error: error.message,
    });
  }
};


// ADD FUNDS

const addFunds = async (req, res) => {
  try {
    const { amount } = req.body;

    if (!amount || amount <= 0) {
      return res.status(400).json({
        success: false,
        message: "Valid amount is required",
      });
    }

    let funds = await FundsModel.findOne({
      userId: req.user.userId,
    });

    if (!funds) {
      funds = await FundsModel.create({
        userId: req.user.userId,
        availableCash: 0,
      });
    }

    funds.availableCash += Number(amount);

    await funds.save();

    res.status(200).json({
      success: true,
      message: "Funds added successfully",
      data: funds,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Failed to add funds",
      error: error.message,
    });
  }
};


// WITHDRAW FUNDS

const withdrawFunds = async (req, res) => {
  try {
    const { amount } = req.body;

    if (!amount || amount <= 0) {
      return res.status(400).json({
        success: false,
        message: "Valid amount is required",
      });
    }

    const funds = await FundsModel.findOne({
      userId: req.user.userId,
    });

    if (!funds || funds.availableCash < amount) {
      return res.status(400).json({
        success: false,
        message: "Insufficient funds",
      });
    }

    funds.availableCash -= Number(amount);

    await funds.save();

    res.status(200).json({
      success: true,
      message: "Funds withdrawn successfully",
      data: funds,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Failed to withdraw funds",
      error: error.message,
    });
  }
};


module.exports = {
  getFunds,
  addFunds,
  withdrawFunds,
};