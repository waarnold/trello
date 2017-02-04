var DueDateView = Backbone.View.extend({
  template: App.templates.due_date,
  attributes: {
    class: 'due_date',
  },
  events: {
    'click a.cancel': 'close',
    'change select[name="day"]': 'updateSelection',
    'change select[name="month"]': 'updateSelection',
    'change select[name="year"]': 'updateSelection',
    'click input:submit': 'updateDueDate',
    'click button.negate': 'deleteDueDate',
  },
  close: function (e) {
    if (e) e.preventDefault();
    var $cardActions = App.$el.find('#card_actions');
    this.remove();
    $cardActions.hide();
  },

  updateSelection: function (e) {
    var $select = $(e.target);
    var newVal = $select.val();
    $select.prev('span').html(newVal);
  },

  updateDueDate: function (e) {
    e.preventDefault();
    var inputs = [$('select[name="year"]'), $('select[name="month"]'), $('select[name="day"]')];
    var dateString = inputs.map(function (input) {
      var val = input.val();
      if (val.length === 1) val = '0' + val;
      return val;
    }).join('-');

    this.model.trigger('update_due_date', dateString);
    this.close();
  },

  deleteDueDate: function () {
    this.model.trigger('delete_due_date');
    this.close();
  },

  render: function () {
    var dateString = this.model.get('dateString');
    var array = dateString ? this.model.get('dateString').split('-') : [];
    this.$el.html(this.template({
      day: array[2],
      month: array[1],
      year: array[0],
    }));
    App.$el.find('#card_actions').html(this.$el);
  },

  initialize: function () {
    this.render();
  },
});
