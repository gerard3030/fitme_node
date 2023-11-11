var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
let cors = require("cors")

const api = require("./routes/api")

var app = express();

const debug = require("debug")

// const db = require("./model/connectToDB")

const user = require("./model/user.model")
const exercise = require("./model/exercise.model")
const training = require("./model/trainingProfile.model")

app.use(cors())
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));


app.use('/api', api);


module.exports = app;
