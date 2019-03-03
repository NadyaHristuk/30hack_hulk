let mongoose = require('mongoose');
let Schema = mongoose.Schema;
const moment = require("moment");

let Project = new Schema({
     name: {
          type: String,
          required: true
     },
     stacks: {
          type: Array,
          required: true
     },
     description: {
          type: String,
          required: true
     },
     duration: {
          type: String,
     },
     categories: {
          type: Array,
          required: true
     },
     vacancies: {
          type: Array,
          required: true
     },
     author: {
          type: String          
     },
     contacts: {
          type: Array          
     }
}, {
     versionKey: false
});

module.exports = Project;