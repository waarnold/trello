var App = {
  $el: $('body'),
  templates: JST,
  lastCardID: 0,
  incrementCardID: function () {
    return ++this.lastCardID;
  },

  indexView: function () {
    this.bindEvents();
    this.registerHelpers();
    this.createUser();
    this.createBoard();

    this.createLists();
    this.renderLists();
    this.createActivityLog();
  },

  createUser: function () {
    this.user = new User({
      name: 'Billy Arnold',
      avatar: 'https://www.gravatar.com/avatar/3242edc934b08b9e540717c01b2ef89c?s=30',
    });
  },

  createBoard: function () {
    this.header = new HeaderView({ model: this.user });
    this.currentBoard = this.user.get('boards').add({ name: 'Exercise' });
    this.lists = this.currentBoard.get('lists');
    new BoardHeaderView({ model: this.currentBoard });
  },

  renderLists: function () {
    this.$el.find('#board').empty();
    this.currentBoard.get('lists').forEach(this.renderListView.bind(this));
    new CreateListView({ collection: this.lists });
  },

  renderListView: function (list) {
    new ListView({ model: list });
  },

  moveList: function (model, newPosition) {
    this.lists.remove(model, { silent: true });
    this.lists.add(model, { at: +newPosition - 1, silent: true });
    this.renderLists();
  },

  copyList: function (model, newName) {
    var copy = this.currentBoard.get('lists').add({ name: newName });
    var cards = model.get('cards').toJSON().forEach(function (card) {
      var comments = card.comments;

      delete card.id;
      delete card.comments;
      var cardCopy = copy.get('cards').add(card);
      comments.toJSON().forEach(function (comment) {
        delete comment.id;
        cardCopy.get('comments').add(comment);
      });
    });

    this.renderLists();
  },

  createActivityLog: function () {
    var activity = this.lists.getActivityOnListsCollection();
    this.activityLog = new ActivityLog(activity);
    this.menuView = new MenuView({ collection: this.activityLog });
  },

  windowView: function (listID, id) {
    var card = this.currentBoard.get('lists').get(listID).get('cards').get(id);
    new WindowView({ model: card });
  },

  updateListPosition: function (id, position) {
    var list = this.lists.remove(id, { silent: true });
    this.lists.add(list, { at: position, silent: true });
  },

  updateCardPosition: function (cardID, oldListID, newListID, position) {
    var oldList = this.lists.get(oldListID);
    var newList = this.lists.get(newListID);
    var card = oldList.get('cards').remove(cardID).toJSON();
    newList.get('cards').add(card, { at: position });
  },

  moveCardCollection: function (oldList, newList) {
    var cards = oldList.get('cards');
    cards.forEach(function (card) {
      newList.get('cards').add(card);
    });

    cards.reset();
  },

  moveCard: function (model, listName, position) {
    model.collection.remove(model);
    App.lists.findWhere({ name: listName }).get('cards').add(model, { at: +position - 1 });
  },

  copyCard: function (card, newName, listName, position) {
    var list = this.lists.findWhere({ name: listName });

    //refactor this so that it goes well with copy all cards
    card = card.toJSON();
    var comments = card.comments;

    delete card.id;
    delete card.comments;
    card.name = newName;
    var copy = list.get('cards').add(card);
    comments.toJSON().forEach(function (comment) {
      delete comment.id;
      copy.get('comments').add(comment);
    });

    this.renderLists();
  },

  createLists: function () {
    var listData = {
      'monkey shine': [{
        name: 'Train',
        labels: ['red', 'blue'],
        due_date: '2017-02-09',
        complete: true,
      }, {
        name: 'Groom',
        labels: ['purple', 'green'],
        due_date: '2018-01-11',
        complete: false,
      },
      ],
      'brad fink': [{
        name: 'Feed',
        labels: ['red', 'green'],
        due_date: '2020-05-03',
        complete: true,
      }, {
        name: 'Pet',
        labels: ['blue', 'green'],
        complete: false,
      },
      ],
      'chad clunket': [{
        name: 'Feed',
        labels: ['red', 'green'],
        complete: true,
      }, {
        name: 'Pet',
        labels: ['blue', 'green'],
        due_date: '2015-04-01',
        complete: false,
      },
      ],
    };

    for (var key in listData) {
      this.lists.add({ name: key });
      this.lists.last().get('cards').add(listData[key]);
    }
  },

  bindEvents: function () {
    _.extend(this, Backbone.Events);
    this.on('rerender_lists', this.renderLists);
    this.on('update_card_position', this.updateCardPosition);
    this.on('update_list_position', this.updateListPosition);
    this.on('move_cards', this.moveCardCollection);
    this.on('copy_card', this.copyCard);
    this.on('move_card', this.moveCard);
  },

  registerHelpers: function () {
    Handlebars.registerHelper('ifIn', function (el, list, options) {
      if (list.includes(el)) return options.fn(this);
      return options.inverse(this);
    });

    Handlebars.registerHelper('ifCond', function (x, y, options) {
      if (x === y) return options.fn(this);
      return options.inverse(this);
    });

    // this shouldn't be done here. do it in the render method.
    Handlebars.registerHelper('timeDiff', function (timestamp) {
      return moment(timestamp).fromNow();
    });
  },
};
