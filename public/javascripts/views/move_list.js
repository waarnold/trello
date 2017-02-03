var MoveListView = Backbone.View.extend({
  template: App.templates.move_list,
  attributes: {
    class: 'move_list',
  },
  events: {
    'click a.cancel': 'close',
    'click a.back': 'returnToListActions',
    'change select[name="select_new_position"]': 'updateSelection',
    'click input:submit': 'moveList',
  },

  close: function (e) {
    if (e) e.preventDefault();
    var $mainActions = this.model.view.$el.find('.main_actions');
    $mainActions.show();
    $mainActions.find('a.close_all').trigger('click');
    this.remove();
  },

  returnToListActions: function (e) {
    e.preventDefault();
    var $mainActions = this.model.view.$el.find('.main_actions');
    $mainActions.show();
    this.$el.remove();
  },

  updateSelection: function () {
    var newPosition = $('select[name="select_new_position"]').val();
    this.model.view.$el.find('span.value').html(newPosition);
  },

  moveList: function (e) {
    e.preventDefault();
    var newPosition = $('select[name="select_new_position"]').val();
    this.close();
    App.moveList(this.model, newPosition);
  },

  render: function () {
    var $listActions = this.model.view.$el.find('.list_actions');
    var $mainActions = $listActions.find('.main_actions');
    var currentPosition = this.model.collection.indexOf(this.model) + 1;
    var possiblePositions = this.model.collection.map(function (model, index) { return ++index;});

    this.$el.html(this.template({
      possiblePositions: possiblePositions,
      currentPosition: currentPosition,
    }));

    this.delegateEvents();
    $mainActions.hide();
    $listActions.find('.secondary_actions').html(this.$el);
    $listActions.find('select').val(currentPosition);
  },

  initialize: function () {
    this.render();
  },
});
