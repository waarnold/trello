var CardView = Backbone.View.extend({
  template: App.templates.card,
  tagName: 'li',
  attributes: {
    class: 'card',
  },
  events: {
    click: 'openWindow',
  },

  openWindow: function () {
    var id = this.model.get('id');
    var listID = this.model.collection.list.id;
    var url = '/lists/' + listID + '/cards/' + id;

    router.navigate(url, { trigger: true });
  },

  html: function () {
    console.log(this.model.formatDate());
    console.log(this.model.toJSON());
    this.$el.attr('data-card-id', this.model.get('id'));
    this.$el.html(this.template({
      model: this.model.toJSON(),
      formatted_date: this.model.formatDate(),
    }));
    return this.$el;
  },

  initialize: function () {
    this.model.view = this;
    return this.html();
  },
});
