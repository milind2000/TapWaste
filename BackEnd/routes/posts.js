const express = require("express");
const User = require("../controllers/v1/user/user.js");
const Order = require("../controllers/v1/order/order.js");
const Vendor = require("../controllers/v1/vendor/vendor.js");
const app = express();

app.post("/signup", User.register);
app.post("/login", User.login);
app.get("/orders", Order.showOrders);
app.post("/addOrder", Order.addItem);
app.post("/vendorsignup", Vendor.addVendor);

module.exports = app;
