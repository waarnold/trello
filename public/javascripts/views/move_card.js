var MoveCardView = Backbone.View.extend({
  template: App.templates.move_card,
  attributes: {
    class: 'move_card',
  },
  events: {
    'click a.cancel': 'close',
    'change select[name="select_new_list"]': 'updateListSelection',
    'change select[name="select_new_position"]': 'updatePosSelection',
    'click input:submit': 'moveCard',
  },
  close: function (e) {
    if (e) e.preventDefault();
    var $cardActions = App.$el.find('#card_actions');
    this.remove();
    $cardActions.hide();
  },

  updateListSelection: function () {
    var $select = $('select[name="select_new_list"]');
    var withListName = $select.val().replace(' (current)', '');

    $select.prev('span').html(withListName);
    this.render(withListName);
  },

  updatePosSelection: function () {
    var $select = $('select[name="select_new_position"]');
    var newPosition = $select.val();
    $select.prev('span').html(newPosition);
  },

  moveCard: function (e) {
    e.preventDefault();
    var $form = $(e.target).closest('form');
    var newListName = $form.find('select[name="select_new_list"]').val().replace(' (current)', '');

    //eventually change it so that each option has list id stored in value,
    // in case there are multiple lists with same name.
    var newListID = App.lists.findWhere({ name: newListName }).get('id');
    var position = $form.find('select[name="select_new_position"]').val().replace(' (current)', '');

    App.trigger('move_card', this.model, newListID, position);
    this.close();
  },

  render: function (withListName) {
    var cards = this.model.collection;
    var currentListName = cards.list.get('name');
    var listNames = App.lists.pluck('name');
    var currentPos = cards.indexOf(this.model) + 1;
    var positions = getPos(cards);
    var maxPos;

    function getPos(cards) {
      return cards.map(function (card) { return cards.indexOf(card) + 1; });
    }

    if (withListName) {
      cards = App.lists.findWhere({ name: withListName }).get('cards');
      positions = getPos(cards);
      if (withListName !== currentListName) positions.push(positions.length + 1);
      maxPos = withListName === currentListName ? null : positions[positions.length - 1];
    }

    this.$el.html(this.template({
      currentListName: currentListName,
      listNames: listNames,
      currentPos: currentPos,
      positions: positions,
      withListName: withListName,
      maxPos: maxPos,
    }));

    App.$el.find('#card_actions').html(this.$el);
    this.delegateEvents();
  },

  initialize: function () {
    this.render();
  },
});
