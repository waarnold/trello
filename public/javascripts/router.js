var router = new (Backbone.Router.extend({
  routes: {
    'lists/:listID/cards/:id': 'windowView',
    home: 'index',
  },
  windowView: function (listID, id) {
    App.windowView(listID, id);
  },

  index: function () {
    App.indexView();
  },

  initialize: function () {
    this.route(/^\/?$/, 'index', this.index);
  },
}))();

Backbone.history.start({ pushState: true });

$(document).on('click', 'a[href^="/"]', function (e) {
  e.preventDefault();
  router.navigate($(e.currentTarget).attr('href').replace(/^\//, ''), { trigger: true });
});
