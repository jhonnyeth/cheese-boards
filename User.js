const { Sequelize, sequelize } = require("./index");

const User = sequelize.define("User", {
  name: Sequelize.STRING,
  email: Sequelize.STRING,
});

module.exports = {
  User,
};
