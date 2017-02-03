var User = Backbone.Model.extend({
  initialize: function () {
    this.set('boards', new Boards());
  },
});
