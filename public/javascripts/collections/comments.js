var Comments = Backbone.Collection.extend({
  model: Comment,
  lastID: 0,
  incrementID: function () {
    this.lastID++;
  },

  createComment: function (comment) {
    this.add({ text: comment });

    var copy = this.last().toJSON();
    delete copy.id;
    App.activityLog.add(copy);
  },

  destroyComment: function (id) {
    this.remove(id);
  },

  bindEvents: function () {
    this.on('create_comment', this.createComment.bind(this));
    this.on('destroy_comment', this.destroyComment.bind(this));
  },

  initialize: function (models) {
    this.bindEvents();
  },
});
