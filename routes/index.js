var express = require('express');
var router = express.Router();
var fs = require('fs');
var path = require('path');
var filePath = path.resolve(path.dirname(__dirname), 'data/formatted_lists.json');

var data = {
  getBoards: function () {
    var boards = JSON.parse(fs.readFileSync(filePath, 'utf8')).boards;
    console.log();
    return boards;
  },

  getLastID: function () {
    return JSON.parse(fs.readFileSync(filePath, 'utf8')).lastID;
  },
};

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', {
    boards: data.getBoards(),
  });
});

router.post('/', function (req, res, next) {
  res.json(req.body);
});

router.get('/lists/:listID/cards/:id', function (req, res) {
  res.render('index');
});

module.exports = router;
