const express = require('express');
const mongoose = require('mongoose');
const moment = require("moment");
const router = express.Router();
const Projects = require('../models/projects');
const jwt = require('jsonwebtoken');

router.get('/', (req, res, next) => {
    Projects.find(               
            res.status(200).json({
                Message: 'projects',
                projects: projects                
            })
        )
        .catch(error => {
            res.status(500).json(error)
        })
});

module.exports = router;