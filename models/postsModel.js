const { sequelize } = require("../config");
const { DataTypes } = require("sequelize");

const User = require("./userModel")

const Post = sequelize.define("post", {
  title : {
    type: DataTypes.STRING,
    allowNull: false,
  },
  content: {
    type: DataTypes.STRING,

    allowNull: true,
  },
  
}, 
{
  timestamps : false
}
);

User.hasMany(Post ,  { foreignKey : "userid" } )
Post.belongsTo(User ,  { foreignKey : "userid" })




module.exports = Post
