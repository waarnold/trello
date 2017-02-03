var Cards = Backbone.Collection.extend({
  model: Card,
  lastID: 0,
  createCard: function (name) {
    this.add({ name: name });
  },

  destroy: function (id) {
    var card = this.get(id);
    this.remove(id);
  },

  filter: function (searchInput) {
    return this.models.filter(function (model) {
      var modelNameArray = model.get('name').toLowerCase().split(' ');
      return modelNameArray.some(function (word) {
        return word.startsWith(searchInput.toLowerCase());
      });
    });
  },

  getActivityOnCardsCollection: function () {
    return this.models.reduce(function (a, b) {
      var aIsCardModel = typeof a.get === 'function';
      a = aIsCardModel ? a.get('comments').toJSON() : a;
      return _.union(b.get('comments').toJSON(), a);
    });
  },

  bindEvents: function () {
    this.on('create_card', this.createCard);
    this.on('destroy', this.destroy);
  },

  initialize: function () {
    this.bindEvents();
  },
});
