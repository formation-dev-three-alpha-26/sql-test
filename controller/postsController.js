const Post = require("../models/postsModel");

const createPost = async (req, res) => {
  try {
  let newpost =  await Post.create(req.body);

    res.status(201).json(newpost)
  } catch (error) {
    res.status(500).send(error.message);
  }
};

const getPosts = async (req, res) => {
  try {
    let postsdata = await Post.findAll();

    res.status(200).json(postsdata);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

const updatePost = async (req, res) => {
  try {
    await Post.update(req.body, { where: { id: req.params.id } });
    res.status(201).send("post modifiée");
  } catch (error) {
    res.status(500).send(error.message);
  }
};

const deletePost = async (req, res) => {
  try {
    await Post.destroy({ where: { id: req.params.id } });
    res.status(201).send("post suprrimé");
  } catch (error) {
    res.status(500).send(error.message);
  }
};

const onePost = async (req, res) => {
  try {
    let onepost = await Post.findByPk(req.params.id);
    res.status(200).json(onepost);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

module.exports = { createPost, getPosts, updatePost, deletePost, onePost };
