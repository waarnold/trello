var Boards = Backbone.Collection.extend({
  url: 'http://localhost:3000/boards',
  model: Board,
});
