var MenuView = Backbone.View.extend({
  template: App.templates.menu,
  tagName: 'ul',
  render: function () {
    this.delegateEvents();
    this.$el.html(this.template(this.collection.toJSON()));
    App.$el.find('#activities_wrapper').html(this.$el);
  },

  initialize: function () {
    this.render();
    this.listenTo(this.collection, 'change add', this.render);
  },
});
