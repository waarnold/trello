var SearchView = Backbone.View.extend({
  template: App.templates.search,
  events: {
    'click a': 'close',
  },

  render: function () {
    this.$el.html(this.template(this.collection));
    App.$el.find('.results').html(this.$el);
  },

  close: function (e) {
    if (e) this.trigger('close_search_bar');
    this.remove();
  },

  initialize: function () {
    this.collection = this.collection.map(function (model) {
      var json = model.toJSON();
      json.listID = model.collection.list.id;
      json.listName = model.collection.list.get('name');
      return json;
    });

    this.listenTo(App.header, 'close_search', this.close);
    this.render();
  },
});
