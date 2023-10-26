var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  var random= Math.random();
  expon= Math.exp(random);
  res.send(`Exponential applied to ${random} is : ${expon}`);
});

module.exports = router;


var expon;

