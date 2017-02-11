var Board = Backbone.Model.extend({
  urlRoot: 'http://localhost:3000/boards',
  updateBoard: function (name) {
    this.set('name', name);
    this.sync('update', this);
  },

  initialize: function () {
    this.on('update_board', this.updateBoard);
    if (!this.lists) {
      this.set('lists', new Lists());
      this.get('lists').board = this;
    }
  },
});
