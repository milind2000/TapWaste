const Item = require("../../../models/Order.js");
const addItem = async function (req, res) {
  const amount = req.body.amount;
  const acquired = req.body.acquired;
  const owner = req.body.owner;
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
  Item.find()
    .then((result) => {
      res.status(200).json({
        productData: result,
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
