var MenuView = Backbone.View.extend({
  template: App.templates.menu,
  tagName: 'ul',
  render: function () {
    var modifiedCollection = this.collection.toJSON().map(function (obj) {
      obj.card = App.getCardByID(obj.cardID).get('name');
      obj.listID = App.getCardByID(obj.cardID).collection.list.get('id');

      if (obj.activity === 'move') {
        obj.oldList = App.getListByID(obj.oldListID).get('name');
      } else if (obj.activity === 'copy') {
        obj.list = App.getListByID(obj.listID).get('name');
        obj.oldCard = App.getCardByID(obj.oldCardID).get('name');
        obj.oldListID = App.getCardByID(obj.oldCardID).collection.list.get('id');
      }

      return obj;
    });

    this.$el.html(this.template(modifiedCollection));
    App.$el.find('#activities_wrapper').html(this.$el);
    this.delegateEvents();
  },

  initialize: function () {
    this.render();
    this.listenTo(this.collection, 'change add', this.render);
  },
});
