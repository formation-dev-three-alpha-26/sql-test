const { sequelize } = require("../config");
const { DataTypes } = require("sequelize");
const User = require("./userModel");
const Post = require("./postsModel");

const Comment = sequelize.define("comment", {

  content: {
    type: DataTypes.STRING,
    allowNull: false,
  },
},
{
  timestamps : false
});

User.hasMany(Comment, { foreignKey: "userid" });
Comment.belongsTo(User, { foreignKey: "userid" });

// kol user aandou barcha comment donc chaque comment bech ykoun fih lid mtaa luser

Post.hasMany(Comment, { foreignKey: "postid" });
Comment.belongsTo(Post, { foreignKey: "postid" });

// kol post aandha barcha comments donc chaque comment bech ykoun fih id mtaa post

module.exports = Comment;
