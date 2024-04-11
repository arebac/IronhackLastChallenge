var express = require('express');
var router = express.Router();
var phoneRoutes = require('./phone.routes'); 

/* GET home page. */
router.get('/', function(req, res, next) {
  res.json("All good here!");
});


router.use("/phones",phoneRoutes);

module.exports = router;
