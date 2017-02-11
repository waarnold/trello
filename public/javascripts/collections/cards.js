var Cards = Backbone.Collection.extend({
  model: Card,
  comparator: 'position',
  url: function () {
    var listID = this.list.id;
    return 'http://localhost:3000/lists/' + listID + '/cards';
  },

  createCard: function (name) {
    this.add({ name: name });
    this.save(null, {
      attrs: { name: name },
    });

    this.sync('create', this.last());
  },

  destroy: function (id) {
    var card = this.get(id);
    card.sync('delete', card);
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
    var activity = this.models.reduce(function (a, b) {
      var aIsCardModel = typeof a.get === 'function';
      a = aIsCardModel ? a.get('comments').toJSON() : a;
      return _.union(b.get('comments').toJSON(), a);
    }, []);

    activity.forEach(function (item) {
      item.commentID = item.id;
      delete item.id;
    });

    return activity;
  },

  bindEvents: function () {
    this.on('create_card', this.createCard);
    this.on('destroy', this.destroy);
  },

  initialize: function () {
    this.bindEvents();
  },
});
