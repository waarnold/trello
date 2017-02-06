var CreateListView = Backbone.View.extend({
  template: App.templates.create_list,
  tagName: 'div',
  attributes: {
    id: 'create_list',
  },
  events: {
    //Lists Collection Events
    click: 'createList',

    //View Events
    'focus input[type="text"]': 'toggleCreateList',
    'click a.cancel': 'toggleCreateList',
  },

  //Lists Collection Events
  createList: function (e) {
    e.preventDefault();
    var input = this.$el.find('input[type="text"]').val().trim();
    var $form = this.$el.find('form');

    if (!input) return;
    this.toggleCreateList();

    $.ajax({
      url: $form.attr('action'),
      method: $form.attr('method'),
      data: { name: input },
      success: function (data) {
        App.currentBoard.get('lists').add(data);
        App.renderLists();
      },
    });
  },

  //View Events
  toggleCreateList: function () {
    this.$el.toggleClass('selected');
    this.$el.find('input[type="text"]').val('');
  },

  render: function () {
    var boardID = App.currentBoard.get('id');
    this.$el.html(this.template({
      boardID: boardID,
    }));

    App.$el.find('#board').append(this.$el);
  },

  initialize: function () {
    this.render();
  },
});
