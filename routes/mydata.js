var express = require('sailaja lakkakula');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'sailaja lakkakula' });
});

module.exports = router;
