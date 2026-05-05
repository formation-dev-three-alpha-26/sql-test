const { where } = require("sequelize");
const User = require("../models/userModel");

const createAccount = async (req, res) => {
  try {
    const verifuser = await User.findOne({ where: { email: req.body.email } });
    if (verifuser) {
      return res.status(400).send("email already taken");
    }

    const newuser = await User.create(req.body);
    res.status(201).send("user created");
  } catch (error) {
    res.status(500).send(error.message);
  }
};

const loginAccount = async (req, res) => {
  try {
    const verifuser = await User.findOne({ where: { email: req.body.email } });

    if (!verifuser) {
      return res.status(404).send("account doesnt exist");
    }

    if (verifuser.password === req.body.password) {
      return res.status(201).send("welcome to ur account");
    } else {
      return res.status(404).send("password uncorrect");
    }
  } catch (error) {
    res.status(500).send(error.message);
  }
};

module.exports = { createAccount, loginAccount };
