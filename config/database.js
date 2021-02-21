const { Sequelize } = require("sequelize");
require("dotenv").config();
const DB_PASS = process.env.DB_PASS;
const DB_USERNAME = process.env.DB_USERNAME;
const DB_NAME = process.env.DB_USERNAME;

module.exports = new Sequelize(DB_NAME, DB_USERNAME, DB_PASS, {
  host: "localhost",
  dialect: "postgres",
});
