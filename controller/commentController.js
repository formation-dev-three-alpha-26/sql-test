const Comment = require("../models/commentsModel");
const User = require("../models/userModel");

const createComment = async (req, res) => {
  try {
    await Comment.create(req.body);

    res.status(201).send("comment created");
  } catch (error) {
    res.status(500).send(error.message);
  }
};

const getComments = async (req, res) => {
  try {
    const commentdata = await Comment.findAll({
      include: [User],
    });

    res.status(200).json(commentdata);
  } catch (error) {
    res.status(500).send(error.message);
  }
};



const updateComment = async (req, res) => {
  try {
    await Comment.update(req.body, { where: { id: req.params.idcomment } });
    res.status(200).send("comment modifiée");
  } catch (error) {
    res.status(500).send(error.message);
  }
};


const deleteComment = async (req, res) => {
  try {
    await Comment.destroy({ where: { id: req.params.idcomment } });
    res.status(201).send("comment suprrimé");
  } catch (error) {
    res.status(500).send(error.message);
  }
};



const getCommentsByPost = async (req, res) => {
  try {
    const commentdata = await Comment.findAll({
    
      where : { postid : req.params.postid } , 
      include: [User],
    });

    res.status(200).json(commentdata);
  } catch (error) {
    res.status(500).send(error.message);
  }
};



module.exports = { createComment, getComments , updateComment , deleteComment , getCommentsByPost};
