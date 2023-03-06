const { Sequelize, sequelize } = require("./index");

const Board = sequelize.define("Board", {
  type: Sequelize.STRING,
  description: Sequelize.STRING,
  rating: Sequelize.NUMBER,
});

module.exports = {
  Board,
};
