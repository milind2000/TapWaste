const Vendor = require("../../../models/Vendor");
const bcrypt = require("bcryptjs");
const addVendor = async function (req, res) {
  const name = req.body.name;
  const email = req.body.email;
  const address = req.body.address;
  const phone = req.body.phone;
  const zone = req.body.zone;
  const password = req.body.password;

  console.log(name, email, phone);
  try {
    let vendor = await Vendor.findOne({
      phone: phone,
    });
    if (vendor) {
      return res.status(400).json({
        msg: "User Already Exists",
      });
    } else {
      vendor = new Vendor({
        name: name,
        email: email,
        address: address,
        phone: phone,
        zone: zone,
        password: password,
      });
      const salt = await bcrypt.genSalt(10);
      var hashpassword = await bcrypt.hash(password, salt);
      vendor.password = hashpassword;
      await vendor.save();
      res.status(200).send({
        message: "Created Successfully",
        userData: {
          vendor,
        },
      });
    }
  } catch (err) {
    console.log(err.message);
    res.status(500).send("Error in Saving");
  }
};

const login = async function (req, res) {
  const { phone, email, password } = req.body;
  console.log(phone, email, password);
  try {
    if (phone) {
      var user = await User.findOne({
        phone: phone,
      });
      if (!user) {
        return res.status(400).json({
          message: "User Does Not Exist",
        });
      }
      const isMatch = await bcrypt.compare(password, user.password);
      if (!isMatch) {
        return res.status(400).json({
          message: "Incorrect Password !",
        });
      }
      // await user.save();S
      res.status(200).json({
        message: "LoggedIn Successfully",
      });
    } else if (email) {
      var user = await Vendor.findOne({
        email: email,
      });
      if (!user) {
        return res.status(400).json({
          message: "User Does Not Exist",
        });
      }
      const isMatch = await bcrypt.compare(password, user.password);
      if (!isMatch) {
        return res.status(400).json({
          message: "Incorrect Password !",
        });
      }
      // await user.save();
      res.status(200).json({
        message: "LoggedIn Successfully",
      });
    } else {
      res.status(500).json({
        message: "Incorrect Input",
      });
    }
  } catch (e) {
    console.error(e);
    res.status(500).json({
      message: "Server Error",
    });
  }
};

module.exports = {
  addVendor: addVendor,
  login: login,
};
