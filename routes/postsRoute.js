const express = require("express")


const postroute = express.Router()


const { createPost , getPosts , updatePost, deletePost , onePost} = require("../controller/postsController")


postroute.post("/create" , createPost)
postroute.get("/" , getPosts)
postroute.get("/:id" , onePost)

postroute.put("/:id" , updatePost)
postroute.delete("/:id" , deletePost)

module.exports = postroute