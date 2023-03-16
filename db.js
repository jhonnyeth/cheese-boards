// consider putting this file, and the files for the models, in a separate models folder
// for further file structure cleanliness
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

// curious to know what you meant by creating and exporting another file
//kept getting User.hasMany is not a funciton error
//solution was to create another file and exporting it to code.test.js
