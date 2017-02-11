var express = require('express');
var router = express.Router();
var _ = require('underscore');
var fs = require('fs');
var path = require('path');
var usersPath = path.resolve(path.dirname(__dirname), 'data/users.json');
var boardsPath = path.resolve(path.dirname(__dirname), 'data/boards.json');
var listsPath = path.resolve(path.dirname(__dirname), 'data/lists.json');
var cardsPath = path.resolve(path.dirname(__dirname), 'data/cards.json');

var Lists = {
  getLastID: function () {
    var id = JSON.parse(fs.readFileSync(listsPath, 'utf8')).lastID;
    return id;
  },

  get: function (id) {
    var lists = JSON.parse(fs.readFileSync(listsPath, 'utf8')).data;
    if (id) lists = _(lists).findWhere({ id: +id });
    return lists;
  },

  set: function (list) {
    var lists = this.get();
    list.id = this.getLastID() + 1;
    lists.push(list);
    this.write({ lastID: list.id, data: lists });
  },

  getListsForBoard: function (boardID) {
    var lists = this.get();
    return _(lists).where({ board_id: +boardID });
  },

  write: function (list) {
    fs.writeFileSync(listsPath, JSON.stringify(list), 'utf8');
  },
};

router.get('/lists', function (req, res) {
  res.send(Lists.get());
});

router.get('/boards/:boardID/lists', function (req, res) {
  var boardID = req.params.boardID;
  res.send(Lists.getListsForBoard(boardID));
});

router.get('/lists/:listID', function (req, res) {
  var id = req.params.listID;
  res.send(Lists.get(id));
});

router.post('/boards/:boardID/lists', function (req, res) {
  Lists.set(req.body);
  res.json(req.body);
});

router.put('/boards/:boardID/lists/:id', function (req, res) {
  var lists = Lists.get();
  var list = _(_(lists).findWhere({ id: +req.params.id })).extend(req.body);
  Lists.write({
    lastID: Lists.getLastID(),
    data: lists,
  });
  res.json(list);
});

router.delete('/lists/:id', function (req, res) {
  var lists = _(Lists.get()).reject(function (list) {
    return +req.params.id === +list.id;
  });

  Lists.write({ lastID: Lists.getLastID(), data: lists });
  res.status(200).end();
});

var Cards = {
  getLastID: function () {
    var id = JSON.parse(fs.readFileSync(cardsPath, 'utf8')).lastID;
    return id;
  },

  get: function (id) {
    var cards = JSON.parse(fs.readFileSync(cardsPath, 'utf8')).data;
    if (id) cards = _(cards).findWhere({ id: +id });
    return cards;
  },

  set: function (card) {
    var cards = this.get();
    card.id = this.getLastID() + 1;
    cards.push(card);
    this.write({ lastID: card.id, data: cards });
  },

  getCardsForList: function (listID) {
    var cards = this.get();
    return _(cards).where({ list_id: +listID });
  },

  write: function (cards) {
    fs.writeFileSync(cardsPath, JSON.stringify(cards), 'utf8');
  },
};

router.get('/cards', function (req, res) {
  res.send(Cards.get());
});

router.get('/cards/:card_id', function (req, res) {
  var id = req.params.card_id;
  res.send(Cards.get(id));
});

router.get('/lists/:listID/cards', function (req, res) {
  var listID = req.params.listID;
  res.send(Cards.getCardsForList(listID));
});

router.post('/lists/:listID/cards', function (req, res) {
  var card = req.body;
  card.list_id = +req.params.listID;
  Cards.set(card);
  res.json(card);
});

router.put('/lists/:listID/cards/:id', function (req, res) {
  var cards = Cards.get();
  var card = _(_(cards).findWhere({ id: +req.params.id })).extend(req.body);
  Cards.write({
    lastID: Cards.getLastID(),
    data: cards,
  });
  res.json(card);
});

router.delete('/lists/:listID/cards/:id', function (req, res) {
  var cards = _(Cards.get()).reject(function (card) {
    return +req.params.id === +card.id;
  });

  Cards.write({ lastID: Cards.getLastID(), data: cards });
  res.status(200).end();
});

var data = {
  getBoards: function (id) {
    var boards = JSON.parse(fs.readFileSync(boardsPath, 'utf8'));
    if (id) boards = _(boards).findWhere({ id: +id });
    return boards;
  },

  getUsers: function (id) {
    var users = JSON.parse(fs.readFileSync(usersPath, 'utf8'));
    if (id) users = _(users).findWhere({ id: +id });
    return users;
  },

  getCardsForList: function (list_id) {
    var cards = JSON.parse(fs.readFileSync(cardsPath, 'utf8'));
    return _(cards).where({ list_id: +list_id });
  },

  getBoardsForUser: function (user_id) {
    var boards = JSON.parse(fs.readFileSync(boardsPath, 'utf8'));
    return _(boards).where({ user_id: +user_id });
  },

  write: function (filePath, data) {
    fs.writeFileSync(filePath, JSON.stringify(data), 'utf8');
  },
};

/* GET home page. */
router.get('/', function (req, res) {
  res.render('index');
});

router.get('/users', function (req, res) {
  res.send(data.getUsers());
});

router.get('/users/:user_id', function (req, res) {
  var id = req.params.user_id;
  res.send(data.getUsers(id));
});

router.get('/users/:user_id/boards', function (req, res) {
  var id = req.params.user_id;
  res.send(data.getBoardsForUser(id));
});

router.get('/boards', function (req, res) {
  res.send(data.getBoards());
});

router.put('/boards/:id', function (req, res) {
  var boards = data.getBoards();
  var board = _(_(boards).findWhere({ id: +req.params.id })).extend(req.body);
  data.write(boardsPath, boards);
  res.json(board);
});

router.get('/boards/:board_id', function (req, res) {
  var id = req.params.board_id;
  res.send(data.getBoards(id));
});

router.get('/boards/:board_id/lists', function (req, res) {
  var id = req.params.board_id;
  res.send(data.getListsForBoard(id));
});

router.get('/lists/:list_id/cards/:id', function (req, res) {
  res.render('index');
});

module.exports = router;
