const path = require("path");
const Sequelize = require("sequelize");

const sequelize = new Sequelize({
  dialect: "sqlite",
  storage: "database.sqlite",
});

module.exports = {
  sequelize,
  Sequelize,
};

// to prevent confusion, export as sequelize and Sequelize
