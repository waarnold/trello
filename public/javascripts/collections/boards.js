var Boards = Backbone.Collection.extend({
  model: Board,
  lastID: 0,
  incrementID: function () {
    return ++this.lastID;
  },
});
