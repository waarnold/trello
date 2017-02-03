var CopyListView = Backbone.View.extend({
  template: App.templates.copy_list,
  events: {
    'click a.cancel': 'close',
    'click a.back': 'returnToListActions',
    'click input:submit': 'copyList',
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

  copyList: function (e) {
    e.preventDefault();
    var $e = $(e.target);
    var input = $e.prev().find('textarea').val();

    console.log(input);
    this.close();
    App.copyList(this.model, input);
  },

  render: function () {
    var boardID = App.currentBoard.get('id');
    var $listActions = this.model.view.$el.find('.list_actions');
    var $mainActions = $listActions.find('.main_actions');

    this.$el.html(this.template({
      boardID: boardID,
      name: this.model.get('name'),
    }));

    $mainActions.hide();
    $listActions.find('.secondary_actions').html(this.$el);
  },

  initialize: function () {
    this.render();
  },
});
