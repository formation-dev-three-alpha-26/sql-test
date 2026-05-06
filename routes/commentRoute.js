const express = require("express")


const commentroute = express.Router()
const {createComment , getComments , updateComment  , deleteComment , getCommentsByPost} = require("../controller/commentController")

commentroute.post("/create" , createComment)
commentroute.get("/" , getComments)
commentroute.get("/:postid" , getCommentsByPost)

commentroute.put("/:idcomment" , updateComment)
commentroute.delete("/:idcomment" , deleteComment)

module.exports = commentroute