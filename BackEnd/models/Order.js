const mongoose = require("mongoose");
//const uniqueValidator = require("mongoose-unique-validator");

const Schema = mongoose.Schema;

const orderSchema = new Schema({
  news: { type: Number, required: true },
  card: { type: Number, required: true },
  books: { type: Number, required: true },
  plastic: { type: Number, required: true },
  aluminium: { type: Number, required: true },
  ac: { type: Number, required: true },
  fridge: { type: Number, required: true },
  washing: { type: Number, required: true },
  battery: { type: Number, required: true },
  ewaste: { type: Number, required: true },
  cpu: { type: Number, required: true },
  lcd: { type: Number, required: true },
  amount: { type: Number, required: true },
  acquired: { type: Boolean, required: true },
  owner: { type: mongoose.Types.ObjectId, required: true, ref: "User" },
});

//userSchema.plugin(uniqueValidator);

module.exports = mongoose.model("Order", orderSchema);
