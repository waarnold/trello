var List = Backbone.Model.extend({
  defaults: {
    subscribed: false,
  },
  updateName: function (name) {
    this.set('name', name);
  },

  togglesubscribed: function () {
    this.set('subscribed', !this.get('subscribed'));
  },

  destroyCardCollection: function () {
    this.get('cards').reset();
  },

  bindEvents: function () {
    this.on('update_name', this.updateName);
    this.on('toggle_subscribed', this.togglesubscribed);
    this.on('destroy_card_collection', this.destroyCardCollection);
  },

  initialize: function () {
    this.bindEvents();
    this.collection.incrementID();
    this.set('id', this.collection.lastID);

    if (!this.get('cards')) {
      this.set('cards', new Cards());
      this.get('cards').list = this;
    }
  },
});
