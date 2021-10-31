const express = require("express");
const User = require("../controllers/v1/user/user.js");
const Order = require("../controllers/v1/order/order.js");
const Vendor = require("../controllers/v1/vendor/vendor.js");
const app = express();

app.post("/signup", User.register);
app.post("/login", User.login);
app.get("/orders", Order.showOrders);
app.post("/addOrder", Order.addItem);
app.patch("/updateOrders", Order.updateOrders);
app.post("/vendor/signup", Vendor.addVendor);
app.post("/vendor/login", Vendor.login);
app.get("/checkVendor", Vendor.check);
module.exports = app;
