var List = Backbone.Model.extend({
  defaults: {
    subscribed: false,
  },

  updateName: function (name) {
    this.set('name', name);
    this.save(null, {
      attrs: { name: name },
    });
  },

  updatePosition: function () {
    var position = this.collection.indexOf(this) + 1;
    this.set('position', position);
    this.save(null, {
      attrs: { position: position },
    });
  },

  togglesubscribed: function () {
    this.set('subscribed', !this.get('subscribed'));
    this.save(null, {
      attrs: { subscribed: this.get('subscribed') },
    });
  },

  destroyCardCollection: function () {
    this.get('cards').reset();
  },

  bindEvents: function () {
    this.on('update_name', this.updateName);
    this.on('toggle_subscribed', this.togglesubscribed);
    this.on('destroy_card_collection', this.destroyCardCollection);
    this.on('update_position', this.updatePosition);
  },

  initialize: function () {
    this.bindEvents();
    if (!this.cards || this.cards.length < 1 || !this.get('cards')) {
      this.set('cards', new Cards());
      this.get('cards').list = this;
    }

    if (!this.get('board_id')) {
      this.set('board_id', this.collection.board.get('id'));
    }
  },
});
