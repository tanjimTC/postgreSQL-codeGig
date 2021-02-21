const express = require("express");
const expressHandleBars = require("express-handlebars");
const bodyparser = require("body-parser");
const { Sequelize } = require("sequelize");
const path = require("path");

// DB
const db = require("./config/database");

// Test DB
db.authenticate()
  .then(() => {
    console.log("database connected!");
  })
  .catch((err) => console.log(err));

const app = express();

// handlebars middleware
app.engine("handlebars", expressHandleBars({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// body parser
app.use(bodyparser.urlencoded({ extended: false }));

// static folder
app.use(express.static(path.join(__dirname, "public")));

const port = process.env.PORT || 3200;

const gigRoutes = require("./routes/gigs");

app.get("/", (req, res) => {
  res.render("index", { layout: "landing" });
});

app.use("/gigs", gigRoutes);

app.listen(
  port,
  console.log(`server listenong on port http://localhost:${port}`)
);
