const express = require("express");
const cors = require("cors");

const Razorpay = require("razorpay");

// This razorpayInstance will be used to
// access any resource from razorpay
const razorpayInstance = new Razorpay({
  // Replace with your key_id
  key_id: "rzp_test_ExsR0PlNri5lIM",

  // Replace with your key_secret
  key_secret: "FKFlEBz6NZyieC8OGyqEYGbQ",
});

const app = express();
app.use(cors());
app.use(express.json());
const PORT = process.env.PORT || "5000";

// Here we will create two routes one
// /createOrder and other /verifyOrder
// Replace these comments with the code
// provided later in step 2 & 8 for routes

app.post("/createOrder", (req, res) => {
  console.log("req:", req.body);
  //   // STEP 1:
  const {amount, currency, receipt} = req.body;

  // STEP 2:
  razorpayInstance.orders.create({amount, currency, receipt}, (err, order) => {
    //STEP 3 & 4:
    if (!err) res.json(order);
    else res.send(err);
  });
});

app.listen(PORT, () => {
  console.log("Server is Listening on Port ", PORT);
});
