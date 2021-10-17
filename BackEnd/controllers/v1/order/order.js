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
module.exports = {
  addItem: addItem,
};
