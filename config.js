require("dotenv").config();

const { Sequelize } = require("sequelize");

const sequelize = new Sequelize(
  process.env.DB_NAME,
  process.env.DB_USER,
  process.env.DB_PASSWORD,
  {
    host: "localhost",
    dialect: "mysql",
  },
);

// sequelize
//   .sync({ force: true })


sequelize
  .authenticate()
  .then(() => console.log("db is connected"))
  .catch((error) => console.log(error));

module.exports = { sequelize };
