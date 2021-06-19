var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var tagRouter = require('./routes/tags');
var commentRouter = require('./routes/comments');
var articleRouter = require('./routes/articles');


var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.set('views', './public');


var cons = require('consolidate');
// view engine setup
app.engine('html', cons.swig);
app.set('view engine', 'html');


//app.set('view engine', 'pug');
app.use( '/', indexRouter); // localhost:3000/
app.use( '/users', usersRouter);  // localhost:3000/users
app.use( '/tags', tagRouter); 
app.use( '/comments', commentRouter);  
app.use( '/articles', articleRouter); 
module.exports = app

