var ActivityLog = Backbone.Collection.extend({
  model: Card,
  lastID: 0,
  incrementID: function () {
    this.lastID++;
  },
});
