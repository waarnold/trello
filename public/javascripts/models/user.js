var User = Backbone.Model.extend({
  urlRoot: 'http://localhost:3000/users',
  initialize: function () {
    this.set('boards', new Boards());
  },
});
