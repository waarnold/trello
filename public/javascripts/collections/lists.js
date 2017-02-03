var Lists = Backbone.Collection.extend({
  model: List,
  lastID: 0,
  incrementID: function () {
    return ++this.lastID;
  },

  createList: function (name) {
    this.add({ name: name });
  },

  destroyList: function (model) {
    this.remove(model);
    App.trigger('rerender_lists');
  },

  search: function (input) {
    return this.reduce(function (a, b) {
      var aIsListModel = typeof a.get === 'function';
      a = aIsListModel ? a.get('cards').filter(input) : a;
      return _.union(a, b.get('cards').filter(input));
    });
  },

  getActivityOnListsCollection: function () {
    return this.reduce(function (a, b) {
      var aIsListModel = typeof a.get === 'function';
      a = aIsListModel ? a.get('cards').getActivityOnCardsCollection() : a;
      return _.union(a, b.get('cards').getActivityOnCardsCollection());
    });
  },

  bindEvents: function () {
    this.on('create_list', this.createList);
    this.on('destroy_list', this.destroyList);
  },

  initialize: function () {
    this.bindEvents();
  },
});
