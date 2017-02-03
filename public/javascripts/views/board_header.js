var BoardHeaderView = Backbone.View.extend({
  template: App.templates.board_header,
  events: {
    //Board Model Events
    'submit #rename_form': 'updateBoard',

    //View Events
    'click a.board_name': 'toggleUpdateBoard',
    'click div.pop_over a.cancel': 'toggleUpdateBoard',
    'click #menu a.cancel': 'toggleMenu',
    'click a.show_menu': 'toggleMenu',
  },

  //Board Model Events
  updateBoard: function (e) {
    e.preventDefault();
    var input = $(e.target).find('#board_name').val().trim();

    if (!input) return;
    this.toggleUpdateBoard();
    this.model.trigger('update_board', input);
  },

  //View Events
  toggleUpdateBoard: function (e) {
    if (e) e.preventDefault();
    $('div.pop_over').toggle();
  },

  toggleMenu: function () {
    $('#menu').toggle();
  },

  render: function () {
    this.$el.html(this.template(this.model.toJSON()));
    App.$el.find('#board_header').html(this.$el);
    this.delegateEvents();
  },

  initialize: function () {
    this.render();
    this.listenTo(this.model, 'change', this.render);
  },
});
