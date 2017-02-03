var CopyCardView = Backbone.View.extend({
  template: App.templates.copy_card,
  attributes: {
    class: 'copy_card',
  },
  render: function () {
    this.$el.html(this.template(this.model));
    App.$el.find('#card_actions').html(this.$el);
  },

  initialize: function () {
    this.render();
  },
});
