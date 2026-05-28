const express = require("express");
const Cart = require("../models/Cart");
const authMiddleware = require("../middleware/authMiddleware");

const router = express.Router();

router.post("/", authMiddleware, async (req, res) => {
  try {
    const cart = await Cart.create({
      user: req.user.id,
      product: req.body.product,
      quantity: req.body.quantity
    });

    res.status(201).json(cart);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

router.get("/", authMiddleware, async (req, res) => {
  try {
    const cartItems = await Cart.find({ user: req.user.id })
      .populate("product");

    res.json(cartItems);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

router.delete("/:productId", authMiddleware, async (req, res) => {
  try {
    await Cart.findOneAndDelete({
      user: req.user.id,
      product: req.params.productId
    });

    res.json({ message: "Item removed from cart" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;