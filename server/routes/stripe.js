const express = require("express");
const router = express.Router();
require("dotenv").config();
const Stripe = require("stripe");
const stripe = Stripe(process.env.STRIPE_KEY);
const buyerController = require("../controller/buyerController");

router.post("/create-checkout-session", async (req, res) => {
  let total = 0;
  const totalShipping = req.body.cartItems.map((item) => {
    return parseFloat(item?.shippingPrice);
  });

  for (i = 0; i < totalShipping.length; i++) {
    total = total + totalShipping[i];
  }

  console.log("total shopping is", totalShipping);

  const cart = req.body.cartItems.map((item) => {
    return {
      productID: item.productID,
      sellerID: item.sellerID,
      quantity: item.qt ? item.qt : 1,
      price: item.price,
    };
  });

  const customer = await stripe.customers.create({
    metadata: {
      buyerID: req.body.buyerID,
      cart: JSON.stringify(cart),
    },
  });
  const line_items = req.body.cartItems.map((item) => {
    return {
      price_data: {
        currency: "usd",
        product_data: {
          name: item.title,
          description: item.description,
          metadata: {
            id: item.productID,
            sellerID: item.sellerID,
          },
        },
        unit_amount: item.price * 100,
      },
      quantity: item.qt ? item.qt : 1,
    };
  });

  console.log(line_items);

  const session = await stripe.checkout.sessions.create({
    payment_method_types: ["card"],

    shipping_options: [
      {
        shipping_rate_data: {
          type: "fixed_amount",
          fixed_amount: {
            amount: total * 100,
            currency: "usd",
          },
          display_name: "Total Amount",
          // Delivers between 5-7 business days
        },
      },
    ],
    line_items,
    customer: customer.id,
    mode: "payment",
    success_url: `${process.env.CLIENT_URL}/buyers/checkout-success`,
    cancel_url: `${process.env.CLIENT_URL}/cart`,
  });

  res.json({ url: session.url, cart: req.body.cart, auth: req.body.auth });
});
