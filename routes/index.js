var express = require('express');
var router = express.Router();
var Pateint= require('../models/pateint')
var Shared= require('../models/shared')

/* GET home page. */
router.get('/', function(req, res, next) {

  Pateint.find(function(err , result){
    res.render('index',{Pateints: result}  );
 
});
});


router.get('/addPateint', function(req, res, next) {
  res.render('addPateint');
});

router.post('/addPation', function(req, res, next) {
  Pateint.create(req.body);
  res.redirect('/')
});

module.exports = router;
