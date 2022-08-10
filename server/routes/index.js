var express = require('express');
var router = express.Router();
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.use('/api/memo', require('./memo'));
router.use('/api/project', require('./project'));
module.exports = router;
