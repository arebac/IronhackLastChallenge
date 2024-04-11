var express = require('express');
var router = express.Router();
const phonesJson = require("../data/phones.json");

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.json(phonesJson);
});

module.exports = router;
