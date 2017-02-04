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
  },

  updateName: function (name) {
    this.set('name', name);
  },

  updateDescription: function (description) {
    this.set('description', description);
  },

  updateDueDate: function (dateString) {
    this.set('due_date', dateString);
    this.checkStatus();
  },

  deleteDueDate: function () {
    this.unset('due_date');
  },

  toggleComplete: function () {
    this.set('complete', !this.get('complete'));
  },

  toggleSubscribe: function () {
    this.set('subscribed', !this.get('subscribed'));
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
  },

  bindEvents: function () {
    this.on('toggle_label', this.toggleLabel);
    this.on('update_description', this.updateDescription);
    this.on('update_name', this.updateName);
    this.on('toggle_complete', this.toggleComplete);
    this.on('toggle_subscribe', this.toggleSubscribe);
    this.on('update_due_date', this.updateDueDate);
    this.on('delete_due_date', this.deleteDueDate);
  },

  initialize: function () {
    this.bindEvents();
    if (!this.get('id')) {
      App.incrementCardID();
      this.set('id', App.lastCardID);
    }

    this.checkStatus();
    this.set('comments', new Comments());
    this.get('comments').card = this;
  },
});
