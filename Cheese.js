const { Sequelize, sequelize } = require("./index");

const Cheese = sequelize.define("Cheese", {
  title: Sequelize.STRING,
  description: Sequelize.STRING,
});

module.exports = {
  Cheese,
};
