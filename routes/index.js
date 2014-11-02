var express = require('express');
var router = express.Router();
var trapFuncs = require('../trapFuncs.js');
/* GET home page. */
router.get('/', function(req, res) {
  res.render('index', {
    title: 'Hello',
    word: 'Hello',
    content: trapFuncs.generate('Hello')
  });
});
router.get('/about',function(req,res){
  res.render('index',{
    title: "About This Project",
    word: "About This Project",
    content: "About This Project"
  })
});
router.get('/:word',function(req,res){
  res.render('index',{
    title: req.params.word,
    word: req.params.word,
    content: trapFuncs.generate(req.params.word)
  })
});

module.exports = router;
