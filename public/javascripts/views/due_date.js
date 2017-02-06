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
    var inputs = [
      $('select[name="year"]').val(),
      $('select[name="month"]').val(),
      $('select[name="day"]').val(),
    ];

    var dateString = inputs.map(function (input) {
      if (input.length === 1) input = '0' + input;
      return input;
    }).join('-');

    this.model.trigger('update_due_date', dateString);
    this.close();
  },

  deleteDueDate: function () {
    this.model.trigger('delete_due_date');
    this.close();
  },

  render: function () {
    var dateString = this.model.get('due_date') || moment().format('YYYY-MM-DD');
    var array = dateString.split('-');
    var day = array[2];
    var month = array[1];
    var year = array[0];

    this.$el.html(this.template({
      day: array[2],
      month: array[1],
      year: array[0],
    }));
    App.$el.find('#card_actions').html(this.$el);
    $('select[name="day"] option[value="' + day + '"]').prop('selected', true);
    $('select[name="month"] option[value="' + month + '"]').prop('selected', true);
    $('select[name="year"] option[value="' + year + '"]').prop('selected', true);
  },

  initialize: function () {
    this.render();
  },
});
