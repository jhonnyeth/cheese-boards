const sequelize = require("./index");

const User = require("./models/User");
const Board = require("./models/Board");
const Cheese = require("./models/Cheese");

User.hasMany(Board);
Board.belongsTo(User);

Board.belongsToMany(Cheese, { through: "cheese_boards" });
Cheese.belongsToMany(Board, { through: "cheese_boards" });

//DATA//
