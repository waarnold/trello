var ListView = Backbone.View.extend({
  template: App.templates.list,
  tagName: 'div',
  attributes: {
    class: 'outer_list_wrapper',
  },
  events: {
    //Events on List Model
    'blur textarea.editable_name': 'updateName',
    'click a.list_actions_subscribe': 'toggleSubscribed',
    'click a.list_actions_archive': 'destroy',
    'click a.list_actions_archive_cards': 'destroyCardCollection',

    //Events on Card Collection
    'click input[type="submit"]': 'createCard',

    //View Events
    'focus textarea.editable_name': 'toggleUpdateName',
    'click .open_composer': 'toggleComposer',
    'click .controls a.cancel': 'toggleComposer',
    'click span.list_menu': 'toggleListActionsPopup',
    'click div.popover_header a.cancel': 'toggleListActionsPopup',
    'click a.list_actions_add': 'createCardFromPopUp',
    'click a.list_actions_copy': 'copyList',
    'click a.list_actions_move': 'moveList',
    'click a.list_actions_move_cards': 'moveCards',
  },

  //Events on List Model
  updateName: function (e) {
    var input = $(e.target).val().trim();
    if (input && input !== this.currentName) this.model.trigger('update_name', input);

    this.toggleUpdateName(e);
  },

  toggleSubscribed: function (e) {
    e.preventDefault();

    //cant get handlebars to cooperate with this one...
    this.model.trigger('toggle_subscribed');
  },

  destroy: function (e) {
    e.preventDefault();
    this.model.collection.trigger('destroy_list', this.model);
    this.$el.find('.main_actions a.close_all').trigger('click');
  },

  destroyCardCollection: function (e) {
    e.preventDefault();
    this.model.trigger('destroy_card_collection');
    this.$el.find('.main_actions a.close_all').trigger('click');
  },

  //Events on Card Collection
  createCard: function (e) {
    var $textarea = this.$el.find('.composer textarea');
    var cardName = $textarea.val().trim();

    if (!cardName) return;

    this.model.get('cards').trigger('create_card', cardName);
    this.toggleComposer();
    $textarea.val('');
  },

  //View Events
  toggleUpdateName: function (e) {
    this.currentName = $(e.target).val().trim();
    $(e.target).toggleClass('selected');
  },

  toggleComposer: function (e) {
    if (e) e.preventDefault();
    var $composer = this.$el.find('div.composer');

    this.$el.find('a.open_composer').toggle();
    $composer.toggle();
    $composer.find('textarea').focus();
  },

  toggleListActionsPopup: function (e) {
    e.preventDefault();
    var $listActions;

    if ($(e.target).hasClass('list_menu')) {
      $('div.list_actions:visible').hide();
      $listActions = $(e.target).closest('div.list').next();
    } else {
      $listActions = $(e.target).closest('div.list_actions');
    }

    $listActions.toggle();
  },

  createCardFromPopUp: function (e) {
    e.preventDefault();
    $(e.target).closest('div.list_actions').toggle();
    this.toggleComposer();
  },

  copyList: function (e) {
    e.preventDefault();
    if (this.copyListView) {
      this.copyListView.render();
    } else {
      this.copyListView = new CopyListView({ model: this.model });
    }
  },

  closeCopyList: function () {
    this.copyListView.remove();
  },

  moveList: function (e) {
    e.preventDefault();
    if (this.moveListView) {
      this.moveListView.render();
    } else {
      this.moveListView = new MoveListView({ model: this.model });
    }
  },

  closeMoveList: function () {
    this.moveListView.remove();
  },

  moveCards: function (e) {
    e.preventDefault();
    if (this.moveCardsView) {
      this.moveCardsView.render();
    } else {
      this.moveCardsView = new MoveCardsView({ model: this.model });
    }
  },

  closeMoveCards: function () {
    this.moveCardsView.remove();
  },

  render: function () {
    var $board = App.$el.find('#board');

    this.$el.attr('data-list-id', this.model.id);
    this.$el.html(this.template(this.model.toJSON()));
    this.renderCardCollection();
    $board.append(this.$el);
  },

  rerender: function () {
    this.$el.empty();
    this.$el.html(this.template(this.model.toJSON()));
    this.renderCardCollection();
  },

  renderCardCollection: function () {
    var $ul = this.$el.find('ul.sortable_cards').empty();
    var view;

    if (this.model.get('cards').length > 0) {
      this.model.get('cards').each(function (card) {
        view = new CardView({ model:  card });
        $ul.append(view.$el);
      });
    }
  },

  onDrop: function (el, target, source) {
    var cardID = $(el).attr('data-card-id');
    var oldListID = $(source).closest('.outer_list_wrapper').attr('data-list-id');
    var newListID = $(el).closest('.outer_list_wrapper').attr('data-list-id');
    var position = $(el).index();

    App.trigger('update_card_position', cardID, oldListID, newListID, position);
    if ($(target).hasClass('accept_card')) $(target).removeClass('accept_card');
  },

  onDragOut: function (el, container, source) {
    $(container).removeClass('accept_card');
  },

  initialize: function () {
    this.render();
    var ul = this.$el.find('ul.sortable_cards').get(0);
    var wrapper = this.$el.get(0);

    if (!App.draggableCards) {
      App.draggableCards = dragula([ul, wrapper], {
        direction: 'horizontal',
        moves: function (el, source, handle, sibling) {
          return el.classList.contains('card');
        },

        accepts: function (el, target, source, sibling) {
          var $ul = $(target).find('.sortable_cards');
          if ($ul.is(':empty')) $ul.addClass('accept_card');
          return $(target).hasClass('sortable_cards');
        },
      });
      App.draggableCards.on('out', this.onDragOut.bind(this));
      App.draggableCards.on('drop', this.onDrop.bind(this));
    } else {
      App.draggableCards.containers.push(ul);
      App.draggableCards.containers.push(wrapper);
    }

    this.model.view = this;
    this.listenTo(this.model.get('cards'), 'change remove add reset', this.renderCardCollection);
    this.listenTo(this.model, 'change', this.rerender);
  },
});
