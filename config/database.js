const { Sequelize } = require("sequelize");

module.exports = new Sequelize("codegig", "postgres", "tanjim723526", {
  host: "localhost",
  dialect: "postgres",
});
