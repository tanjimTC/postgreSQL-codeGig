const express = require("express");
const expressHandleBars = require("express-handlebars");
const { Sequelize } = require("sequelize");

// DB
const db = require("./config/database");

// Test DB
db.authenticate()
  .then(() => {
    console.log("database connected!");
  })
  .catch((err) => console.log(err));

const app = express();

const port = process.env.PORT || 3200;

const gigRoutes = require("./routes/gigs");

app.get("/", (req, res) => {
  res.send("postgre");
});

app.use("/gigs", gigRoutes);

app.listen(port, console.log(`server listenong on port ${port}`));
