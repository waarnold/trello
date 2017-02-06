var ActivityLog = Backbone.Collection.extend({
  model: Comment,
  lastID: 0,
  comparator: function (comment) {
    return -comment.get('timestamp');
  },

  incrementID: function () {
    this.lastID++;
  },
});
