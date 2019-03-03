const express = require('express');
const app = express('body-parser');
const path = require('path');
const bodyParser = require('express');
const loginRouter = require('./api/routes/login');
const signUpRouter = require('./api/routes/signup');
const projectsRouter = require('./api/routes/projects');
const checkAuth = require('./api/middlewares/auth');

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({extended: false}))
// parse application/json
app.use(bodyParser.json())
app.use((req, res, next) => {

    res.header('Access-Control-Allow-Origin', '*') //разрешает доступ с любых клиентов к нашему серверу,'*'---все клиенты,
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization') //указываем какие хэдеры разрешенно поддержать -"стандартные headers node.js"

    if (req.method === 'OPTIONS') {
        res.header('Access-Control-Allow-Methods', 'POST, GET, DELETE, PATCH, PUT');
        return res.status(200).json({
            Message: 'It\'s okey',
        })
    }

    next();
});

app.use(express.static(path.join(__dirname,'client/build')));

app.use('/login', loginRouter);
app.use('/signup', signUpRouter);
app.use('/projects', checkAuth, projectsRouter);


app.get('/', function (req, res, next) {
    res.sendFile(path.join(__dirname,'client/build/index.html'));
});

module.exports = app;
