require('dotenv').config();
var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const methodOverride = require('method-override')

var indexRouter = require('./routes/index');
const userController = require('./routes/userController')
const commentController = require('./routes/commentController')
const finGoalsController = require('./routes/finGoalsController')
const budgetController = require('./routes/budgetController')

var app = express();

//connect db
const mongoose = require('mongoose');
mongoose.connect(process.env.MONGODB_URI); 

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

app.use(methodOverride('_method'))
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', userController);
app.use('/users/:userId/budget', budgetController);
app.use('/users/:userId/finGoals', finGoalsController);
app.use('/users/:userId/finGoals/:finGoalsId/comment', commentController);



// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
