var Comment = Backbone.Model.extend({
  updateComment: function (text) {
    this.set('text', text);
  },

  bindEvents: function () {
    this.on('update_comment', this.updateComment);
  },

  initialize: function () {
    this.bindEvents();
    this.collection.incrementID();
    this.set('id', this.collection.lastID);
    this.set('timestamp', Date.now());
  },
});
