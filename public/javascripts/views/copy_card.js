var CopyCardView = Backbone.View.extend({
  template: App.templates.copy_card,
  attributes: {
    class: 'copy_card',
  },
  events: {
    'click a.cancel': 'close',
    'change select[name="select_new_list"]': 'updateListSelection',
    'change select[name="select_new_position"]': 'updatePosSelection',
    'click input:submit': 'copyCard',
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
    var input = this.$el.find('textarea').val().trim();
    var newCardName;

    if (this.model.get('name') !== input) newCardName = input;

    $select.prev('span').html(withListName);
    this.render(withListName, newCardName);
  },

  updatePosSelection: function () {
    var $select = $('select[name="select_new_position"]');
    var newPosition = $select.val();
    $select.prev('span').html(newPosition);
  },

  copyCard: function (e) {
    e.preventDefault();
    var $form = $(e.target).closest('form');
    var newName = $form.find('textarea').val().trim();
    var listName = $form.find('select[name="select_new_list"]').val().replace(' (current)', '');
    var position = $form.find('select[name="select_new_position"]').val().replace(' (current)', '');

    App.trigger('copy_card', this.model, newName, listName, position);
    this.close();
  },

  render: function () {
    var cardName = this.model.get('name');
    var cards = this.model.collection;
    var currentListName = cards.list.get('name');
    var currentPos = cards.indexOf(this.model) + 1;
    var listNames = App.lists.pluck('name');
    var positions = getPos(cards);
    var withListName;
    var newCardName;
    var maxPos;

    function getPos(cards) {
      var positions = cards.map(function (card) { return cards.indexOf(card) + 1; });

      positions.push(positions.length + 1);
      return positions;
    }

    if (arguments) {
      withListName = arguments[0];
      newCardName = arguments[1];
    }

    if (withListName) {
      cards = App.lists.findWhere({ name: withListName }).get('cards');
      positions = getPos(cards);
      maxPos = withListName === currentListName ? null : positions[positions.length - 1];
    }

    this.$el.html(this.template({
      cardName: cardName,
      currentListName: currentListName,
      listNames: listNames,
      currentPos: currentPos,
      positions: positions,
      withListName: withListName,
      maxPos: maxPos,
    }));

    App.$el.find('#card_actions').html(this.$el);
    if (newCardName) this.$el.find('textarea').html(newCardName);
    this.delegateEvents();
  },

  initialize: function () {
    this.render();
  },
});
