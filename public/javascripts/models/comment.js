var Comment = Backbone.Model.extend({
  updateComment: function (text) {
    this.set('text', text);
    var match = App.activityLog.findWhere({
      cardID: this.collection.card.get('id'),
      commentID: this.get('id'),
    });
    if (match) match.set('text', text);
    this.collection.card.sync('update', this.collection.card);
  },

  bindEvents: function () {
    this.on('update_comment', this.updateComment);
  },

  initialize: function () {
    this.bindEvents();
    this.collection.incrementID();
    this.set('id', this.collection.lastID);
    if (this.collection.card) this.set('cardID', this.collection.card.get('id'));
    if (!this.get('timestamp')) this.set('timestamp', Date.now());
  },
});
