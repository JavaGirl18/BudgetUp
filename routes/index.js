var express = require('express');
var router = express.Router();
const mongoose = require ('mongoose')
// mongoose.connect('mongodb://localhost/user')


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'an easier way to UP your finances!' });
});

module.exports = router;
