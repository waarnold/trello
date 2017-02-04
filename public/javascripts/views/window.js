var WindowView = Backbone.View.extend({
  tagName: 'div',
  attributes: {
    id: 'modal_layer',
  },
  template: App.templates.window,
  events: {
    //Events on Card Model
    'click #labels_popover li': 'toggleLabel',
    'blur #window_header textarea': 'updateName',
    'click #edit_controls input': 'updateDescription',
    'click span.complete_box': 'toggleComplete',
    'click #subscribe_link a': 'toggleSubscribe',

    //Events on Card Collection
    'click #archive_link': 'destroy',

    //View Events
    'click #modal_layer': 'closeWindow',
    'click a#close_window': 'closeWindow',
    'focus #window_header textarea': 'toggleUpdateName',
    'click div.description a': 'toggleUpdateDescription',
    'click #edit_controls a.cancel': 'toggleUpdateDescription',
    'click #label_link': 'toggleLabelsPopover',
    'click span.edit_label': 'toggleLabelsPopover',
    'click a.add_label': 'toggleLabelsPopover',
    'click #labels_popover a.cancel': 'toggleLabelsPopover',
    'click #copy_link': 'copyCard',
    'click #move_link': 'moveCard',
    'click #due_date_link': 'updateDueDate',
  },

  //Events on Card Model
  toggleLabel: function (e) {
    var color = $(e.target).closest('li').attr('id');
    this.model.trigger('toggle_label', color);
  },

  updateDescription: function (e) {
    var description = $(e.target).parent().prev('textarea').val();
    this.toggleUpdateDescription();
    this.model.trigger('update_description', description);
  },

  updateName: function (e) {
    var input = $(e.target).val().trim();

    if (input && input !== this.currentName) this.model.trigger('update_name', input);
    this.toggleUpdateName(e);
  },

  toggleComplete: function () {
    this.model.trigger('toggle_complete');
  },

  toggleSubscribe: function (e) {
    e.preventDefault();
    this.model.trigger('toggle_subscribe');
  },

  //Events on Card Collection
  destroy: function (e) {
    e.preventDefault();
    $('#archive_banner').show();
    this.model.collection.trigger('destroy', this.model.get('id'));
  },

  //View Events
  closeWindow: function (e) {
    if (e) e.preventDefault();
    this.remove();
    router.navigate('/');
  },

  toggleUpdateName: function (e) {
    this.currentName = $(e.target).val().trim();
    $(e.target).toggleClass('selected');
  },

  toggleUpdateDescription: function (e) {
    if (e) e.preventDefault();
    $('div.description').toggle();
    $('#editing').toggle();
  },

  toggleLabelsPopover: function (e) {
    e.preventDefault();
    $('#labels_popover').toggle();
  },

  navigateOnEscape: function (e) {
    var escapeCode = e.which === 27;
    if (escapeCode) {
      $(document).off('keyup');
      this.closeWindow();
    }
  },

  copyCard: function (e) {
    e.preventDefault();
    var $cardActions = this.$el.find('#card_actions');
    $cardActions.show();
    new CopyCardView({ model: this.model });
  },

  moveCard: function (e) {
    e.preventDefault();
    var $cardActions = this.$el.find('#card_actions');
    $cardActions.show();
    new MoveCardView({ model: this.model });
  },

  updateDueDate: function (e) {
    e.preventDefault();
    var $cardActions = this.$el.find('#card_actions');
    $cardActions.show();
    new DueDateView({ model: this.model });
  },

  render: function () {
    this.$el.html(this.template({
      list: this.model.collection.list.get('name'),
      model: this.model.toJSON(),
      comments: this.model.get('comments').toJSON(),
      formatted_date: this.model.formatDate(),
    }));

    console.log(this.model.formatDate());

    this.delegateEvents();
    App.$el.append(this.$el);

    new CommentsView({ collection: this.model.get('comments') });
  },

  initialize: function () {
    this.render();
    $(document).on('keyup', this.navigateOnEscape.bind(this));
    this.listenTo(this.model, 'change', this.render);
  },
});
