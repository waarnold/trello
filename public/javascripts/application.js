var App = {
  $el: $('body'),
  templates: JST,
  userID: 1,
  boardID: 1,
  indexView: function () {
    this.bindEvents();
    this.registerHelpers();
    this.user = new User({ id: this.userID });
    this.user.fetch({ success: this.loadBoards.bind(this) });
  },

  loadBoards: function (model) {
    new HeaderView({ model: model });
    model.get('boards').fetch({ success: this.setUpCurrentBoard.bind(this) });
  },

  setUpCurrentBoard: function (collection) {
    this.currentBoard = collection.get(this.boardID);
    new BoardHeaderView({ model: this.currentBoard });
    this.loadLists();
  },

  loadLists: function () {
    this.lists = this.currentBoard.get('lists');
    this.lists.fetch({ success: this.loadCards.bind(this) });
  },

  loadCards: function () {
    this.lists.forEach(function (list, index) {
      var last = index === this.lists.length - 1;
      list.get('cards').fetch({
        success: function (collection) {
          if (last) {
            App.renderLists();
            App.createActivityLog();
          }
        },
      });
    }, this);
  },

  renderLists: function () {
    this.$el.find('#board').empty();
    this.lists.forEach(this.renderListView.bind(this));
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
    this.lists.add(list, { at: position });
    this.lists.forEach(function (list) {
      list.trigger('update_position');
    });
  },

  updateCardPosition: function (cardID, oldListID, newListID, position) {
    var oldList = this.lists.get(oldListID);
    var newList = this.lists.get(newListID);
    var card = oldList.get('cards').remove(cardID).toJSON();
    card.list_id = +newListID;
    newList.get('cards').add(card, { at: position });
    oldList.get('cards').forEach(function (card) {
      card.trigger('update_position', newListID);
    });

    newList.get('cards').forEach(function (card) {
      card.trigger('update_position', newListID);
    });
  },

  moveCardCollection: function (oldList, newList) {
    var cards = oldList.get('cards');
    cards.forEach(function (card) {
      newList.get('cards').add(card);
    });

    cards.reset();
  },

  getListByID: function (id) {
    return this.lists.findWhere({ id: id });
  },

  getCardByID: function (id) {
    var card;
    this.lists.each(function (list) {
      var found = list.get('cards').findWhere({ id: id });
      if (found) card = found;
    });

    return card;
  },

  moveCard: function (model, listID, position) {
    var oldListID = model.collection.list.get('id');
    var list = this.getListByID(listID);
    model.collection.remove(model);
    list.get('cards').add(model, { at: +position - 1 });

    this.activityLog.add({
      activity: 'move',
      cardID: model.get('id'),
      list: list.get('name'),
      oldListID: oldListID,
      listID: listID,
    });
  },

  copyCard: function (card, newName, listName, position) {
    var list = this.lists.findWhere({ name: listName });
    var oldCardID = card.get('id');

    //refactor this so that it goes well with copy all cards
    card = card.toJSON();
    var comments = card.comments;

    delete card.id;
    delete card.comments;
    card.name = newName;
    var copy = list.get('cards').add(card, { at: +position - 1 });
    var cardID = list.get('cards').at(+position - 1).get('id');
    comments.toJSON().forEach(function (comment) {
      delete comment.id;
      copy.get('comments').add(comment);
    });

    this.activityLog.add({
      activity: 'copy',
      oldCardID: oldCardID,
      cardID: cardID,
    });

    this.renderLists();
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
