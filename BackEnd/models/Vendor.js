const mongoose = require("mongoose");
//const uniqueValidator = require("mongoose-unique-validator");

const Schema = mongoose.Schema;

const vendorSchema = new Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  address: { type: String, required: true },
  phone: {
    type: Number,
    required: true,
    unique: true,
    minlength: 10,
    maxlength: 10,
  },
  zone: { type: Number, required: true, min: 1, max: 50 },
  password: { type: String, required: true, minlength: 6 },
});

//userSchema.plugin(uniqueValidator);

module.exports = mongoose.model("Vendor", vendorSchema);
