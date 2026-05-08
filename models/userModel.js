const { sequelize } = require("../config");
const { DataTypes } = require("sequelize");

const User = sequelize.define("User", {
  email: {
    type: DataTypes.STRING,
    allowNull: false,
  },
   username: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  password: {
    type: DataTypes.STRING,

    allowNull: false,
  },
} , 
{
  timestamps : false
  //  khtr sequelize ycreati deux colonnes mtaa creatd at w updated at w tnjm tfasakhom bha
}
);



module.exports = User
