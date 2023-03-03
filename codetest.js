const sequelize = require("./index") 

const User = require("./models/User")
const Board = require("./models/Board")
const Cheese = require("./models/Cheese")

describe('Models/tables', () => {
   beforeAll(async () => {
       await sequelize.sync({ force: true });
   });

   User.hasMany(Board)
   Board.belongsTo(User)
   Board.belongsToMany(Cheese, {through: "cheese_boards"})
   Cheese.belongsToMany(Board, {through: "cheese_boards"})


