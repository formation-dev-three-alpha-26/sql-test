const express = require("express");
require("./config");
const server = express();
const cors = require("cors")
const postroute = require("./routes/postsRoute")
const userroute = require("./routes/userRoute")
const commentroute = require("./routes/commentRoute")
// const autorize = require("./middleware/Authorizemiddleware")
server.use(express.json())
server.use(cors())


server.use("/api/posts"  , postroute)
server.use("/api/users" , userroute)
server.use("/api/comment" , commentroute)


server.listen(3000, () => {
  console.log("server is running");
});
