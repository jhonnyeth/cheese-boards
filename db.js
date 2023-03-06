const { User } = require("./User");
const { Board } = require("./Board");
const { Cheese } = require("./Cheese");

User.hasMany(Board);
Board.belongsTo(User);

Board.belongsToMany(Cheese, { through: "cheese_boards" });
Cheese.belongsToMany(Board, { through: "cheese_boards" });

module.exports = {
  User,
  Board,
  Cheese,
};

//kept getting User.hasMany is not a funciton error
//solution was to create another file and exporting it to code.test.js
