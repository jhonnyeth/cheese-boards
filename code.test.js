const { Sequelize, sequelize } = require("./index");
const { User, Board, Cheese } = require("./db");

// //DATA and TESTS//

describe("Models/tables", () => {
  beforeAll(async () => {
    await sequelize.sync({ force: true });
  });

  test("User data", async () => {
    let user = await User.create({
      name: "jhonny",

      email: "jhonny@example.com",
    });

    expect(user.name).toBe("jhonny");
  });

  test("Board data", async () => {
    let board = await Board.create({
      type: "Metal Board",

      description: "Best board in town, lasts longer than any other board!",

      rating: 10,
    });

    expect(board.type).toBe("Metal Board");
  });

  test("insert data into Cheese table", async () => {
    let provolone = await Cheese.create({
      title: "Provolone",

      description: "Americas New Favorite Cheese",
    });

    expect(provolone.title).toBe("Provolone");
  });

  const testUserBoardAssociation = async () => {
    expect(Board.belongsTo(User));
    expect(User.hasMany(Board));
  };

  const testBoardCheeseAssociation = async () => {
    expect(Board.belongsToMany(Cheese, { through: "cheese_boards" }));
    expect(Cheese.belongsToMany(Board, { through: "cheese_boards" }));
  };

  test(
    "one-to-many association between User and Board models",
    testUserBoardAssociation
  );

  test("Board and Cheese models association", testBoardCheeseAssociation);
});
