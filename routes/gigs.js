const express = require("express");
const router = require("express-promise-router")();
const db = require("../config/database");
const Gig = require("../models/Gig");

router.get("/", (req, res) =>
  Gig.findAll()
    .then((gigs) =>
      res.render("gigs", {
        gigs,
      })
    )
    .catch((err) => res.render("error", { error: err }))
);

// display add gig form
router.route("/add").get((req, res) => {
  res.render("add");
});
let errors = [];
router.route("/add").post((req, res) => {
  let { title, description, budget, technologies, contact_email } = req.body;

  if (!title) {
    errors.push({ text: "Please add a title" });
  }
  if (!description) {
    errors.push({ text: "Please add a description" });
  }
  if (!technologies) {
    errors.push({ text: "Please add  technologies" });
  }
  if (!contact_email) {
    errors.push({ text: "Please add a contact email" });
  }
  if (errors.length > 0) {
    res.render("add", {
      errors,
      title,
      description,
      budget,
      technologies,
      contact_email,
    });
  } else {
    if (!budget) {
      budget = "Unknown";
    } else {
      budget = `$${budget}`;
    }

    // Make lowercase and remove space after comma
    technologies = technologies.toLowerCase().replace(/,[ ]+/g, ",");

    Gig.create({
      title,
      description,
      budget,
      technologies,
      contact_email,
    })
      .then((gig) => res.redirect("/gigs"))
      .catch((err) => res.render("error", { error: err.message }));
  }
});

module.exports = router;
