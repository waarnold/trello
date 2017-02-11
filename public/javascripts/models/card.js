var Card = Backbone.Model.extend({
  idAttribute: 'id',
  defaults: {
    labels: [],
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

    this.save(null, {
      attrs: { labels: this.get('labels') },
    });
  },

  updatePosition: function () {
    var position = this.collection.indexOf(this) + 1;
    this.set('position', position);
    this.save(null, {
      attrs: { position: position, list_id: this.get('list_id') },
    });
  },

  updateName: function (name) {
    this.set('name', name);
    this.save(null, {
      attrs: { name: name },
    });
  },

  updateDescription: function (description) {
    this.set('description', description);
    this.save(null, {
      attrs: { description: description },
    });
  },

  updateDueDate: function (dateString) {
    this.set('due_date', dateString);
    this.checkStatus();
    this.save(null, {
      attrs: { due_date: dateString },
    });
  },

  deleteDueDate: function () {
    this.unset('due_date');
    this.save(null, {
      attrs: { due_date: this.get('due_date') },
    });
  },

  toggleComplete: function () {
    this.set('complete', !this.get('complete'));
    this.save(null, {
      attrs: { complete: this.get('complete') },
    });
  },

  toggleSubscribe: function () {
    this.set('subscribed', !this.get('subscribed'));
    this.save(null, {
      attrs: { subscribed: this.get('subscribed') },
    });
  },

  formatDate: function () {
    var dateString = this.get('due_date');
    if (!dateString) return;
    if (moment(dateString).isSame(Date.now(), 'year')) return moment(dateString).format('MMM D');
    return moment(dateString).format('MMM D, YYYY');
  },

  checkStatus: function () {
    if (!this.get('due_date')) return;
    var dateString = this.get('due_date');
    if (moment(dateString).isBefore(Date.now())) this.set('past_due', true);
    this.save(null, {
      attrs: { past_due: this.get('past_due') },
    });
  },

  bindEvents: function () {
    this.on('toggle_label', this.toggleLabel);
    this.on('update_description', this.updateDescription);
    this.on('update_name', this.updateName);
    this.on('toggle_complete', this.toggleComplete);
    this.on('toggle_subscribe', this.toggleSubscribe);
    this.on('update_due_date', this.updateDueDate);
    this.on('delete_due_date', this.deleteDueDate);
    this.on('update_position', this.updatePosition);
  },

  initialize: function () {
    var existingComments = this.get('comments');

    this.bindEvents();
    this.checkStatus();
    this.set('comments', new Comments());
    this.get('comments').card = this;
    if (existingComments) this.get('comments').add(existingComments);
  },
});
