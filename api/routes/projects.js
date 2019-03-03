const express = require("express");
const mongoose = require("mongoose");
const moment = require("moment");
const router = express.Router();
const Projects = require("../models/project");
const jwt = require("jsonwebtoken");

router.post("/", (req, res, next) => {
  const Project = new Projects({    
    name: req.body.name,
    stacks: req.body.stacks,
    description: req.body.description,
    duration: req.body.duration,
    categories: req.body.categories,
    vacancies: req.body.vacancies,
    author: req.body.author,
    contacts: req.body.contacts
  });
  Project.save()
    .then(doc => {
      res.status(201).json({
        message: "Project was created",
        project: doc
      });
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({
        error: err
      });
    });
});

router.get("/", (req, res, next) => {
  Projects.find()
  .then(projects => {
    res.status(200).json({
      Message: "projects",
      projects: projects
    })
}).catch(error => {
    res.status(500).json(error);
  });
});

module.exports = router;
