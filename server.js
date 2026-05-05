const express = require("express");
require("./config");
const server = express();
const postroute = require("./routes/postsRoute")
const userroute = require("./routes/userRoute")
server.use(express.json())


server.use("/api/posts" , postroute)
server.use("/api/users" , userroute)



server.listen(3000, () => {
  console.log("server is running");
});
