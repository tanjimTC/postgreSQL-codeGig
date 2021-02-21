const express = require("express");
const expressHandleBars = require("express-handlebars");
const { Sequelize } = require("sequelize");

const db = new Sequelize("gigs", "postgres", "tanjim723526", {
  host: "localhost",
  dialect: "postgres",
});

const app = express();

const port = process.env.PORT || 3200;

app.get("/", (req, res) => {
  res.send("postgre");
});

app.listen(port, console.log(`server listenong on port ${port}`));
