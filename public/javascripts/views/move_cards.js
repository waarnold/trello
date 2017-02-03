var MoveCardsView = Backbone.View.extend({
  template: App.templates.move_cards,
  attributes: {
    class: 'move_cards',
  },
  events: {
    'click a.cancel': 'close',
    'click a.back': 'returnToListActions',
    'click li a': 'moveCards',
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

  moveCard: function () {

  },

  moveCards: function (e) {
    e.preventDefault();

    if ($(e.target).attr('disabled')) return;

    var listName = $(e.target).html();
    var oldList = this.model;
    var newList = App.lists.findWhere({ name: listName });

    App.trigger('move_cards', oldList, newList);
    this.close();
  },

  render: function () {
    var boardID = App.currentBoard.get('id');
    var $listActions = this.model.view.$el.find('.list_actions');
    var $mainActions = $listActions.find('.main_actions');
    var names = App.lists.pluck('name');
    var currentListName = this.model.get('name');

    this.$el.html(this.template({
      boardID: boardID,
      currentListName: currentListName,
      names: names,
    }));

    this.$el.find('a:contains("' + currentListName + '")').attr('disabled', 'disabled');

    $mainActions.hide();
    $listActions.find('.secondary_actions').html(this.$el);
    this.delegateEvents();
  },

  initialize: function () {
    this.render();
  },
});
