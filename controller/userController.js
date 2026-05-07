const { where } = require("sequelize");
const User = require("../models/userModel");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
require("dotenv").config();

// ("token :  carte d'indintité  ");
const createAccount = async (req, res) => {
  try {
    const verifuser = await User.findOne({ where: { email: req.body.email } });
    if (verifuser) {
      return res.status(400).send("email already taken");
    }

    const password = await bcrypt.hash(req.body.password, 10);

    const newuser = await User.create({
      email: req.body.email,
      password: password,
    });

    // token elle contient 3 parties :
    //  header : infos aala token algorithm
    // payload : infos aala luser
    // signature numérique : génèrer par le clé secrete pour la sécurité de token

    const token = jwt.sign(
      { id: newuser.id, email: newuser.email },

      process.env.JWT_SECRET,
    );

    res.status(201).json({
      email: newuser.email,
      token: token,
    });
  } catch (error) {
    res.status(500).send(error.message);
  }
};

// json web token

const loginAccount = async (req, res) => {
  try {
    const verifuser = await User.findOne({ where: { email: req.body.email } });

    if (!verifuser) {
      return res.status(404).send("account doesnt exist");
    }

    let passwordCorrect = await bcrypt.compare(
      req.body.password,
      verifuser.password,
    );


   if (!passwordCorrect) {
       return res.status(404).send("password uncorrect");
   
    } 

  const token = jwt.sign(
      { id: verifuser.id, email: verifuser.email },

      process.env.JWT_SECRET,
    );


        res.status(201).json({
      email: verifuser.email,
      token: token,
    });
     
    
  } catch (error) {
    res.status(500).send(error.message);
  }
};

module.exports = { createAccount, loginAccount };
