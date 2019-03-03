let mongoose = require('mongoose');
let Schema = mongoose.Schema;

let projectSchema = new Schema({
     
     name: {
          type: String,
          required: true
     },
     stacks: {
          type:[String],
          required: true
     },
     description: {
          type: String,
          
     },
     duration: {
          type: String,
     },
     categories: {
          type: Array
     },
     vacancies: {
          type:[String],
          
     },
     author: {
          type: String          
     },
     contacts: {
         type:[String]           
     }
}, {
     versionKey: false
});

const  Project = mongoose.model('Project', projectSchema);

module.exports = Project;

