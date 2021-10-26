const Item = require("../../../models/Order.js");
const jwt = require("jsonwebtoken");
const User = require("../../../models/User.js");

const addItem = async function (req, res) {
  // var accessToken = req.get("Authorization");
  // if (!accessToken) {
  //   res.status(401).json({
  //     status: "not authenticated",
  //   });
  // }
  // const token = accessToken.split(" ")[1];
  // let decodedToken;
  // console.log(token);
  // try {
  //   decodedToken = jwt.verify(token, "accessTokenSecret");
  // } catch (error) {
  //   error.statusCode = 500;
  //   throw error;
  // }
  // if (!decodedToken) {
  //   res.status();
  // }
  // const userId = decodedToken.;

  var userId;
  if (req.headers && req.headers.authorization) {
    var authorization = req.headers.authorization.split(" ")[1],
      decoded;
    try {
      decoded = jwt.verify(authorization, accessTokenSecret);
    } catch (e) {
      return res.status(401).send("unauthorized");
    }
    userId = decoded.id;
  }

  const amount = req.body.amount;
  const acquired = req.body.acquired;

  let owner;
  owner = await User.findById(userId);
  console.log(owner);

  const item = new Item({
    amount: amount,
    acquired: acquired,
    owner: owner,
  });
  await item.save();
  res.status(200).send({
    message: "Created Successfully",
    itemData: {
      item,
    },
  });
};

const showOrders = async function (_, res) {
  await Item.findOne({
    acquired: false,
  })
    .then((result) => {
      res.status(200).json({
        order: result,
      });
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({ error: err });
    });
};

module.exports = {
  addItem: addItem,
  showOrders: showOrders,
};
