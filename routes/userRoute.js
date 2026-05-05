const express = require("express")


const userroute = express.Router()


const { createAccount  , loginAccount} = require("../controller/userController")


userroute.post("/create" , createAccount)
userroute.post("/login" , loginAccount)


module.exports = userroute