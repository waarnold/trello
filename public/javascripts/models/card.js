var Card = Backbone.Model.extend({
  idAttribute: 'id',
  defaults: {
    labels: [],
    complete: false,
    subscribed: false,
  },

  toggleLabel: function (color) {
    var labels = this.get('labels');
    var index = labels.indexOf(color);
    var hasLabel = index > -1;

    if (hasLabel) {
      labels.splice(index, 1);
      this.set('labels', this.get('labels'));
      this.trigger('change');
    } else {
      this.set('labels', this.get('labels').concat(color));
    }
  },

  updateName: function (name) {
    this.set('name', name);
  },

  updateDescription: function (description) {
    this.set('description', description);
  },

  toggleComplete: function () {
    this.set('complete', !this.get('complete'));
  },

  toggleSubscribe: function () {
    this.set('subscribed', !this.get('subscribed'));
  },

  bindEvents: function () {
    this.on('toggle_label', this.toggleLabel);
    this.on('update_description', this.updateDescription);
    this.on('update_name', this.updateName);
    this.on('toggle_complete', this.toggleComplete);
    this.on('toggle_subscribe', this.toggleSubscribe);
  },

  initialize: function () {
    this.bindEvents();
    if (!this.get('id')) {
      App.incrementCardID();
      this.set('id', App.lastCardID);
    }

    this.set('comments', new Comments());
    this.get('comments').card = this;
  },
});
