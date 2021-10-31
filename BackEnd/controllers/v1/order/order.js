const Item = require("../../../models/Order.js");
const jwt = require("jsonwebtoken");
const User = require("../../../models/User.js");

const addItem = async function (req, res) {
  var userId;
  if (req.headers && req.headers.authorization) {
    var authorization = req.headers.authorization.split(" ")[1],
      decoded;
    //console.log(authorization);
    try {
      decoded = jwt.verify(authorization, "accessTokenSecret");
    } catch (e) {
      return res.status(401).send("unauthorized");
    }
    userId = decoded.userId;
  } else {
    return res.status(401).send("unauthorized");
  }
  const amount = req.body.amount;
  const acquired = req.body.acquired;

  let owner;
  owner = await User.findById(userId);
  //console.log(owner);

  const item = new Item({
    amount: amount,
    acquired: acquired,
    owner: owner,
  });
  item
    .save()
    .then(() => {
      res.status(200).send({
        message: "Created Successfully",
        itemData: {
          item,
        },
      });
    })
    .catch((err) => {
      res.status(400).send(err);
    });
};

const showOrders = async function (_, res) {
  Item.find({
    acquired: false,
  })
    .populate("owner")
    .then((result) => {
      res.status(200).json({
        order: result,
      });
    })
    .catch((err) => {
      console.log(err);
      res.status(401).json({ error: err });
    });
};

const updateOrders = async function (req, res) {
  const value = req.body.acquired;
  console.log(req.body.id);
  Item.findByIdAndUpdate(
    req.body.id,
    {
      acquired: !value,
    },
    function (err, docs) {
      if (err) {
        // console.log(err);
        res.status(401);
      } else {
        //console.log("updated!!!back");
        res.status(202).send({
          message: "Updated Order successfully",
        });
      }
    }
  );
};

module.exports = {
  addItem: addItem,
  showOrders: showOrders,
  updateOrders: updateOrders,
};
