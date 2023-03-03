const sequelize = require("./index");
const Sequelize = require("./index");

const Board = sequelize.define("Board", {
  name: Sequelize.STRING,
  email: Sequelize.STRING,
});

module.exports = {
  User,
};
