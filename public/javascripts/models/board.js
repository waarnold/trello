var Board = Backbone.Model.extend({
  updateBoard: function (name) {
    this.set('name', name);
  },

  bindEvents: function () {
    this.on('update_board', this.updateBoard);
  },

  initialize: function () {
    this.bindEvents();
    this.collection.incrementID();
    this.set('id', this.collection.lastID);
    this.set('lists', new Lists());
    this.set('activity', new Comments());
  },
});
