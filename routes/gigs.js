const express = require("express");
const router = require("express-promise-router")();
const db = require("../config/database");
const Gig = require("../models/Gig");

router.route("/").get((req, res) => {
  Gig.findAll()
    .then((gig) => {
      console.log(gig);
      res.sendStatus(200);
    })
    .catch((err) => console.log(err));
});

module.exports = router;
