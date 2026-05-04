const express = require("express");
require("./config");
const server = express();

const User = require("./models/userModel");
const Post = require("./models/postsModel");

const Comment = require("./models/commentsModel");

server.listen(3000, () => {
  console.log("server is running");
});
