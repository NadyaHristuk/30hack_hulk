const http = require('http');
const app = require('./app');
const {PORT, dbURL} = require('./config/index');
const mongoose = require('mongoose');
const db = require('./config/index');
mongoose.Promise = global.Promise;
mongoose.set('useNewUrlParser', true);
mongoose.set('useFindAndModify', false);
mongoose.set('useCreateIndex', true);
mongoose.connect(dbURL);


http.createServer(app).listen(PORT, console.log("Server started successfully at port " + PORT));